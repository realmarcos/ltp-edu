/**
 * Tela Inicial (Home)
 * Exibe a lista de módulos disponíveis
 * Com layout responsivo e feedback visual melhorado
 */
import { Card } from '@/components/Card';
import { Header } from '@/components/Header';
import { theme } from '@/config/theme';
import { modules } from '@/constants/data';
import { useResponsive } from '@/hooks/use-responsive';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, Text, Box as View } from '@gluestack-ui/themed';
import { useBatteryLevel } from 'expo-battery';
import { useRouter } from 'expo-router';
import { Button, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function HomeScreen() {
    const batteryLevel = useBatteryLevel();
  const router = useRouter();
  const { isSmallScreen, width } = useResponsive();

  const handleModulePress = (moduleId: string) => {
    router.push(`/modules/${moduleId}`);
  };

  const handleAboutPress = () => {
    router.push('/about');
  };

  // Calcular número de colunas baseado no tamanho da tela
  const numColumns = width >= 768 ? 2 : 1;

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="LTP-edu"
        subtitle="Aprenda Programação do Zero"
      />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={true}
        scrollEventThrottle={16}
      >
        {/* Seção de Boas-vindas */}
        <View
          style={[
            styles.welcomeSection,
            isSmallScreen && styles.welcomeSectionSmall,
          ]}
        >
          <View
            style={[
              styles.welcomeCard,
              { backgroundColor: theme.colors.primary[50] },
            ]}
          >
            <View style={styles.welcomeIcon}>
              <MaterialIcons
                name="school"
                size={isSmallScreen ? 36 : 48}
                color={theme.colors.primary[600]}
              />
            </View>
            <Text
              style={[
                styles.welcomeTitle,
                isSmallScreen && styles.welcomeTitleSmall,
              ]}
              maxFontSizeMultiplier={1.2}
              allowFontScaling={true}
            >
              Bem-vindo ao LTP-edu!
            </Text>
            <Text
              style={[
                styles.welcomeText,
                isSmallScreen && styles.welcomeTextSmall,
              ]}
              maxFontSizeMultiplier={1.2}
              allowFontScaling={true}
            >
              Comece sua jornada no desenvolvimento de software com aulas
              estruturadas e exemplos práticos.
            </Text>
          </View>
        </View>
        <View>
          <Button onPress={() => router.push('/camera-example')} title="Exemplo de Câmera"  />
        </View>
        {/* Módulos */}
        <View style={styles.modulesSection}>
          <Text
            style={[
              styles.sectionTitle,
              isSmallScreen && styles.sectionTitleSmall,
            ]}
            maxFontSizeMultiplier={1.2}
            allowFontScaling={true}
          >
            Escolha um módulo
          </Text>

          <View>
            <Text style={{color: theme.colors.primary[600], fontSize: 20}}> Status da minha beteria: {batteryLevel}</Text>
          </View>

          <View style={numColumns === 2 ? styles.modulesGrid : undefined}>
            {modules.map((module, index) => (
              <View
                key={module.id}
                style={[
                  numColumns === 2 && {
                    width: '48%',
                    marginBottom: theme.spacing.md,
                    marginRight:
                      index % 2 === 0 ? theme.spacing.md : 0,
                  },
                ]}
              >
                <Card
                  title={module.title}
                  description={module.description}
                  icon={
                    <View
                      style={[
                        styles.moduleIcon,
                        { backgroundColor: module.color },
                      ]}
                    >
                      <MaterialIcons
                        name="code"
                        size={isSmallScreen ? 20 : 24}
                        color="white"
                      />
                    </View>
                  }
                  onPress={() => handleModulePress(module.id)}
                  variant="elevated"
                />
              </View>
            ))}
          </View>
        </View>

        {/* Info Estatísticas */}
        <View style={styles.statsSection}>
          <View style={styles.statItem}>
            <View
              style={[
                styles.statIcon,
                { backgroundColor: theme.colors.primary[100] },
              ]}
            >
              <MaterialIcons
                name="menu-book"
                size={24}
                color={theme.colors.primary[600]}
              />
            </View>
            <View>
              <Text style={styles.statNumber}>{modules.length}</Text>
              <Text style={styles.statLabel}>Módulos</Text>
            </View>
          </View>

          <View style={styles.statItem}>
            <View
              style={[
                styles.statIcon,
                { backgroundColor: theme.colors.secondary[100] },
              ]}
            >
              <MaterialIcons
                name="checklist"
                size={24}
                color={theme.colors.secondary[600]}
              />
            </View>
            <View>
              <Text style={styles.statNumber}>
                {modules.reduce((acc, m) => acc + m.topics.length, 0)}
              </Text>
              <Text style={styles.statLabel}>Tópicos</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Botão Flutuante (About) */}
      <TouchableOpacity
        style={[
          styles.fab,
          { backgroundColor: theme.colors.secondary[600] },
        ]}
        onPress={handleAboutPress}
        accessibilityRole="button"
        accessibilityLabel="Sobre o aplicativo"
        activeOpacity={0.8}
      >
        <MaterialIcons name="info" size={24} color="white" />
      </TouchableOpacity>
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
  welcomeSection: {
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.lg,
  },
  welcomeSectionSmall: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
  },
  welcomeCard: {
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    alignItems: 'center',
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 2,
  },
  welcomeIcon: {
    marginBottom: theme.spacing.md,
  },
  welcomeTitle: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: '700',
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.sm,
    textAlign: 'center',
  },
  welcomeTitleSmall: {
    fontSize: theme.typography.fontSize.lg,
  },
  welcomeText: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: '400',
    color: theme.colors.text.secondary,
    textAlign: 'center',
    lineHeight: 22,
  },
  welcomeTextSmall: {
    fontSize: theme.typography.fontSize.sm,
  },
  modulesSection: {
    paddingHorizontal: theme.spacing.lg,
  },
  modulesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: '700',
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.md,
    marginTop: theme.spacing.lg,
  },
  sectionTitleSmall: {
    fontSize: theme.typography.fontSize.lg,
  },
  moduleIcon: {
    width: 50,
    height: 50,
    borderRadius: theme.borderRadius.lg,
    justifyContent: 'center',
    alignItems: 'center',
  },
  statsSection: {
    paddingHorizontal: theme.spacing.lg,
    marginVertical: theme.spacing.xl,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginHorizontal: theme.spacing.md,
  },
  statIcon: {
    width: 48,
    height: 48,
    borderRadius: theme.borderRadius.lg,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  statNumber: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: '700',
    color: theme.colors.text.primary,
  },
  statLabel: {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: '400',
    color: theme.colors.text.secondary,
    marginTop: theme.spacing.xs,
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.xl,
    right: theme.spacing.lg,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
});
