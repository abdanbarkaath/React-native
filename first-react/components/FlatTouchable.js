import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, KeyboardAvoidingView } from 'react-native';

export default function FlatTouchable({ peoples, removePeople }) {
    return (
        // <View style={styles.viewContainer}>
        //     <FlatList
        //         keyExtractor={(item) => item.toString()}
        //         data={peoples}
        //         renderItem={(({ item, index }) => (
        //             <TouchableOpacity onPress={() => removePeople(index)} >
        //                 <Text style={styles.boxes}>{item}</Text>
        //             </TouchableOpacity>
        //         ))}
        //     />
        // </View>

        //Object List
        <View style={styles.viewContainer}>
            <FlatList
                // scrollEnabled={true}
                style={styles.flatListConatiner}
                keyExtractor={(item) => item.id}
                data={peoples}
                renderItem={(({ item, index }) => (
                    <TouchableOpacity onPress={() => removePeople(item.id)} >
                        <Text style={styles.boxes}>{item.name}</Text>
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
        // backgroundColor: 'coral',
        marginTop: 10,
        marginBottom: 10,
        // marginRight: 40,
        // marginLeft: 40,
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
        // maxHeight: 650,
        // flex: 1,
    },
    // flatListConatiner: {
    //     flex: 1,
    // }
})
