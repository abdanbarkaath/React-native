import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Search from '../components/Search';

import Header from '../shared/Header'
import { Provider } from 'react-redux';
import store from '../redux/store/index'

const { Navigator, Screen } = createStackNavigator();

export const MovieStack = ({ navigation }) => (
    <Provider store={store}>
        <Navigator screenOptions={{ headerStyle: { backgroundColor: 'black', }, headerTitleAlign: 'center', headerTintColor: 'white', }}>
            <Screen name='Search' component={Search} />
        </Navigator>
    </Provider>
);

export default MovieStack;