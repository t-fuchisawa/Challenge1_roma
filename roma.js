// ����t�@�C����
var filename = "test0.txt";

//  �I�[�v�����[�h
var FORREADING      = 1;    // �ǂݎ���p
var FORWRITING      = 2;    // �������ݐ�p
var FORAPPENDING    = 8;    // �ǉ���������

//  �J���t�@�C���̌`��
var TRISTATE_TRUE       = -1;   // Unicode
var TRISTATE_FALSE      =  0;   // ASCII
var TRISTATE_USEDEFAULT = -2;   // �V�X�e���f�t�H���g

// �ϊ�����
var dict = {
	'a':'��',     'i':'��',     'u':'��',     'e':'��',     'o':'��',
	'ka':'��',    'ki':'��',    'ku':'��',    'ke':'��',    'ko':'��',
	'sa':'��',    'si':'��',    'su':'��',    'se':'��',    'so':'��',
	'ta':'��',    'ti':'��',    'tu':'��',    'te':'��',    'to':'��',
	'na':'��',    'ni':'��',    'nu':'��',    'ne':'��',    'no':'��',
	'ha':'��',    'hi':'��',    'hu':'��',    'he':'��',    'ho':'��',
	'ma':'��',    'mi':'��',    'mu':'��',    'me':'��',    'mo':'��',
	'ya':'��',    'yi':'��',    'yu':'��',    'ye':'����',  'yo':'��',
	'ra':'��',    'ri':'��',    'ru':'��',    're':'��',    'ro':'��',
	'wa':'��',    'wi':'����',  'wu':'��',    'we':'����',  'wo':'��',
	'nn':'��',    'xn':'��',

	'la':'��',    'li':'��',    'lu':'��',    'le':'��',    'lo':'��',
	'ga':'��',    'gi':'��',    'gu':'��',    'ge':'��',    'go':'��',
	'ca':'��',    'ci':'��',    'cu':'��',    'ce':'��',    'co':'��',
	'qa':'����',  'qi':'����',  'qu':'��',    'qe':'����',  'qo':'����',
	'za':'��',    'zi':'��',    'zu':'��',    'ze':'��',    'zo':'��',
	'ja':'����',  'ji':'��',    'ju':'����',  'je':'����',  'jo':'����',
	'da':'��',    'di':'��',    'du':'��',    'de':'��',    'do':'��',
	'fa':'�ӂ�',  'fi':'�ӂ�',  'fu':'��',    'fe':'�ӂ�',  'fo':'�ӂ�',
	'ba':'��',    'bi':'��',    'bu':'��',    'be':'��',    'bo':'��',
	'va':'����',  'vi':'����',  'vu':'��',    've':'����',  'vo':'����',
	'pa':'��',    'pi':'��',    'pu':'��',    'pe':'��',    'po':'��',
	'xa':'��',    'xi':'��',    'xu':'��',    'xe':'��',    'xo':'��',    'xtu':'��',
	'lya':'��',   'lyi':'��',   'lyu':'��',   'lye':'��',   'lyo':'��',   'ltu':'��',   'lwa':'��',
	'xya':'��',   'xyi':'��',   'xyu':'��',   'xye':'��',   'xyo':'��',

	'wha':'����', 'whi':'����', 'whu':'��',   'whe':'����', 'who':'����',
	'vya':'����', 'vyi':'����', 'vyu':'����', 'vye':'����', 'vyo':'����',
	'kya':'����', 'kyi':'����', 'kyu':'����', 'kye':'����', 'kyo':'����',
	'gya':'����', 'gyi':'����', 'gyu':'����', 'gye':'����', 'gyo':'����',
	'qya':'����', 'qyi':'����', 'qyu':'����', 'qye':'����', 'qyo':'����', 'kwa':'����', 
	'qwa':'����', 'qwi':'����', 'qwu':'����', 'qwe':'����', 'qwo':'����',
	'gwa':'����', 'gwi':'����', 'gwu':'����', 'gwe':'����', 'gwo':'����',
	'swa':'����', 'swi':'����', 'swu':'����', 'swe':'����', 'swo':'����',
	'sya':'����', 'syi':'����', 'syu':'����', 'sye':'����', 'syo':'����',
	'sha':'����', 'shi':'��',   'shu':'����', 'she':'����', 'sho':'����',
	'zya':'����', 'zyi':'����', 'zyu':'����', 'zye':'����', 'zyo':'����',
	'jya':'����', 'jyi':'����', 'jyu':'����', 'jye':'����', 'jyo':'����',
	'cya':'����', 'cyi':'����', 'cyu':'����', 'cye':'����', 'cyo':'����',
	'tha':'�Ă�', 'thi':'�Ă�', 'thu':'�Ă�', 'the':'�Ă�', 'tho':'�Ă�',
	'twa':'�Ƃ�', 'twi':'�Ƃ�', 'twu':'�Ƃ�', 'twe':'�Ƃ�', 'two':'�Ƃ�',
	'cha':'����', 'chi':'��',   'chu':'����', 'che':'����', 'cho':'����',
	'tya':'����', 'tyi':'����', 'tyu':'����', 'tye':'����', 'tyo':'����',
	'dya':'����', 'dyi':'����', 'dyu':'����', 'dye':'����', 'dyo':'����',
	'tsa':'��', 'tsi':'��', 'tsu':'��',   'tse':'��', 'tso':'��',
	'dha':'�ł�', 'dhi':'�ł�', 'dhu':'�ł�', 'dhe':'�ł�', 'dho':'�ł�',
	'dwa':'�ǂ�', 'dwi':'�ǂ�', 'dwu':'�ǂ�', 'dwe':'�ǂ�', 'dwo':'�ǂ�',
	'nya':'�ɂ�', 'nyi':'�ɂ�', 'nyu':'�ɂ�', 'nye':'�ɂ�', 'nyo':'�ɂ�',
	'fwa':'�ӂ�', 'fwi':'�ӂ�', 'fwu':'�ӂ�', 'fwe':'�ӂ�', 'fwo':'�ӂ�',
	'fya':'�ӂ�', 'fyi':'�ӂ�', 'fyu':'�ӂ�', 'fye':'�ӂ�', 'fyo':'�ӂ�',
	'hya':'�Ђ�', 'hyi':'�Ђ�', 'hyu':'�Ђ�', 'hye':'�Ђ�', 'hyo':'�Ђ�',
	'bya':'�т�', 'byi':'�т�', 'byu':'�т�', 'bye':'�т�', 'byo':'�т�',
	'pya':'�҂�', 'pyi':'�҂�', 'pyu':'�҂�', 'pye':'�҂�', 'pyo':'�҂�',
	'mya':'�݂�', 'myi':'�݂�', 'myu':'�݂�', 'mye':'�݂�', 'myo':'�݂�',
	'rya':'���', 'ryi':'�股', 'ryu':'���', 'rye':'�肥', 'ryo':'���',

	'0':'�O',     '1':'�P',     '2':'�Q',     '3':'�R',     '4':'�S',
	'5':'�T',     '6':'�U',     '7':'�V',     '8':'�W',     '9':'�X',
	'!':'�I',     '"':'�h',     '#':'��',     '$':'��',     '%':'��',     '&':'��',
	"'":'�f',     '^':'�O',     '\\':'��',    '@':'��',     '[':'�u',     ']':'�v',
	'-':'�[',     '.':'�B',     ',':'�A',     ' ':' ',      '/':'�^',     '+':'�{',
	'~':'�`',     '*':'��',     '_':'�Q',     ';':'�G',     ':':'�F',     '=':'��',
	'(':'�i',     ')':'�j',     '{':'�o',     '}':'�p',     '<':'��',     '>':'��',
	'`':'�e',     '\r':'\r',    '\n':'\n',    '\t':'\t'
};

// ���������[�N�e�[�u���ɒǉ�
var work = {};
for (var key in dict) {
	if (key.length >= 2) {
		work[key.charAt(0) + key] = "��" + dict[key];
	}
}

// �e�[�u�����}�[�W
for (var key in work) {
	dict[key] = work[key];
}

// �t�@�C���̓ǂݍ���
var fs = new ActiveXObject("Scripting.FileSystemObject");
var file = fs.OpenTextFile(filename, FORREADING, true, TRISTATE_FALSE);
var source = file.ReadAll();
file.Close();
fs = null;

// �ϊ��J�n
var str = source.toLowerCase();
var key = "";
var result = "";

for (var i = 0; i < str.length; i++) {
	key += str.charAt(i);
	if (dict[key] != null) {
		result += dict[key];
		key = "";
	} else if (key.match(/^n[a-xz\r\n]$/gi)) {
		result += "��";
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


// ����ƌ��ʂ�\��
WScript.Echo(source);
WScript.Echo(result);


