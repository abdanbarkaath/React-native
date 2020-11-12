import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import Provider from 'react-redux';
import store from '../redux/store'

import HomeStack from '../routes/homeStack'
import AboutStack from '../routes/aboutStack'
import MovieStack from '../routes/movieStack';

const Drawer = createDrawerNavigator();

export default AppNavigator = () => {
    return (
        // <Provider store={store}>
            <NavigationContainer>
                <Drawer.Navigator initialRouteName="Home">
                    <Drawer.Screen name="Home" component={HomeStack} />
                    <Drawer.Screen name="About" component={AboutStack} />
                    <Drawer.Screen name="MovieStack" component={MovieStack} />
                </Drawer.Navigator>
            </NavigationContainer>
        // </Provider>
    );
}
