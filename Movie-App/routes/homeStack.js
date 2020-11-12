import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../components/Home';
import ReviewDetails from '../components/ReviewDetails';

import Header from '../shared/Header'
import { Provider } from 'react-redux';
import store from '../redux/store/index'

const { Navigator, Screen } = createStackNavigator();

export const HomeStack = ({ navigation }) => (
    <Provider store={store}>

        <Navigator screenOptions={{
            headerStyle: {
                backgroundColor: 'white',
            },
            headerTitleAlign: 'center',
            headerTintColor: 'black',

        }}>
            <Screen name='Home' component={Home} options={{
                title: 'Home',
                headerTitle: () => <Header title='Home' navigation={navigation} />,
            }}
            />
            <Screen
                name='ReviewDetails'
                component={ReviewDetails}
                options={{
                    title: 'Review Details',
                }}
            />
        </Navigator>
    </Provider>
);

export default HomeStack;