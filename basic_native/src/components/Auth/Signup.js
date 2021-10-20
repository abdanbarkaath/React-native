// import { Form, Input, Item } from 'native-base';
import React, { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { tailwind } from 'react-native-tailwindcss';

export default function SignUp() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [user, setUser] = useState({ username: '', email: '', password: '', rePassword: '' });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [currentFocus, setCurrentFocus] = useState('');

  useEffect(() => {
    if (isLoggedIn) {
      Actions.home();
    }
  }, []);

  gotoLogin = () => {
    Actions.login();
  };

  updateFocus = (value) => {
    setCurrentFocus(value);
  };
  return (
    <View style={styles.container}>
      {/* <Text>hello</Text> */}
      <Image source={require('../../../assets/logos/icon.png')} style={styles.logo}></Image>
      <Text style={styles.headerTitle}>Let's Get Started</Text>
      <Text style={{ marginBottom: 40, color: '#146354' }}>Create A New Account</Text>
      <View style={[styles.feedbackBox, styles.mb8, { borderColor: currentFocus === 'name' ? '#fd8061' : '#EBF0FF' }]}>
        <Image source={require('../../../assets/icons/User.png')} style={[styles.inputBoxImage, { tintColor: currentFocus === 'name' ? '#fd8061' : '#9098B1' }]}></Image>
        <TextInput
          onFocus={() => updateFocus('name')}
          onBlur={() => updateFocus('')}
          onChangeText={(val) => setUser({ ...user, username: val })}
          placeholder="Username"
          style={styles.inputBox}
        ></TextInput>
      </View>
      <View style={[styles.feedbackBox, styles.mb8, { borderColor: currentFocus === 'email' ? '#fd8061' : '#EBF0FF' }]}>
        <Image source={require('../../../assets/icons/Message.png')} style={[styles.inputBoxImage, { tintColor: currentFocus === 'email' ? '#fd8061' : '#9098B1' }]}></Image>
        <TextInput
          onFocus={() => updateFocus('email')}
          onBlur={() => updateFocus('')}
          onChangeText={(val) => setUser({ ...user, email: val })}
          placeholder="Your Email"
          style={styles.inputBox}
        ></TextInput>
      </View>
      <View style={[styles.feedbackBox, styles.mb15, { borderColor: currentFocus === 'password' ? '#fd8061' : '#EBF0FF' }]}>
        <Image source={require('../../../assets/icons/Password.png')} style={[styles.inputBoxImage, { tintColor: currentFocus === 'password' ? '#fd8061' : '#9098B1' }]}></Image>
        <TextInput
          onFocus={() => updateFocus('password')}
          onBlur={() => updateFocus('')}
          onChangeText={(val) => setUser({ ...user, password: val })}
          placeholder="Password"
          style={styles.inputBox}
        ></TextInput>
      </View>
      <View style={[styles.feedbackBox, styles.mb15, { borderColor: currentFocus === 'passwordAgain' ? '#fd8061' : '#EBF0FF' }]}>
        <Image source={require('../../../assets/icons/Password.png')} style={[styles.inputBoxImage, { tintColor: currentFocus === 'passwordAgain' ? '#fd8061' : '#9098B1' }]}></Image>
        <TextInput
          onFocus={() => updateFocus('passwordAgain')}
          onBlur={() => updateFocus('')}
          onChangeText={(val) => setUser({ ...user, rePassword: val })}
          placeholder="Password Again"
          style={styles.inputBox}
        ></TextInput>
      </View>
      <TouchableOpacity style={[styles.submitButton, tailwind.rounded]}>
        <Text style={styles.buttonText}> Sign Up</Text>
      </TouchableOpacity>
      <View style={{ alignItems: 'center' }}>
        <Text style={[styles.accountText, styles.mt8]}>
          Have an account?{' '}
          <Text style={[styles.forgotText]} onPress={gotoLogin}>
            Sign In
          </Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 5,
  },
  logo: {
    width: 72,
    height: 72,
    marginBottom: 20,
  },
  headerTitle: {
    width: 166,
    height: 24,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
    letterSpacing: 0.5,
    color: '#146354',
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
  },
  inputBoxImage: {
    height: 24,
    width: 24,
    // tintColor: '#fd8061',
  },
  inputBox: {
    flex: 1,
    paddingLeft: 10,
    // color: '#424242',
  },
  mb8: {
    marginBottom: 8,
  },
  mt8: {
    marginTop: 8,
  },
  mb15: {
    marginBottom: 15,
  },
  submitButton: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fd8061',
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.39,
    shadowRadius: 8.3,

    elevation: 13,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotText: {
    fontWeight: 'bold',
    color: '#fd8061',
    fontSize: 14,
    letterSpacing: 0.5,
  },
  accountText: {
    color: '#9098B1',
  },
  mt16: {
    marginTop: 16,
  },
});
