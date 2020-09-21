import React from 'react'
import { TextInput, View, Text, StyleSheet, Button, KeyboardAvoidingView, TouchableHighlight, TouchableOpacity } from 'react-native'

export default function InputAdd({ inputValue, changeTextOnInput, addInput }) {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
        // style={{ flex: 1 }}
        >
            <View>
                <TextInput value={inputValue} onSubmitEditing={addInput} onChangeText={text => changeTextOnInput(text)} style={styles.defaultInputBox} />
                <View style={styles.btnView}>
                    <TouchableOpacity style={styles.touchableBtn}>
                        <Text onPress={addInput} style={styles.touchableText}>Add Todo</Text>
                    </TouchableOpacity>
                    {/* <Button style={styles.addBtn} onPress={addInput} color="coral" title="Add todo" /> */}
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: 50
    },
    defaultInputBox: {
        borderColor: 'black',
        borderWidth: 1,
        padding: 5,
        marginTop: 20,
        marginBottom: 5,
        borderRadius: 5,
        height: 40,
    },
    btnView: {
        marginBottom: 20,
    },
    addBtn: {
        height: 100,
    },
    touchableBtn: {
        backgroundColor: 'coral',
        height: 50,
        alignItems: 'center',
        marginBottom: 10,
    },
    touchableText: {
        color: 'white',
        padding: 15,
        fontWeight: 'bold',
        fontSize: 18,
    }
})

