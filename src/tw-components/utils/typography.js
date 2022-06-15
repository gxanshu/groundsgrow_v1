const FONT_SIZE_CSS_VAR_PREFIX = "--tw-font-size-";

function createCssVariable(size) {
  return `${FONT_SIZE_CSS_VAR_PREFIX}${size.replace(/\./g, "-")}`;
}

export function convertFontSizeToCSSvar(fontSize) {
  return `var(${createCssVariable(fontSize)})`;
}
