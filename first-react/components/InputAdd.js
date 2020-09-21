import React from 'react'
import { TextInput, View, StyleSheet, Button, KeyboardAvoidingView } from 'react-native'

export default function InputAdd({ inputValue, changeTextOnInput, addInput }) {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
        // style={{ flex: 1 }}
        >
            <View>
                <TextInput value={inputValue} onSubmitEditing={addInput} onChangeText={text => changeTextOnInput(text)} style={styles.defaultInputBox} />
                <View style={styles.btnView}>
                <Button style={styles.addBtn} onPress={addInput} color="coral" title="Add todo" />
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
        marginBottom: 10,
    }
})

