/**
 * Contexto de Tamanho de Fonte
 * Gerencia o tamanho da fonte global
 */
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext, useCallback, useContext, useEffect, useState } from 'react';

export type FontSizeMode = 'sm' | 'md' | 'lg' | 'xl';

interface FontSizeContextType {
  fontSizeMode: FontSizeMode;
  fontSizeMultiplier: number;
  setFontSizeMode: (mode: FontSizeMode) => void;
}

const FontSizeContext = createContext<FontSizeContextType | undefined>(
  undefined
);

const FONT_SIZE_MULTIPLIERS: Record<FontSizeMode, number> = {
  sm: 0.85,
  md: 1,
  lg: 1.15,
  xl: 1.3,
};

export function FontSizeProvider({ children }: { children: React.ReactNode }) {
  const [fontSizeMode, setFontSizeModeState] = useState<FontSizeMode>('md');
  const [isLoading, setIsLoading] = useState(true);

  const loadFontSize = useCallback(async () => {
    try {
      const saved = await AsyncStorage.getItem('@app_font_size_mode');
      if (saved && (saved as FontSizeMode) in FONT_SIZE_MULTIPLIERS) {
        setFontSizeModeState(saved as FontSizeMode);
      }
    } catch (error) {
      console.warn('Erro ao carregar tamanho de fonte:', error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    loadFontSize();
  }, [loadFontSize]);

  const handleSetFontSizeMode = async (mode: FontSizeMode) => {
    try {
      setFontSizeModeState(mode);
      await AsyncStorage.setItem('@app_font_size_mode', mode);
    } catch (error) {
      console.warn('Erro ao salvar tamanho de fonte:', error);
    }
  };

  if (isLoading) {
    return null;
  }

  return (
    <FontSizeContext.Provider
      value={{
        fontSizeMode,
        fontSizeMultiplier: FONT_SIZE_MULTIPLIERS[fontSizeMode],
        setFontSizeMode: handleSetFontSizeMode,
      }}
    >
      {children}
    </FontSizeContext.Provider>
  );
}

export function useFontSize() {
  const context = useContext(FontSizeContext);
  if (!context) {
    throw new Error('useFontSize deve ser usado dentro de FontSizeProvider');
  }
  return context;
}
