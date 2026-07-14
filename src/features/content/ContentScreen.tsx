/**
 * Tela de Conteúdo
 * Exibe o conceito, explicação e exemplos de código de um tópico,
 * com navegação entre tópicos, progresso e persistência.
 */
import { CodeBlock, Header, InfoBox, ProgressBar, TopicNavigation } from '@/components';
import { theme } from '@/config/theme';
import { useProgress } from '@/context';
import { useTopicNavigation } from '@/hooks';
import { getContentByContentId } from '@/services';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, Text, Box as View } from '@gluestack-ui/themed';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useMemo } from 'react';
import { Alert, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function ContentScreen() {
  const router = useRouter();
  const { contentId } = useLocalSearchParams<{ contentId: string }>();
  const { isTopicCompleted, markTopicAsCompleted, unmarkTopicAsCompleted } =
    useProgress();

  const content = useMemo(
    () => getContentByContentId(contentId),
    [contentId]
  );

  const topicNav = useTopicNavigation(contentId);
  const isCompleted = content ? isTopicCompleted(content.topicId) : false;

  const handleNavigateToNext = () => {
    if (topicNav?.nextContentId) {
      router.push({
        pathname: '/content/[contentId]',
        params: { contentId: topicNav.nextContentId },
      });
    }
  };

  const handleNavigateToPrevious = () => {
    if (topicNav?.previousContentId) {
      router.push({
        pathname: '/content/[contentId]',
        params: { contentId: topicNav.previousContentId },
      });
    }
  };

  const handleToggleComplete = async () => {
    if (!content) return;
    try {
      if (isCompleted) {
        await unmarkTopicAsCompleted(content.topicId);
        Alert.alert('Marcado', 'Tópico desmarcado como concluído');
      } else {
        await markTopicAsCompleted(content.topicId);
        Alert.alert('Sucesso', 'Tópico marcado como concluído! 🎉');
      }
    } catch (error) {
      console.warn('Erro ao atualizar progresso:', error);
    }
  };

  if (!content) {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Conteúdo não encontrado" />
        <View style={styles.errorContainer}>
          <MaterialIcons
            name="warning"
            size={48}
            color={theme.colors.error}
            style={styles.errorIcon}
          />
          <Text style={styles.errorText}>Este conteúdo não existe.</Text>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
            accessibilityRole="button"
            accessibilityLabel="Voltar"
          >
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header title={content.title} subtitle={content.description} />

      {topicNav && (
        <ProgressBar
          current={topicNav.topicNumber}
          total={topicNav.totalTopics}
        />
      )}

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
        scrollEventThrottle={16}
      >
        {/* Conceito */}
        <View style={styles.section}>
          <Text
            style={styles.sectionTitle}
            maxFontSizeMultiplier={1.2}
            allowFontScaling={true}
          >
            Conceito
          </Text>
          <View style={styles.explanationCard}>
            <Text
              style={styles.explanationText}
              maxFontSizeMultiplier={1.3}
              allowFontScaling={true}
            >
              {content.explanation}
            </Text>
          </View>
        </View>

        {/* Pontos-chave */}
        <View style={styles.section}>
          <Text
            style={styles.sectionTitle}
            maxFontSizeMultiplier={1.2}
            allowFontScaling={true}
          >
            Pontos Importantes
          </Text>
          <View style={styles.keyPointsContainer}>
            {content.keyPoints.map((point, index) => (
              <View key={index} style={styles.keyPointItem}>
                <View style={styles.keyPointBullet}>
                  <Text style={styles.keyPointBulletText}>•</Text>
                </View>
                <Text
                  style={styles.keyPointText}
                  maxFontSizeMultiplier={1.3}
                  allowFontScaling={true}
                >
                  {point}
                </Text>
              </View>
            ))}
          </View>
        </View>

        {/* Código */}
        <View style={styles.section}>
          <Text
            style={styles.sectionTitle}
            maxFontSizeMultiplier={1.2}
            allowFontScaling={true}
          >
            Exemplo Prático
          </Text>
          <CodeBlock
            code={content.codeExample}
            language={content.codeLanguage}
            title="Código Exemplo"
          />
          <Text
            style={styles.codeDescription}
            maxFontSizeMultiplier={1.3}
            allowFontScaling={true}
          >
            O exemplo acima demonstra o conceito de forma prática. Estude cada
            linha para entender como o código funciona.
          </Text>
        </View>

        {/* Dica */}
        <View style={styles.section}>
          <InfoBox
            type="info"
            title="💡 Dica"
            message="Pratique o que aprendeu criando seus próprios exemplos. Tente modificar o código e ver como funciona!"
            icon="lightbulb"
          />
        </View>

        {/* Info do Módulo */}
        {topicNav && (
          <View style={styles.section}>
            <View style={styles.progressInfo}>
              <MaterialIcons
                name="school"
                size={20}
                color={theme.colors.primary[600]}
              />
              <View style={styles.progressInfoText}>
                <Text style={styles.progressInfoLabel}>Módulo Atual</Text>
                <Text style={styles.progressInfoValue}>
                  {topicNav.currentModule.title}
                </Text>
              </View>
            </View>
          </View>
        )}
      </ScrollView>

      {/* Botão Marcar como Concluído */}
      <TouchableOpacity
        style={[
          styles.completeButton,
          isCompleted && styles.completeButtonActive,
        ]}
        onPress={handleToggleComplete}
        activeOpacity={0.7}
        accessibilityRole="button"
        accessibilityLabel={
          isCompleted ? 'Desmarcar como concluído' : 'Marcar como concluído'
        }
      >
        <MaterialIcons
          name={isCompleted ? 'check-circle' : 'radio-button-unchecked'}
          size={20}
          color={isCompleted ? theme.colors.white : theme.colors.primary[600]}
        />
        <Text
          style={[
            styles.completeButtonText,
            isCompleted && styles.completeButtonTextActive,
          ]}
        >
          {isCompleted ? '✓ Concluído' : 'Marcar como Concluído'}
        </Text>
      </TouchableOpacity>

      {/* Navegação */}
      {topicNav && (
        <TopicNavigation
          onPrevious={
            !topicNav.isFirst ? handleNavigateToPrevious : undefined
          }
          onNext={!topicNav.isLast ? handleNavigateToNext : undefined}
          previousLabel={topicNav.previousTopic?.title || 'Anterior'}
          nextLabel={topicNav.nextTopic?.title || 'Próximo'}
          disablePrevious={topicNav.isFirst}
          disableNext={topicNav.isLast}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: theme.spacing.xl,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
  },
  errorIcon: {
    marginBottom: theme.spacing.md,
  },
  errorText: {
    fontSize: theme.typography.fontSize.lg,
    color: theme.colors.text.secondary,
    marginBottom: theme.spacing.lg,
    textAlign: 'center',
  },
  backButton: {
    backgroundColor: theme.colors.primary[600],
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    minHeight: 44,
  },
  backButtonText: {
    color: theme.colors.white,
    fontWeight: '600',
    fontSize: theme.typography.fontSize.base,
    textAlign: 'center',
  },
  section: {
    paddingHorizontal: theme.spacing.lg,
    marginVertical: theme.spacing.lg,
  },
  sectionTitle: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: '700',
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.md,
  },
  explanationCard: {
    backgroundColor: theme.colors.primary[50],
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    borderLeftWidth: 4,
    borderLeftColor: theme.colors.primary[600],
  },
  explanationText: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: '400',
    color: theme.colors.text.primary,
    lineHeight: 24,
  },
  keyPointsContainer: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  keyPointItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.md,
  },
  keyPointBullet: {
    marginRight: theme.spacing.md,
    marginTop: theme.spacing.xs,
  },
  keyPointBulletText: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: '700',
    color: theme.colors.primary[600],
  },
  keyPointText: {
    flex: 1,
    fontSize: theme.typography.fontSize.base,
    fontWeight: '400',
    color: theme.colors.text.primary,
    lineHeight: 22,
  },
  codeDescription: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: '400',
    color: theme.colors.text.secondary,
    marginTop: theme.spacing.md,
    lineHeight: 22,
    fontStyle: 'italic',
  },
  progressInfo: {
    backgroundColor: theme.colors.secondary[50],
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    borderWidth: 1,
    borderColor: theme.colors.secondary[200],
    flexDirection: 'row',
    alignItems: 'center',
  },
  progressInfoText: {
    marginLeft: theme.spacing.md,
    flex: 1,
  },
  progressInfoLabel: {
    fontSize: theme.typography.fontSize.xs,
    fontWeight: '500',
    color: theme.colors.text.secondary,
    marginBottom: theme.spacing.xs,
  },
  progressInfoValue: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: '600',
    color: theme.colors.text.primary,
  },
  completeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: theme.spacing.lg,
    marginVertical: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.borderRadius.lg,
    backgroundColor: theme.colors.white,
    borderWidth: 2,
    borderColor: theme.colors.primary[600],
    minHeight: 44,
    gap: theme.spacing.sm,
  },
  completeButtonActive: {
    backgroundColor: theme.colors.success,
    borderColor: theme.colors.success,
  },
  completeButtonText: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: '600',
    color: theme.colors.primary[600],
  },
  completeButtonTextActive: {
    color: theme.colors.white,
  },
});
