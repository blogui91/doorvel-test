import { useMediaQuery } from '@mui/material';

const useDarkTheme = () => {
  const isDark = useMediaQuery('(prefers-color-scheme: dark)');

  return isDark;
};

export default useDarkTheme;
