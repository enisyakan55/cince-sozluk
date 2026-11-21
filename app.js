// HSK KELİME HAVUZU (TAM 250 KELİME - HSK 1 & HSK 2)
const HSK_POOL = [
    { hanzi: "你好", pinyin: "nǐ hǎo", turkish: "merhaba" },
    { hanzi: "谢谢", pinyin: "xièxie", turkish: "teşekkürler" },
    { hanzi: "不客气", pinyin: "bú kèqi", turkish: "rica ederim" },
    { hanzi: "再见", pinyin: "zàijiàn", turkish: "hoşça kal" },
    { hanzi: "对不起", pinyin: "duìbuqǐ", turkish: "özür dilerim" },
    { hanzi: "没关系", pinyin: "méi guānxi", turkish: "sorun değil" },
    { hanzi: "请", pinyin: "qǐng", turkish: "lütfen, rica etmek" },
    { hanzi: "朋友", pinyin: "péngyou", turkish: "arkadaş" },
    { hanzi: "老师", pinyin: "lǎoshī", turkish: "öğretmen" },
    { hanzi: "学生", pinyin: "xuésheng", turkish: "öğrenci" },
    { hanzi: "同学", pinyin: "tóngxué", turkish: "okul arkadaşı" },
    { hanzi: "爸爸", pinyin: "bàba", turkish: "baba" },
    { hanzi: "妈妈", pinyin: "māma", turkish: "anne" },
    { hanzi: "儿子", pinyin: "érzi", turkish: "erkek çocuk / oğul" },
    { hanzi: "女儿", pinyin: "nǚ'ér", turkish: "kız çocuk" },
    { hanzi: "哥哥", pinyin: "gēge", turkish: "ağabey" },
    { hanzi: "弟弟", pinyin: "dìdi", turkish: "erkek kardeş" },
    { hanzi: "姐姐", pinyin: "jiějie", turkish: "abla" },
    { hanzi: "妹妹", pinyin: "mèimei", turkish: "kız kardeş" },
    { hanzi: "家", pinyin: "jiā", turkish: "ev, aile" },
    { hanzi: "人", pinyin: "rén", turkish: "insan, kişi" },
    { hanzi: "中国人", pinyin: "zhōngguórén", turkish: "Çinli" },
    { hanzi: "中国", pinyin: "zhōngguó", turkish: "Çin" },
    { hanzi: "名字", pinyin: "míngzi", turkish: "isim, ad" },
    { hanzi: "书", pinyin: "shū", turkish: "kitap" },
    { hanzi: "水", pinyin: "shuǐ", turkish: "su" },
    { hanzi: "茶", pinyin: "chá", turkish: "çay" },
    { hanzi: "米饭", pinyin: "mǐfàn", turkish: "pişmiş pirinç, pilav" },
    { hanzi: "菜", pinyin: "cài", turkish: "yemek, sebze" },
    { hanzi: "苹果", pinyin: "píngguǒ", turkish: "elma" },
    { hanzi: "杯子", pinyin: "bēizi", turkish: "bardak, fincan" },
    { hanzi: "钱", pinyin: "qián", turkish: "para" },
    { hanzi: "飞机", pinyin: "fēijī", turkish: "uçak" },
    { hanzi: "出租车", pinyin: "chūzūchē", turkish: "taksi" },
    { hanzi: "电视", pinyin: "diànshì", turkish: "televizyon" },
    { hanzi: "电脑", pinyin: "diànnǎo", turkish: "bilgisayar" },
    { hanzi: "电影", pinyin: "diànyǐng", turkish: "film" },
    { hanzi: "天气", pinyin: "tiānqì", turkish: "hava durumu" },
    { hanzi: "猫", pinyin: "māo", turkish: "kedi" },
    { hanzi: "狗", pinyin: "gǒu", turkish: "köpek" },
    { hanzi: "东西", pinyin: "dōngxi", turkish: "şey, eşya" },
    { hanzi: "桌子", pinyin: "zhuōzi", turkish: "masa" },
    { hanzi: "椅子", pinyin: "yǐzi", turkish: "sandalye" },
    { hanzi: "学校", pinyin: "xuéxiào", turkish: "okul" },
    { hanzi: "饭馆", pinyin: "fànguǎn", turkish: "restoran" },
    { hanzi: "商店", pinyin: "shāngdiàn", turkish: "mağaza, dükkan" },
    { hanzi: "医院", pinyin: "yīyuàn", turkish: "hastane" },
    { hanzi: "火车站", pinyin: "huǒchēzhàn", turkish: "tren istasyonu" },
    { hanzi: "今天", pinyin: "jīntiān", turkish: "bugün" },
    { hanzi: "明天", pinyin: "míngtiān", turkish: "yarın" },
    { hanzi: "昨天", pinyin: "zuótiān", turkish: "dün" },
    { hanzi: "上午", pinyin: "shàngwǔ", turkish: "öğleden önce" },
    { hanzi: "中午", pinyin: "zhōngwǔ", turkish: "öğle vakti" },
    { hanzi: "下午", pinyin: "xiàwǔ", turkish: "öğleden sonra" },
    { hanzi: "年", pinyin: "nián", turkish: "yıl, sene" },
    { hanzi: "月", pinyin: "yuè", turkish: "ay" },
    { hanzi: "日", pinyin: "rì", turkish: "gün, güneş" },
    { hanzi: "星期", pinyin: "xīngqī", turkish: "hafta" },
    { hanzi: "点", pinyin: "diǎn", turkish: "saat, nokta" },
    { hanzi: "分钟", pinyin: "fēnzhōng", turkish: "dakika" },
    { hanzi: "现在", pinyin: "xiànzài", turkish: "şimdi, şu an" },
    { hanzi: "时候", pinyin: "shíhou", turkish: "zaman, an" },
    { hanzi: "喜欢", pinyin: "xǐhuan", turkish: "sevmek, hoşlanmak" },
    { hanzi: "爱", pinyin: "ài", turkish: "aşk, sevgi" },
    { hanzi: "想", pinyin: "xiǎng", turkish: "istemek, düşünmek, özlemek" },
    { hanzi: "认识", pinyin: "rènshi", turkish: "tanımak, tanışmak" },
    { hanzi: "吃", pinyin: "chī", turkish: "yemek yemek" },
    { hanzi: "喝", pinyin: "hē", turkish: "içmek" },
    { hanzi: "看", pinyin: "kàn", turkish: "bakmak, okumak, izlemek" },
    { hanzi: "听", pinyin: "tīng", turkish: "dinlemek" },
    { hanzi: "说话", pinyin: "shuōhuà", turkish: "konuşmak" },
    { hanzi: "读", pinyin: "dú", turkish: "okumak" },
    { hanzi: "写", pinyin: "xiě", turkish: "yazmak" },
    { hanzi: "看见", pinyin: "kànjiàn", turkish: "görmek" },
    { hanzi: "叫", pinyin: "jiào", turkish: "çağırmak, adı olmak" },
    { hanzi: "买", pinyin: "mǎi", turkish: "satın almak" },
    { hanzi: "卖", pinyin: "mài", turkish: "satmak" },
    { hanzi: "开", pinyin: "kāi", turkish: "açmak, sürmek" },
    { hanzi: "坐", pinyin: "zuò", turkish: "oturmak, binmek" },
    { hanzi: "住", pinyin: "zhù", turkish: "ikamet etmek, yaşamak" },
    { hanzi: "学习", pinyin: "xuéxí", turkish: "öğrenmek, ders çalışmak" },
    { hanzi: "工作", pinyin: "gōngzuò", turkish: "çalışmak, iş" },
    { hanzi: "睡觉", pinyin: "shuìjiào", turkish: "uyumak" },
    { hanzi: "打电话", pinyin: "dǎ diànhuà", turkish: "telefon etmek" },
    { hanzi: "做", pinyin: "zuò", turkish: "yapmak" },
    { hanzi: "去", pinyin: "qù", turkish: "gitmek" },
    { hanzi: "来", pinyin: "lái", turkish: "gelmek" },
    { hanzi: "回", pinyin: "huí", turkish: "dönmek" },
    { hanzi: "能", pinyin: "néng", turkish: "-ebilmek (mümkün olmak)" },
    { hanzi: "会", pinyin: "huì", turkish: "-ebilmek (beceri), yapacak olmak" },
    { hanzi: "好", pinyin: "hǎo", turkish: "iyi, güzel" },
    { hanzi: "大", pinyin: "dà", turkish: "büyük" },
    { hanzi: "小", pinyin: "xiǎo", turkish: "küçük" },
    { hanzi: "多", pinyin: "duō", turkish: "çok" },
    { hanzi: "少", pinyin: "shǎo", turkish: "az" },
    { hanzi: "冷", pinyin: "lěng", turkish: "soğuk" },
    { hanzi: "热", pinyin: "rè", turkish: "sıcak" },
    { hanzi: "高兴", pinyin: "gāoxìng", turkish: "mutlu, sevinçli" },
    { hanzi: "漂亮", pinyin: "piàoliang", turkish: "güzel, hoş" },
    { hanzi: "医生", pinyin: "yīshēng", turkish: "doktor" },
    { hanzi: "先生", pinyin: "xiānsheng", turkish: "beyefendi, bay" },
    { hanzi: "小姐", pinyin: "xiǎojiě", turkish: "hanımefendi, bayan" },
    { hanzi: "这", pinyin: "zhè", turkish: "bu" },
    { hanzi: "那", pinyin: "nà", turkish: "şu, o" },
    { hanzi: "哪", pinyin: "nǎ", turkish: "hangi" },
    { hanzi: "谁", pinyin: "shéi", turkish: "kim" },
    { hanzi: "什么", pinyin: "shénme", turkish: "ne" },
    { hanzi: "多少", pinyin: "duōshao", turkish: "ne kadar, kaç tane" },
    { hanzi: "几", pinyin: "jǐ", turkish: "kaç (az sayılar için)" },
    { hanzi: "怎么", pinyin: "zěnme", turkish: "nasıl" },
    { hanzi: "怎么样", pinyin: "zěnmeyàng", turkish: "nasıl bir, durumu nasıl" },
    { hanzi: "很", pinyin: "hěn", turkish: "çok" },
    { hanzi: "太", pinyin: "tài", turkish: "aşırı, çok fazla" },
    { hanzi: "都", pinyin: "dōu", turkish: "hepsi, tümü" },
    { hanzi: "不", pinyin: "bù", turkish: "değil, hayır" },
    { hanzi: "没", pinyin: "méi", turkish: "yok, olumsuzluk eki" },
    { hanzi: "和", pinyin: "hé", turkish: "ve, ile" },
    { hanzi: "在", pinyin: "zài", turkish: "-de/-da bulunmak, nerede" },
    { hanzi: "喂", pinyin: "wèi", turkish: "alo" },
    { hanzi: "个", pinyin: "gè", turkish: "tane (genel ölçü birimi)" },
    { hanzi: "块", pinyin: "kuài", turkish: "parça, yuan (para birimi)" },
    { hanzi: "本", pinyin: "běn", turkish: "cilt (kitaplar için ölçü birimi)" },
    { hanzi: "岁", pinyin: "suì", turkish: "yaş" },
    { hanzi: "些", pinyin: "xiē", turkish: "biraz, bazı" },
    { hanzi: "零", pinyin: "líng", turkish: "sıfır" },
    { hanzi: "一", pinyin: "yī", turkish: "bir" },
    { hanzi: "二", pinyin: "èr", turkish: "iki" },
    { hanzi: "三", pinyin: "sān", turkish: "üç" },
    { hanzi: "四", pinyin: "sì", turkish: "dört" },
    { hanzi: "五", pinyin: "wǔ", turkish: "beş" },
    { hanzi: "六", pinyin: "liù", turkish: "altı" },
    { hanzi: "七", pinyin: "qī", turkish: "yedi" },
    { hanzi: "八", pinyin: "bā", turkish: "sekiz" },
    { hanzi: "九", pinyin: "jiǔ", turkish: "dokuz" },
    { hanzi: "十", pinyin: "shí", turkish: "on" },
    { hanzi: "百", pinyin: "bǎi", turkish: "yüz (100)" },
    { hanzi: "千", pinyin: "qiān", turkish: "bin (1000)" },
    { hanzi: "机场", pinyin: "jīchǎng", turkish: "havaalanı" },
    { hanzi: "教室", pinyin: "jiàoshì", turkish: "sınıf, derslik" },
    { hanzi: "路", pinyin: "lù", turkish: "yol, cadde" },
    { hanzi: "门", pinyin: "mén", turkish: "kapı" },
    { hanzi: "公共汽车", pinyin: "gōnggòng qìchē", turkish: "otobüs" },
    { hanzi: "自行车", pinyin: "zìxíngchē", turkish: "bisiklet" },
    { hanzi: "船", pinyin: "chuán", turkish: "gemi, tekne" },
    { hanzi: "颜色", pinyin: "yánsè", turkish: "renk" },
    { hanzi: "红色", pinyin: "hóngsè", turkish: "kırmızı" },
    { hanzi: "黑色", pinyin: "hēisè", turkish: "siyah" },
    { hanzi: "白色", pinyin: "báisè", turkish: "beyaz" },
    { hanzi: "羊肉", pinyin: "yángròu", turkish: "kuzu eti" },
    { hanzi: "牛肉", pinyin: "niúròu", turkish: "dana eti" },
    { hanzi: "鱼", pinyin: "yú", turkish: "balık" },
    { hanzi: "鸡蛋", pinyin: "jīdàn", turkish: "tavuk yumurtası" },
    { hanzi: "西瓜", pinyin: "xīguā", turkish: "karpuz" },
    { hanzi: "咖啡", pinyin: "kāfēi", turkish: "kahve" },
    { hanzi: "牛奶", pinyin: "niúnǎi", turkish: "süt" },
    { hanzi: "面条", pinyin: "miàntiáo", turkish: "erişte, makarna" },
    { hanzi: "时间", pinyin: "shíjiān", turkish: "zaman, vakit" },
    { hanzi: "去年", pinyin: "qùnián", turkish: "geçen yıl" },
    { hanzi: "早上", pinyin: "zǎoshang", turkish: "sabah" },
    { hanzi: "晚上", pinyin: "wǎnshang", turkish: "akşam, gece" },
    { hanzi: "小时", pinyin: "xiǎoshí", turkish: "saat (süre olarak)" },
    { hanzi: "生日", pinyin: "shēngrì", turkish: "doğum günü" },
    { hanzi: "跑步", pinyin: "pǎobù", turkish: "koşmak" },
    { hanzi: "游泳", pinyin: "yóuyǒng", turkish: "yüzmek" },
    { hanzi: "踢足球", pinyin: "tī zúqiú", turkish: "futbol oynamak" },
    { hanzi: "打篮球", pinyin: "dǎ lánqiú", turkish: "basketbol oynamak" },
    { hanzi: "唱歌", pinyin: "chànggē", turkish: "şarkı söylemek" },
    { hanzi: "跳舞", pinyin: "tiàowǔ", turkish: "dans etmek" },
    { hanzi: "旅游", pinyin: "lǚyóu", turkish: "seyahat etmek" },
    { hanzi: "上班", pinyin: "shàngbān", turkish: "işe gitmek / başlamak" },
    { hanzi: "生病", pinyin: "shēngbìng", turkish: "hastalanmak" },
    { hanzi: "吃药", pinyin: "chīyào", turkish: "ilaç içmek" },
    { hanzi: "出", pinyin: "chū", turkish: "çıkmak" },
    { hanzi: "进", pinyin: "jìn", turkish: "girmek" },
    { hanzi: "到", pinyin: "dào", turkish: "varmak, ulaşmak" },
    { hanzi: "等", pinyin: "děng", turkish: "beklemek" },
    { hanzi: "找", pinyin: "zhǎo", turkish: "aramak, bulmak" },
    { hanzi: "给", pinyin: "gěi", turkish: "vermek" },
    { hanzi: "告诉", pinyin: "gàosu", turkish: "söylemek, haber vermek" },
    { hanzi: "问", pinyin: "wèn", turkish: "sormak" },
    { hanzi: "帮助", pinyin: "bāngzhù", turkish: "yardım etmek" },
    { hanzi: "走", pinyin: "zǒu", turkish: "yürümek, gitmek" },
    { hanzi: "送", pinyin: "sòng", turkish: "hediye etmek, uğurlamak" },
    { hanzi: "穿", pinyin: "chuān", turkish: "giymek" },
    { hanzi: "洗", pinyin: "xǐ", turkish: "yıkamak" },
    { hanzi: "懂", pinyin: "dǒng", turkish: "anlamak" },
    { hanzi: "笑", pinyin: "xiào", turkish: "gülmek" },
    { hanzi: "准备", pinyin: "zhǔnbèi", turkish: "hazırlanmak" },
    { hanzi: "开始", pinyin: "kāishǐ", turkish: "başlamak" },
    { hanzi: "介绍", pinyin: "jièshào", turkish: "tanıtmak" },
    { hanzi: "休息", pinyin: "xiūxi", turkish: "dinlenmek" },
    { hanzi: "完", pinyin: "wán", turkish: "bitirmek, tamamlamak" },
    { hanzi: "快", pinyin: "kuài", turkish: "hızlı, çabuk" },
    { hanzi: "慢", pinyin: "màn", turkish: "yavaş" },
    { hanzi: "远", pinyin: "yuǎn", turkish: "uzak" },
    { hanzi: "近", pinyin: "jìn", turkish: "yakın" },
    { hanzi: "贵", pinyin: "guì", turkish: "pahalı" },
    { hanzi: "便宜", pinyin: "piányi", turkish: "ucuz" },
    { hanzi: "新", pinyin: "xīn", turkish: "yeni" },
    { hanzi: "晴", pinyin: "qíng", turkish: "güneşli, açık hava" },
    { hanzi: "阴", pinyin: "yīn", turkish: "bulutlu hava" },
    { hanzi: "累", pinyin: "lèi", turkish: "yorgun" },
    { hanzi: "忙", pinyin: "máng", turkish: "meşgul" },
    { hanzi: "对", pinyin: "duì", turkish: "doğru" },
    { hanzi: "错", pinyin: "cuò", turkish: "yanlış, hata" },
    { hanzi: "长", pinyin: "cháng", turkish: "uzun" },
    { hanzi: "高", pinyin: "gāo", turkish: "yüksek, boylu" },
    { hanzi: "快乐", pinyin: "kuàilè", turkish: "mutlu, neşeli" },
    { hanzi: "已经", pinyin: "yǐjīng", turkish: "zaten, çoktan" },
    { hanzi: "一起", pinyin: "yìqǐ", turkish: "birlikte, beraber" },
    { hanzi: "再", pinyin: "zài", turkish: "tekrar, yeniden" },
    { hanzi: "就", pinyin: "jiù", turkish: "hemen, o zaman" },
    { hanzi: "也", pinyin: "yě", turkish: "de/da, aynı şekilde" },
    { hanzi: "还", pinyin: "hái", turkish: "hâlâ, ayrıca" },
    { hanzi: "真", pinyin: "zhēn", turkish: "gerçekten" },
    { hanzi: "最", pinyin: "zuì", turkish: "en (en çok vb.)" },
    { hanzi: "为什么", pinyin: "wèishénme", turkish: "neden, niçin" },
    { hanzi: "因为", pinyin: "yīnwèi", turkish: "çünkü" },
    { hanzi: "所以", pinyin: "suǒyǐ", turkish: "bu yüzden, bu nedenle" },
    { hanzi: "虽然", pinyin: "suīrán", turkish: "rağmen, -e karşın" },
    { hanzi: "但是", pinyin: "dànshì", turkish: "ama, fakat" },
    { hanzi: "从", pinyin: "cóng", turkish: "-den/-dan (itibaren)" },
    { hanzi: "往", pinyin: "wǎng", turkish: "-e doğru (yön)" },
    { hanzi: "离", pinyin: "lí", turkish: "-e uzaklıkta" },
    { hanzi: "左边", pinyin: "zuǒbiān", turkish: "sol taraf" },
    { hanzi: "右边", pinyin: "yòubiān", turkish: "sağ taraf" },
    { hanzi: "旁边", pinyin: "pángbiān", turkish: "yan taraf, bitişik" },
    { hanzi: "外", pinyin: "wài", turkish: "dış, dışarısı" },
    { hanzi: "事情", pinyin: "shìqing", turkish: "olay, mesele, iş" },
    { hanzi: "意思", pinyin: "yìsi", turkish: "anlam, mana" },
    { hanzi: "问题", pinyin: "wèntí", turkish: "soru, problem" },
    { hanzi: "考试", pinyin: "kǎoshì", turkish: "sınav" },
    { hanzi: "票", pinyin: "piào", turkish: "bilet" },
    { hanzi: "眼睛", pinyin: "yǎnjing", turkish: "göz" },
    { hanzi: "身体", pinyin: "shēntǐ", turkish: "vücut, beden, sağlık" },
    { hanzi: "希望", pinyin: "xīwàng", turkish: "ummak, umut etmek" },
    { hanzi: "可能", pinyin: "kěnéng", turkish: "belki, muhtemelen" },
    { hanzi: "别", pinyin: "bié", turkish: "yapma, etme (olumsuz emir)" },
    { hanzi: "次", pinyin: "cì", turkish: "kez, defa" },
    { hanzi: "件", pinyin: "jiàn", turkish: "tane (kıyafet ve işler için)" },
    { hanzi: "斤", pinyin: "jīn", turkish: "yarım kilo (500 gram)" },
    { hanzi: "两", pinyin: "liǎng", turkish: "iki (nesneler sayılırken)" },
    { hanzi: "第一", pinyin: "dì-yī", turkish: "birinci, ilk" },
    { hanzi: "您", pinyin: "nín", turkish: "siz (saygılı hitap)" },
    { hanzi: "它", pinyin: "tā", turkish: "o (cansız ve hayvanlar için)" },
    { hanzi: "大家", pinyin: "dàjiā", turkish: "herkes" },
    { hanzi: "每", pinyin: "měi", turkish: "her, her bir" },
    { hanzi: "比", pinyin: "bǐ", turkish: "kıyasla, nazaran" },
    { hanzi: "过", pinyin: "guò", turkish: "geçmiş deneyim eki (-mış olmak)" },
    { hanzi: "得", pinyin: "de", turkish: "durum zarfı bağlacı" },
    { hanzi: "着", pinyin: "zhe", turkish: "devam eden durum eki (-erek/-arak)" }
];

