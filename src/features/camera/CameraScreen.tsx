/**
 * Tela de Exemplo de Câmera
 * Demonstra o uso de expo-camera com controle de permissões.
 */
import { Button, ButtonText, Text, View } from '@gluestack-ui/themed';
import { CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

export function CameraScreen() {
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return (
      <View>
        <Text> Sem permissão da câmera!</Text>
      </View>
    );
  }

  if (!permission.granted) {
    // Permissões da câmera ainda não concedidas.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>
          Você precisa permitir o acesso à câmera
        </Text>
        <Button variant="solid" size="sm" onPress={requestPermission}>
          <ButtonText>Permitir acesso a câmera</ButtonText>
        </Button>
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing} />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
          <Text style={styles.text}>Flip Camera</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 64,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: '100%',
    paddingHorizontal: 64,
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
