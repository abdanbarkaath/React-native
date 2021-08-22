import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Cards from '../shared/Cards';
import { GlobalStyles, HeartIcons } from '../styles/global';


export default function ReviewDetails({ route, navigation }) {
    const { title, body, rating } = route.params
    const image = { uri: "https://reactjs.org/logo-og.png" };
    return (
        <View style={GlobalStyles.container}>
            <Cards>
                <Text style={GlobalStyles.titleText}>{title}</Text>
                <Text>{body}</Text>
                <View style={styles.ratingContainer}>
                    <Text>User Rating</Text>
                    <Image style={styles.hearts} source={HeartIcons.ratings[rating]} />
                </View>
            </Cards>
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
    ratingContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        borderTopColor: '#eee',
        borderTopWidth: 1,
        paddingTop: 15,
        marginTop: 15,
    },
    hearts: {
        marginLeft: 5,
    }
});