const PRESET_COLORS = ["#1971c2", "#2f9e44", "#e03131", "#f08c00", "#9c36b5", "#0ca678", "#1098ad", "#d6336c", "#495057", "#7048e8"];

// FIREBASE YAPILANDIRMASI
const firebaseConfig = {
    apiKey: "AIzaSyCwezLhpEGqWSHgpfBqBax8pnRUu9SdExg",
    authDomain: "sozluk2.firebaseapp.com",
    projectId: "sozluk2",
    storageBucket: "sozluk2.firebasestorage.app",
    messagingSenderId: "870301028295",
    appId: "1:870301028295:web:bff66eceb196faaac113e2"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const db = firebase.firestore();
const auth = firebase.auth();

let currentUser = null;
let currentProfile = { xp: 500, gems: 80, keys: 3, streak: 1, mastery: {}, friends: [] };
let aiTimer = null;
let dictionary = [];
let categories = ["Genel"];
let categoryColors = { "Genel": "#1971c2" };
let categoryDocs = {};
let selectedCategory = '';
let selectedLetter = '';
let currentWriters = [];
let currentQuizProgress = 0;
let moveTargetWordId = null;

let flashcardList = [];
let currentFcIndex = 0;
let isFcFlipped = false;

let currentRotation = 0;
let originalImageSrc = '';
let selectedHanzisArray = [];
let currentExampleData = null;
let discoveryWordsList = [];

// ==================== SES & SES SEVİYESİ KONTROLLERİ ====================
window.currentSpeechRate = 1.0;
window.currentSpeechVolume = 1.0;
let bgmAudio = null;
let isBgmPlaying = false;
let currentBgmVolume = 0.3;

function changeBgmVolume(val) {
    currentBgmVolume = val / 100;
    if (bgmAudio) {
        bgmAudio.volume = currentBgmVolume;
    }
    const display = document.getElementById('bgmVolumeDisplay');
    if (display) display.innerText = `${val}%`;
}

function changeTtsVolume(val) {
    window.currentSpeechVolume = val / 100;
    const display = document.getElementById('ttsVolumeDisplay');
    if (display) display.innerText = `${val}%`;
}

function playSuccessTone() {
    try {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (!AudioCtx) return;
        const ctx = new AudioCtx();

        const notes = [587.33, 880];
        notes.forEach((freq, idx) => {
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, ctx.currentTime + (idx * 0.1));

            const vol = 0.18 * (window.currentSpeechVolume !== undefined ? window.currentSpeechVolume : 1.0);
            gain.gain.setValueAtTime(vol, ctx.currentTime + (idx * 0.1));
            gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + (idx * 0.1) + 0.45);

            osc.connect(gain);
            gain.connect(ctx.destination);

            osc.start(ctx.currentTime + (idx * 0.1));
            osc.stop(ctx.currentTime + (idx * 0.1) + 0.45);
        });
    } catch (e) {
        console.warn("AudioContext başlatılamadı:", e);
    }
}

