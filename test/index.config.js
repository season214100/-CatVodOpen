var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.config.base.js
var index_config_base_exports = {};
__export(index_config_base_exports, {
  default: () => index_config_base_default
});
module.exports = __toCommonJS(index_config_base_exports);
var index_config_base_default = {
  //推荐
  likes: true,
  //后缀
  suffix: true,
  //排序
  order: ["quark", "uc", "pan123", "tyi", "yd", "ali", "y115"],
  //网盘
  uc: {
    enable: true,
    prefix: "UC",
    cookie: "",
    token: ""
  },
  yd: {
    enable: true,
    prefix: "YD"
  },
  ali: {
    enable: true,
    prefix: "Ali",
    token: ""
  },
  tyi: {
    enable: true,
    prefix: "TY",
    username: "",
    password: ""
  },
  quark: {
    enable: true,
    prefix: "Quark",
    cookie: ""
  },
  y115: {
    enable: true,
    prefix: "115",
    cookie: ""
  },
  pan123: {
    enable: true,
    prefix: "123",
    username: "",
    password: ""
  },
  //网站
  age: {
    url: ""
  },
  dm84: {
    url: ""
  },
  aowu: {
    url: ""
  },
  muou: {
    url: ""
  },
  wogg: {
    url: ""
  },
  czzy: {
    url: "",
    username: "",
    password: ""
  },
  xfys: {
    url: ""
  },
  lbpp: {
    url: ""
  },
  misou: {
    url: ""
  },
  xiaomi: {
    url: ""
  },
  xiaoer: {
    url: ""
  },
  jinpai: {
    url: ""
  },
  leijing: {
    url: ""
  },
  //comic
  bengou: {
    url: ""
  },
  baozimh: {
    url: ""
  },
  copymanga: {
    url: ""
  },
  //tg
  tgsou: {
    url: "",
    count: 0,
    pic: false,
    channelUsername: ""
  },
  tgchannel: {
    url: "https://tg.gendago.cc",
    count: 4,
    channelUsername: "",
    homeChannelUsername: ""
  },
  //alist
  alist: [
    {
      "name": "短剧",
      "sort": true,
      "server": "https://cdn.modupan.com/"
    },
    {
      "name": "星梦",
      "server": "https://pan.bashroot.top"
    },
    {
      "name": "丫仙女",
      "server": "http://localhost:5244",
      "startPage": "/",
      "showAll": false,
      "sort": true,
      "login": {
        "username": "admin",
        "password": "pass"
      },
      "params": {
        "/abc": {
          "password": "123"
        },
        "/abc/abc": {
          "password": "123"
        }
      }
    }
  ],
  //sites
  sites: {
    "list": [
      {
        "key": "nodejs_douban",
        "name": "豆瓣",
        "enable": true
      },
      {
        "key": "nodejs_modou",
        "name": "豆瓣",
        "enable": false
      },
      {
        "key": "nodejs_newdb",
        "name": "豆豆",
        "enable": true
      },
      {
        "key": "nodejs_wogg",
        "name": "玩偶",
        "enable": true
      },
      {
        "key": "nodejs_xiaoer",
        "name": "小二",
        "enable": true
      },
      {
        "key": "nodejs_xiaomi",
        "name": "小米",
        "enable": true
      },
      {
        "key": "nodejs_lbpp",
        "name": "蜡笔",
        "enable": true
      },
      {
        "key": "nodejs_duoduo",
        "name": "多多",
        "enable": true
      },
      {
        "key": "nodejs_dawo",
        "name": "大偶",
        "enable": true
      },
      {
        "key": "nodejs_qyys",
        "name": "清影",
        "enable": true
      },
      {
        "key": "nodejs_muou",
        "name": "木偶",
        "enable": true
      },
      {
        "key": "nodejs_xpg",
        "name": "苹果",
        "enable": true
      },
      {
        "key": "nodejs_age",
        "name": "AGE",
        "enable": true
      },
      {
        "key": "nodejs_dm84",
        "name": "巴士",
        "enable": true
      },
      {
        "key": "nodejs_aowu",
        "name": "嗷呜",
        "enable": true
      },
      {
        "key": "nodejs_ttian",
        "name": "天天",
        "enable": true
      },
      {
        "key": "nodejs_gzys",
        "name": "瓜子",
        "enable": true
      },
      {
        "key": "nodejs_jinpai",
        "name": "金牌",
        "enable": true
      },
      {
        "key": "nodejs_xfys",
        "name": "稀饭",
        "enable": true
      },
      {
        "key": "nodejs_czzy",
        "name": "厂长",
        "enable": true
      },
      {
        "key": "nodejs_leijing",
        "name": "雷鲸",
        "enable": true
      },
      {
        "key": "nodejs_panta",
        "name": "盘Ta",
        "enable": true
      },
      {
        "key": "nodejs_qupan",
        "name": "趣盘",
        "enable": true
      },
      {
        "key": "nodejs_misou",
        "name": "米搜",
        "enable": true
      },
      {
        "key": "nodejs_tgsou",
        "name": "tg搜",
        "enable": true
      },
      {
        "key": "nodejs_tgchannel",
        "name": "频道",
        "enable": true
      },
      {
        "key": "nodejs_baseset",
        "name": "配置",
        "enable": true
      }
    ]
  },
  //主题
  color: [
    {
      light: {
        bg: "https://i2.100024.xyz/2024/01/13/pptcej.webp",
        bgMask: "0x50ffffff",
        primary: "0xff446732",
        onPrimary: "0xffffffff",
        primaryContainer: "0xffc5efab",
        onPrimaryContainer: "0xff072100",
        secondary: "0xff55624c",
        onSecondary: "0xffffffff",
        secondaryContainer: "0xffd9e7cb",
        onSecondaryContainer: "0xff131f0d",
        tertiary: "0xff386666",
        onTertiary: "0xffffffff",
        tertiaryContainer: "0xffbbebec",
        onTertiaryContainer: "0xff002020",
        error: "0xffba1a1a",
        onError: "0xffffffff",
        errorContainer: "0xffffdad6",
        onErrorContainer: "0xff410002",
        background: "0xfff8faf0",
        onBackground: "0xff191d16",
        surface: "0xfff8faf0",
        onSurface: "0xff191d16",
        surfaceVariant: "0xffe0e4d6",
        onSurfaceVariant: "0xff191d16",
        inverseSurface: "0xff2e312b",
        inverseOnSurface: "0xfff0f2e7",
        outline: "0xff74796d",
        outlineVariant: "0xffc3c8bb",
        shadow: "0xff000000",
        scrim: "0xff000000",
        inversePrimary: "0xffaad291",
        surfaceTint: "0xff446732"
      },
      dark: {
        bg: "https://i2.100024.xyz/2024/01/13/pptg3z.webp",
        bgMask: "0x50000000",
        primary: "0xffaad291",
        onPrimary: "0xff173807",
        primaryContainer: "0xff2d4f1c",
        onPrimaryContainer: "0xffc5efab",
        secondary: "0xffbdcbb0",
        onSecondary: "0xff283420",
        secondaryContainer: "0xff3e4a35",
        onSecondaryContainer: "0xffd9e7cb",
        tertiary: "0xffa0cfcf",
        onTertiary: "0xff003738",
        tertiaryContainer: "0xff1e4e4e",
        onTertiaryContainer: "0xffbbebec",
        error: "0xffffb4ab",
        onError: "0xff690005",
        errorContainer: "0xff93000a",
        onErrorContainer: "0xffffdad6",
        background: "0xff11140e",
        onBackground: "0xffe1e4d9",
        surface: "0xff11140e",
        onSurface: "0xffe1e4d9",
        surfaceVariant: "0xff43483e",
        onSurfaceVariant: "0xffe1e4d9",
        inverseSurface: "0xffe1e4d9",
        inverseOnSurface: "0xff2e312b",
        outline: "0xff8d9286",
        outlineVariant: "0xff43483e",
        shadow: "0xff000000",
        scrim: "0xff000000",
        inversePrimary: "0xff446732",
        surfaceTint: "0xffaad291"
      }
    },
    {
      light: {
        bg: "https://i2.100024.xyz/2024/01/13/pi2rpw.webp",
        bgMask: "0x50ffffff",
        primary: "0xff666014",
        onPrimary: "0xffffffff",
        primaryContainer: "0xffeee58c",
        onPrimaryContainer: "0xff1f1c00",
        secondary: "0xff625f42",
        onSecondary: "0xffffffff",
        secondaryContainer: "0xffe9e4be",
        onSecondaryContainer: "0xff1e1c05",
        tertiary: "0xff3f6654",
        onTertiary: "0xffffffff",
        tertiaryContainer: "0xffc1ecd5",
        onTertiaryContainer: "0xff002114",
        error: "0xffba1a1a",
        onError: "0xffffffff",
        errorContainer: "0xffffdad6",
        onErrorContainer: "0xff410002",
        background: "0xfffef9eb",
        onBackground: "0xff1d1c14",
        surface: "0xfffef9eb",
        onSurface: "0xff1d1c14",
        surfaceVariant: "0xffe7e3d0",
        onSurfaceVariant: "0xff1d1c14",
        inverseSurface: "0xff323128",
        inverseOnSurface: "0xfff5f1e3",
        outline: "0xff7a7768",
        outlineVariant: "0xffcbc7b5",
        shadow: "0xff000000",
        scrim: "0xff000000",
        inversePrimary: "0xffd1c973",
        surfaceTint: "0xff666014"
      },
      dark: {
        bg: "https://i2.100024.xyz/2024/01/13/pi2reo.webp",
        bgMask: "0x50000000",
        primary: "0xffd1c973",
        onPrimary: "0xff353100",
        primaryContainer: "0xff4d4800",
        onPrimaryContainer: "0xffeee58c",
        secondary: "0xffcdc8a3",
        onSecondary: "0xff333117",
        secondaryContainer: "0xff4a482c",
        onSecondaryContainer: "0xffe9e4be",
        tertiary: "0xffa6d0b9",
        onTertiary: "0xff0e3727",
        tertiaryContainer: "0xff274e3d",
        onTertiaryContainer: "0xffc1ecd5",
        error: "0xffffb4ab",
        onError: "0xff690005",
        errorContainer: "0xff93000a",
        onErrorContainer: "0xffffdad6",
        background: "0xff14140c",
        onBackground: "0xffe7e2d5",
        surface: "0xff14140c",
        onSurface: "0xffe7e2d5",
        surfaceVariant: "0xff49473a",
        onSurfaceVariant: "0xffe7e2d5",
        inverseSurface: "0xffe7e2d5",
        inverseOnSurface: "0xff323128",
        outline: "0xff949181",
        outlineVariant: "0xff49473a",
        shadow: "0xff000000",
        scrim: "0xff000000",
        inversePrimary: "0xff666014",
        surfaceTint: "0xffd1c973"
      }
    },
    {
      light: {
        bg: "https://i2.100024.xyz/2024/01/13/qrnuwt.webp",
        bgMask: "0x50ffffff",
        primary: "0xFF2B6C00",
        onPrimary: "0xFFFFFFFF",
        primaryContainer: "0xFFA6F779",
        onPrimaryContainer: "0xFF082100",
        secondary: "0xFF55624C",
        onSecondary: "0xFFFFFFFF",
        secondaryContainer: "0xFFD9E7CA",
        onSecondaryContainer: "0xFF131F0D",
        tertiary: "0xFF386666",
        onTertiary: "0xFFFFFFFF",
        tertiaryContainer: "0xFFBBEBEB",
        onTertiaryContainer: "0xFF002020",
        error: "0xFFBA1A1A",
        onError: "0xFFFFFFFF",
        errorContainer: "0xFFFFDAD6",
        onErrorContainer: "0xFF410002",
        background: "0xFFFDFDF5",
        onBackground: "0xFF1A1C18",
        surface: "0xFFFDFDF5",
        onSurface: "0xFF1A1C18",
        surfaceVariant: "0xFFE0E4D6",
        onSurfaceVariant: "0xFF1A1C18",
        inverseSurface: "0xFF2F312C",
        onInverseSurface: "0xFFF1F1EA",
        outline: "0xFF74796D",
        outlineVariant: "0xFFC3C8BB",
        shadow: "0xFF000000",
        scrim: "0xFF000000",
        inversePrimary: "0xFF8CDA60",
        surfaceTint: "0xFF2B6C00"
      },
      dark: {
        bg: "https://i2.100024.xyz/2024/01/13/qrc37o.webp",
        bgMask: "0x50000000",
        primary: "0xFF8CDA60",
        onPrimary: "0xFF133800",
        primaryContainer: "0xFF1F5100",
        onPrimaryContainer: "0xFFA6F779",
        secondary: "0xFFBDCBAF",
        onSecondary: "0xFF283420",
        secondaryContainer: "0xFF3E4A35",
        onSecondaryContainer: "0xFFD9E7CA",
        tertiary: "0xFFA0CFCF",
        onTertiary: "0xFF003737",
        tertiaryContainer: "0xFF1E4E4E",
        onTertiaryContainer: "0xFFBBEBEB",
        error: "0xFFFFB4AB",
        errorContainer: "0xFF93000A",
        onError: "0xFF690005",
        onErrorContainer: "0xFFFFDAD6",
        background: "0xFF1A1C18",
        onBackground: "0xFFE3E3DC",
        outline: "0xFF8D9286",
        onInverseSurface: "0xFF1A1C18",
        inverseSurface: "0xFFE3E3DC",
        inversePrimary: "0xFF2B6C00",
        shadow: "0xFF000000",
        surfaceTint: "0xFF8CDA60",
        outlineVariant: "0xFF43483E",
        scrim: "0xFF000000",
        surface: "0xFF1A1C18",
        onSurface: "0xFFC7C7C0",
        surfaceVariant: "0xFF43483E",
        onSurfaceVariant: "0xFFC7C7C0"
      }
    }
  ]
};
