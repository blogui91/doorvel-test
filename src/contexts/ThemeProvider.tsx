import { createContext, useEffect, useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import getTheme from '@/theme';
import { PaletteMode } from '@mui/material';
import useDarkTheme from '@/hooks/useDarkTheme';

export const ColorModeContext = createContext({ toggleColorMode: () => { }, mode: 'light' });

type Props = {
  children: React.ReactNode;
};

const ColorModeProvider = ({ children }: Props) => {
  const isDarkMode = useDarkTheme();
  const [mode, setMode] = useState<PaletteMode>('light');

  const theme = useMemo(() => createTheme(getTheme(mode)), [mode]);

  useEffect(() => {
    setMode(isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  return (
    <ColorModeContext.Provider value={{
        mode,
        toggleColorMode: () => {
          setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
        },
      }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ColorModeProvider;
