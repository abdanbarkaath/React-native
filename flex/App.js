import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableWithoutFeedback, Keyboard, Alert } from 'react-native';
import Sandbox from './components/sandbox'
import Header from './components/Header'
import FlatTouchable from './components/FlatTouchable'
import InputAdd from './components/InputAdd'

export default function App() {

  const [inputText, setInputText] = useState('')
  const [peoples, setPeoples] = useState([{
    type: 'some work',
    id: '1'
  }])

  const removePeople = (id) => {
    setPeoples((prevPeople) => {
      return prevPeople.filter((people, index) => people.id != id)
    })
  }

  changeTextOnInput = (val) => {
    setInputText(val)
  }

  const addInput = () => {
    if (inputText.length > 1) {
      setPeoples([{ type: inputText, id: (peoples.length + 1).toString() }, ...peoples])
      setInputText('')
    } else {
      Alert.alert('Oops', 'Text should have atleast 2 characters', [
        { text: 'Understood', onPress: () => console.log('alert close') }
      ])
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <Header />
        <View style={styles.todoContainer}>
          <InputAdd inputValue={inputText} changeTextOnInput={changeTextOnInput} addInput={addInput}></InputAdd>
          <FlatTouchable peoples={peoples} removePeople={removePeople} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  todoContainer: {
    padding: 40,
    flex: 1,
  },
});
