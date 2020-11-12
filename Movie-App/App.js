import { AppLoading } from 'expo';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';
import HomeNavigator from './routes/homeStack'
import AppNavigator from './routes/drawer'


const getFonts = () => Font.loadAsync({
  'ArchivoNarrow-Bold': require('./assets/fonts/ArchivoNarrow-Bold.ttf'),
  'ArchivoNarrow-Bold': require('./assets/fonts/ArchivoNarrow-Regular.ttf'),
  'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  'Roboto-Thin': require('./assets/fonts/Roboto-Thin.ttf'),
})

export default function App() {
  const [fontLoaded, setFontloaded] = useState(false);


  if (fontLoaded) {
    return <AppNavigator></AppNavigator>
  } else {
    return (
      <AppLoading startAsync={getFonts}
        onFinish={() => setFontloaded(true)}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
