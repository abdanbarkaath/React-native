import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../components/About';
import Header from '../shared/Header'

const { Navigator, Screen } = createStackNavigator();

export const AboutStack = ({ navigation }) => (
    <Navigator headerMode='screen' screenOptions={{ headerStyle: { backgroundColor: 'white', }, headerTitleAlign: 'center', }}>
        <Screen name='About' component={About} options={{ title: 'About', headerTitle: () => <Header title={'About'} navigation={navigation} />, }} />
    </Navigator>
);

export default AboutStack;