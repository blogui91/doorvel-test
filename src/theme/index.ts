import type { PaletteMode } from '@mui/material';
import light from './light';
import dark from './dark';

const getTheme = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? light
      : dark),
  },
});

export default getTheme;
