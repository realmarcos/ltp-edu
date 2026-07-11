/**
 * Componente de Barra de Progresso
 * Mostra a posição do tópico atual no módulo
 */
import { theme } from '@/config/theme';
import { Box, Progress, ProgressFilledTrack, Text } from '@gluestack-ui/themed';
import { StyleSheet } from 'react-native';

interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  const percentage = (current / total) * 100;

  return (
    <Box style={styles.container}>
      <Progress value={percentage} style={styles.barBackground}>
        <ProgressFilledTrack style={styles.barFill} />
      </Progress>
      <Text style={styles.text}>
        {current} de {total}
      </Text>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    backgroundColor: theme.colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  barBackground: {
    height: 8,
    backgroundColor: theme.colors.border,
    borderRadius: theme.borderRadius.full,
    overflow: 'hidden',
    marginBottom: theme.spacing.sm,
  },
  barFill: {
    height: '100%',
    backgroundColor: theme.colors.primary[600],
    borderRadius: theme.borderRadius.full,
  },
  text: {
    fontSize: theme.typography.fontSize.xs,
    fontWeight: '600',
    color: theme.colors.text.secondary,
  },
});
