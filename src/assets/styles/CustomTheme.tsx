import { ThemeOptions } from '@mui/material/styles';

const lightColors = {
  primary: '#5C107C',
  secondary: '#5472AE',
  error: '#F44336',
  warning: '#FF9800',
  info: '#2196F3',
  success: '#4CAF50',
  background: '#FFFFFF',
};

const darkColors = {
  primary: '#1C1C1C',
  secondary: '#9C27B0',
  error: '#E53935',
  warning: '#FFA000',
  info: '#1E88E5',
  success: '#43A047',
  background: '#1E1E1E',
};

const CustomTheme = (mode: 'light' | 'dark'): ThemeOptions => {
  const colors = mode === 'light' ? lightColors : darkColors;

  return {
    typography: {
      fontFamily: 'Lato, Arial, sans-serif',
      h1: {
        fontFamily: 'Montserrat, Arial, sans-serif',
        fontWeight: 600,
      },
      h2: {
        fontFamily: 'Montserrat, Arial, sans-serif',
        fontWeight: 600,
      },
      h3: {
        fontFamily: 'Montserrat, Arial, sans-serif',
        fontWeight: 600,
      },
      h4: {
        fontFamily: 'Montserrat, Arial, sans-serif',
        fontWeight: 600,
      },
      h5: {
        fontFamily: 'Montserrat, Arial, sans-serif',
        fontWeight: 600,
      },
      h6: {
        fontFamily: 'Montserrat, Arial, sans-serif',
        fontWeight: 600,
      },
      button: {
        fontFamily: 'Montserrat, Arial, sans-serif',
        fontWeight: 600,
      },
    },
    palette: {
      mode,
      primary: {
        main: colors.primary,
        contrastText: '#FFFFFF', // Texte sur fond primaire
      },
      secondary: {
        main: colors.secondary,
        contrastText: '#FFFFFF', // Texte sur fond secondaire
      },
      error: {
        main: colors.error,
        contrastText: '#FFFFFF', // Texte sur fond d'erreur
      },
      warning: {
        main: colors.warning,
        contrastText: '#FFFFFF', // Texte sur fond d'avertissement
      },
      info: {
        main: colors.info,
        contrastText: '#FFFFFF', // Texte sur fond d'information
      },
      success: {
        main: colors.success,
        contrastText: '#FFFFFF', // Texte sur fond de succès
      },
      background: {
        default: colors.background,
        paper: colors.background,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundColor: colors.background,
          },
        },
      },
    },
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },
  };
};

export default CustomTheme;
