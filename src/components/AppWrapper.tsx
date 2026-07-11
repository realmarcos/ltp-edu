/**
 * Wrapper da Aplicação com Providers
 * Inclui GlueStack, Theme, FontSize e Progress
 */
import { FontSizeProvider } from '@/context/FontSizeContext';
import { ProgressProvider } from '@/context/ProgressContext';
import { ThemeProvider } from '@/context/ThemeContext';
import { config as gluestackConfig } from '@gluestack-ui/config';
import { GluestackUIProvider } from '@gluestack-ui/themed';
import React from 'react';

interface AppWrapperProps {
  children: React.ReactNode;
}

export function AppWrapper({ children }: AppWrapperProps) {
  return (
    <GluestackUIProvider config={gluestackConfig}>
      <ThemeProvider>
        <FontSizeProvider>
          <ProgressProvider>
            {children}
          </ProgressProvider>
        </FontSizeProvider>
      </ThemeProvider>
    </GluestackUIProvider>
  );
}
