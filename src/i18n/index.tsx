import _get from "lodash/get";
import moment from "moment";
import { setLocale as setYupLocale } from "yup";

let currentLanguageCode = "";

const languages: {
  [key: string]: {
    id: string;
    label: string;
    flag: string;
    antd: any;
    dictionary: any;
  };
} = {
  en: {
    id: "en",
    label: "English",
    flag: "/images/flags/United-States.png",
    antd: null,
    dictionary: null,
  },
  es: {
    id: "es",
    label: "Español",
    flag: "/images/flags/Spain.png",
    antd: null,
    dictionary: null,
  },
  bn: {
    id: "bn",
    label: "Bangla",
    flag: "/images/flags/United-States.png",
    antd: null,
    dictionary: null,
  },
  hi: {
    id: "hi",
    label: "Hindi",
    flag: "/images/flags/Spain.png",
    antd: null,
    dictionary: null,
  },
  ru: {
    id: "ru",
    label: "Russian",
    flag: "/images/flags/Spain.png",
    antd: null,
    dictionary: null,
  },
   pa: {
    id: "pa",
    label: "Punjabi",
    flag: "/images/flags/Spain.png",
    antd: null,
    dictionary: null,
  },
};

export async function init() {
  currentLanguageCode = localStorage.getItem("language") || "en";
  setLanguageCode(currentLanguageCode);

  if (currentLanguageCode === "en") {
    await initEn();
  }

  if (currentLanguageCode === "es") {
    await initEs();
  }
  if (currentLanguageCode === "bn") {
    await initBn();
  }
  if (currentLanguageCode === "hi") {
    await initHi();
  }
  if (currentLanguageCode === "ru") {
    await initRu();
  }
  if (currentLanguageCode === "pa") {
    await initPa();
  }
}

await init();
async function initHi() {
  const language = languages["hi"];

  // @ts-ignore
  const momentLocale = (await import("moment/locale/hi")).default;

  // language.antd = (
  //   await import('antd/lib/locale-provider/es_ES')
  // ).default;

  language.dictionary = (await import("./hi")).default;

  moment.locale("hi", momentLocale);

  if (language.dictionary.validation) {
    setYupLocale(language.dictionary.validation);
  }

  return language;
}
async function initEs() {
  const language = languages["es"];

  // @ts-ignore
  const momentLocale = (await import("moment/locale/es")).default;

  // language.antd = (
  //   await import('antd/lib/locale-provider/es_ES')
  // ).default;

  language.dictionary = (await import("./es")).default;

  moment.locale("es", momentLocale);

  if (language.dictionary.validation) {
    setYupLocale(language.dictionary.validation);
  }

  return language;
}

async function initBn() {
  const language = languages["bn"];

  // @ts-ignore
  const momentLocale = (await import("moment/locale/bn")).default;

  // language.antd = (
  //   await import('antd/lib/locale-provider/es_ES')
  // ).default;

  language.dictionary = (await import("./bn")).default;

  moment.locale("bn", momentLocale);

  if (language.dictionary.validation) {
    setYupLocale(language.dictionary.validation);
  }

  return language;
}

async function initRu() {
  const language = languages["ru"];

  // @ts-ignore
  const momentLocale = (await import("moment/locale/ru")).default;

  language.dictionary = (await import("./ru")).default;

  moment.locale("ru", momentLocale);

  if (language.dictionary.validation) {
    setYupLocale(language.dictionary.validation);
  }

  return language;
}
async function initPa() {
  const language = languages["pa"];

  // @ts-ignore
  const momentLocale = (await import("moment/locale/pa-IN")).default;

  language.dictionary = (await import("./pa")).default;

  moment.locale("pa-IN", momentLocale);

  if (language.dictionary.validation) {
    setYupLocale(language.dictionary.validation);
  }

  return language;
}

async function initEn() {
  const language = languages["en"];

  language.dictionary = (await import("./en")).default;
  console.log("data file", language.dictionary);
  if (language.dictionary.validation) {
    setYupLocale(language.dictionary.validation);
  }

  return language;
}

function getLanguage() {
  return languages[getLanguageCode()];
}

function format(message: any, args: any) {
  if (!message) {
    return null;
  }

  try {
    return message.replace(/{(\d+)}/g, function (match: any, number: number) {
      return typeof args[number] != "undefined" ? args[number] : match;
    });
  } catch (error) {
    console.error(message, error);
    throw error;
  }
}

export function getLanguages() {
  return Object.keys(languages).map((language) => {
    return languages[language];
  });
}

export function getAntdLanguage() {
  return getLanguage().antd;
}

export function getLanguageCode() {
  return localStorage.getItem("language") || "en";
}

export function setLanguageCode(arg: string) {
  if (!languages[arg]) {
    throw new Error(`Invalid language ${arg}.`);
  }

  localStorage.setItem("language", arg);
}

export function i18nExists(key: any) {
  if (!getLanguage()) {
    return false;
  }

  const message = _get(getLanguage().dictionary, key);
  return Boolean(message);
}

export function i18n(key: any, ...args: any) {
  if (!getLanguage()) {
    return key;
  }
  const message = _get(getLanguage().dictionary, key);
  if (!message) {
    return key;
  }
  return format(message, args);
}

export function i18nHtml(key: any, ...args: any) {
  return (
    <span
      dangerouslySetInnerHTML={{
        __html: i18n(key, ...args),
      }}
    />
  );
}
