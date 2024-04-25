import locales from "../assets/translations";

export function getValueByPath(obj, path) {
  const keys = path.split(".");
  return keys.reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

export function localizeElements(LANG) {
  const elements = document.querySelectorAll("[data-lang]");

  elements.forEach((element) => {
    const langKey = element.getAttribute("data-lang");
    const langValue = getValueByPath(locales[LANG], langKey);

    if (langValue) {
      element.innerHTML = langValue;
    }
  });
}
