import React, { Component, useState, useEffect } from 'react'
import { StyleSheet, Text, View, Button, Dimensions, ActivityIndicator, Image, ImageBackground } from 'react-native'
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { TextInput } from 'react-native-paper'
import { connect, Provider } from 'react-redux'
import Cards from '../shared/Cards'
import axios from 'axios';
import { GlobalStyles } from '../styles/global'
import { set } from 'react-native-reanimated';

import SkeletonContent from "react-native-skeleton-content";


// import store from '../redux/store'
// import { AddUserReview } from '../redux/actions/index'

export default function Search({ navigation }) {
    const [searchInput, setSearchInput] = useState('')
    const [shows, setShows] = useState([])
    const [searched, setSearched] = useState(false)
    const [loading, setLoading] = useState(false)

    function getMovieResults() {
        setLoading(true)
        setSearched(true)
        axios.get(`http://api.tvmaze.com/search/shows?q=${searchInput}`).then((response) => {
            setShows(response.data);
            setLoading(false)
        })
    }

    const formatData = (data, numColumns) => {
        const numberOfFullRows = Math.floor(data.length / numColumns);

        let numberOfElementsLastRow = data.length - (numberOfFullRows * numColumns);
        while (numberOfElementsLastRow !== numColumns && numberOfElementsLastRow !== 0) {
            data.push({ key: `blank-${numberOfElementsLastRow}`, empty: true });
            numberOfElementsLastRow++;
        }

        return data;
    };

    let renderItem = ({ item, index }) => {
        if (item.empty === true) {
            return <View style={{ flex: 1, padding: 5 }} />
        }
        return (
            <SkeletonContent containerStyle={{ flex: 1, padding: 5 }} isLoading={loading} layout={[{ width: '100%', height: 180, }]}>
                <View style={{ flex: 1 }}>
                    <TouchableOpacity style={styles.mediaTouchable}
                        accessibilityLabel={'details_media_section'}>
                        {item.show.image ? (
                            <Image
                                source={{ uri: item.show.image.original }}
                                style={styles.mediaLogo}
                                testID={'details_media_logo'}
                                accessibilityLabel={'details_media_logo'}
                            />
                        ) : (
                                <Image
                                    source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
                                    style={styles.mediaLogo}
                                    testID={'details_media_logo'}
                                    accessibilityLabel={'details_media_logo'}
                                />
                            )}
                        <View style={{ flex: 1 }}>
                            <Text
                                numberOfLines={1}
                                style={styles.itemText}
                                accessibilityLabel={'details_media_text'}>
                                {item.show.name}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </SkeletonContent>
        );
    };

    let stillSearchMovie = () => {
        return (
            <View style={styles.notFound}><Text style={{ fontSize: 25, color: 'white' }}>FInd A Show</Text></View>
        )
    }

    return (
        <View style={styles.container}>
            <TextInput style={styles.inputBox} color={'white'} placeholder="Search for a show" value={searchInput} onChangeText={(val) => setSearchInput(val)} onKeyPress={getMovieResults}></TextInput>
            {searched && shows.length > 0 ? <FlatList
                data={formatData(shows, 3)}
                style={{ marginTop: 20, paddingBottom: 20, }}
                numColumns={3}
                keyExtractor={(item, index) => index}
                renderItem={renderItem}
            /> : stillSearchMovie()
            }

        </View >
    );
}

const styles = StyleSheet.create({
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
        padding: 5,
    },
    itemText: {
        textAlign: 'center',
        color: 'white',
        position: 'absolute',
        bottom: 0,
        fontSize: 15,
        backgroundColor: 'black',
        width: '100%'

    },
    notFound: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    mediaLogo: {
        height: 150,
        resizeMode: 'cover',
        flex: 1,
    }
});

// const mapStateToProps = state => {
//     return {
//         reviews: state.reviews.reviews
//     }
// }
// const mapDispatchToProps = dispatch => {
//     return {
//         AddUserReview: (review) => dispatch(AddUserReview(review))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Search)  