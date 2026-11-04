import {
  Button,
  ActivityIndicator,
  Alert,
  Pressable, 
  StyleSheet
} from "react-native";

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { /* generateTest,  */generateTest2} from '@/src/features/document_generation/generate_test';
import { useState } from 'react';

export default function TabOneScreen() {
  const [loading, setLoading] = useState(false);

  async function handleGenerate() {
    try {
      setLoading(true);

      const result = await generateTest2();

      if(result) {
        Alert.alert(
          "Sucesso",
          "Documento gerado e salvo no dispositivo."
        );
      }
    } catch (error) {
      console.error("Erro ao gerar DOCX:", error);

      Alert.alert(
        "Erro",
        error instanceof Error
          ? error.message
          : "Falha ao gerar documento."
      );
    } finally {
      setLoading(false);
    }
  }



  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="large" />
      ) : (
        <Pressable
          onPress={handleGenerate}
          style={({pressed}) => [
            styles.buttonTest,
            {opacity: pressed ? 0.5 : 1.0}
          ]}
        >
          <Text 
              style={styles.title}
          >
              INICIAR
          </Text>
        </Pressable>  
      )}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  buttonTest: {
    backgroundColor: "red",
    padding: 20,
    borderRadius: 3
  }
});
