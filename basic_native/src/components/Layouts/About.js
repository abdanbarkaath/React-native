import React from 'react';
import { View, Text } from 'react-native';
import HeaderComponent from '../common/HeaderComponent';

export default function About() {
  return (
    <>
      <HeaderComponent title="About"></HeaderComponent>
      <View style={{ backgroundColor: '#fff', flex: 1 }}>
        <Text> About </Text>
      </View>
    </>
  );
}
