'use client';

import React, { ReactNode } from 'react';
import { useMode, ColorModeContext } from '@/src/theme/theme';
import { ThemeProvider } from '@mui/material';
const ColorThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, colorMode] = useMode();
  return (
    <ColorModeContext.Provider value={colorMode as any}>
      <ThemeProvider theme={theme as any}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default ColorThemeProvider;
