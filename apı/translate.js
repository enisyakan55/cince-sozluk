// Basit bellek içi IP takip ve hız sınırlayıcı (Rate Limiter)
const ipRequestCounts = new Map();

function checkRateLimit(ip) {
    const now = Date.now();
    const windowMs = 60 * 1000;
    const maxRequests = 30;

    if (!ipRequestCounts.has(ip)) {
        ipRequestCounts.set(ip, []);
    }

    let timestamps = ipRequestCounts.get(ip).filter(time => now - time < windowMs);
    
    if (timestamps.length >= maxRequests) {
        return false;
    }

    timestamps.push(now);
    ipRequestCounts.set(ip, timestamps);
    return true;
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Sadece POST istekleri kabul edilir.' });
    }

    const clientIp = req.headers['x-forwarded-for'] || req.socket?.remoteAddress || 'unknown';

    if (!checkRateLimit(clientIp)) {
        return res.status(429).json({ 
            error: 'Çok fazla istek gönderildi. Lütfen 1 dakika sonra tekrar deneyin.' 
        });
    }

    const { type, source, value, hanzi, turkish, imageBase64 } = req.body;
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: 'GEMINI_API_KEY tanımlanmamış.' });
    }

    try {
        let requestBody = {};

        if (type === 'ocr') {
            if (!imageBase64) {
                return res.status(400).json({ error: 'Görsel verisi bulunamadı.' });
            }

            const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, "");
            const prompt = "Bu görseldeki Çince karakterleri (Hanzi) tespit et. SADECE aşağıdaki JSON formatında saf bir dizi döndür: {\"characters\": [\"字\", \"词\"]}";

            requestBody = {
                contents: [{
                    parts: [
                        { text: prompt },
                        {
                            inline_data: {
                                mime_type: "image/jpeg",
                                data: cleanBase64
                            }
                        }
                    ]
                }],
                generationConfig: { 
                    responseMimeType: "application/json" 
                }
            };
        } else if (type === 'word') {
            const prompt = `Sen profesyonel bir Çince-Türkçe sözlük motorusun.
Kullanıcıdan gelen veri: ${value} (Girdi Türü: ${source}).
Lütfen bu kelimenin doğru Hanzi, Pinyin (ton işaretli) ve en yaygın Türkçe karşılığını bul.
SADECE aşağıdaki JSON formatında saf yanıt ver, markdown veya ekstra açıklama yazma:
{"hanzi": "...", "pinyin": "...", "turkish": "..."}`;

            requestBody = {
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: { responseMimeType: "application/json" }
            };
        } else if (type === 'example') {
            const prompt = `Çince "${hanzi}" (${turkish || ''}) kelimesini içeren günlük hayattan doğal ve kısa bir örnek cümle yaz.
SADECE aşağıdaki JSON formatında saf yanıt ver, markdown veya ekstra metin ekleme:
{"chinese": "...", "pinyin": "...", "turkish": "..."}`;

            requestBody = {
                contents: [{ parts: [{ text: prompt }] }],
                generationConfig: { responseMimeType: "application/json" }
            };
        } else {
            return res.status(400).json({ error: 'Geçersiz tip.' });
        }

        const response = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
            {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(requestBody)
            }
        );

        if (!response.ok) {
            const errData = await response.text();
            return res.status(response.status).json({ error: 'Google AI yanıt hatası: ' + errData });
        }

        const data = await response.json();
        const rawText = data.candidates?.[0]?.content?.parts?.[0]?.text;
        const parsed = JSON.parse(rawText);

        return res.status(200).json(parsed);

    } catch (err) {
        return res.status(500).json({ error: 'İşlem sırasında hata oluştu: ' + err.message });
    }
}