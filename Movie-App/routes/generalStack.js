import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import TestPage from '../components/TestPage';

import { Provider } from 'react-redux';
import store from '../redux/store/index'

const { Navigator, Screen } = createStackNavigator();

export const GeneralStack = ({ navigation }) => (
    navigation.setOptions({ tabBarVisible: false }),
    <Provider store={store}>
        <Navigator screenOptions={{ headerShown: false }}>
            <Screen name='TestPage' component={TestPage} options={{}} />
        </Navigator>
    </Provider>
);

export default GeneralStack;