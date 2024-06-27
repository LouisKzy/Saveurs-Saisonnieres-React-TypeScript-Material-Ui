import { PaletteColor, PaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface PaletteColor {
    main?: string;
    contrastText?: string;
  }

  interface PaletteColorOptions {
    main?: string;
    contrastText?: string;
  }
}