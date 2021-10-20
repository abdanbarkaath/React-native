import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Profile from '../components/Profile';

import Header from '../shared/Header'
import { Provider } from 'react-redux';
import store from '../redux/store/index'

const { Navigator, Screen } = createStackNavigator();

export const ProfileStack = ({ navigation }) => (
    <Provider store={store}>
        <Navigator screenOptions={{ headerStyle: { backgroundColor: 'white', }, headerTitleAlign: 'center', headerTintColor: 'black', }}>
            <Screen name='Profile' component={Profile} options={{ title: 'Profile', headerTitle: () => <Header title='Profile' navigation={navigation} />, }} />
        </Navigator>
    </Provider>
);

export default ProfileStack;