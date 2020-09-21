import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Scroll() {
    return (
        <View style={styles.ViewStyle}>
            {/* <ScrollView> */}
            <Button style={styles.defaultBtn} title='scroll' />
            {/* </ScrollView> */}
        </View>
    )
}
const styles = StyleSheet.create({
    defaultBtn: {
        position: 'absolute',
        top: 50,
    },
    ViewStyle: {
        // position: 'absolute',
        // top: 50,
    }
})
