import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Cards from '../shared/Cards';
import { GlobalStyles } from '../styles/global'
import axios from 'axios';
import SkeletonContent from "react-native-skeleton-content";


export default function Movies({ navigation }) {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        axios.get('https://reactnative.dev/movies.json')
            .then(function (response) {
                setMovies(response.data.movies)
                setLoading(false)
            })
            .catch(function (error) {
                console.log(error);
                setLoading(false)
            });

    }, []);
    function navigateToID(movie) {
        console.log(movie);
        navigation.navigate('SingleMovie', movie)
    }

    function skeletonLayot() {
        let obj = { width: '100%', height: 45, marginBottom: 10 };
        let arr = []
        for (let i = 0; i < 10; i++) {
            arr.push(obj);
        }
        return arr;
    };
    return (
        <View style={GlobalStyles.container}>
            <Text>Movies!</Text>
            <SkeletonContent containerStyle={{ flex: 1, marginTop: 10 }} isLoading={loading} layout={skeletonLayot()}>
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
            </SkeletonContent>
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