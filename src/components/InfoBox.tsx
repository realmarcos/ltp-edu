/**
 * Componente de Info Box
 * Exibe informações com ícone e fundo colorido
 */
import { theme } from '@/config/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { StyleSheet, Text, View } from 'react-native';

export type InfoBoxType = 'info' | 'success' | 'warning' | 'error';

interface InfoBoxProps {
  type: InfoBoxType;
  title: string;
  message: string;
  icon?: string;
}

export function InfoBox({
  type,
  title,
  message,
  icon = 'info',
}: InfoBoxProps) {
  const typeStyles = {
    info: {
      backgroundColor: theme.colors.info + '15',
      borderLeftColor: theme.colors.info,
      iconColor: theme.colors.info,
      textColor: theme.colors.info,
    },
    success: {
      backgroundColor: theme.colors.success + '15',
      borderLeftColor: theme.colors.success,
      iconColor: theme.colors.success,
      textColor: theme.colors.success,
    },
    warning: {
      backgroundColor: theme.colors.warning + '15',
      borderLeftColor: theme.colors.warning,
      iconColor: theme.colors.warning,
      textColor: theme.colors.warning,
    },
    error: {
      backgroundColor: theme.colors.error + '15',
      borderLeftColor: theme.colors.error,
      iconColor: theme.colors.error,
      textColor: theme.colors.error,
    },
  };

  const style = typeStyles[type];

  return (
    <View style={[styles.container, { backgroundColor: style.backgroundColor, borderLeftColor: style.borderLeftColor }]}>
      <MaterialIcons
        name={icon as any}
        size={24}
        color={style.iconColor}
        style={styles.icon}
      />
      <View style={styles.content}>
        <Text style={[styles.title, { color: style.textColor }]}>{title}</Text>
        <Text style={[styles.message, { color: theme.colors.text.primary }]}>
          {message}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderLeftWidth: 4,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    alignItems: 'flex-start',
    marginVertical: theme.spacing.md,
  },
  icon: {
    marginRight: theme.spacing.md,
    marginTop: theme.spacing.xs,
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: '600',
    marginBottom: theme.spacing.xs,
  },
  message: {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: '400',
    lineHeight: 20,
  },
});
