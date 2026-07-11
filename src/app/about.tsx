/**
 * Tela Sobre (About)
 * Informações sobre o aplicativo, configurações e criadores
 */
import { Header } from '@/components/Header';
import { theme } from '@/config/theme';
import { aboutData } from '@/constants/data';
import { useFontSize, type FontSizeMode } from '@/context/FontSizeContext';
import { useTheme } from '@/context/ThemeContext';
import { MaterialIcons } from '@expo/vector-icons';
import { ScrollView, Text, Box as View } from '@gluestack-ui/themed';
import { useRouter } from 'expo-router';
import {
  Linking,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function AboutScreen() {
  const router = useRouter();
  const { themeMode, setThemeMode, isDarkMode } = useTheme();
  const { fontSizeMode, setFontSizeMode } = useFontSize();

  const fontSizeModes: FontSizeMode[] = ['sm', 'md', 'lg', 'xl'];
  const themeModes = ['system', 'light', 'dark'] as const;

  const handleContactPress = (url: string) => {
    Linking.openURL(url).catch(() => {
      alert('Não foi possível abrir o link');
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Sobre o Aplicativo" />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        {/* Logo e Nome */}
        <View style={styles.heroSection}>
          <View style={styles.logoContainer}>
            <MaterialIcons
              name="school"
              size={64}
              color={theme.colors.primary[600]}
            />
          </View>
          <Text style={styles.appName}>{aboutData.appName}</Text>
          <Text style={styles.version}>v{aboutData.version}</Text>
        </View>

        {/* Configurações */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>⚙️ Configurações</Text>

          {/* Tema */}
          <View style={styles.settingCard}>
            <View style={styles.settingHeader}>
              <MaterialIcons
                name={isDarkMode ? 'dark-mode' : 'light-mode'}
                size={24}
                color={theme.colors.primary[600]}
              />
              <Text style={styles.settingLabel}>Tema</Text>
            </View>
            <View style={styles.buttonGroup}>
              {themeModes.map((mode) => (
                <TouchableOpacity
                  key={mode}
                  style={[
                    styles.modeButton,
                    themeMode === mode && styles.modeButtonActive,
                  ]}
                  onPress={() => setThemeMode(mode)}
                >
                  <Text
                    style={[
                      styles.modeButtonText,
                      themeMode === mode && styles.modeButtonTextActive,
                    ]}
                  >
                    {mode === 'system' ? '🔄' : mode === 'light' ? '☀️' : '🌙'}
                    {' '}
                    {mode.charAt(0).toUpperCase() + mode.slice(1)}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>

          {/* Tamanho de Fonte */}
          <View style={styles.settingCard}>
            <View style={styles.settingHeader}>
              <MaterialIcons
                name="text-fields"
                size={24}
                color={theme.colors.primary[600]}
              />
              <Text style={styles.settingLabel}>Tamanho da Fonte</Text>
            </View>
            <View style={styles.buttonGroup}>
              {fontSizeModes.map((mode) => (
                <TouchableOpacity
                  key={mode}
                  style={[
                    styles.modeButton,
                    fontSizeMode === mode && styles.modeButtonActive,
                  ]}
                  onPress={() => setFontSizeMode(mode)}
                >
                  <Text
                    style={[
                      styles.modeButtonText,
                      fontSizeMode === mode && styles.modeButtonTextActive,
                    ]}
                  >
                    {mode.toUpperCase()}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>

        {/* Descrição */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>O que é LTP-edu?</Text>
          <View style={styles.descriptionCard}>
            <Text style={styles.descriptionText}>{aboutData.description}</Text>
          </View>
        </View>

        {/* Recursos */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recursos Principais</Text>
          <View style={styles.featuresContainer}>
            {aboutData.features.map((feature, index) => (
              <View key={index} style={styles.featureItem}>
                <View style={styles.featureCheckmark}>
                  <MaterialIcons
                    name="check-circle"
                    size={24}
                    color={theme.colors.success}
                  />
                </View>
                <Text style={styles.featureText}>{feature}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Criadores */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Sobre os Criadores</Text>
          {aboutData.creators.map((creator, index) => (
            <View key={index} style={styles.creatorCard}>
              <View style={styles.creatorAvatar}>
                <MaterialIcons
                  name={index === 0 ? 'business' : 'people'}
                  size={32}
                  color={theme.colors.white}
                />
              </View>
              <View style={styles.creatorInfo}>
                <Text style={styles.creatorName}>{creator.name}</Text>
                <Text style={styles.creatorRole}>{creator.role}</Text>
              </View>
            </View>
          ))}
        </View>

        {/* Contato */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Contato</Text>
          <TouchableOpacity
            style={styles.contactItem}
            onPress={() =>
              handleContactPress(`mailto:${aboutData.contact.email}`)
            }
          >
            <MaterialIcons
              name="email"
              size={24}
              color={theme.colors.primary[600]}
            />
            <Text style={styles.contactText}>{aboutData.contact.email}</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.contactItem}
            onPress={() => handleContactPress(aboutData.contact.website)}
          >
            <MaterialIcons
              name="language"
              size={24}
              color={theme.colors.primary[600]}
            />
            <Text style={styles.contactText}>{aboutData.contact.website}</Text>
          </TouchableOpacity>
        </View>

        {/* Rodapé */}
        <View style={styles.footerSection}>
          <Text style={styles.footerText}>
            Desenvolvido com ❤️ para educadores e alunos
          </Text>
          <Text style={styles.footerSubtext}>
            LTP-edu © 2024 - Instituto Federal do Tocantins
          </Text>
        </View>
      </ScrollView>

      {/* Botão Voltar */}
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => router.back()}
      >
        <MaterialIcons name="close" size={24} color={theme.colors.white} />
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
  heroSection: {
    alignItems: 'center',
    paddingVertical: theme.spacing.xl,
    backgroundColor: theme.colors.primary[50],
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  logoContainer: {
    marginBottom: theme.spacing.md,
  },
  appName: {
    fontSize: theme.typography.fontSize['3xl'],
    fontWeight: '700',
    color: theme.colors.primary[600],
    marginBottom: theme.spacing.xs,
  },
  version: {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: '500',
    color: theme.colors.text.secondary,
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
  descriptionCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  descriptionText: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: '400',
    color: theme.colors.text.primary,
    lineHeight: 24,
  },
  featuresContainer: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  featureItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: theme.spacing.md,
  },
  featureCheckmark: {
    marginRight: theme.spacing.md,
    marginTop: theme.spacing.xs,
  },
  featureText: {
    flex: 1,
    fontSize: theme.typography.fontSize.base,
    fontWeight: '400',
    color: theme.colors.text.primary,
    lineHeight: 22,
  },
  creatorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  creatorAvatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: theme.colors.primary[600],
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: theme.spacing.md,
  },
  creatorInfo: {
    flex: 1,
  },
  creatorName: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: '600',
    color: theme.colors.text.primary,
    marginBottom: theme.spacing.xs,
  },
  creatorRole: {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: '400',
    color: theme.colors.text.secondary,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.lg,
    paddingVertical: theme.spacing.md,
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    marginBottom: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  contactText: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: '500',
    color: theme.colors.primary[600],
    marginLeft: theme.spacing.md,
    flex: 1,
  },
  footerSection: {
    alignItems: 'center',
    paddingVertical: theme.spacing.xl,
    borderTopWidth: 1,
    borderTopColor: theme.colors.border,
  },
  footerText: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: '500',
    color: theme.colors.text.primary,
    textAlign: 'center',
    marginBottom: theme.spacing.sm,
  },
  footerSubtext: {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: '400',
    color: theme.colors.text.secondary,
    textAlign: 'center',
  },
  closeButton: {
    position: 'absolute',
    top: theme.spacing.md,
    right: theme.spacing.md,
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: theme.colors.primary[600],
    justifyContent: 'center',
    alignItems: 'center',
  },
  settingCard: {
    backgroundColor: theme.colors.surface,
    borderRadius: theme.borderRadius.lg,
    padding: theme.spacing.lg,
    marginBottom: theme.spacing.md,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  settingHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  settingLabel: {
    fontSize: theme.typography.fontSize.base,
    fontWeight: '600',
    color: theme.colors.text.primary,
    marginLeft: theme.spacing.md,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: theme.spacing.sm,
  },
  modeButton: {
    flex: 1,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.md,
    borderRadius: theme.borderRadius.md,
    backgroundColor: theme.colors.neutral[100],
    borderWidth: 2,
    borderColor: theme.colors.border,
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: 44,
  },
  modeButtonActive: {
    backgroundColor: theme.colors.primary[100],
    borderColor: theme.colors.primary[600],
  },
  modeButtonText: {
    fontSize: theme.typography.fontSize.xs,
    fontWeight: '600',
    color: theme.colors.text.secondary,
    textAlign: 'center',
  },
  modeButtonTextActive: {
    color: theme.colors.primary[600],
  },
});