// ==================== 5 EKRAN GEZİNME ====================
function goToScreen(index) {
    const viewport = document.getElementById('screensViewport');
    if (!viewport) return;
    const width = viewport.clientWidth;
    viewport.scrollTo({ left: width * index, behavior: 'smooth' });

    document.querySelectorAll('.nav-item').forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
}

document.getElementById('screensViewport')?.addEventListener('scroll', () => {
    const viewport = document.getElementById('screensViewport');
    if (!viewport) return;
    const index = Math.round(viewport.scrollLeft / viewport.clientWidth);
    document.querySelectorAll('.nav-item').forEach((btn, i) => {
        btn.classList.toggle('active', i === index);
    });
});

// ==================== KULLANICI ID & ARKADAŞ SİSTEMİ ====================
function getMyShortId() {
    if (currentUser && currentUser.uid) {
        return currentUser.uid.substring(0, 9).toUpperCase();
    }
    return null;
}

function updateUserIdDisplay() {
    const el = document.getElementById('profileDisplayUserId');
    if (!el) return;

    const myId = getMyShortId();
    if (myId) {
        el.innerText = '#' + myId;
    } else {
        let guestId = localStorage.getItem('guest_user_id');
        if (!guestId) {
            guestId = Math.random().toString(36).substring(2, 11).toUpperCase();
            localStorage.setItem('guest_user_id', guestId);
        }
        el.innerText = '#' + guestId;
    }
}

function copyUserId() {
    const el = document.getElementById('profileDisplayUserId');
    if (!el || el.innerText === '#---') return;
    navigator.clipboard?.writeText(el.innerText).then(() => {
        alert(`Kimlik kopyalandı: ${el.innerText}`);
    });
}

function getRankByWordCount(wordCount) {
    if (wordCount >= 150) return "Ejder Seviyesi";
    if (wordCount >= 80) return "Usta Seviyesi";
    if (wordCount >= 30) return "Bilgin Seviyesi";
    return "Başlangıç Seviyesi";
}

function syncPublicProfile() {
    if (!currentUser) return;
    const shortId = getMyShortId();
    if (!shortId) return;

    const wordCount = dictionary.length;
    const rank = getRankByWordCount(wordCount);

    db.collection("public_profiles").doc(shortId).set({
        uid: currentUser.uid,
        shortId: shortId,
        name: currentUser.displayName?.split(' ')[0] || 'Oyuncu',
        photo: currentUser.photoURL || 'https://via.placeholder.com/32',
        wordCount: wordCount,
        rank: rank,
        streak: currentProfile.streak || 1,
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true }).catch(err => console.warn("Public profil senkronizasyon hatası:", err));
}

