import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';


export default function TestPage({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Open up App.js to start working on your app!</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate('StackHome')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});