/**
 * Componente de Card Reutilizável
 * Usado em módulos, tópicos e conteúdo
 */
import { theme } from '@/config/theme';
import { Box, HStack, Heading, Pressable, Text, VStack } from '@gluestack-ui/themed';
import React from 'react';
import { GestureResponderEvent, StyleSheet } from 'react-native';

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
    <Pressable
      disabled={!isClickable}
      onPress={onPress}
      sx={{ ':active': { opacity: isClickable ? 0.7 : 1 } }}
      style={[styles.container, styles[variant]]}
    >
      <HStack style={styles.content}>
        {icon && <Box style={styles.iconContainer}>{icon}</Box>}
        <VStack style={styles.textContainer}>
          <Heading style={styles.title}>{title}</Heading>
          {description && (
            <Text style={styles.description}>{description}</Text>
          )}
        </VStack>
      </HStack>
    </Pressable>
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