async function addFriendById() {
    if (!currentUser) {
        alert("Arkadaş eklemek için lütfen önce Google ile giriş yapın!");
        return;
    }

    const input = document.getElementById('friendIdInput');
    if (!input) return;

    const rawCode = input.value.trim().replace(/^#/, '').toUpperCase();
    if (rawCode.length !== 9) {
        alert("Lütfen 9 haneli geçerli bir Kullanıcı ID girin (Örn: #A1B2C3D4E).");
        return;
    }

    const myId = getMyShortId();
    if (rawCode === myId) {
        alert("Kendi ID kodunuzu arkadaş olarak ekleyemezsiniz.");
        return;
    }

    const currentFriends = currentProfile.friends || [];
    if (currentFriends.includes(rawCode)) {
        alert("Bu kullanıcı zaten arkadaş listenizde ekli!");
        input.value = '';
        return;
    }

    try {
        const docSnap = await db.collection("public_profiles").doc(rawCode).get();
        if (!docSnap.exists) {
            alert(`#${rawCode} koduna sahip aktif bir kullanıcı bulunamadı. Arkadaşınızın en az bir kez giriş yapmış olduğundan emin olun.`);
            return;
        }

        const updatedFriends = [...currentFriends, rawCode];
        currentProfile.friends = updatedFriends;
        saveProfileUpdates({ friends: updatedFriends });
        input.value = '';
        renderFriendsList();
        alert(`${docSnap.data().name || '#' + rawCode} arkadaş listene eklendi!`);
    } catch (err) {
        console.warn("Arkadaş ekleme hatası:", err);
        alert("Arkadaş eklenirken bir hata oluştu. Firestore kurallarını kontrol edin.");
    }
}

function removeFriend(friendId) {
    if (!currentUser) return;
    if (!confirm(`#${friendId} kullanıcısını arkadaş listenden çıkarmak istiyor musun?`)) return;

    const updatedFriends = (currentProfile.friends || []).filter(id => id !== friendId);
    currentProfile.friends = updatedFriends;
    saveProfileUpdates({ friends: updatedFriends });
    renderFriendsList();
}

async function renderFriendsList() {
    const area = document.getElementById('friendsListArea');
    if (!area) return;

    const friendIds = currentProfile.friends || [];
    if (!currentUser || friendIds.length === 0) {
        area.innerHTML = `<div style="font-size:12px; color:#94a3b8; text-align:center; padding:8px;">Henüz arkadaş eklenmedi.</div>`;
        return;
    }

    area.innerHTML = `<div style="font-size:12px; color:#64748b; text-align:center; padding:6px;">Arkadaşlar yükleniyor...</div>`;

    try {
        const promises = friendIds.map(id => db.collection("public_profiles").doc(id).get());
        const snapshots = await Promise.all(promises);

        area.innerHTML = '';
        snapshots.forEach((snap, idx) => {
            const fId = friendIds[idx];
            if (snap.exists) {
                const f = snap.data();
                const row = document.createElement('div');
                row.style = "display:flex; justify-content:space-between; align-items:center; background:#f8fafc; border:2px solid #e2e8f0; padding:10px 12px; border-radius:12px;";
                row.innerHTML = `
                    <div style="display:flex; align-items:center; gap:10px;">
                        <img src="${f.photo || 'https://via.placeholder.com/32'}" style="width:32px; height:32px; border-radius:50%; border:2px solid #1cb0f6;">
                        <div>
                            <div style="font-size:13px; font-weight:900; color:#1e293b;">${f.name} <span style="font-size:11px; color:#64748b; font-family:monospace;">#${fId}</span></div>
                            <div style="font-size:11px; font-weight:700; color:#1cb0f6;">${f.rank || 'Başlangıç Seviyesi'} • ${f.wordCount || 0} Kelime • 🔥 ${f.streak || 1} Gün</div>
                        </div>
                    </div>
                    <button class="row-btn" style="background:#fee2e2; color:#ef4444; font-size:11px;" onclick="removeFriend('${fId}')">Çıkar</button>
                `;
                area.appendChild(row);
            }
        });
    } catch (err) {
        console.warn("Arkadaş listesi okuma hatası:", err);
    }
}

// ==================== BULUT PROFİL ====================
function getTodayDateString() {
    const d = new Date();
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const day = String(d.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function getUserProfileRef() {
    if (!currentUser) return null;
    return db.collection("users").doc(currentUser.uid).collection("data").doc("profile");
}

function getUserWordsRef() {
    if (!currentUser) return null;
    return db.collection("users").doc(currentUser.uid).collection("kelimeler");
}

function listenUserProfile() {
    const ref = getUserProfileRef();
    if (!ref) return;

    ref.onSnapshot(doc => {
        if (doc.exists) {
            currentProfile = doc.data();
            if (!currentProfile.mastery) currentProfile.mastery = {};
            if (!currentProfile.friends) currentProfile.friends = [];
        } else {
            currentProfile = {
                xp: 0,
                gems: 0,
                keys: 0,
                streak: 1,
                lastActiveDate: getTodayDateString(),
                mastery: {},
                friends: [],
                isNewUser: true
            };
            ref.set(currentProfile);
            const welcomeModal = document.getElementById('welcomeSparkModal');
            if (welcomeModal) welcomeModal.style.display = 'flex';
        }
        updateResourceUI();
        renderDeckCards();
        checkDiscoveryButtonStatus();
        renderFriendsList();
        syncPublicProfile();
    }, err => console.warn("Profil hatası:", err));
}

function closeWelcomeSparkModal() {
    const welcomeModal = document.getElementById('welcomeSparkModal');
    if (welcomeModal) welcomeModal.style.display = 'none';
    goToScreen(0);
}

// ==================== RÜTBE & ARENA (KELİME SAYISI BAZLI) ====================
function updateResourceUI() {
    const xBadge = document.getElementById('xpBadge');
    const gBadge = document.getElementById('gemBadge');
    const kBadge = document.getElementById('keyBadge');
    const bStreak = document.getElementById('battleStreak');

    const xp = currentProfile.xp || 0;
    const gems = currentProfile.gems || 0;
    const keys = currentProfile.keys || 0;
    const streak = currentProfile.streak || 1;
    const wordCount = dictionary.length;

    if (xBadge) xBadge.innerText = `${xp} XP`;
    if (gBadge) gBadge.innerText = `${gems} Elmas`;
    if (kBadge) kBadge.innerText = `${keys} Anahtar`;
    if (bStreak) bStreak.innerText = `${streak} Günlük Seri`;

    let rank = "Başlangıç Seviyesi";
    let arena = "Kademe 1: Başlangıç Vadisi";
    let nextTarget = 30;
    let prevTarget = 0;

    if (wordCount >= 150) {
        rank = "Ejder Seviyesi";
        arena = "Kademe 4: Yasak Şehir";
        prevTarget = 150;
        nextTarget = 150;
    } else if (wordCount >= 80) {
        rank = "Usta Seviyesi";
        arena = "Kademe 3: Tapınak";
        prevTarget = 80;
        nextTarget = 150;
    } else if (wordCount >= 30) {
        rank = "Bilgin Seviyesi";
        arena = "Kademe 2: Bilgin Şehri";
        prevTarget = 30;
        nextTarget = 80;
    }

    const aTitle = document.getElementById('arenaTitle');
    const pRank = document.getElementById('profileRankTitle');
    const pXP = document.getElementById('profileXPDetails');
    const pFill = document.getElementById('rankProgressFill');

    if (aTitle) aTitle.innerText = arena;
    if (pRank) pRank.innerText = rank;
    if (pXP) {
        pXP.innerText = wordCount >= 150
            ? `Toplam Kelime: ${wordCount} (Maksimum Seviye) • ${xp} XP`
            : `Toplam Kelime: ${wordCount} / ${nextTarget} • ${xp} XP`;
    }
    if (pFill) {
        const progress = wordCount >= 150
            ? 100
            : Math.max(5, Math.min(100, Math.round(((wordCount - prevTarget) / (nextTarget - prevTarget)) * 100)));
        pFill.style.width = `${progress}%`;
    }
}

function saveProfileUpdates(updates) {
    if (!currentUser) return;
    const ref = getUserProfileRef();
    if (!ref) return;
    ref.update(updates).catch(err => console.warn(err));
}

function addXP(amount) {
    const newXP = (currentProfile.xp || 0) + amount;
    currentProfile.xp = newXP;
    updateResourceUI();
    saveProfileUpdates({ xp: newXP });
}

function addGems(amount) {
    const newGems = (currentProfile.gems || 0) + amount;
    currentProfile.gems = newGems;
    updateResourceUI();
    saveProfileUpdates({ gems: newGems });
}

function addKeys(amount) {
    const newKeys = (currentProfile.keys || 0) + amount;
    currentProfile.keys = newKeys;
    updateResourceUI();
    saveProfileUpdates({ keys: newKeys });
}

// ==================== KART SEVİYELERİ ====================
function getTargetForLevel(lvl) {
    return Math.pow(2, lvl);
}

function addCardMasteryPoint(hanziKey) {
    if (!hanziKey) return;
    const mastery = currentProfile.mastery || {};
    if (!mastery[hanziKey]) {
        mastery[hanziKey] = { level: 1, points: 0 };
    }

    mastery[hanziKey].points = (mastery[hanziKey].points || 0) + 1;
    let lvl = mastery[hanziKey].level || 1;
    let target = getTargetForLevel(lvl);

    while (mastery[hanziKey].points >= target) {
        mastery[hanziKey].points -= target;
        lvl += 1;
        mastery[hanziKey].level = lvl;
        target = getTargetForLevel(lvl);
    }

    currentProfile.mastery = mastery;
    renderDeckCards();
    saveProfileUpdates({ mastery: mastery });
}

function renderDeckCards() {
    const grid = document.getElementById('deckGrid');
    const countSpan = document.getElementById('deckTotalCardsCount');
    if (!grid) return;
    grid.innerHTML = '';

    const displayDict = (!currentUser && dictionary.length === 0) ? HSK_POOL.slice(0, 8) : dictionary;
    const pool = selectedCategory ? displayDict.filter(w => (w.kategori || 'Genel') === selectedCategory) : displayDict;
    if (countSpan) countSpan.innerText = `${pool.length} Kart`;

    if (pool.length === 0) {
        grid.innerHTML = `<div style="grid-column: span 2; text-align:center; color:#64748b; padding:20px;">Henüz bu kategoride kelimen yok. Sandık açarak toplayabilirsin!</div>`;
        return;
    }

    const mastery = currentProfile.mastery || {};

    pool.forEach(item => {
        const key = item.hanzi || item.pinyin;
        const info = mastery[key] || { level: 1, points: 0 };
        const level = info.level || 1;
        const points = info.points || 0;
        const target = getTargetForLevel(level);
        const percent = Math.min(100, Math.round((points / target) * 100));

        const card = document.createElement('div');
        card.className = "cr-game-card";
        card.onclick = () => openModal(item);

        card.innerHTML = `
            <div class="card-level-badge">Lv.${level}</div>
            <div class="card-hanzi">${item.hanzi}</div>
            <div class="card-pinyin">${colorizePinyin(item.pinyin)}</div>
            <div class="card-turkish" title="${item.turkish}">${item.turkish}</div>
            <div class="card-exp-bar">
                <div class="card-exp-fill" style="width: ${percent}%;"></div>
            </div>
            <div class="card-exp-txt">${points} / ${target} Doğruluk</div>
        `;

        grid.appendChild(card);
    });
}

// ==================== GÜNLÜK GÖREV TAKİP ====================
function getDailyQuestProgress() {
    const today = getTodayDateString();
    let data = {};
    try {
        data = JSON.parse(localStorage.getItem(`DAILY_QUESTS_${currentUser?.uid || 'guest'}`) || '{}');
    } catch(e) { data = {}; }

    if (data.date !== today) {
        data = {
            date: today,
            addWordCount: 0,
            flashcardCount: 0,
            quizCount: 0,
            listenCount: 0,
            claimed: false
        };
        localStorage.setItem(`DAILY_QUESTS_${currentUser?.uid || 'guest'}`, JSON.stringify(data));
    }
    return data;
}

function saveDailyQuestProgress(data) {
    localStorage.setItem(`DAILY_QUESTS_${currentUser?.uid || 'guest'}`, JSON.stringify(data));
    updateQuestUI();
}

function incrementQuest(type, amount = 1) {
    const q = getDailyQuestProgress();
    if (type === 'addWord') q.addWordCount = (q.addWordCount || 0) + amount;
    if (type === 'flashcard') q.flashcardCount = (q.flashcardCount || 0) + amount;
    if (type === 'quiz') q.quizCount = (q.quizCount || 0) + amount;
    if (type === 'listen') q.listenCount = (q.listenCount || 0) + amount;
    saveDailyQuestProgress(q);
}

function updateQuestUI() {
    const q = getDailyQuestProgress();

    const t1 = Math.min(q.addWordCount || 0, 2);
    const t2 = Math.min(q.flashcardCount || 0, 1);
    const t3 = Math.min(q.quizCount || 0, 1);
    const t4 = Math.min(q.listenCount || 0, 3);

    const s1 = document.getElementById('qStatus1');
    const s2 = document.getElementById('qStatus2');
    const s3 = document.getElementById('qStatus3');
    const s4 = document.getElementById('qStatus4');

    if (s1) s1.innerText = `${t1} / 2`;
    if (s2) s2.innerText = `${t2} / 1`;
    if (s3) s3.innerText = `${t3} / 1`;
    if (s4) s4.innerText = `${t4} / 3`;

    document.getElementById('qCard1')?.classList.toggle('completed', t1 >= 2);
    document.getElementById('qCard2')?.classList.toggle('completed', t2 >= 1);
    document.getElementById('qCard3')?.classList.toggle('completed', t3 >= 1);
    document.getElementById('qCard4')?.classList.toggle('completed', t4 >= 3);

    let completedTasks = 0;
    if (t1 >= 2) completedTasks++;
    if (t2 >= 1) completedTasks++;
    if (t3 >= 1) completedTasks++;
    if (t4 >= 3) completedTasks++;

    const progressTxt = document.getElementById('questProgressTxt');
    const progressFill = document.getElementById('questProgressFill');
    if (progressTxt) progressTxt.innerText = `${completedTasks} / 4 Tamamlandı`;
    if (progressFill) progressFill.style.width = `${(completedTasks / 4) * 100}%`;

    const claimBtn = document.getElementById('btnClaimQuests');
    if (claimBtn) {
        if (q.claimed) {
            claimBtn.disabled = true;
            claimBtn.innerText = "Bugünkü Ödül Alındı (Yarın Yenilenecek)";
        } else if (completedTasks >= 4) {
            claimBtn.disabled = false;
            claimBtn.innerText = "Büyük Sandık Ödülünü Al!";
        } else {
            claimBtn.disabled = true;
            claimBtn.innerText = `Hedefleri Tamamla (${completedTasks}/4)`;
        }
    }
}

function claimDailyReward() {
    const q = getDailyQuestProgress();
    if (q.claimed) {
        alert("Bugünkü ödülünü zaten aldın! Gece 00:00'da yeni görevler açılacaktır.");
        return;
    }

    let completedTasks = 0;
    if ((q.addWordCount || 0) >= 2) completedTasks++;
    if ((q.flashcardCount || 0) >= 1) completedTasks++;
    if ((q.quizCount || 0) >= 1) completedTasks++;
    if ((q.listenCount || 0) >= 3) completedTasks++;

    if (completedTasks < 4) {
        alert("Ödülü açabilmek için 4 görevin tamamını bitirmelisin!");
        return;
    }

    q.claimed = true;
    saveDailyQuestProgress(q);

    addKeys(1);
    addGems(15);
    addXP(40);
    alert("Tebrikler! Tüm görevleri tamamlayarak sandık ödülünü kazandın: (+1 Anahtar, +15 Elmas, +40 XP)!");
}

// ==================== XP -> ELMAS DÖNÜŞÜM ====================
function exchangeXPForGems() {
    const today = getTodayDateString();
    const lastExchange = localStorage.getItem(`LAST_EXCHANGE_${currentUser?.uid || 'guest'}`);

    if (lastExchange === today) {
        alert("Bugünkü kotanı doldurdun! Gece 00:00'da kota yenilenecektir.");
        return;
    }

    if ((currentProfile.xp || 0) < 500) {
        alert(`Yetersiz XP! Dönüştürmek için 500 XP gerekli (Şu anki XP: ${currentProfile.xp || 0}).`);
        return;
    }

    addXP(-500);
    addGems(50);
    localStorage.setItem(`LAST_EXCHANGE_${currentUser?.uid || 'guest'}`, today);
    checkExchangeButtonStatus();
    alert("Başarılı! 500 XP harcandı, 50 Yeşil Elmas eklendi!");
}

function checkExchangeButtonStatus() {
    const today = getTodayDateString();
    const lastExchange = localStorage.getItem(`LAST_EXCHANGE_${currentUser?.uid || 'guest'}`);
    const btn = document.getElementById('btnExchangeXP');
    if (!btn) return;

    if (lastExchange === today) {
        btn.innerText = "Yarın Tekrar Gel";
        btn.disabled = true;
    } else {
        btn.innerText = "Dönüştür";
        btn.disabled = false;
    }
}

// ==================== SANDIK MOTORU ====================
function openChest(type, reqKeys, reqGems) {
    const keys = currentProfile.keys || 0;
    const gems = currentProfile.gems || 0;

    if (reqKeys > 0 && keys < reqKeys) {
        alert("Yeterli anahtarın yok! Günlük görevleri yaparak anahtar kazanabilirsin.");
        return;
    }
    if (reqGems > 0 && gems < reqGems) {
        alert(`Yeterli elmasın yok! Bu paket ${reqGems} Elmas gerektirir.`);
        return;
    }

    const ownedHanzis = new Set(dictionary.map(w => w.hanzi.trim()));
    let unownedPool = HSK_POOL.filter(w => !ownedHanzis.has(w.hanzi.trim()));

    if (unownedPool.length === 0) {
        alert("Tebrikler! 250 kelimelik havuzdaki tüm kelimeleri zaten topladınız! Sandık açmanıza gerek kalmadı.");
        return;
    }

    let count = type === 'magic' ? 4 : (type === 'silver' ? 3 : 2);
    count = Math.min(count, unownedPool.length);

    if (reqKeys > 0) addKeys(-reqKeys);
    if (reqGems > 0) addGems(-reqGems);

    const modal = document.getElementById('chestModal');
    const dropArea = document.getElementById('chestDropArea');
    const animBox = document.getElementById('chestBoxAnim');
    const collectBtn = document.getElementById('btnCollectChest');

    dropArea.innerHTML = '';
    collectBtn.style.display = 'none';

    let svgHtml = '';
    if (type === 'wood') {
        svgHtml = `<svg viewBox="0 0 100 100" style="width:100%; height:100%;"><rect x="18" y="42" width="64" height="42" rx="6" fill="#8d5b2d" stroke="#3e230b" stroke-width="4"/><path d="M14 42 Q50 14 86 42 Z" fill="#b07236" stroke="#3e230b" stroke-width="4"/><rect x="42" y="38" width="16" height="20" rx="3" fill="#ffd43b"/></svg>`;
    } else if (type === 'silver') {
        svgHtml = `<svg viewBox="0 0 100 100" style="width:100%; height:100%;"><rect x="18" y="42" width="64" height="42" rx="6" fill="#94a3b8" stroke="#334155" stroke-width="4"/><path d="M14 42 Q50 14 86 42 Z" fill="#cbd5e1" stroke="#334155" stroke-width="4"/><rect x="42" y="38" width="16" height="20" rx="3" fill="#38bdf8"/></svg>`;
    } else {
        svgHtml = `<svg viewBox="0 0 100 100" style="width:100%; height:100%;"><rect x="18" y="42" width="64" height="42" rx="6" fill="#4c1d95" stroke="#2e1065" stroke-width="4"/><path d="M14 42 Q50 14 86 42 Z" fill="#7c3aed" stroke="#2e1065" stroke-width="4"/><polygon points="50,34 59,48" fill="#c084fc"/></svg>`;
    }

    animBox.innerHTML = svgHtml;
    modal.style.display = 'flex';

    setTimeout(() => {
        let drops = [];
        let candidatePool = [...unownedPool];

        for (let i = 0; i < count; i++) {
            if (candidatePool.length === 0) break;
            const randomIndex = Math.floor(Math.random() * candidatePool.length);
            const chosenWord = candidatePool.splice(randomIndex, 1)[0];
            drops.push(chosenWord);

            if (currentUser) {
                const docId = chosenWord.hanzi.trim();
                getUserWordsRef().doc(docId).set({
                    hanzi: chosenWord.hanzi.trim(),
                    pinyin: chosenWord.pinyin.trim(),
                    turkish: chosenWord.turkish.trim(),
                    kategori: selectedCategory || 'Genel',
                    ekleyen: 'Sandık Ödülü',
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                }, { merge: true });
            } else {
                dictionary.push({
                    id: chosenWord.hanzi.trim(),
                    hanzi: chosenWord.hanzi.trim(),
                    pinyin: chosenWord.pinyin.trim(),
                    turkish: chosenWord.turkish.trim(),
                    kategori: 'Genel',
                    addedBy: 'Demo Sandık'
                });
            }
        }

        drops.forEach(item => {
            let div = document.createElement('div');
            div.className = 'chest-drop-item';
            div.style = "padding:8px; margin:4px 0; background:#f8fafc; border:1px solid #cbd5e1; border-radius:8px; font-size:13px; font-weight:700;";
            div.innerHTML = `<strong style="font-size:16px; color:#1e293b;">${item.hanzi}</strong> <span style="color:#2563eb;">(${item.pinyin})</span> - <span style="color:#475569;">${item.turkish}</span>`;
            dropArea.appendChild(div);
        });

        let rewardedXP = count * 10;
        addXP(rewardedXP);
        if (type === 'silver') addGems(5);
        if (type === 'magic') addGems(35);

        let bonusDiv = document.createElement('div');
        bonusDiv.className = 'chest-drop-item';
        bonusDiv.style = "padding:8px; margin-top:8px; background:#eff6ff; border:2px solid #3b82f6; border-radius:8px; font-weight:800; color:#1d4ed8;";
        bonusDiv.innerHTML = `KAZANILAN: +${rewardedXP} XP ${type === 'magic' ? '+35 Elmas' : (type === 'silver' ? '+5 Elmas' : '')}`;
        dropArea.appendChild(bonusDiv);

        updateResourceUI();
        renderDictionary();
        renderDeckCards();
        collectBtn.style.display = 'block';
    }, 1100);
}

function closeChestModal(e) {
    if (e && e.target !== e.currentTarget && e.target.id !== 'btnCollectChest') return;
    document.getElementById('chestModal').style.display = 'none';
}

// ==================== HIZLI & GÜVENLİ ÇEVİRİ MOTORU ====================
function queueAI(source) {
    clearTimeout(aiTimer);
    if (source === 'hanzi') {
        const hzVal = document.getElementById('hanzi').value.trim();
        if (hzVal && window.pinyinPro) {
            document.getElementById('pinyin').value = window.pinyinPro.pinyin(hzVal, { toneType: 'symbol' });
        }
    }
    aiTimer = setTimeout(() => triggerAI(source), 320);
}

async function triggerAI(source) {
    clearTimeout(aiTimer);
    const hanziInput = document.getElementById('hanzi');
    const pinyinInput = document.getElementById('pinyin');
    const turkishInput = document.getElementById('turkish');
    const statusDiv = document.getElementById('aiStatus');

    let val = source === 'turkish' ? turkishInput.value.trim() : (source === 'hanzi' ? hanziInput.value.trim() : pinyinInput.value.trim());
    if (!val) return;

    const localMatch = HSK_POOL.find(item => {
        if (source === 'hanzi') return item.hanzi === val;
        if (source === 'turkish') return item.turkish.toLowerCase() === val.toLowerCase();
        if (source === 'pinyin') return item.pinyin.toLowerCase() === val.toLowerCase();
        return false;
    });

    if (localMatch) {
        if (source !== 'hanzi') hanziInput.value = localMatch.hanzi;
        if (source !== 'pinyin') pinyinInput.value = localMatch.pinyin;
        if (source !== 'turkish') turkishInput.value = localMatch.turkish;
        if (statusDiv) statusDiv.style.display = 'none';
        return;
    }

    if (source === 'hanzi' && window.pinyinPro && (!pinyinInput.value || pinyinInput.value === '...')) {
        pinyinInput.value = window.pinyinPro.pinyin(val, { toneType: 'symbol' });
    }

    if (statusDiv) {
        statusDiv.innerText = "Çevriliyor...";
        statusDiv.style.display = 'block';
    }

    try {
        if (source === 'turkish') {
            const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=tr&tl=zh-CN&dt=t&q=${encodeURIComponent(val)}`;
            const res = await fetch(url);
            const data = await res.json();
            if (data && data[0]) {
                const hz = data[0].map(item => item[0]).filter(Boolean).join('');
                if (hz) {
                    hanziInput.value = hz;
                    if (window.pinyinPro) pinyinInput.value = window.pinyinPro.pinyin(hz, { toneType: 'symbol' });
                }
            }
        } else if (source === 'hanzi') {
            const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=zh-CN&tl=tr&dt=t&q=${encodeURIComponent(val)}`;
            const res = await fetch(url);
            const data = await res.json();
            if (data && data[0]) {
                const tr = data[0].map(item => item[0]).filter(Boolean).join(' ').trim();
                if (tr) turkishInput.value = tr.toLowerCase();
            }
        } else if (source === 'pinyin') {
            const currentHz = hanziInput.value.trim();
            if (currentHz) {
                const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=zh-CN&tl=tr&dt=t&q=${encodeURIComponent(currentHz)}`;
                const res = await fetch(url);
                const data = await res.json();
                if (data && data[0]) {
                    const tr = data[0].map(item => item[0]).filter(Boolean).join(' ').trim();
                    if (tr) turkishInput.value = tr.toLowerCase();
                }
            }
        }
    } catch (err) {
        console.warn("Çeviri servisi hatası:", err);
    } finally {
        if (statusDiv) statusDiv.style.display = 'none';
    }
}

// ==================== BULUT KELİMELERİ ====================
function loadCloudData() {
    const wordsRef = getUserWordsRef();
    if (!wordsRef) {
        dictionary = [];
        updateResourceUI();
        renderDictionary();
        renderDeckCards();
        return;
    }

    wordsRef.onSnapshot((snapshot) => {
        dictionary = [];
        const seenHanzis = new Set();

        snapshot.forEach((doc) => {
            const d = doc.data();
            const hz = (d.hanzi || '').trim();

            if (hz && !seenHanzis.has(hz)) {
                seenHanzis.add(hz);
                dictionary.push({
                    id: doc.id,
                    hanzi: hz,
                    pinyin: d.pinyin || '',
                    turkish: d.turkish || d['Türkçe'] || '',
                    kategori: d.kategori || 'Genel',
                    addedBy: d.ekleyen || 'Sen'
                });
            }
        });
        updateResourceUI();
        syncPublicProfile();
        renderDictionary();
        renderDeckCards();
        checkDiscoveryButtonStatus();
    }, err => console.warn(err));
}

function getFilteredWords() {
    const query = (document.getElementById('searchQuery')?.value || '').trim().toLowerCase();
    const sourceList = (!currentUser && dictionary.length === 0) ? HSK_POOL.slice(0, 8) : dictionary;
    const list = [...sourceList].sort((a, b) => (a.pinyin || '').localeCompare(b.pinyin || ''));
    
    return list.filter(item => {
        const p = (item.pinyin || '').toLowerCase();
        const h = (item.hanzi || '').toLowerCase();
        const t = (item.turkish || '').toLowerCase();
        const mq = !query || p.includes(query) || h.includes(query) || t.includes(query);
        const ml = !selectedLetter || p.toUpperCase().startsWith(selectedLetter);
        const mc = !selectedCategory || (item.kategori || 'Genel') === selectedCategory;
        return mq && ml && mc;
    });
}

function renderDictionary() {
    const list = document.getElementById('wordList');
    if (!list) return;
    list.innerHTML = '';
    const filtered = getFilteredWords();

    if (!filtered.length) {
        list.innerHTML = `<tr><td colspan="4" style="text-align:center; color:#888;">Kelime bulunamadı. Dükkandan sandık aç veya yukarıdan kelime ekle!</td></tr>`;
        return;
    }

    filtered.forEach(item => {
        const row = document.createElement('tr');
        row.className = 'clickable-row';
        row.onclick = () => openModal(item);
        const catColor = getCategoryColor(item.kategori || 'Genel');

        row.innerHTML = `
            <td><span class="table-pinyin">${colorizePinyin(item.pinyin)}</span></td>
            <td><span class="table-hanzi">${item.hanzi}</span></td>
            <td>
                <span>${item.turkish}</span><br>
                <span class="cat-tag" style="background-color: ${catColor};">${item.kategori || 'Genel'}</span>
            </td>
            <td onclick="event.stopPropagation()">
                <button class="row-btn" onclick="speakChinese('${item.hanzi}')">Dinle</button>
                <button class="row-btn" style="background:#e0f2fe; color:#0284c7;" onclick="openMoveModal('${item.id || item.hanzi}', '${item.hanzi}')">Taşı</button>
                <button class="row-btn" style="background:#fee2e2; color:#ef4444;" onclick="deleteWord('${item.id || item.hanzi}')">Sil</button>
            </td>
        `;
        list.appendChild(row);
    });
}

function colorizePinyin(pinyinText) {
    if (!pinyinText) return '';
    const toneMap = {
        'ā': ['a', 1], 'ē': ['e', 1], 'ī': ['i', 1], 'ō': ['o', 1], 'ū': ['u', 1], 'ǖ': ['ü', 1],
        'á': ['a', 2], 'é': ['e', 2], 'í': ['i', 2], 'ó': ['o', 2], 'ú': ['u', 2], 'ǘ': ['ü', 2],
        'ǎ': ['a', 3], 'ě': ['e', 3], 'ǐ': ['i', 3], 'ǒ': ['o', 3], 'ǔ': ['u', 3], 'ǚ': ['ü', 3],
        'à': ['a', 4], 'è': ['e', 4], 'ì': ['i', 4], 'ò': ['o', 4], 'ù': ['u', 4], 'ǜ': ['ü', 4]
    };
    const marks = { 1: '¯', 2: 'ˊ', 3: 'ˇ', 4: 'ˋ' };
    let res = '';
    for (let char of pinyinText) {
        if (toneMap[char]) {
            const [base, tone] = toneMap[char];
            res += `${base}<span style="color:#f59e0b; font-weight:800;">${marks[tone]}</span>`;
        } else res += char;
    }
    return res;
}

// ==================== KELİME EKLE ====================
function addWord() {
    if (!currentUser) { alert("Lütfen önce giriş yapın!"); goToScreen(4); return; }
    const hanzi = document.getElementById('hanzi').value.trim();
    const pinyin = document.getElementById('pinyin').value.trim();
    const turkish = document.getElementById('turkish').value.trim();
    const kategori = document.getElementById('wordCategory').value || 'Genel';
    
    if (!hanzi) {
        alert("Lütfen Hanzi (Çince karakter) girin!");
        return;
    }

    const alreadyExists = dictionary.some(w => w.hanzi.trim() === hanzi);
    if (alreadyExists) {
        alert(`"${hanzi}" kelimesi zaten sözlüğünde kayıtlı! Bir kelime sadece bir kez eklenebilir.`);
        return;
    }

    const docId = hanzi;
    getUserWordsRef().doc(docId).set({
        hanzi, pinyin, turkish, kategori,
        ekleyen: currentUser.displayName?.split(' ')[0] || 'Ben',
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
        addXP(10);
        incrementQuest('addWord', 1);
        clearForm();
    });
}

function clearForm() {
    document.getElementById('hanzi').value = '';
    document.getElementById('pinyin').value = '';
    document.getElementById('turkish').value = '';
}

function deleteWord(id) {
    if (!currentUser) {
        alert("Demo kelimeler silinemez. Kendi kelimelerini eklemek ve yönetmek için giriş yap!");
        return;
    }
    if (confirm("Silmek istediğinize emin misiniz?")) {
        getUserWordsRef().doc(id).delete();
    }
}

function openMoveModal(id, wordText) {
    if (!currentUser) {
        alert("Kategori değiştirmek için lütfen giriş yapın!");
        return;
    }
    moveTargetWordId = id;
    document.getElementById('moveWordTitle').innerText = `"${wordText}"`;
    document.getElementById('moveModal').style.display = 'flex';
}
function closeMoveModal() {
    document.getElementById('moveModal').style.display = 'none';
    moveTargetWordId = null;
}
function confirmMoveWord() {
    if (!moveTargetWordId || !currentUser) return;
    const targetCat = document.getElementById('targetCategorySelect').value;
    getUserWordsRef().doc(moveTargetWordId).update({ kategori: targetCat }).then(() => closeMoveModal());
}

// ==================== DİNAMİK ALFABE ÇUBUĞU ====================
function renderAlphabetBar() {
    const alphaBar = document.getElementById('alphabetBar');
    if (!alphaBar) return;
    alphaBar.innerHTML = '';

    const allBtn = document.createElement('button');
    allBtn.className = `alpha-btn ${selectedLetter === '' ? 'active' : ''}`;
    allBtn.innerText = 'Tümü';
    allBtn.onclick = () => filterByLetter('');
    alphaBar.appendChild(allBtn);

    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('');
    letters.forEach(letter => {
        const btn = document.createElement('button');
        btn.className = `alpha-btn ${selectedLetter === letter ? 'active' : ''}`;
        btn.innerText = letter;
        btn.onclick = () => filterByLetter(letter);
        alphaBar.appendChild(btn);
    });
}

function filterByLetter(letter) {
    selectedLetter = letter;
    renderAlphabetBar();
    renderDictionary();
}

// ==================== KATEGORİLER ====================
function getCategoryColor(catName) {
    if (!catName) catName = 'Genel';
    if (categoryColors[catName]) return categoryColors[catName];
    let hash = 0;
    for (let i = 0; i < catName.length; i++) hash = catName.charCodeAt(i) + ((hash << 5) - hash);
    return PRESET_COLORS[Math.abs(hash) % PRESET_COLORS.length];
}

function loadCategories() {
    if (!currentUser) return;
    db.collection("users").doc(currentUser.uid).collection("kategoriler").onSnapshot((snapshot) => {
        categories = ["Genel"];
        categoryDocs = {};
        snapshot.forEach((doc) => {
            const data = doc.data();
            const name = data.name;
            if (name && !categories.includes(name)) {
                categories.push(name);
                categoryDocs[name] = doc.id;
                if (data.color) categoryColors[name] = data.color;
            }
        });
        renderCategoryBar();
        updateCategoryDropdowns();
        renderDictionary();
        renderDeckCards();
    }, err => console.warn(err));
}

function renderCategoryBar() {
    const bar = document.getElementById('categoryBar');
    if (!bar) return;
    bar.innerHTML = '';

    const allBtn = document.createElement('button');
    allBtn.className = `cat-pill ${selectedCategory === '' ? 'active' : ''}`;
    allBtn.innerText = 'Tümü';
    allBtn.onclick = () => filterByCategory('');
    bar.appendChild(allBtn);

    categories.forEach(cat => {
        const btn = document.createElement('button');
        btn.className = `cat-pill ${selectedCategory === cat ? 'active' : ''}`;
        btn.innerText = cat;
        btn.onclick = () => filterByCategory(cat);
        bar.appendChild(btn);
    });

    const newBtn = document.createElement('button');
    newBtn.className = 'cat-pill add-pill';
    newBtn.innerText = '+ Yeni';
    newBtn.onclick = openNewCategoryModal;
    bar.appendChild(newBtn);
}

function updateCategoryDropdowns() {
    const formSelect = document.getElementById('wordCategory');
    const moveSelect = document.getElementById('targetCategorySelect');
    const discSelect = document.getElementById('discoveryBatchCatSelect');

    if (formSelect) formSelect.innerHTML = '';
    if (moveSelect) moveSelect.innerHTML = '';
    if (discSelect) discSelect.innerHTML = '';

    categories.forEach(cat => {
        if (formSelect) formSelect.innerHTML += `<option value="${cat}">Kategori: ${cat}</option>`;
        if (moveSelect) moveSelect.innerHTML += `<option value="${cat}">${cat}</option>`;
        if (discSelect) discSelect.innerHTML += `<option value="${cat}">${cat}</option>`;
    });
}

function filterByCategory(cat) {
    selectedCategory = cat;
    renderCategoryBar();
    renderDictionary();
    renderDeckCards();
}

function openNewCategoryModal() {
    const nameInput = document.getElementById('newCatNameInput');
    if (nameInput) nameInput.value = '';
    document.getElementById('newCategoryModal').style.display = 'flex';
}
function closeNewCategoryModal() { document.getElementById('newCategoryModal').style.display = 'none'; }

function saveNewCategory() {
    if (!currentUser) return;
    const name = document.getElementById('newCatNameInput').value.trim();
    const color = document.getElementById('newCatColorPicker').value;
    if (!name) return;

    db.collection("users").doc(currentUser.uid).collection("kategoriler").add({
        name, color, createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }).then(() => {
        categoryColors[name] = color;
        closeNewCategoryModal();
        filterByCategory(name);
    });
}

function openManageCategoriesModal() {
    const listArea = document.getElementById('categoryEditListArea');
    if (!listArea) return;
    listArea.innerHTML = '';
    categories.forEach(cat => {
        const row = document.createElement('div');
        row.style = "display:flex; justify-content:space-between; align-items:center; background:#f8fafc; border:2px solid #e2e8f0; padding:10px 14px; border-radius:12px; margin-bottom:8px; font-weight:800; color:#1e293b;";
        row.innerHTML = `<span>${cat}</span>`;
        listArea.appendChild(row);
    });
    document.getElementById('manageCategoriesModal').style.display = 'flex';
}
function closeManageCategoriesModal() { document.getElementById('manageCategoriesModal').style.display = 'none'; }

// ==================== FLASHCARD SRS ====================
function openFlashcardModal() {
    const pool = getFilteredWords();
    if (!pool.length) { alert("Çalışılacak kelimen yok! Önce sözlüğe kelime ekle veya sandık aç."); return; }
    flashcardList = [...pool].sort(() => Math.random() - 0.5).slice(0, 20);
    currentFcIndex = 0;
    isFcFlipped = false;
    renderCurrentFlashcard();
    document.getElementById('flashcardModal').style.display = 'flex';
}
function closeFlashcardModal() { document.getElementById('flashcardModal').style.display = 'none'; }

function renderCurrentFlashcard() {
    if (currentFcIndex >= flashcardList.length) {
        addXP(25);
        addKeys(1);
        incrementQuest('flashcard', 1);
        alert("Tebrikler! 20'lik Flashcard Arenasını tamamladın (+25 XP, +1 Anahtar)!");
        closeFlashcardModal();
        return;
    }
    const item = flashcardList[currentFcIndex];
    isFcFlipped = false;

    const fcFront = document.getElementById('fcFront');
    const fcBack = document.getElementById('fcBack');
    fcFront.style.display = 'block';
    fcBack.style.display = 'none';

    document.getElementById('fcCounter').innerText = `${currentFcIndex + 1} / ${flashcardList.length}`;
    document.getElementById('fcFrontHanzi').innerText = item.hanzi || '-';
    document.getElementById('fcFrontPinyin').innerHTML = colorizePinyin(item.pinyin || '');
    document.getElementById('fcBackTurkish').innerText = item.turkish || '-';
}

function flipCard() {
    isFcFlipped = !isFcFlipped;
    document.getElementById('fcFront').style.display = isFcFlipped ? 'none' : 'block';
    document.getElementById('fcBack').style.display = isFcFlipped ? 'block' : 'none';
}

function handleFlashcardAnswer(known) {
    const cur = flashcardList[currentFcIndex];
    if (known) {
        addXP(5);
        addCardMasteryPoint(cur.hanzi || cur.pinyin);
    } else {
        flashcardList.push(cur);
    }
    currentFcIndex++;
    renderCurrentFlashcard();
}

function speakFlashcard() {
    const text = flashcardList[currentFcIndex]?.hanzi || '';
    speakChinese(text);
}

// ==================== HANZI WRITER & ÇOKLU KARAKTER ÇİZİMİ ====================
function openModal(item) {
    document.getElementById('modalPinyin').innerHTML = colorizePinyin(item.pinyin);
    document.getElementById('modalTurkish').innerText = item.turkish;
    document.getElementById('modalAudioBtn').onclick = () => speakChinese(item.hanzi);
    fetchExampleSentence(item.hanzi, item.turkish);

    const target = document.getElementById('hanziTarget');
    target.innerHTML = '';
    currentWriters = [];
    currentQuizProgress = 0;

    if (item.hanzi) {
        for (let i = 0; i < item.hanzi.length; i++) {
            const boxId = `wb_${i}`;
            const box = document.createElement('div');
            box.id = boxId;
            target.appendChild(box);
            const w = HanziWriter.create(boxId, item.hanzi[i], {
                width: 90, height: 90, padding: 5, strokeAnimationSpeed: 1, delayBetweenStrokes: 150
            });
            currentWriters.push(w);
        }
        document.getElementById('wordModal').style.display = 'flex';
        setTimeout(() => playSequentialAnimation(currentWriters, 0), 250);
    }
}

function playSequentialAnimation(writers, index) {
    if (index >= writers.length) return;
    writers[index].hideCharacter();
    writers[index].animateCharacter({
        onComplete: () => setTimeout(() => playSequentialAnimation(writers, index + 1), 350)
    });
}
function replayAnimation() { playSequentialAnimation(currentWriters, 0); }

function startQuiz() { 
    if (!currentWriters || currentWriters.length === 0) return;
    currentQuizProgress = 0;

    currentWriters.forEach(w => {
        w.quiz({
            onComplete: function() {
                currentQuizProgress++;
                if (currentQuizProgress >= currentWriters.length) {
                    playSuccessTone();
                    addXP(5);
                    incrementQuest('quiz', 1);
                }
            }
        });
    });
}

function closeModal() { document.getElementById('wordModal').style.display = 'none'; }

async function fetchExampleSentence(hanziWord, turkishWord) {
    const chDiv = document.getElementById('exChinese');
    const pinDiv = document.getElementById('exPinyin');
    const trDiv = document.getElementById('exTurkish');
    const speakBtn = document.getElementById('btnSpeakSentence');

    if (!hanziWord) return;

    currentExampleData = {
        chinese: `我喜欢“${hanziWord}”。`,
        pinyin: window.pinyinPro ? window.pinyinPro.pinyin(`我喜欢“${hanziWord}”。`) : '',
        turkish: `"${turkishWord || hanziWord}" kelimesini seviyorum.`
    };
    chDiv.innerText = currentExampleData.chinese;
    pinDiv.innerText = currentExampleData.pinyin;
    trDiv.innerText = currentExampleData.turkish;
    speakBtn.style.display = "inline-block";
}

function speakExampleSentence() { 
    if (currentExampleData?.chinese) {
        speakChinese(currentExampleData.chinese);
    }
}

// ==================== GÜNÜN 5 KELİMESİ (TEKLİ & TOPLU KATEGORİ SEÇİMİ) ====================
function checkDiscoveryButtonStatus() {
    const today = getTodayDateString();
    const lastClaim = localStorage.getItem(`LAST_DISCOVERY_CLAIM_${currentUser?.uid || 'guest'}`);
    const btn = document.getElementById('btnDiscovery');
    if (!btn) return;

    if (lastClaim === today) {
        btn.innerText = "Günün Kelimeleri Alındı (Gece 00:00'da Yenilenir)";
        btn.style.opacity = "0.6";
    } else {
        btn.innerText = "Günün 5 Yeni Kelimesi";
        btn.style.opacity = "1";
    }
}

function openDiscoveryModal() {
    const today = getTodayDateString();
    const lastClaim = localStorage.getItem(`LAST_DISCOVERY_CLAIM_${currentUser?.uid || 'guest'}`);

    if (lastClaim === today) {
        alert("Bugünkü 5 yeni kelimeni zaten aldın! Yeni kelimeler gece 00:00'da açılacaktır.");
        return;
    }

    document.getElementById('discoveryModal').style.display = 'flex';
    fetchDiscoveryWords();
}

function closeDiscoveryModal() { 
    document.getElementById('discoveryModal').style.display = 'none'; 
}

function fetchDiscoveryWords() {
    const area = document.getElementById('discoveryListArea');
    area.innerHTML = '';
    
    const ownedHanzis = new Set(dictionary.map(w => w.hanzi.trim()));
    discoveryWordsList = HSK_POOL.filter(w => !ownedHanzis.has(w.hanzi.trim())).slice(0, 5);

    if (discoveryWordsList.length === 0) {
        area.innerHTML = `<div style="text-align:center; color:#64748b; padding:15px;">Tebrikler! 250 kelimelik HSK havuzundaki tüm kelimeleri haznenize kattınız.</div>`;
        return;
    }

    const catOptions = categories.map(cat => `<option value="${cat}">${cat}</option>`).join('');

    discoveryWordsList.forEach((item, index) => {
        const div = document.createElement('div');
        div.id = `discItem_${index}`;
        div.style = "display:flex; flex-direction:column; gap:8px; background:#ffffff; border:2px solid #e2e8f0; padding:10px 12px; border-radius:12px; color:#1e293b; margin-bottom:8px;";
        div.innerHTML = `
            <div style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                    <strong style="font-size:16px;">${item.hanzi}</strong> 
                    <small style="color:#2563eb; font-weight:700;">(${item.pinyin})</small>
                    <div style="font-size:13px; color:#64748b; font-weight:600;">${item.turkish}</div>
                </div>
                <button class="row-btn" onclick="speakChinese('${item.hanzi}')">🔊</button>
            </div>
            <div style="display:flex; gap:6px; align-items:center;">
                <select id="discCatSelect_${index}" style="flex:1; padding:6px 10px; font-size:12px;">
                    ${catOptions}
                </select>
                <button id="btnAddDisc_${index}" class="action-btn" style="flex:0 0 auto; padding:6px 12px; font-size:12px;" onclick="addSingleDiscoveryWord(${index})">
                    Ekle
                </button>
            </div>
        `;
        area.appendChild(div);
    });
}

function addSingleDiscoveryWord(index) {
    if (!currentUser) {
        alert("Kelimeyi bulut hesabınıza kaydetmek için lütfen Google ile giriş yapın!");
        goToScreen(4);
        return;
    }

    const item = discoveryWordsList[index];
    if (!item || item.added) return;

    const chosenCat = document.getElementById(`discCatSelect_${index}`)?.value || 'Genel';
    const docId = item.hanzi.trim();

    getUserWordsRef().doc(docId).set({
        hanzi: item.hanzi.trim(),
        pinyin: item.pinyin.trim(),
        turkish: item.turkish.trim(),
        kategori: chosenCat,
        ekleyen: currentUser.displayName?.split(' ')[0] || 'Ben',
        createdAt: firebase.firestore.FieldValue.serverTimestamp()
    }, { merge: true }).then(() => {
        item.added = true;
        addXP(5);
        incrementQuest('addWord', 1);

        const btn = document.getElementById(`btnAddDisc_${index}`);
        const sel = document.getElementById(`discCatSelect_${index}`);
        if (btn) {
            btn.innerText = "Eklendi ✓";
            btn.disabled = true;
            btn.style.background = "#58cc02";
            btn.style.borderBottomColor = "#46a302";
        }
        if (sel) sel.disabled = true;

        if (discoveryWordsList.every(w => w.added)) {
            const today = getTodayDateString();
            localStorage.setItem(`LAST_DISCOVERY_CLAIM_${currentUser.uid}`, today);
            checkDiscoveryButtonStatus();
        }
    });
}

function addAllDiscoveryWords() {
    if (!currentUser) {
        alert("Günün kelimelerini bulut hesabınıza kaydetmek için lütfen Google ile giriş yapın!");
        goToScreen(4);
        return;
    }

    const today = getTodayDateString();
    const lastClaim = localStorage.getItem(`LAST_DISCOVERY_CLAIM_${currentUser.uid}`);
    if (lastClaim === today) {
        alert("Bugünkü kelimeleri zaten aldın!");
        closeDiscoveryModal();
        return;
    }

    const remainingWords = discoveryWordsList.filter(w => !w.added);
    if (!remainingWords.length) {
        closeDiscoveryModal();
        return;
    }

    const chosenCat = document.getElementById('discoveryBatchCatSelect')?.value || 'Genel';
    const batch = db.batch();

    remainingWords.forEach(item => {
        const docId = item.hanzi.trim();
        const ref = getUserWordsRef().doc(docId);
        batch.set(ref, {
            hanzi: item.hanzi.trim(), 
            pinyin: item.pinyin.trim(), 
            turkish: item.turkish.trim(),
            kategori: chosenCat, 
            ekleyen: currentUser.displayName?.split(' ')[0] || 'Ben',
            createdAt: firebase.firestore.FieldValue.serverTimestamp()
        }, { merge: true });
    });

    batch.commit().then(() => {
        localStorage.setItem(`LAST_DISCOVERY_CLAIM_${currentUser.uid}`, today);
        addXP(remainingWords.length * 5);
        incrementQuest('addWord', remainingWords.length);
        checkDiscoveryButtonStatus();
        alert(`Kalan ${remainingWords.length} kelime "${chosenCat}" kategorisine eklendi!`);
        closeDiscoveryModal();
    });
}

// ==================== GELİŞMİŞ ADAPTİF KIRPMA & OCR ====================
let cropState = {
    x: 0,
    y: 0,
    width: 120,
    height: 120,
    isDragging: false,
    isResizing: false,
    startX: 0,
    startY: 0
};

function handleImageSelected(event) {
    const file = event.target.files[0];
    if (!file) return;
    resetSelectedHanzis();
    document.getElementById('detectedWordsArea').innerHTML = '';
    document.getElementById('ocrStateText').innerText = 'Kutuyu karakterin üzerine getirin ve "Bu Alanı Tara"ya basın.';
    currentRotation = 0;

    const reader = new FileReader();
    reader.onload = (e) => {
        originalImageSrc = e.target.result;
        const img = document.getElementById('imagePreview');
        img.src = originalImageSrc;
        document.getElementById('cropModal').style.display = 'flex';
        initCropBox();
    };
    reader.readAsDataURL(file);
    event.target.value = '';
}

function closeCropModal() { document.getElementById('cropModal').style.display = 'none'; }

function rotateImage() {
    currentRotation = (currentRotation + 90) % 360;
    document.getElementById('imagePreview').style.transform = `rotate(${currentRotation}deg)`;
}

function initCropBox() {
    const container = document.getElementById('cropContainer');
    const box = document.getElementById('cropBox');
    if (!container || !box) return;

    cropState.width = 110;
    cropState.height = 110;
    cropState.x = (container.clientWidth - cropState.width) / 2;
    cropState.y = (container.clientHeight - cropState.height) / 2;
    updateCropBoxStyle();

    const handle = box.querySelector('.crop-handle');

    function onPointerDown(e) {
        if (e.target === handle) {
            cropState.isResizing = true;
        } else {
            cropState.isDragging = true;
        }
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        cropState.startX = clientX;
        cropState.startY = clientY;
        e.preventDefault();
    }

    function onPointerMove(e) {
        if (!cropState.isDragging && !cropState.isResizing) return;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        const dx = clientX - cropState.startX;
        const dy = clientY - cropState.startY;

        if (cropState.isDragging) {
            cropState.x = Math.max(0, Math.min(container.clientWidth - cropState.width, cropState.x + dx));
            cropState.y = Math.max(0, Math.min(container.clientHeight - cropState.height, cropState.y + dy));
        } else if (cropState.isResizing) {
            cropState.width = Math.max(50, Math.min(container.clientWidth - cropState.width, cropState.width + dx));
            cropState.height = Math.max(50, Math.min(container.clientHeight - cropState.height, cropState.height + dy));
        }

        cropState.startX = clientX;
        cropState.startY = clientY;
        updateCropBoxStyle();
    }

    function onPointerUp() {
        cropState.isDragging = false;
        cropState.isResizing = false;
    }

    box.onmousedown = onPointerDown;
    box.ontouchstart = onPointerDown;

    window.onmousemove = onPointerMove;
    window.ontouchmove = onPointerMove;

    window.onmouseup = onPointerUp;
    window.ontouchend = onPointerUp;
}

function updateCropBoxStyle() {
    const box = document.getElementById('cropBox');
    if (!box) return;
    box.style.left = `${cropState.x}px`;
    box.style.top = `${cropState.y}px`;
    box.style.width = `${cropState.width}px`;
    box.style.height = `${cropState.height}px`;
    box.style.transform = 'none';
}

async function runCropAndOCR() {
    const stateText = document.getElementById('ocrStateText');
    const area = document.getElementById('detectedWordsArea');
    const imgEl = document.getElementById('imagePreview');
    const container = document.getElementById('cropContainer');
    
    area.innerHTML = '';
    stateText.innerText = 'Karakter optimize edilip taranıyor...';

    if (!originalImageSrc) return;

    const rect = imgEl.getBoundingClientRect();
    const contRect = container.getBoundingClientRect();

    const imgDisplayLeft = rect.left - contRect.left;
    const imgDisplayTop = rect.top - contRect.top;
    const imgDisplayWidth = rect.width;
    const imgDisplayHeight = rect.height;

    const cropXOnImg = Math.max(0, cropState.x - imgDisplayLeft);
    const cropYOnImg = Math.max(0, cropState.y - imgDisplayTop);
    const cropWOnImg = Math.min(cropState.width, imgDisplayWidth - cropXOnImg);
    const cropHOnImg = Math.min(cropState.height, imgDisplayHeight - cropYOnImg);

    const naturalImg = new Image();
    naturalImg.onload = async () => {
        const scaleX = naturalImg.naturalWidth / imgDisplayWidth;
        const scaleY = naturalImg.naturalHeight / imgDisplayHeight;

        const srcW = Math.round(cropWOnImg * scaleX);
        const srcH = Math.round(cropHOnImg * scaleY);

        const scaleFactor = Math.max(1, 240 / Math.min(srcW, srcH));
        const targetW = Math.round(srcW * scaleFactor);
        const targetH = Math.round(srcH * scaleFactor);

        const padding = 45;
        const cropCanvas = document.createElement('canvas');
        cropCanvas.width = targetW + (padding * 2);
        cropCanvas.height = targetH + (padding * 2);
        const ctx = cropCanvas.getContext('2d');

        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, cropCanvas.width, cropCanvas.height);

        ctx.drawImage(
            naturalImg,
            cropXOnImg * scaleX, cropYOnImg * scaleY, srcW, srcH,
            padding, padding, targetW, targetH
        );

        const imgData = ctx.getImageData(0, 0, cropCanvas.width, cropCanvas.height);
        const d = imgData.data;
        for (let i = 0; i < d.length; i += 4) {
            const gray = 0.299 * d[i] + 0.587 * d[i + 1] + 0.114 * d[i + 2];
            const val = gray > 115 ? 255 : 0;
            d[i] = val;
            d[i + 1] = val;
            d[i + 2] = val;
        }
        ctx.putImageData(imgData, 0, 0);

        try {
            const worker = await Tesseract.createWorker('chi_sim');
            await worker.setParameters({
                tessedit_pageseg_mode: Tesseract.PSM.SINGLE_CHAR
            });

            const res = await worker.recognize(cropCanvas);
            await worker.terminate();

            const rawText = res.data?.text || '';
            const matches = rawText.match(/[\u4e00-\u9fa5]/g);

            if (!matches || matches.length === 0) {
                stateText.innerText = 'Karakter okunamadı. Kutuyu harfe tam ortalayıp tekrar deneyin.';
                return;
            }

            stateText.innerText = 'Karakter bulundu! Tıklayarak kelimeni oluştur:';
            [...new Set(matches)].forEach(char => {
                const chip = document.createElement('span');
                chip.className = 'hanzi-chip';
                chip.innerText = char;
                chip.onclick = () => {
                    selectedHanzisArray.push(char);
                    chip.classList.add('selected');
                    document.getElementById('currentSelectedText').innerText = selectedHanzisArray.join('');
                };
                area.appendChild(chip);
            });

        } catch (err) {
            stateText.innerText = 'Hata: ' + err.message;
        }
    };
    naturalImg.src = originalImageSrc;
}

function resetSelectedHanzis() { selectedHanzisArray = []; document.getElementById('currentSelectedText').innerText = '...'; }

function confirmSelectedHanzi() {
    if (!selectedHanzisArray.length) return;
    document.getElementById('hanzi').value = selectedHanzisArray.join('');
    closeCropModal();
    triggerAI('hanzi');
}

// ==================== YARDIMCI VE AUTH ====================
function handleSearch() { renderDictionary(); }
function clearSearch() { document.getElementById('searchQuery').value = ''; renderDictionary(); }

function speakChinese(text) {
    if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const utt = new SpeechSynthesisUtterance(text);
        utt.lang = 'zh-CN';
        utt.rate = window.currentSpeechRate || 1.0; 
        utt.volume = window.currentSpeechVolume !== undefined ? window.currentSpeechVolume : 1.0;
        window.speechSynthesis.speak(utt);
        incrementQuest('listen', 1);
    }
}

// ==================== SES HIZI (TTS) KONTROLÜ ====================
function changeSpeed(rate, element) {
    window.currentSpeechRate = rate;
    document.querySelectorAll('.speed-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    element.classList.add('active');
}

// ==================== ARKA PLAN MÜZİĞİ (BGM) ====================
function toggleBGM() {
    const btn = document.getElementById('bgmToggleBtn');
    
    if (!bgmAudio) {
        bgmAudio = new Audio('audio/ambient-loop.mp3');
        bgmAudio.loop = true;
        bgmAudio.volume = currentBgmVolume;
    }

    if (isBgmPlaying) {
        bgmAudio.pause();
        isBgmPlaying = false;
        if (btn) {
            btn.innerText = "Kapalı";
            btn.classList.remove('active');
        }
    } else {
        bgmAudio.volume = currentBgmVolume;
        bgmAudio.play().then(() => {
            isBgmPlaying = true;
            if (btn) {
                btn.innerText = "Açık";
                btn.classList.add('active');
            }
        }).catch(err => {
            console.warn("Tarayıcı otomatik oynatmayı engelledi:", err);
            alert("Müziği başlatmak için sayfada herhangi bir yere dokunun.");
        });
    }
}

// ==================== GOOGLE GİRİŞİ ====================
window.handleGoogleLogin = function() {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider).then(result => {
        if (result && result.user) {
            applyUserState(result.user);
        }
    }).catch(err => {
        auth.signInWithRedirect(provider);
    });
};

window.handleLogout = function() {
    auth.signOut().then(() => {
        applyUserState(null);
    });
};

function applyUserState(user) {
    currentUser = user;
    const loggedOutView = document.getElementById('loggedOutView');
    const loggedInView = document.getElementById('loggedInView');

    if (user) {
        if (loggedOutView) loggedOutView.style.display = 'none';
        if (loggedInView) loggedInView.style.display = 'flex';
        
        const photoEl = document.getElementById('userPhoto');
        if (photoEl) photoEl.src = user.photoURL || 'https://via.placeholder.com/32';
        
        const nameDisp = document.getElementById('userNameDisplay');
        if (nameDisp) nameDisp.innerText = user.displayName?.split(' ')[0] || 'Oyuncu';
        
        const nameFull = document.getElementById('userNameFull');
        if (nameFull) nameFull.innerText = user.displayName || user.email;

        listenUserProfile();
        loadCategories();
        loadCloudData();
        checkExchangeButtonStatus();
        checkDiscoveryButtonStatus();
        updateQuestUI();
    } else {
        if (loggedOutView) loggedOutView.style.display = 'block';
        if (loggedInView) loggedInView.style.display = 'none';
        
        const photoEl = document.getElementById('userPhoto');
        if (photoEl) photoEl.src = 'https://via.placeholder.com/32';
        
        const nameDisp = document.getElementById('userNameDisplay');
        if (nameDisp) nameDisp.innerText = 'Misafir';
        
        currentProfile = { xp: 500, gems: 80, keys: 3, streak: 1, mastery: {}, friends: [] };
        dictionary = [];
        updateResourceUI();
        renderDictionary();
        renderDeckCards();
        renderFriendsList();
        checkDiscoveryButtonStatus();
        updateQuestUI();
    }
    renderAlphabetBar();
    updateUserIdDisplay();
}

auth.getRedirectResult().then(result => {
    if (result && result.user) {
        applyUserState(result.user);
    }
}).catch(err => {
    if (err && err.code) console.warn("Redirect hatası:", err.message);
});

auth.onAuthStateChanged(user => {
    applyUserState(user);
});

window.addEventListener('DOMContentLoaded', () => {
    goToScreen(2); // Pratik sekmesi ile başlar
    renderAlphabetBar();
    updateUserIdDisplay();
});