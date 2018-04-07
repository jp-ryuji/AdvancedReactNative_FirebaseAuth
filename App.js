import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import firebase from 'firebase';
import SignUpForm from './components/SignUpForm';
import SignInForm from './components/SignInForm';

export default class App extends React.Component {
  componentDidMount() {
    // NOTE: This should be defined somewhere else normally.
    const config = {
      apiKey: "AIzaSyAR8tYoH92S3-0PRnfXCQ7tj0dZmZvP7dE",
      authDomain: "one-time-password-9c427.firebaseapp.com",
      databaseURL: "https://one-time-password-9c427.firebaseio.com",
      projectId: "one-time-password-9c427",
      storageBucket: "one-time-password-9c427.appspot.com",
      messagingSenderId: "983145176677"
    };
    firebase.initializeApp(config);
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm />
        <SignInForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
});
