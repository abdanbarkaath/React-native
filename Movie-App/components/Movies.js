import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Cards from '../shared/Cards';
import { GlobalStyles } from '../styles/global'
import axios from 'axios';

export default function Movies({navigation}) {
    const [movies, setMovies] = useState([]);

    useEffect(() => {

        axios.get('https://reactnative.dev/movies.json')
            .then(function (response) {
                setMovies(response.data.movies)
            })
            .catch(function (error) {
                console.log(error);
            });

    }, []);
    function navigateToID(movie) {
        console.log(movie);
        navigation.navigate('SingleMovie', movie)
      }

    return (
        <View style={GlobalStyles.container}>
            <Text>Movies!</Text>
            <FlatList
                style={styles.listContainer}
                keyExtractor={(movie) => movie.id}
                data={movies}
                renderItem={({ item }) =>
                    <TouchableOpacity onPress={() => navigateToID(item)}>
                        <View>
                            <Cards>
                                <Text style={GlobalStyles.titleText}>{item.title}</Text>
                            </Cards>
                        </View>
                    </TouchableOpacity>
                }
            ></FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});