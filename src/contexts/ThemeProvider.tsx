import { createContext, useEffect, useMemo, useState } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { parseCookies, setCookie,  } from 'nookies';
import getTheme from '@/theme';
import { PaletteMode } from '@mui/material';
import useDarkTheme from '@/hooks/useDarkTheme';

export const ColorModeContext = createContext({ toggleColorMode: () => { }, mode: 'light' });

type Props = {
  children: React.ReactNode;
};

const ColorModeProvider = ({ children }: Props) => {
  const cookies = parseCookies();
  const [mode, setMode] = useState<PaletteMode>('light');
  const [isReady, setIsReady] = useState(false);

  const theme = useMemo(() => createTheme(getTheme(mode)), [mode]);

  useEffect(() => {
    setMode(
      cookies.darkMode as PaletteMode || 'light'
    )
    setIsReady(true);
  }, [cookies.darkMode]);

  return (
    <ColorModeContext.Provider value={{
        mode,
        toggleColorMode: () => {
          setMode((prevMode) => {
            const nextMode = (prevMode === 'light' ? 'dark' : 'light');

            setCookie(null, 'darkMode', nextMode, {
              maxAge: 30 * 24 * 60 * 60,
              path: '/',
            });

            return nextMode;
          });
        },
      }}>
        {isReady ? (<ThemeProvider theme={theme}>{children}</ThemeProvider>) : null}
    </ColorModeContext.Provider>
  );
};

export default ColorModeProvider;
