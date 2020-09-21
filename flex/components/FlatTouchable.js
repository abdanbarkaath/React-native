import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function FlatTouchable({ peoples, removePeople }) {
    return (
        //Object List
        <View style={styles.viewContainer}>
            <FlatList
                style={styles.flatListConatiner}
                keyExtractor={(item) => item.id}
                data={peoples}
                renderItem={(({ item, index }) => (
                    <TouchableOpacity>
                        <View style={styles.touchableItems}>
                            <Text style={styles.itemText}>{item.type}</Text>
                            <AntDesign onPress={() => removePeople(item.id)} name="delete" size={24} color="red" style={styles.deleteIcon} />
                        </View>
                    </TouchableOpacity>
                ))}
            />
        </View>
    )

}
const styles = StyleSheet.create({
    itemText: {
        // padding: 25,
        textAlign: 'center',
        // marginTop: 10,
        // marginBottom: 10,
        fontSize: 18,
        color: 'black',
        // borderColor: 'black',
        // borderWidth: 1,
        // borderStyle: 'dashed',
        fontWeight: 'bold',
        borderRadius: 10,
        textTransform: 'capitalize'
    },
    viewContainer: {
        flex: 1,
    },
    touchableItems: {
        borderColor: 'black',
        borderWidth: 1,
        borderStyle: 'dashed',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20,
        marginBottom: 10,
        borderRadius: 5,
    },
    deleteIcon: {
        paddingRight: 10,
    }
})
