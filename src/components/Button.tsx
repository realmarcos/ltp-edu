/**
 * Componente de Botão Customizado
 * Botão primário, secundário e outline com feedback visual
 */
import { theme } from '@/config/theme';
import React, { useState } from 'react';
import {
    AccessibilityState,
    GestureResponderEvent,
    StyleSheet,
    Text,
    TouchableOpacity,
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
  const [isPressed, setIsPressed] = useState(false);

  const handlePressIn = () => {
    setIsPressed(true);
  };

  const handlePressOut = () => {
    setIsPressed(false);
  };

  const accessibilityState: AccessibilityState = {
    disabled: disabled,
  };

  return (
    <TouchableOpacity
      style={[
        styles.button,
        styles[variant],
        styles[size],
        disabled && styles.disabled,
        isPressed && styles.pressed,
        fullWidth && styles.fullWidth,
      ]}
      onPress={onPress}
      disabled={disabled}
      activeOpacity={0.7}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      accessibilityRole="button"
      accessibilityLabel={accessibilityLabel || label}
      accessibilityState={accessibilityState}
    >
      <View style={styles.content}>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <Text
          style={[
            styles.text,
            styles[`text${variant}`],
          ]}
          allowFontScaling={true}
          maxFontSizeMultiplier={1.3}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
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

  pressed: {
    opacity: 0.85,
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
