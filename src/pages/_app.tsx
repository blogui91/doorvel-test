import '@/styles/globals.css'
import type { AppProps as NextAppProps } from 'next/app'

import { CssBaseline } from '@mui/material';
import type { EmotionCache } from '@emotion/react';
import { CacheProvider } from '@emotion/react';

import AppLayout from '@/layouts/AppLayout';
import createEmotionCache from '@/utils/createEmotionCache';
import ColorThemeProvider from '@/contexts/ThemeProvider';


const clientSideEmotionCache = createEmotionCache();

interface AppProps extends NextAppProps {
  emotionCache?: EmotionCache;
}

export default function App({ Component, pageProps, emotionCache = clientSideEmotionCache }: AppProps) {
  return ( <CacheProvider value={emotionCache}>
    <ColorThemeProvider>
      <CssBaseline />
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ColorThemeProvider>
  </CacheProvider>
  )
}
