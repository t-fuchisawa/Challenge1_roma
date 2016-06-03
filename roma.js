// お題ファイル名
var filename = "test2.txt";

//  オープンモード
var FORREADING      = 1;    // 読み取り専用
var FORWRITING      = 2;    // 書き込み専用
var FORAPPENDING    = 8;    // 追加書き込み

//  開くファイルの形式
var TRISTATE_TRUE       = -1;   // Unicode
var TRISTATE_FALSE      =  0;   // ASCII
var TRISTATE_USEDEFAULT = -2;   // システムデフォルト

// 変換辞書
var dict = {
	'a':'あ',     'i':'い',     'u':'う',     'e':'え',     'o':'お',
	'ka':'か',    'ki':'き',    'ku':'く',    'ke':'け',    'ko':'こ',
	'sa':'さ',    'si':'し',    'su':'す',    'se':'せ',    'so':'そ',
	'ta':'た',    'ti':'ち',    'tu':'つ',    'te':'て',    'to':'と',
	'na':'な',    'ni':'に',    'nu':'ぬ',    'ne':'ね',    'no':'の',
	'ha':'は',    'hi':'ひ',    'hu':'ふ',    'he':'へ',    'ho':'ほ',
	'ma':'ま',    'mi':'み',    'mu':'む',    'me':'め',    'mo':'も',
	'ya':'や',    'yi':'い',    'yu':'ゆ',    'ye':'いぇ',  'yo':'よ',
	'ra':'ら',    'ri':'り',    'ru':'る',    're':'れ',    'ro':'ろ',
	'wa':'わ',    'wi':'うぃ',  'wu':'う',    'we':'うぇ',  'wo':'を',
	'nn':'ん',    'xn':'ん',

	'la':'ぁ',    'li':'ぃ',    'lu':'ぅ',    'le':'ぇ',    'lo':'ぉ',
	'ga':'が',    'gi':'ぎ',    'gu':'ぐ',    'ge':'げ',    'go':'ご',
	'ca':'か',    'ci':'し',    'cu':'く',    'ce':'せ',    'co':'こ',
	'qa':'くぁ',  'qi':'くぃ',  'qu':'く',    'qe':'くぇ',  'qo':'くぉ',
	'za':'ざ',    'zi':'じ',    'zu':'ず',    'ze':'ぜ',    'zo':'ぞ',
	'ja':'じゃ',  'ji':'じ',    'ju':'じゅ',  'je':'じぇ',  'jo':'じょ',
	'da':'だ',    'di':'ぢ',    'du':'づ',    'de':'で',    'do':'ど',
	'fa':'ふぁ',  'fi':'ふぃ',  'fu':'ふ',    'fe':'ふぇ',  'fo':'ふぉ',
	'ba':'ば',    'bi':'び',    'bu':'ぶ',    'be':'べ',    'bo':'ぼ',
	'va':'ヴぁ',  'vi':'ヴぃ',  'vu':'ヴ',    've':'ヴぇ',  'vo':'ヴぉ',
	'pa':'ぱ',    'pi':'ぴ',    'pu':'ぷ',    'pe':'ぺ',    'po':'ぽ',
	'xa':'ぁ',    'xi':'ぃ',    'xu':'ぅ',    'xe':'ぇ',    'xo':'ぉ',    'xtu':'っ',
	'lya':'ゃ',   'lyi':'ぃ',   'lyu':'ゅ',   'lye':'ぇ',   'lyo':'ょ',   'ltu':'っ',   'lwa':'ゎ',
	'xya':'ゃ',   'xyi':'ぃ',   'xyu':'ゅ',   'xye':'ぇ',   'xyo':'ょ',

	'wha':'うぁ', 'whi':'うぃ', 'whu':'う',   'whe':'うぇ', 'who':'うぉ',
	'vya':'ヴゃ', 'vyi':'ヴぃ', 'vyu':'ヴゅ', 'vye':'ヴぇ', 'vyo':'ヴょ',
	'kya':'きゃ', 'kyi':'きぃ', 'kyu':'きゅ', 'kye':'きぇ', 'kyo':'きょ',
	'gya':'ぎゃ', 'gyi':'ぎぃ', 'gyu':'ぎゅ', 'gye':'ぎぇ', 'gyo':'ぎょ',
	'qya':'くゃ', 'qyi':'くぃ', 'qyu':'くゅ', 'qye':'くぇ', 'qyo':'くょ', 'kwa':'くぁ', 
	'qwa':'くぁ', 'qwi':'くぃ', 'qwu':'くぅ', 'qwe':'くぇ', 'qwo':'くぉ',
	'gwa':'ぐぁ', 'gwi':'ぐぃ', 'gwu':'ぐぅ', 'gwe':'ぐぇ', 'gwo':'ぐぉ',
	'swa':'すぁ', 'swi':'すぃ', 'swu':'すぅ', 'swe':'すぇ', 'swo':'すぉ',
	'sya':'しゃ', 'syi':'しぃ', 'syu':'しゅ', 'sye':'しぇ', 'syo':'しょ',
	'sha':'しゃ', 'shi':'し',   'shu':'しゅ', 'she':'しぇ', 'sho':'しょ',
	'zya':'じゃ', 'zyi':'じぃ', 'zyu':'じゅ', 'zye':'じぇ', 'zyo':'じょ',
	'jya':'じゃ', 'jyi':'じぃ', 'jyu':'じゅ', 'jye':'じぇ', 'jyo':'じょ',
	'cya':'ちゃ', 'cyi':'ちぃ', 'cyu':'ちぃ', 'cye':'ちぇ', 'cyo':'ちょ',
	'tha':'てゃ', 'thi':'てぃ', 'thu':'てゅ', 'the':'てぇ', 'tho':'てょ',
	'twa':'とぁ', 'twi':'とぃ', 'twu':'とぅ', 'twe':'とぇ', 'two':'とぉ',
	'cha':'ちゃ', 'chi':'ち',   'chu':'ちゅ', 'che':'ちぇ', 'cho':'ちょ',
	'tya':'ちゃ', 'tyi':'ちぃ', 'tyu':'ちゅ', 'tye':'ちぇ', 'tyo':'ちょ',
	'dya':'ぢゃ', 'dyi':'ぢぃ', 'dyu':'ぢゅ', 'dye':'ぢぇ', 'dyo':'ぢょ',
	'tsa':'つぁ', 'tsi':'つぃ', 'tsu':'つ',   'tse':'つぇ', 'tso':'つぉ',
	'dha':'でゃ', 'dhi':'でぃ', 'dhu':'でゅ', 'dhe':'でぇ', 'dho':'でょ',
	'dwa':'どぁ', 'dwi':'どぃ', 'dwu':'どぅ', 'dwe':'どぇ', 'dwo':'どぉ',
	'nya':'にゃ', 'nyi':'にぃ', 'nyu':'にゅ', 'nye':'にぇ', 'nyo':'にょ',
	'fwa':'ふぁ', 'fwi':'ふぃ', 'fwu':'ふぅ', 'fwe':'ふぇ', 'fwo':'ふぉ',
	'fya':'ふゃ', 'fyi':'ふぃ', 'fyu':'ふゅ', 'fye':'ふぇ', 'fyo':'ふょ',
	'hya':'ひゃ', 'hyi':'ひぃ', 'hyu':'ひゅ', 'hye':'ひぇ', 'hyo':'ひょ',
	'bya':'びゃ', 'byi':'びぃ', 'byu':'びゅ', 'bye':'びぇ', 'byo':'びょ',
	'pya':'ぴゃ', 'pyi':'ぴぃ', 'pyu':'ぴゅ', 'pye':'ぴぇ', 'pyo':'ぴょ',
	'mya':'みゃ', 'myi':'みぃ', 'myu':'みゅ', 'mye':'みぇ', 'myo':'みょ',
	'rya':'りゃ', 'ryi':'りぃ', 'ryu':'りゅ', 'rye':'りぇ', 'ryo':'りょ',

	'0':'０',     '1':'１',     '2':'２',     '3':'３',     '4':'４',
	'5':'５',     '6':'６',     '7':'７',     '8':'８',     '9':'９',
	'!':'！',     '"':'”',     '#':'＃',     '$':'＄',     '%':'％',     '&':'＆',
	"'":'’',     '^':'＾',     '\\':'￥',    '@':'＠',     '[':'「',     ']':'」',
	'-':'ー',     '.':'。',     ',':'、',     ' ':' ',      '/':'／',     '+':'＋',
	'~':'～',     '*':'＊',     '_':'＿',     ';':'；',     ':':'：',     '=':'＝',
	'(':'（',     ')':'）',     '{':'｛',     '}':'｝',     '<':'＜',     '>':'＞',
	'`':'‘',     '\r':'\r',    '\n':'\n',    '\t':'\t'
};

// 促音をワークテーブルに追加
var work = {};
for (var key in dict) {
	if (key.length >= 2) {
		work[key.charAt(0) + key] = "っ" + dict[key];
	}
}

// テーブルをマージ
for (var key in work) {
	dict[key] = work[key];
}

// ファイルの読み込み
var fs = new ActiveXObject("Scripting.FileSystemObject");
var file = fs.OpenTextFile(filename, FORREADING, true, TRISTATE_FALSE);
var source = file.ReadAll();
file.Close();
fs = null;

// 変換開始
var str = source.toLowerCase();
var key = "";
var result = "";

for (var i = 0; i < str.length; i++) {
	key += str.charAt(i);
	if (dict[key] != null) {
		result += dict[key];
		key = "";
	} else if (key.match(/^n[a-xz\r\n]$/gi)) {
		result += "ん";
		key = key.charAt(1);
		if (key == '\r' || key == '\n') {
			result += key;
			key = "";
		}
	} else if (key.length >= 3) {
		result += key;
		key = "";
	}
}


// お題と結果を表示
WScript.Echo(source);
WScript.Echo(result);


