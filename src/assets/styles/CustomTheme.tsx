import { ThemeOptions } from '@mui/material/styles';

const lightColors = {
  primary: '#673ab7',
  secondary: '#f50057',
  error: '#F44336',
  warning: '#FF9800',
  info: '#2196F3',
  success: '#4CAF50',
  background: '#FFFFFF',
  backgroundPaper: '#e5e5e5',
};

const darkColors = {
  primary: '#BB86FC', 
  secondary: '#03DAC6',
  error: '#CF6679', 
  warning: '#FFA000',
  info: '#2196F3',
  success: '#4CAF50',
  background: '#121212',
  backgroundPaper: '#333333',
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
        paper: colors.backgroundPaper,
      },
      divider: '#ffffff',
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
