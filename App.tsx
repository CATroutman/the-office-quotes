import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ImageBackground, SafeAreaView } from 'react-native';
import Home from './pages/Home';

const backgroundImage = require("./assets/black.png")

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundImage} style={styles.image}>
        <SafeAreaView style={styles.safeArea}>
          <Home />
        </SafeAreaView>
      </ImageBackground>
      <StatusBar style='light' backgroundColor="rgba(0, 0, 0, 0.5)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
  },
  image: {
    display: 'flex',
    flex: 1,
    width: '100%',
    height: '100%',
  },
  safeArea: {
    display: 'flex',
    flex: 1,
  }
});
