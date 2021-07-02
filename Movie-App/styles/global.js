import { StyleSheet } from 'react-native';


export const GlobalStyles = StyleSheet.create({
    container: {
        padding: 25,
        paddingBottom: 10,
        flex: 1,
        backgroundColor: 'white'
    },
    titleText: {
        fontFamily: 'Roboto-Regular',
        fontSize: 18,
        textTransform: 'capitalize'
    },
    textInputs: {
        borderWidth: 1,
        borderColor: '#ddd',
        padding: 10,
        fontSize: 18,
        borderRadius: 8,
        marginTop: 10,
    }
})

export const HeartIcons = {
    ratings: {
        '1': require('../assets/images/rating-1.png'),
        '2': require('../assets/images/rating-2.png'),
        '3': require('../assets/images/rating-3.png'),
        '4': require('../assets/images/rating-4.png'),
        '5': require('../assets/images/rating-5.png'),
    }
}