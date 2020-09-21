import React, { useState } from 'react';
import { Button, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Image, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Scroll from './components/Scroll';
import Header from './components/Header';
import FlatTouchable from './components/FlatTouchable';
import InputAdd from './components/InputAdd';

export default function App() {
  const [name, setName] = useState('Abdan')
  const [inputText, setInputText] = useState('')
  const [inputValues, setInputValues] = useState([])
  const [peoples, setPeoples] = useState([{
    name: 'abdan',
    id: '55'
  },
  {
    name: 'basil',
    id: '2'
  },
  {
    name: 'evra',
    id: '3'
  },
  {
    name: 'qwerty',
    id: '4'
  },
  {
    name: 'xyz',
    id: '5'
  },
  {
    name: 'abd',
    id: '6'
  }, {
    name: 'martial',
    id: '7'
  }, {
    name: 'smalling',
    id: '8'
  }, {
    name: 'thiago',
    id: '9'
  },
  {
    name: 'rooney',
    id: '10'
  }, {
    name: 'ronaldo',
    id: '11'
  },
  {
    name: 'messi',
    id: '12'
  },
  {
    name: 'hazard',
    id: '13'
  }])

  // const [peoples, setPeoples] = useState(['abdan', 'qadeer', 'turab', 'basil', 'tabrez', 'sufiyan', 'adil', 'rooney',])

  changeName = () => {
    setName('Basil')
  }

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
      setPeoples([{ name: inputText, id: (peoples.length + 1).toString() }, ...peoples])
      setInputText('')
    } else {
      Alert.alert('Oops', 'Text should have atleast 2 characters', [
        { text: 'Understood', onPress: () => console.log('alert close') }
      ])
    }
  }

  // pushText = () => {
  //   setInputText('')
  // }


  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* <View> */}
        {/* </View> */}
        {/* <View style={styles.headerView}>
        <Text style={styles.header}>Header</Text>
      </View>
      <View style={styles.body}>
      <Text style={styles.bodyText}>My name is {name}</Text>
        <View>
          <Button style={styles.defaultButton} title='Click me to change the name' onPress={changeName} /> */}
        {/* <TextInput value={inputText} onChange={changeInputTextValue}></TextInput> */}
        {/* <TextInput keyboardType='numeric' style={styles.defaultInputBox} onChangeText={(value) => setInputText(value)} />
          <Button color='red' style={styles.defaultButton} title='Add value' onPress={changeName} />
          <Text>User Input value: {inputText}</Text>
        </View>
      </View> */}
        {/* rendering the list view */}
        {/* <View>
            <ScrollView>
            {peoples.map((people) => {
                return (
                  <View id={people.id}>
                  <Text style={styles.boxes}>{people.name}</Text>
                  </View>
                  )
                })}
                </ScrollView>
          </View> */}

        {/* <View> */}

        {/* Flat list */}
        {/* <FlatList
          numColumns={2}
          keyExtractor={(item) => item.id}
          data={peoples}
          renderItem={(({ item }) => (<Text style={styles.boxes}>{item.name}</Text>))}
        /> */}

        {/* Touchable flat list */}
        {/* <Scroll></Scroll> */}
        {/* <Header></Header>
        <View style={styles.FlatListContainer}>
        <FlatList
        keyExtractor={(item) => item.id}
        data={peoples}
        scrollEnabled={true}
        renderItem={(({ item }) => (
          <TouchableOpacity onPress={() => removePeople(item.id)} >
          <Text style={styles.boxes}>{item.name}</Text>
          </TouchableOpacity>
          ))}
          />
        </View> */}
        {/* Main components practice */}
        <Header></Header>
        <View style={styles.todoContainer}>
          <InputAdd inputValue={inputText} changeTextOnInput={changeTextOnInput} addInput={addInput}></InputAdd>
          <FlatTouchable peoples={peoples} removePeople={removePeople} />
        </View>
        {/* </View> */}
      </View >
    </TouchableWithoutFeedback >

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    padding: 20,
    color: 'white',
    fontSize: 25,
  },
  headerView: {
    position: 'absolute',
    top: 0,
    backgroundColor: 'grey',
    width: '100%',
  },
  body: {
    padding: 15,
  },
  bodyText: {
    fontSize: 15,
    color: 'grey'
  },
  defaultButton: {
    color: 'red',
    borderRadius: 100,
    backgroundColor: 'red',
  },
  defaultInputBox: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
    marginTop: 20,
    marginBottom: 5,
    borderRadius: 5,
  },
  boxes: {
    padding: 40,
    textAlign: 'center',
    backgroundColor: 'beige',
    margin: 10,
    marginBottom: 20,
  },
  flatListStyle: {
    // backgroundColor: 'red',
    // padding: 15,
  },
  FlatListContainer: {
    flex: 1,
  },
  todoContainer: {
    marginLeft: 40,
    marginRight: 40,
  },
});
