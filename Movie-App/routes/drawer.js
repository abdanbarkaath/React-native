import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Provider from 'react-redux';
import store from '../redux/store'

import HomeStack from '../routes/homeStack'
import AboutStack from '../routes/aboutStack'
import MovieStack from '../routes/movieStack';
import SearchStack from '../routes/searchStack';
import GeneralStack from '../routes/generalStack';

const Drawer = createDrawerNavigator()

function DrawerNavigator() {
    return (
        // This is used for nesting this is a drawer function which is later imported in the tabnavigation
        <Drawer.Navigator initialRouteName="DrawerHome">
            <Drawer.Screen name="DrawerHome" options={{ title: "Home" }} component={HomeStack} />
            <Drawer.Screen name="About" component={AboutStack} />
        </Drawer.Navigator>
    );
}
const Tab = createMaterialBottomTabNavigator();

function TabNavigator() {
    return (
        <Tab.Navigator initialRouteName="TabHome" activeColor="blue" inactiveColor="black" barStyle={{ backgroundColor: 'white', alignContent: 'space-between', justifyContent: 'center' }}>
            <Tab.Screen options={{ tabBarLabel: 'TabHome', tabBarIcon: ({ color }) => (<MaterialIcons name="home" color={color} size={26} />) }} name="Home" component={DrawerNavigator} barStyle={{ backgroundColor: 'yellow' }} />
            <Tab.Screen options={{ tabBarLabel: 'Movies', tabBarIcon: ({ color }) => (<MaterialIcons name="airplay" color={color} size={26} />) }} name="Moives" component={MovieStack} />
            <Tab.Screen options={{ tabBarLabel: 'Search', tabBarIcon: ({ color }) => (<MaterialIcons name="search" color={color} size={26} />), }} name="Search" component={SearchStack} />
        </Tab.Navigator>
    );
}

const Stack = createStackNavigator();


export default function AppNavigator() {
    return (
        // Created a drawer stack in that add stack
        // created a tab add the drawer in that tab 
        // created a basic stack add the tabs in that and a general stack which will not have the footer tabs
        <NavigationContainer>
            <Stack.Navigator initialRouteName="StackHome">
                <Stack.Screen name="General" options={{ headerShown: false }} component={GeneralStack} />
                <Stack.Screen name="StackHome" options={{ headerShown: false }} component={TabNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

