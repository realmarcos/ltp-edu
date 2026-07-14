/**
 * Componente de Header Customizado
 * Exibido no topo de cada tela — construído com gluestack-ui
 */
import { theme } from '@/config/theme';
import { Box, Heading, Text } from '@gluestack-ui/themed';
import { StyleSheet } from 'react-native';

interface HeaderProps {
  title: string;
  subtitle?: string;
}

export function Header({ title, subtitle }: HeaderProps) {
  return (
    <Box style={styles.container}>
      <Heading style={styles.title}>{title}</Heading>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    backgroundColor: theme.colors.white,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  title: {
    fontSize: theme.typography.fontSize['2xl'],
    fontWeight: '700',
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  },
  subtitle: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: '400',
    color: theme.colors.text.secondary,
  },
});
