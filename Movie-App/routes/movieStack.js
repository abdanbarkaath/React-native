import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Movies from '../components/Movies';
import SingleMovie from '../components/SingleMovie';

import Header from '../shared/Header'
import { Provider } from 'react-redux';
import store from '../redux/store/index'

const { Navigator, Screen } = createStackNavigator();

export const MovieStack = ({ navigation }) => (
    <Provider store={store}>

        <Navigator screenOptions={{
            headerStyle: {
                backgroundColor: 'white',
            },
            headerTitleAlign: 'center',
            headerTintColor: 'black',

        }}>
            <Screen name='Movies' component={Movies} options={{
                headerTitle: () => <Header title='Movies' navigation={navigation} />,
            }}
            />
            <Screen
                name='SingleMovie'
                component={SingleMovie}
                options={{
                    title: 'Single Movie',
                }}
            />
        </Navigator>
    </Provider>
);

export default MovieStack;