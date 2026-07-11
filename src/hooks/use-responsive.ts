/**
 * Componente de Responsividade
 * Hook para detectar tamanho de tela
 */
import { theme } from '@/config/theme';
import { useMemo } from 'react';
import { useWindowDimensions } from 'react-native';

export function useResponsive() {
  const { width, height } = useWindowDimensions();

  return useMemo(() => {
    const isPortrait = height > width;
    const isLandscape = width > height;

    // Detectar breakpoint
    let breakpoint: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' = 'xs';
    if (width >= theme.breakpoints['2xl']) breakpoint = '2xl';
    else if (width >= theme.breakpoints.xl) breakpoint = 'xl';
    else if (width >= theme.breakpoints.lg) breakpoint = 'lg';
    else if (width >= theme.breakpoints.md) breakpoint = 'md';
    else if (width >= theme.breakpoints.sm) breakpoint = 'sm';

    const isSmallScreen = width < 375;
    const isMediumScreen = width >= 375 && width < 768;
    const isLargeScreen = width >= 768;

    return {
      width,
      height,
      isPortrait,
      isLandscape,
      breakpoint,
      isSmallScreen,
      isMediumScreen,
      isLargeScreen,
    };
  }, [width, height]);
}
