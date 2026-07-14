/**
 * Tela de Módulo
 * Exibe os tópicos de um módulo específico.
 */
import { Card, Header } from '@/components';
import { theme } from '@/config/theme';
import { buildContentId, getModuleById } from '@/services';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, Text, Box as View } from '@gluestack-ui/themed';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useMemo } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export function ModuleScreen() {
  const router = useRouter();
  const { moduleId } = useLocalSearchParams<{ moduleId: string }>();

  const module = useMemo(() => getModuleById(moduleId), [moduleId]);

  if (!module) {
    return (
      <SafeAreaView style={styles.container}>
        <Header title="Módulo não encontrado" />
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>Este módulo não existe.</Text>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.back()}
          >
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    );
  }

  const handleTopicPress = (topicId: string) => {
    router.push({
      pathname: '/content/[contentId]',
      params: { contentId: buildContentId(module.id, topicId) },
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title={module.title} subtitle={module.description} />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Card do Módulo */}
        <View style={styles.moduleInfoSection}>
          <View
            style={[
              styles.moduleHeaderCard,
              { backgroundColor: module.color + '20' },
            ]}
          >
            <View
              style={[
                styles.moduleLargeIcon,
                { backgroundColor: module.color },
              ]}
            >
              <MaterialIcons name="menu-book" size={40} color="white" />
            </View>
            <Text style={styles.moduleInfoTitle}>{module.title}</Text>
            <Text style={styles.moduleInfoDescription}>
              {module.description}
            </Text>
            <View style={styles.topicCountBadge}>
              <Text style={styles.topicCountText}>
                {module.topics.length} tópicos
              </Text>
            </View>
          </View>
        </View>

        {/* Lista de Tópicos */}
        <View style={styles.topicsSection}>
          <Text style={styles.sectionTitle}>Tópicos do Módulo</Text>

          {module.topics.map((topic, index) => (
            <Card
              key={topic.id}
              title={topic.title}
              description={topic.description}
              icon={
                <View
                  style={[
                    styles.topicNumber,
                    { backgroundColor: module.color },
                  ]}
                >
                  <Text style={styles.topicNumberText}>{index + 1}</Text>
                </View>
              }
              onPress={() => handleTopicPress(topic.id)}
              variant="default"
            />
          ))}
        </View>
      </ScrollView>
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
  moduleInfoSection: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.lg,
  },
  moduleHeaderCard: {
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    alignItems: 'center',
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  moduleLargeIcon: {
    width: 80,
    height: 80,
    borderRadius: theme.borderRadius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
  },
  moduleInfoTitle: {
    fontSize: theme.typography.fontSize['2xl'],
    fontWeight: '700',
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.sm,
    textAlign: 'center',
  },
  moduleInfoDescription: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: '400',
    color: theme.colors.text.secondary,
    textAlign: 'center',
    marginBottom: theme.spacing.md,
  },
  topicCountBadge: {
    backgroundColor: theme.colors.white,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.full,
  },
  topicCountText: {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: '600',
    color: theme.colors.text.primary,
  },
  topicsSection: {
    paddingHorizontal: theme.spacing.lg,
  },
  sectionTitle: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: '700',
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.md,
  },
  topicNumber: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topicNumberText: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: '700',
    color: theme.colors.white,
  },
});
