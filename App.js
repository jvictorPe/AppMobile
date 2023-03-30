import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
       <Image
        style={styles.tinyLogo}
        source={{
          uri: 'https://reactnative.dev/img/tiny_logo.png',
        }}
      />
      <Text style={styles.appTitle}>Bem vindo a disciplina de Mobile</Text>
      <Text style={styles.appName}>João Victor</Text>
      <Text style={styles.appSala}>Sala E102</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#92a8d1',
    alignItems: 'center',
    justifyContent: 'center',
  },
  appTitle: {
    fontSize: 30,
    color: 'black',
    textAlign: 'center'
  },
  appName: {
    fontSize: 20,
    color: 'black',
    textAlign: 'center'
  },
  appSala: {
    fontSize: 15,
    color: 'blue',
    textAlign: 'center'
  },
  tinyLogo: {
    width: 60,
    height: 60,
  }

});
