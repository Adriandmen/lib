const ALLOWED_ENCODINGS = [
    "ASMO-708",
    "DOS-720",
    "iso-8859-6",
    "x-mac-arabic",
    "windows-1256",
    "ibm775",
    "iso-8859-4",
    "windows-1257",
    "ibm852",
    "iso-8859-2",
    "x-mac-ce",
    "windows-1250",
    "EUC-CN",
    "gb2312",
    "hz-gb-2312",
    "x-mac-chinesesimp",
    "big5",
    "x-Chinese-CNS",
    "x-Chinese-Eten",
    "x-mac-chinesetrad",
    "cp866",
    "iso-8859-5",
    "koi8-r",
    "koi8-u",
    "x-mac-cyrillic",
    "windows-1251",
    "x-Europa",
    "x-IA5-German",
    "ibm737",
    "iso-8859-7",
    "x-mac-greek",
    "windows-1253",
    "ibm869",
    "DOS-862",
    "iso-8859-8-i",
    "iso-8859-8",
    "x-mac-hebrew",
    "windows-1255",
    "x-EBCDIC-Arabic",
    "x-EBCDIC-CyrillicRussian",
    "x-EBCDIC-CyrillicSerbianBulgarian",
    "x-EBCDIC-DenmarkNorway",
    "x-ebcdic-denmarknorway-euro",
    "x-EBCDIC-FinlandSweden",
    "x-ebcdic-finlandsweden-euro",
    "x-ebcdic-finlandsweden-euro",
    "x-ebcdic-france-euro",
    "x-EBCDIC-Germany",
    "x-ebcdic-germany-euro",
    "x-EBCDIC-GreekModern",
    "x-EBCDIC-Greek",
    "x-EBCDIC-Hebrew",
    "x-EBCDIC-Icelandic",
    "x-ebcdic-icelandic-euro",
    "x-ebcdic-international-euro",
    "x-EBCDIC-Italy",
    "x-ebcdic-italy-euro",
    "x-EBCDIC-JapaneseAndKana",
    "x-EBCDIC-JapaneseAndJapaneseLatin",
    "x-EBCDIC-JapaneseAndUSCanada",
    "x-EBCDIC-JapaneseKatakana",
    "x-EBCDIC-KoreanAndKoreanExtended",
    "x-EBCDIC-KoreanExtended",
    "CP870",
    "x-EBCDIC-SimplifiedChinese",
    "X-EBCDIC-Spain",
    "x-ebcdic-spain-euro",
    "x-EBCDIC-Thai",
    "x-EBCDIC-TraditionalChinese",
    "CP1026",
    "x-EBCDIC-Turkish",
    "x-EBCDIC-UK",
    "x-ebcdic-uk-euro",
    "ebcdic-cp-us",
    "x-ebcdic-cp-us-euro",
    "ibm861",
    "x-mac-icelandic",
    "x-iscii-as",
    "x-iscii-be",
    "x-iscii-de",
    "x-iscii-gu",
    "x-iscii-ka",
    "x-iscii-ma",
    "x-iscii-or",
    "x-iscii-pa",
    "x-iscii-ta",
    "x-iscii-te",
    "euc-jp",
    "x-euc-jp",
    "iso-2022-jp",
    "iso-2022-jp",
    "csISO2022JP",
    "x-mac-japanese",
    "shift_jis",
    "ks_c_5601-1987",
    "euc-kr",
    "iso-2022-kr",
    "Johab",
    "x-mac-korean",
    "iso-8859-3",
    "iso-8859-15",
    "x-IA5-Norwegian",
    "IBM437",
    "x-IA5-Swedish",
    "windows-874",
    "ibm857",
    "iso-8859-9",
    "x-mac-turkish",
    "windows-1254",
    "unicode",
    "unicodeFFFE",
    "utf-7",
    "utf-8",
    "us-ascii",
    "windows-1258",
    "ibm850",
    "x-IA5",
    "iso-8859-1",
    "macintosh",
    "Windows-1252"
];

