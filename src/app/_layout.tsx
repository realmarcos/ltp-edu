/**
 * Layout Raiz da Aplicação
 * Configura o GlueStack Provider e a navegação
 */
import { AppWrapper } from '@/components/AppWrapper';
import { theme } from '@/config/theme';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <AppWrapper>
      <StatusBar style="auto" />
      <Stack
        screenOptions={{
          headerShown: false,
          animation: 'fade',
          headerStyle: { backgroundColor: theme.colors.background },
        }}
      >
        {/* Home Screen */}
        <Stack.Screen
          name="index"
          options={{
            title: 'Home',
          }}
        />

        {/* Modules Stack */}
        <Stack.Screen
          name="modules/[moduleId]"
          options={{
            title: 'Módulo',
            presentation: 'card',
          }}
        />

        {/* Content Stack */}
        <Stack.Screen
          name="content/[contentId]"
          options={{
            title: 'Conteúdo',
            presentation: 'card',
          }}
        />

        {/* About Screen */}
        <Stack.Screen
          name="about"
          options={{
            title: 'Sobre',
            presentation: 'modal',
          }}
        />

        <Stack.Screen
          name="camera-example"
          options={{
            title: 'Exemplo de Câmera',
            headerShown: true,
          }}
        />
      </Stack>
    </AppWrapper>
  );
}
