import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Cards(props) {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.cardContent}>
                {props.children}
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: { width: 1, height: 1 },
        shadowColor: '#333',
        shadowOpacity: 0.3,
        shadowRadius: 2,
        marginHorizontal: 4,
        marginVertical: 10,
    },
    cardContent: {
        marginHorizontal: 20,
        marginVertical: 15,
    }
})
