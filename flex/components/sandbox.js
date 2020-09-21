import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.box1}>box1</Text>
            <Text style={styles.box2}>box2</Text>
            <Text style={styles.box3}>box3</Text>
            <Text style={styles.box4}>box4</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        paddingTop: 20,
        backgroundColor: 'grey',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'flex-end',
    },
    box1: {
        flex: 1,
        padding: 10,
        backgroundColor: 'yellow',
    },
    box2: {
        flex: 1,
        padding: 20,
        backgroundColor: 'pink',
    },
    box3: {
        flex: 1,
        padding: 30,
        backgroundColor: 'blue',
    },
    box4: {
        flex: 1,
        padding: 40,
        backgroundColor: 'orange',
    },
});
