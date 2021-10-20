import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import CustomDrawer from '../shared/CustomDrawer'

import Provider from 'react-redux';
import store from '../redux/store'

import HomeStack from './homeStack'
import ProfileStack from './profileStack'
import AboutStack from './aboutStack'
import MovieStack from './movieStack';
import SearchStack from './searchStack';
import GeneralStack from './generalStack';
import Home from '../components/Home';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator()

function StackHomeNav() {
    return (
        <Stack.Navigator initialRouteName="StackHome">
            <Stack.Screen name="HomeStack" options={{ headerShown: false }} component={HomeStack} />
            <Stack.Screen name="AboutStack" options={{ headerShown: false }} component={AboutStack} />
        </Stack.Navigator>
    )
};

function TabNavigator() {
    return (
            // This is used for nesting this is a tab function which is later imported in the drawer
        <Tab.Navigator initialRouteName="TabHome" activeColor="blue" inactiveColor="black" barStyle={{ backgroundColor: 'white', alignContent: 'space-between', justifyContent: 'center' }}>
            <Tab.Screen options={{ tabBarLabel: 'Home', tabBarIcon: ({ color }) => (<MaterialIcons name="home" color={color} size={26} />) }} name="Home" component={StackHomeNav} barStyle={{ backgroundColor: 'yellow' }} />
            <Tab.Screen options={{ tabBarLabel: 'Movies', tabBarIcon: ({ color }) => (<MaterialIcons name="airplay" color={color} size={26} />) }} name="Moives" component={MovieStack} />
            <Tab.Screen options={{ tabBarLabel: 'Search', tabBarIcon: ({ color }) => (<MaterialIcons name="search" color={color} size={26} />), }} name="Search" component={SearchStack} />
        </Tab.Navigator>
    );
}


function DrawerNavigator() {
    return (
        <Drawer.Navigator initialRouteName="DrawerHome" drawerContent={props => <CustomDrawer {...props}></CustomDrawer>}>
            <Drawer.Screen name="DrawerHome" options={{ title: "Home" }} component={TabNavigator} />
            <Drawer.Screen name="ProfileStack" options={{ headerShown: false }} component={ProfileStack} />
        </Drawer.Navigator>
    );
}



export default function AppNavigator() {
    return (
        // Created a drawer stack in that add stack
        // created a tab add the drawer in that tab 
        // created a basic stack add the tabs in that and a general stack which will not have the footer tabs
        <NavigationContainer>
            <Stack.Navigator initialRouteName="StackHome">
                <Stack.Screen name="General" options={{ headerShown: false }} component={GeneralStack} />
                <Stack.Screen name="StackHome" options={{ headerShown: false }} component={DrawerNavigator} />
            </Stack.Navigator>
        </NavigationContainer>
    )
};

