
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import FooterBar from '../components/Footer';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={{ flex: 10 }}>
        <Text
          style={styles.welcome}
          onPress={() => Actions.about()} // New Code
        >
          Home Screen
      </Text>
      </View>
      {/* <View style={{ flex: 1,backgroundColor:'red',width:'100%',alignItems:'center' }}>
        <Text>
          Footer
        </Text>
      </View> */}
      <FooterBar></FooterBar>
    </View>
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
