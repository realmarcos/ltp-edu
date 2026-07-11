/**
 * Componente de Card Reutilizável
 * Usado em módulos, tópicos e conteúdo
 */
import { theme } from '@/config/theme';
import React from 'react';
import {
    GestureResponderEvent,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

interface CardProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  onPress?: (event: GestureResponderEvent) => void;
  variant?: 'default' | 'elevated' | 'outlined';
}

export function Card({
  title,
  description,
  icon,
  onPress,
  variant = 'default',
}: CardProps) {
  const isClickable = !!onPress;

  return (
    <TouchableOpacity
      disabled={!isClickable}
      onPress={onPress}
      activeOpacity={isClickable ? 0.7 : 1}
      style={[styles.container, styles[variant]]}
    >
      <View style={styles.content}>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          {description && (
            <Text style={styles.description}>{description}</Text>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
  },
  default: {
    backgroundColor: theme.colors.surface,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  elevated: {
    backgroundColor: theme.colors.white,
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  outlined: {
    backgroundColor: theme.colors.white,
    borderWidth: 2,
    borderColor: theme.colors.primary[600],
  },
  content: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  iconContainer: {
    marginRight: theme.spacing.md,
    marginTop: theme.spacing.xs,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: '600',
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  },
  description: {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: '400',
    color: theme.colors.text.secondary,
    lineHeight: 20,
  },
});
