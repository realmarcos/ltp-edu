/**
 * Tema Global do LTP-edu
 * Define cores, tipografia, espaçamentos e estilos da aplicação
 */

export const theme = {
  // Paleta de Cores
  colors: {
    // Cores Primárias - Azul para confiança e aprendizado
    primary: {
      50: '#EFF6FE',
      100: '#E0ECFD',
      200: '#C1D9FB',
      300: '#A2C7F9',
      400: '#83B4F7',
      500: '#5A99F5', // Cor primária principal
      600: '#208AEF', // Cor principal mais vibrante
      700: '#1A6BB9',
      800: '#144C83',
      900: '#0E2D4D',
    },

    // Cores Secundárias - Verde para sucesso e progresso
    secondary: {
      50: '#F0F9F5',
      100: '#E0F3EB',
      200: '#C1E7D7',
      300: '#A2DCC3',
      400: '#83D0AF',
      500: '#5AC198',
      600: '#3DAE7F',
      700: '#2E8A64',
      800: '#1E5C45',
      900: '#0E2E26',
    },

    // Cores de Feedback
    success: '#10B981',
    warning: '#F59E0B',
    error: '#EF4444',
    info: '#3B82F6',

    // Cores Neutras
    neutral: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    },

    // Aliases convenientes
    white: '#FFFFFF',
    black: '#000000',
    background: '#FFFFFF',
    surface: '#F9FAFB',
    border: '#E5E7EB',
    text: {
      primary: '#111827',
      secondary: '#4B5563',
      muted: '#9CA3AF',
      inverse: '#FFFFFF',
    },
  },

  // Tipografia
  typography: {
    fontFamily: {
      primary: 'Segoe UI, -apple-system, BlinkMacSystemFont, sans-serif',
      secondary: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
      mono: 'Fira Code, Courier New, monospace',
    },

    fontSize: {
      xs: 12,
      sm: 14,
      base: 16,
      lg: 18,
      xl: 20,
      '2xl': 24,
      '3xl': 30,
      '4xl': 36,
    },

    fontWeight: {
      light: '300',
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },

    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
      loose: 2,
    },

    // Estilos predefinidos de texto
    heading: {
      h1: {
        fontSize: 36,
        fontWeight: '700',
        lineHeight: 1.2,
        letterSpacing: -0.5,
      },
      h2: {
        fontSize: 30,
        fontWeight: '700',
        lineHeight: 1.3,
        letterSpacing: -0.3,
      },
      h3: {
        fontSize: 24,
        fontWeight: '600',
        lineHeight: 1.4,
      },
      h4: {
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 1.4,
      },
    },

    body: {
      large: {
        fontSize: 18,
        fontWeight: '400',
        lineHeight: 1.5,
      },
      base: {
        fontSize: 16,
        fontWeight: '400',
        lineHeight: 1.5,
      },
      small: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 1.5,
      },
    },

    code: {
      fontSize: 13,
      fontWeight: '500',
      lineHeight: 1.6,
      fontFamily: 'Fira Code, Courier New, monospace',
    },
  },

  // Espaçamentos
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    '2xl': 48,
    '3xl': 64,
  },

  // Raios de borda
  borderRadius: {
    none: 0,
    xs: 2,
    sm: 4,
    md: 8,
    lg: 12,
    xl: 16,
    '2xl': 20,
    full: 9999,
  },

  // Sombras
  shadows: {
    none: 'none',
    sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
    md: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
    xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
    '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  },

  // Breakpoints para responsividade
  breakpoints: {
    xs: 320,
    sm: 480,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  },
};

// Tipo para exportar temas
export type Theme = typeof theme;
