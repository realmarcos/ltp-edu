/**
 * Componente de Bloco de Código
 * Exibe exemplos de código com destaque de sintaxe básico
 * Com funcionalidade de copiar para clipboard
 */
import { theme } from '@/config/theme';
import { MaterialIcons } from '@expo/vector-icons';
import { Box, HStack, Pressable, Text } from '@gluestack-ui/themed';
import * as Clipboard from 'expo-clipboard';
import { useState } from 'react';
import { Alert, StyleSheet } from 'react-native';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
}

export function CodeBlock({ code, language = 'kotlin', title }: CodeBlockProps) {
  const [justCopied, setJustCopied] = useState(false);

  const handleCopyCode = async () => {
    try {
      await Clipboard.setStringAsync(code);
      setJustCopied(true);
      setTimeout(() => setJustCopied(false), 2000);
      Alert.alert('Sucesso', 'Código copiado para a área de transferência!');
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível copiar o código.');
      console.warn('Erro ao copiar:', error);
    }
  };

  return (
    <Box style={styles.container}>
      <HStack style={styles.header}>
        {title && <Text style={styles.title}>{title}</Text>}
        <Pressable
          style={styles.copyButton}
          onPress={handleCopyCode}
          sx={{ ':active': { opacity: 0.7 } }}
          accessibilityRole="button"
          accessibilityLabel="Copiar código"
        >
          <MaterialIcons
            name={justCopied ? 'check' : 'content-copy'}
            size={18}
            color={justCopied ? theme.colors.success : theme.colors.primary[400]}
          />
          <Text
            style={[
              styles.copyButtonText,
              { color: justCopied ? theme.colors.success : theme.colors.primary[400] },
            ]}
          >
            {justCopied ? 'Copiado!' : 'Copiar'}
          </Text>
        </Pressable>
      </HStack>

      <Box style={styles.languageLabel}>
        <Text style={styles.languageText}>{language}</Text>
      </Box>
      <Box style={styles.codeContainer}>
        <Text style={styles.code}>{code}</Text>
      </Box>
    </Box>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    overflow: 'hidden',
    backgroundColor: theme.colors.neutral[900],
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    backgroundColor: theme.colors.neutral[800],
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.neutral[700],
  },
  title: {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.text.inverse,
    flex: 1,
  },
  copyButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.md,
    backgroundColor: theme.colors.neutral[700],
    minHeight: 32,
  },
  copyButtonText: {
    fontSize: theme.typography.fontSize.xs,
    fontWeight: '600',
    marginLeft: theme.spacing.xs,
  },
  languageLabel: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    backgroundColor: theme.colors.neutral[800],
    borderTopWidth: 1,
    borderTopColor: theme.colors.neutral[700],
  },
  languageText: {
    fontSize: theme.typography.fontSize.xs,
    fontWeight: '500',
    color: theme.colors.primary[400],
    textTransform: 'uppercase',
  },
  codeContainer: {
    padding: theme.spacing.md,
  },
  code: {
    fontSize: 13,
    fontFamily: theme.typography.fontFamily.mono,
    fontWeight: '500',
    color: theme.colors.neutral[100],
    lineHeight: 20,
  },
});
