import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, ImageBackground, View, Image } from 'react-native';

export default function Header() {
    const backGroundImage = 'data:image/jpeg;base64,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'
    return (
        <View style={styles.headerView}>
            {/* <ImageBackground image={backGroundImage} style={styles.container}> */}
            {/* <Image
                style={StyleSheet.absoluteFill}
                source={{ uri: backGroundImage }}
            /> */}
            <View>
                <Image
                    style={styles.imageStyle}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }} />
            </View>
            <View>
                <Text style={styles.header}>Todo App</Text>
            </View>
            {/* </ImageBackground> */}
        </View>
    )
}
const styles = StyleSheet.create({
    header: {
        padding: 20,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        // position: 'relative'
    },
    headerView: {
        backgroundColor: 'coral',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageStyle: {
        padding: 20,
        display: 'flex',
    },
    backImage: {
        // flex: 1,
        resizeMode: "cover",
        zIndex: 100
        // justifyContent: "center"
    }
})
