import React, { useState } from 'react';
import { Button, TextInput, Text, View, StyleSheet, Keyboard, TouchableWithoutFeedback, Alert } from 'react-native';
import { set } from 'react-native-reanimated';
import { GlobalStyles } from '../styles/global';


export default function ReviewForms({ addReview }) {
    const [review, setReview] = useState({ title: '', rating: '', body: '' })
    const [errors, setErrors] = useState({ titleError: '', ratingError: '', bodyError: '' })


    const titleValidator = () => {
        if (review.title.length < 3) {
            setErrors((prev) => ({ ...prev, titleError: 'Title cannot be empty' }))
        } else {
            setErrors((prev) => ({ ...prev, titleError: '' }))
        }
    }
    const bodyValidator = () => {
        if (review.body.length < 3) {
            setErrors((prev) => ({ ...prev, bodyError: 'Desription cannot be empty' }))
        } else {
            setErrors((prev) => ({ ...prev, bodyError: '' }))
        }
    }
    const ratingValidator = () => {
        if (review.rating.length < 3) {
            setErrors((prev) => ({ ...prev, ratingError: 'Rating cannot be empty' }))
        } else {
            setErrors((prev) => ({ ...prev, ratingError: '' }))
        }
    }

    const verifyBeforeSubmit = () => {
        if (review.title != '' && review.rating != '' && review.body != '') {
            addReview(review);
        } else {
            Alert.alert('oops', 'Fields cannot be empty', [{
                text: "Ok",
            }])
        }
    }
    return (
        // <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.formContainer}>
            <TextInput placeholder="Enter Title" onBlur={() => titleValidator()} value={review.title} onChangeText={(val) => setReview((prev) => ({ ...prev, title: val }))} style={GlobalStyles.textInputs} />
            <Text style={styles.errors}>{errors.titleError}</Text>
            <TextInput placeholder="Enter Description" onBlur={() => bodyValidator()} value={review.body} onChangeText={(val) => setReview((prev) => ({ ...prev, body: val }))} style={GlobalStyles.textInputs} />
            <Text style={styles.errors}>{errors.bodyError}</Text>
            <TextInput placeholder="Enter Rating[1-5]" onBlur={() => ratingValidator()} value={review.rating} onChangeText={(val) => setReview((prev) => ({ ...prev, rating: val }))} style={GlobalStyles.textInputs} />
            <Text style={styles.errors}>{errors.ratingError}</Text>
            <Button title='Submit' onPress={verifyBeforeSubmit} />
        </View>
        // </TouchableWithoutFeedback>
    )
}
const styles = StyleSheet.create({
    formContainer: {
        padding: 20
    },
    errors: {
        color: 'red',
        fontSize: 14,
        marginTop: 0
    }
})