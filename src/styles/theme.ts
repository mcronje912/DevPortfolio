// src/styles/theme.ts
export const fontSizes = {
  xs: "text-xs",
  sm: "text-sm",
  base: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
  "3xl": "text-3xl",
  "4xl": "text-4xl",
  "5xl": "text-5xl",
};

export const fontWeights = {
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

export const colors = {
  // Our palette from earlier
  richBlack: {
    DEFAULT: "#0b2027",
    100: "#020708",
    200: "#040d10",
    300: "#071418",
    400: "#091a20",
    500: "#0b2027",
    600: "#1f5b6f",
    700: "#3496b7",
    800: "#70bdd7",
    900: "#b7deeb",
  },
  cerulean: {
    DEFAULT: "#40798c",
    100: "#0d181c",
    200: "#1a3038",
    300: "#274954",
    400: "#336170",
    500: "#40798c",
    600: "#579bb2",
    700: "#81b4c5",
    800: "#abcdd8",
    900: "#d5e6ec",
  },
  verdigris: {
    DEFAULT: "#70a9a1",
    100: "#152321",
    200: "#2a4642",
    300: "#3f6964",
    400: "#548c85",
    500: "#70a9a1",
    600: "#8cbab4",
    700: "#a9cbc7",
    800: "#c6ddda",
    900: "#e2eeec",
  },
  ashGray: {
    DEFAULT: "#cfd7c7",
    100: "#293022",
    200: "#536145",
    300: "#7c9167",
    400: "#a5b496",
    500: "#cfd7c7",
    600: "#d8dfd2",
    700: "#e2e7dd",
    800: "#ecefe8",
    900: "#f5f7f4",
  },
  cornsilk: {
    DEFAULT: "#f6f1d1",
    100: "#4c440f",
    200: "#98871e",
    300: "#d8c339",
    400: "#e7da84",
    500: "#f6f1d1",
    600: "#f8f4da",
    700: "#f9f6e3",
    800: "#fbf9ec",
    900: "#fdfcf6",
  },
};

// Component Styles
export const buttonStyles = {
  // Base button styles by type
  primary: "bg-cerulean hover:bg-cerulean-600 text-white",
  secondary: "bg-verdigris hover:bg-verdigris-600 text-white",
  outline: "border border-cerulean text-cerulean hover:bg-cerulean-100",
  ghost: "text-cerulean hover:bg-cerulean-100",
  link: "text-cerulean underline hover:text-cerulean-600",

  // Button sizes
  sizes: {
    sm: "text-sm py-1 px-3",
    md: "text-base py-2 px-4",
    lg: "text-lg py-3 px-6",
  },
};

export const cardStyles = {
  default:
    "bg-white dark:bg-rich-black-400 rounded-lg overflow-hidden shadow-md",
  flat: "bg-white dark:bg-rich-black-400 rounded-lg",
  bordered:
    "bg-white dark:bg-rich-black-400 rounded-lg border border-ash-gray-300 dark:border-rich-black-300",
};

export const chipStyles = {
  default: "px-2 py-1 rounded-full text-xs font-medium",
  primary:
    "bg-cerulean-100 text-cerulean-700 dark:bg-cerulean-900 dark:text-cerulean-300",
  secondary:
    "bg-verdigris-100 text-verdigris-700 dark:bg-verdigris-900 dark:text-verdigris-300",
  neutral:
    "bg-ash-gray-200 text-rich-black-600 dark:bg-rich-black-300 dark:text-ash-gray-300",
};

export const headingStyles = {
  h1: "font-raleway font-bold text-4xl md:text-5xl lg:text-6xl",
  h2: "font-raleway font-bold text-3xl md:text-4xl",
  h3: "font-raleway font-semibold text-2xl md:text-3xl",
  h4: "font-raleway font-semibold text-xl md:text-2xl",
  h5: "font-raleway font-medium text-lg",
  h6: "font-raleway font-medium text-base",
};

export const textStyles = {
  body: "font-opensans text-base",
  body2: "font-opensans text-sm",
  caption: "font-opensans text-xs",
  link: "text-cerulean hover:underline cursor-pointer",
};

// Section styles for consistent spacing and layout
export const sectionStyles = {
  default: "py-12 md:py-16",
  hero: "py-16 md:py-24",
  tight: "py-8 md:py-12",
  container: "container mx-auto px-4",
};

// Background patterns
export const backgroundStyles = {
  pattern: "bg-pattern bg-no-repeat bg-cover",
  gradient: "bg-gradient-to-br from-cerulean to-verdigris",
  gradientLight: "bg-gradient-to-br from-cerulean-100 to-verdigris-100",
  dark: "bg-rich-black-500",
  light: "bg-cornsilk-500",
};

// Theme utility
export const theme = {
  colors,
  fontSizes,
  fontWeights,
  buttonStyles,
  cardStyles,
  chipStyles,
  headingStyles,
  textStyles,
  sectionStyles,
  backgroundStyles,
};

export default theme;
