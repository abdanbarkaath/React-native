import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux'; // New code
import { Footer } from 'native-base';

export default function FooterBar() {
    return (
        <Footer style={{ backgroundColor: 'red' }}><Text>some text</Text></Footer>
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
