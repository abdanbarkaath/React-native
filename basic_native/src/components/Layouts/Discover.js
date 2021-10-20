import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import HeaderComponent from '../common/HeaderComponent';

export default function Discover() {
  const [searchInput, setSearchInput] = useState('');
  const [shows, setShows] = useState([]);
  const [searched, setSearched] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentFocus, setCurrentFocus] = useState('');

  function getMovieResults() {
    setLoading(true);
    setSearched(true);
    axios.get(`http://api.tvmaze.com/shows/1/episodes`).then((response) => {
      setShows(response.data);
      setLoading(false);
    });
  }

  useEffect(() => {
    getMovieResults();
  }, []);

  let renderItem = ({ item, index }) => {
    return (
      <View style={styles.renderView}>
        <TouchableOpacity style={styles.mediaTouchable} accessibilityLabel={'details_media_section'}>
          {item.image ? (
            <Image source={{ uri: item.image.original }} style={styles.mediaLogo} testID={'details_media_logo'} accessibilityLabel={'details_media_logo'} />
          ) : (
            <Image source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }} style={styles.mediaLogo} testID={'details_media_logo'} accessibilityLabel={'details_media_logo'} />
          )}
          {/* <View style={{ flex: 1 }}>
            <Text numberOfLines={1} style={styles.itemText} accessibilityLabel={'details_media_text'}>
              {item.name}
            </Text>
          </View> */}
        </TouchableOpacity>
      </View>
    );
  };

  const formatData = (data, numColumns) => {
    const numberOfFullRows = Math.floor(data.length / numColumns);

    let numberOfElementsLastRow = data.length - numberOfFullRows * numColumns;
    while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
      data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
      numberOfElementsLastRow++;
    }
    return data;
  };

  updateFocus = (value) => {
    setCurrentFocus(value);
  };

  return (
    <>
      <HeaderComponent title="Discover"></HeaderComponent>
      <View style={styles.mainView}>
        <View style={[styles.feedbackBox]}>
          <Image source={require('../../../assets/icons/Search.png')} style={[styles.inputBoxImage]}></Image>
          <TextInput
            name="email"
            onFocus={() => updateFocus('search')}
            onBlur={() => updateFocus('')}
            onChangeText={(val) => setSearchInput(val)}
            placeholder="Search Recipes"
            style={styles.inputBox}
          ></TextInput>
        </View>
        <FlatList data={formatData(shows, 2)} style={styles.flatListStyle} numColumns={2} keyExtractor={(item, index) => index} renderItem={renderItem} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
    paddingLeft: 16,
    paddingRight: 16,
  },
  renderView: {
    flex: 1,
    // padding: 5,
    margin: 9,
    marginBottom: 10,
  },
  flatListStyle: {
    marginTop: 10,
    paddingBottom: 20,
  },
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 2,
  },
  inputBox: {
    backgroundColor: '#424344',
    height: 50,
    borderRadius: 5,
  },
  item: {
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    margin: 2,
    // height: Dimensions.get('window').width / 20, // approximate a square
    borderRadius: 5,
    padding: 5,
    borderColor: 'white',
  },
  itemInvisible: {
    backgroundColor: 'red',
  },
  mediaTouchable: {
    flex: 1,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },
  itemText: {
    textAlign: 'center',
    color: 'white',
    position: 'absolute',
    bottom: 0,
    fontSize: 15,
    backgroundColor: 'black',
    width: '100%',
  },
  notFound: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mediaLogo: {
    height: 188,
    resizeMode: 'cover',
    flex: 1,
    borderRadius: 8,
  },
  feedbackBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#EBF0FF',
    borderRadius: 5,
    height: 50,
    borderWidth: 1,
    paddingLeft: 10,
    marginLeft: 4,
    marginRight: 4,
  },
  inputBoxImage: {
    height: 24,
    width: 24,
    tintColor: '#fd8061',
  },
  inputBox: {
    flex: 1,
    paddingLeft: 10,
  },
  mb8: {
    marginBottom: 8,
  },
});
