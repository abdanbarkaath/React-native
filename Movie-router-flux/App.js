import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Router, Scene, Stack } from 'react-native-router-flux';

import Home from './src/pages/Home'
import About from './src/pages/About'
import FooterBar from './src/components/FooterBar'

export default function App() {
  return (
    <Router>
      <Stack key="root">
        <Scene key="home" component={Home} title="Home" />
        <Scene key="about" component={About} title="About" />
        <FooterBar></FooterBar>
      </Stack>
    </Router>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
