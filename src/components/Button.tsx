/**
 * Componente de Botão Customizado
 * Botão primário, secundário e outline com feedback visual
 */
import { theme } from '@/config/theme';
import { ButtonText, Button as GSButton } from '@gluestack-ui/themed';
import React from 'react';
import {
  AccessibilityState,
  GestureResponderEvent,
  StyleSheet,
  View,
} from 'react-native';

interface ButtonProps {
  label: string;
  onPress: (event: GestureResponderEvent) => void;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  icon?: React.ReactNode;
  fullWidth?: boolean;
  accessibilityLabel?: string;
}

export function Button({
  label,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  icon,
  fullWidth = false,
  accessibilityLabel,
}: ButtonProps) {
  const accessibilityState: AccessibilityState = {
    disabled: disabled,
  };

  return (
    <GSButton
      style={[
        styles.button,
        styles[variant],
        styles[size],
        disabled && styles.disabled,
        fullWidth && styles.fullWidth,
      ]}
      onPress={onPress}
      isDisabled={disabled}
      sx={{ ':active': { opacity: 0.85 } }}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || label}
      accessibilityState={accessibilityState}
    >
      <View style={styles.content}>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <ButtonText
          style={[
            styles.text,
            styles[`text${variant}`],
          ]}
          allowFontScaling={true}
          maxFontSizeMultiplier={1.3}
        >
          {label}
        </ButtonText>
      </View>
    </GSButton>
  );
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: theme.borderRadius.lg,
    marginVertical: theme.spacing.sm,
    minHeight: 44,
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  } as any,

  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  iconContainer: {
    marginRight: theme.spacing.sm,
  },

  primary: {
    backgroundColor: theme.colors.primary[600],
  },

  secondary: {
    backgroundColor: theme.colors.secondary[600],
  },

  outline: {
    backgroundColor: theme.colors.white,
    borderWidth: 2,
    borderColor: theme.colors.primary[600],
  },

  sm: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
  },

  md: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
  },

  lg: {
    paddingHorizontal: theme.spacing.xl,
    paddingVertical: theme.spacing.lg,
  },

  disabled: {
    opacity: 0.6,
  },

  fullWidth: {
    width: '100%',
  },

  text: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: '600',
    textAlign: 'center',
  },

  textprimary: {
    color: theme.colors.white,
  },

  textsecondary: {
    color: theme.colors.white,
  },

  textoutline: {
    color: theme.colors.primary[600],
  },
});
