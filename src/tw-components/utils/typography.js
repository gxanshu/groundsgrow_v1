import chakraTheme from "theme";
import { baseFontSizes, mdFontSizes } from "theme/typography";

const FONT_SIZE_CSS_VAR_PREFIX = "--tw-font-size-";

function createCssVariable(size) {
  return `${FONT_SIZE_CSS_VAR_PREFIX}${size.replace(/\./g, "-")}`;
}

export function convertFontSizeToCSSVar(fontSize) {
  return `var(${createCssVariable(fontSize)})`;
}

export function generateBreakpointTypographyCssVars() {
  const baseCSSVars = Object.entries(baseFontSizes)
    .flatMap(([typographyBase, typographySizeMap]) => {
      return Object.entries(typographySizeMap).map(
        ([typographySize, fontSizeValue]) => {
          return `${createCssVariable(
            `${typographyBase}.${typographySize}`,
          )}: ${fontSizeValue};`;
        },
      );
    })
    .join("\n");

  const mdCSSVars = Object.entries(mdFontSizes)
    .flatMap(([typographyBase, typographySizeMap]) => {
      return Object.entries(typographySizeMap).map(
        ([typographySize, fontSizeValue]) => {
          return `${createCssVariable(
            `${typographyBase}.${typographySize}`,
          )}: ${fontSizeValue};`;
        },
      );
    })
    .join("\n");

  return `:root {
    ${baseCSSVars}
    @media screen and (min-width: ${chakraTheme.breakpoints.md}) {
      ${mdCSSVars}
    }
  }`;
}
