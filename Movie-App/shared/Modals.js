import React, { useState } from 'react';
import { StyleSheet, Text, View, Modal, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { GlobalStyles } from '../styles/global';
import { Ionicons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function Modals(props) {
    return (
        <View>
            <Feather name="plus-circle" size={24} color="black" onPress={() => props.setModalOpen(true)} style={{ ...styles.modalbtn }} />
            <Modal animationType="slide" visible={props.modalVisible}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.modalView}>
                        <Ionicons name="md-close-circle-outline" size={24} color="black" onPress={() => props.setModalOpen(false)} style={{ ...styles.modalbtn }} />
                        <View>{props.children}</View>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    modalbtn: {
        marginTop: 20,
        marginBottom: 10,
        alignSelf: 'center',
    }, modalView: {
        flex: 1
    }
})