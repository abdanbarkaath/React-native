import React from 'react';
import { Button, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import { GlobalStyles } from '../styles/global';
import Provider from 'react-redux'
import store from '../redux/store'

export const MyReactNativeForm = (props) => (
    <Provider store={store}>
        <View>
            <Formik initialValues={{ title: '', rating: '', body: '' }} onSubmit={values => console.log(values)}>
                {({ handleChange, handleBlur, handleSubmit, values }) => (
                    <View>
                        <TextInput
                            style={GlobalStyles.textInputs}
                            onChangeText={handleChange('title')}
                            onBlur={handleBlur('title')}
                            value={values.title}
                        />
                        <TextInput
                            style={GlobalStyles.textInputs}
                            onChangeText={handleChange('rating')}
                            onBlur={handleBlur('rating')}
                            value={values.rating}
                        />
                        <TextInput
                            style={GlobalStyles.textInputs}
                            onChangeText={handleChange('body')}
                            onBlur={handleBlur('body')}
                            value={values.body}
                        />
                        <Button onPress={handleSubmit} title="Submit" />
                    </View>
                )}
            </Formik>
        </View>
    </Provider>
);