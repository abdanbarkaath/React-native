import React, { useState } from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { Dimensions } from 'react-native';

export default function Header({ title, navigation }) {
    const toggleMenu = () => {
        navigation.toggleDrawer();
    }
    return (
        <ImageBackground source={require('../assets/images/game_bg.png')} style={styles.headerView}>
            <Feather style={styles.font} name="menu" size={24} color="black" onPress={toggleMenu} />
            <View>
                <Text style={styles.headerText}>{title}</Text>
            </View>
        </ImageBackground>
    )
}
const styles = StyleSheet.create({
    headerView: {
        width: Dimensions.get('screen').width,
        height: '100%',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold',
        letterSpacing: 1,
        color: 'black',
    },
    font: {
        position: 'absolute',
        left: 15,
    }
})