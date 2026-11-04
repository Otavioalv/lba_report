import { Pressable, StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {

  


  return (
    <View style={styles.container}>
      <Pressable
        onPress={()  => console.log("penis")}
        // {...rest}
        style={({pressed}) => [
          styles.buttonTest,
          {opacity: pressed ? 0.5 : 1.0}
        ]}
        // onPressIn={() => animation(.8)}
        // onPressOut={() => animation(1)}
      >
        <Text 
            style={styles.title}
        >
            INICIAR
        </Text>
      </Pressable>



      {/* <Text style={styles.title}>Tab One</Text> */}
      {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
      {/* <EditScreenInfo path="app/(tabs)/index.tsx" /> */}
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
