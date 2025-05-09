// src/styles/theme.ts

export const theme = {
  // FONTS - Change these in one place only
  fonts: {
    // Primary fonts
    heading: 'Lato',
    body: 'Merriweather',
    
    // Full font stacks with fallbacks
    headingStack: 'Lato, system-ui, sans-serif',
    bodyStack: 'Merriweather, Georgia, serif',
    
    // Google Fonts URL - ONLY CHANGE THIS LINE to update fonts
    googleFontsUrl: 'https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700;900&family=Merriweather:wght@300;400;700&display=swap',
  },
  
  // COLORS - Your existing palette
  colors: {
    richBlack: { 
      DEFAULT: '#0b2027', 
      100: '#020708', 
      200: '#040d10', 
      300: '#071418', 
      400: '#091a20', 
      500: '#0b2027', 
      600: '#1f5b6f', 
      700: '#3496b7', 
      800: '#70bdd7', 
      900: '#b7deeb' 
    },
    cerulean: { 
      DEFAULT: '#40798c', 
      100: '#0d181c', 
      200: '#1a3038', 
      300: '#274954', 
      400: '#336170', 
      500: '#40798c', 
      600: '#579bb2', 
      700: '#81b4c5', 
      800: '#abcdd8', 
      900: '#d5e6ec' 
    },
    verdigris: { 
      DEFAULT: '#70a9a1', 
      100: '#152321', 
      200: '#2a4642', 
      300: '#3f6964', 
      400: '#548c85', 
      500: '#70a9a1', 
      600: '#8cbab4', 
      700: '#a9cbc7', 
      800: '#c6ddda', 
      900: '#e2eeec' 
    },
    ashGray: { 
      DEFAULT: '#cfd7c7', 
      100: '#293022', 
      200: '#536145', 
      300: '#7c9167', 
      400: '#a5b496', 
      500: '#cfd7c7', 
      600: '#d8dfd2', 
      700: '#e2e7dd', 
      800: '#ecefe8', 
      900: '#f5f7f4' 
    },
    cornsilk: { 
      DEFAULT: '#f6f1d1', 
      100: '#4c440f', 
      200: '#98871e', 
      300: '#d8c339', 
      400: '#e7da84', 
      500: '#f6f1d1', 
      600: '#f8f4da', 
      700: '#f9f6e3', 
      800: '#fbf9ec', 
      900: '#fdfcf6' 
    }
  },
  
  // BORDER RADIUS
  borderRadius: {
    sm: '0.125rem',
    DEFAULT: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    full: '9999px',
  },
  
  // ANIMATION SETTINGS
  animation: {
    durations: {
      fast: '150ms',
      default: '200ms',
      slow: '300ms',
    },
    easings: {
      default: 'ease-in-out',
      bounce: 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    }
  }
};

// Generate Tailwind-ready theme object
export const tailwindTheme = {
  fontFamily: {
    heading: [theme.fonts.heading, 'system-ui', 'sans-serif'],
    body: [theme.fonts.body, 'Georgia', 'serif'],
  },
  colors: {
    'rich-black': theme.colors.richBlack,
    'cerulean': theme.colors.cerulean,
    'verdigris': theme.colors.verdigris,
    'ash-gray': theme.colors.ashGray,
    'cornsilk': theme.colors.cornsilk,
  },
  borderRadius: theme.borderRadius,
};

// Export everything for easier imports
export default theme;