import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native';

export default function FlatTouchable({ peoples, removePeople }) {
    return (
        //Object List
        <View style={styles.viewContainer}>
            <FlatList
                style={styles.flatListConatiner}
                keyExtractor={(item) => item.id}
                data={peoples}
                renderItem={(({ item, index }) => (
                    <TouchableOpacity onPress={() => removePeople(item.id)} >
                        <Text style={styles.boxes}>{item.type}</Text>
                    </TouchableOpacity>
                ))}
            />
        </View>
    )

}
const styles = StyleSheet.create({
    boxes: {
        padding: 25,
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 10,
        fontSize: 18,
        color: 'black',
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'dashed',
        fontWeight: 'bold',
        borderRadius: 10,
        textTransform: 'capitalize'
    },
    viewContainer: {
        flex: 1,
    },
})