const ALLOWED_LANGS = [
    "ab",
    "aa",
    "af",
    "ak",
    "sq",
    "am",
    "ar",
    "an",
    "hy",
    "as",
    "av",
    "ae",
    "ay",
    "az",
    "bm",
    "ba",
    "eu",
    "be",
    "bn",
    "bh",
    "bi",
    "bs",
    "br",
    "bg",
    "my",
    "ca",
    "ch",
    "ce",
    "ny",
    "zh",
    "zh-Hans",
    "zh-Hant",
    "cv",
    "kw",
    "co",
    "cr",
    "hr",
    "cs",
    "da",
    "dv",
    "nl",
    "dz",
    "en",
    "eo",
    "et",
    "ee",
    "fo",
    "fj",
    "fi",
    "fr",
    "ff",
    "gl",
    "gd",
    "gv",
    "ka",
    "de",
    "el",
    "kl",
    "gn",
    "gu",
    "ht",
    "ha",
    "he",
    "hz",
    "hi",
    "ho",
    "hu",
    "is",
    "io",
    "ig",
    "id",
    "in",
    "ia",
    "ie",
    "iu",
    "ik",
    "ga",
    "it",
    "ja",
    "jv",
    "kl",
    "kn",
    "kr",
    "ks",
    "kk",
    "km",
    "ki",
    "rw",
    "rn",
    "ky",
    "kv",
    "kg",
    "ko",
    "ku",
    "kj",
    "lo",
    "la",
    "lv",
    "li",
    "ln",
    "lt",
    "lu",
    "lg",
    "lb",
    "gv",
    "mk",
    "mg",
    "ms",
    "ml",
    "mt",
    "mi",
    "mr",
    "mh",
    "mo",
    "mn",
    "na",
    "nv",
    "ng",
    "nd",
    "ne",
    "no",
    "nb",
    "nn",
    "ii",
    "oc",
    "oj",
    "cu",
    "or",
    "om",
    "os",
    "pi",
    "ps",
    "fa",
    "pl",
    "pt",
    "pa",
    "qu",
    "rm",
    "ro",
    "ru",
    "se",
    "sm",
    "sg",
    "sa",
    "sr",
    "sh",
    "st",
    "tn",
    "sn",
    "ii",
    "sd",
    "si",
    "ss",
    "sk",
    "sl",
    "so",
    "nr",
    "es",
    "su",
    "sw",
    "ss",
    "sv",
    "tl",
    "ty",
    "tg",
    "ta",
    "tt",
    "te",
    "th",
    "bo",
    "ti",
    "to",
    "ts",
    "tr",
    "tk",
    "tw",
    "ug",
    "uk",
    "ur",
    "uz",
    "ve",
    "vi",
    "vo",
    "wa",
    "cy",
    "wo",
    "fy",
    "xh",
    "yi",
    "ji",
    "yo",
    "za",
    "zu"
]

const levenshtein = (a, b) => {
    if (a.length === 0) return b.length
    if (b.length === 0) return a.length
    let tmp, i, j, prev, val, row
    // swap to save some memory O(min(a,b)) instead of O(a)
    if (a.length > b.length) {
      tmp = a
      a = b
      b = tmp
    }
  
    row = Array(a.length + 1)
    // init the row
    for (i = 0; i <= a.length; i++) {
      row[i] = i
    }
  
    // fill in the rest
    for (i = 1; i <= b.length; i++) {
      prev = i
      for (j = 1; j <= a.length; j++) {
        if (b[i-1] === a[j-1]) {
          val = row[j-1] // match
        } else {
          val = Math.min(row[j-1] + 1, // substitution
                Math.min(prev + 1,     // insertion
                         row[j] + 1))  // deletion
        }
        row[j - 1] = prev
        prev = val
      }
      row[a.length] = prev
    }
    return row[a.length]
  }

const CONFIG_DATA = [{
    name: "author",
    type: "string",
    description: "Author",
    required: true
}, {
    name: "srcPath",
    type: "string",
    description: "Source folder name",
    required: false,
    default: "src"
}, {
    name: "title",
    type: "string",
    description: "Page Title",
    message: "The title needs to have 55 characters or less.",
    required: true,
    conform: function(value) {
        return value.length <= 55 && value.length > 0;
    }
}, {
    name: "fileName",
    type: "string",
    description: "File name",
    message: "The file name must exclusively consist out of lowercase letters, numbers and dashes",
    required: true,
    conform: function(value) {
        return /^[a-z0-9-]+$/.test(value);
    }
}, {
    name: "description",
    type: "string",
    description: "Description",
    message: "The description used in the meta tag should be unique and not possess more than 150 characters.",
    required: true,
    conform: function(value) {
        return value.length <= 150 && value.length > 0;
    }
}, {
    name: "charset",
    type: "string",
    description: "Encoding",
    message: "The encoding should exist in the list of all existing encodings.",
    required: false,
    conform: function(value) {

        // Check if the value exists in the list of allowed encodings.
        if (ALLOWED_ENCODINGS.includes(value)) {
            return true;
        } else {
            var minDistance = null;
            var minEncoding = null;
            
            // Check for all encoding what the encoding is with the smallest edit distance.
            for (let encoding of ALLOWED_ENCODINGS) {
                var currDistance = levenshtein(encoding, value);
                if (minEncoding === null || currDistance < minDistance) {
                    minDistance = currDistance;
                    minEncoding = encoding;
                }
            }

            // If the edit distance is smaller or equal to three, return as a suggestion.
            if (minDistance <= 3) {
                console.log(`I could not recognize the given encoding. Perhaps you meant ${minEncoding}?`);
            } else {
                console.log("I could not recognize the given encoding. Please try again.");
            }

            return false;
        }
    },
    default: "utf-8"
}, {
    name: "lang",
    type: "string",
    description: "Language attribute",
    message: "The language attribute should exist in the list of all existing language attributes.",
    required: false,
    conform: function(value) {
        return ALLOWED_LANGS.includes(value);
    },
    default: "en"
}]

module.exports.CONFIG_DATA = CONFIG_DATA;