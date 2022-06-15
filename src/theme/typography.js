import { pxToRem } from "../utils/pxFunctions";

export const baseFontSizes = {
  display: {
    sm: pxToRem(44),
    md: pxToRem(48),
    lg: pxToRem(52),
    xl: pxToRem(56),
    "2xl": pxToRem(64),
  },
  title: {
    sm: pxToRem(16),
    md: pxToRem(18),
    lg: pxToRem(20),
    xl: pxToRem(24),
    "2xl": pxToRem(28),
  },
  subtitle: {
    sm: pxToRem(14),
    md: pxToRem(16),
    lg: pxToRem(18),
    xl: pxToRem(20),
    "2xl": pxToRem(24),
  },
  label: {
    sm: pxToRem(12),
    md: pxToRem(14),
    lg: pxToRem(16),
    xl: pxToRem(18),
    "2xl": pxToRem(20),
  },
  body: {
    sm: pxToRem(12),
    md: pxToRem(14),
    lg: pxToRem(16),
    xl: pxToRem(18),
    "2xl": pxToRem(20),
  },
};

export const mdFontSizes = {
  display: {
    sm: pxToRem(56),
    md: pxToRem(64),
    lg: pxToRem(72),
    xl: pxToRem(80),
    "2xl": pxToRem(88),
  },
  title: {
    sm: pxToRem(20),
    md: pxToRem(24),
    lg: pxToRem(32),
    xl: pxToRem(40),
    "2xl": pxToRem(48),
  },
  subtitle: {
    sm: pxToRem(16),
    md: pxToRem(20),
    lg: pxToRem(24),
    xl: pxToRem(28),
    "2xl": pxToRem(32),
  },
  label: {
    sm: pxToRem(12),
    md: pxToRem(14),
    lg: pxToRem(16),
    xl: pxToRem(24),
    "2xl": pxToRem(28),
  },
  body: {
    sm: pxToRem(12),
    md: pxToRem(14),
    lg: pxToRem(16),
    xl: pxToRem(20),
    "2xl": pxToRem(24),
  },
};

export const fontWeights = {
  display: 800,
  title: 700,
  subtitle: 500,
  label: 600,
  body: 400,
};

export const lineHeights = {
  display: 1.2,
  title: 1.125,
  subtitle: 1.6,
  label: 1,
  body: 1.6,
};

export const letterSpacings = {
  display: -1.5,
  title: 0.15,
  subtitle: 0.1,
  label: "initial",
  body: "initial",
};