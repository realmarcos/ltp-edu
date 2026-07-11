/**
 * Componente de Navegação entre Tópicos
 * Botões Próximo/Anterior
 */
import { theme } from '@/config/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { HStack } from '@gluestack-ui/themed';
import { StyleSheet } from 'react-native';
import { Button } from './Button';

interface TopicNavigationProps {
  onPrevious?: () => void;
  onNext?: () => void;
  previousLabel?: string;
  nextLabel?: string;
  disablePrevious?: boolean;
  disableNext?: boolean;
}

export function TopicNavigation({
  onPrevious,
  onNext,
  previousLabel = 'Tópico Anterior',
  nextLabel = 'Próximo Tópico',
  disablePrevious = false,
  disableNext = false,
}: TopicNavigationProps) {
  return (
    <HStack style={styles.container}>
      <Button
        label={previousLabel}
        onPress={onPrevious || (() => {})}
        variant="outline"
        size="md"
        disabled={disablePrevious || !onPrevious}
        icon={
          <MaterialIcons
            name="arrow-back"
            size={20}
            color={
              disablePrevious || !onPrevious
                ? theme.colors.text.muted
                : theme.colors.primary[600]
            }
            style={styles.icon}
          />
        }
      />

      <Button
        label={nextLabel}
        onPress={onNext || (() => {})}
        variant="primary"
        size="md"
        disabled={disableNext || !onNext}
        icon={
          <MaterialIcons
            name="arrow-forward"
            size={20}
            color={disableNext || !onNext ? theme.colors.text.muted : 'white'}
            style={styles.icon}
          />
        }
      />
    </HStack>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.lg,
    gap: theme.spacing.md,
    backgroundColor: theme.colors.surface,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  },
  icon: {
    marginRight: theme.spacing.sm,
  },
});
