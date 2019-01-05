import React from 'react';
import { StyleSheet, View } from 'react-native'
import firebase from 'firebase'
import SignUpForm from './components/SignUpForm'
import SignInForm from './components/SignInForm'

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyAe6UCmfcUsYqOmLz7kYbVh631kjPc-SBA',
      authDomain: 'one-time-pw-f02ca.firebaseapp.com',
      databaseURL: 'https://one-time-pw-f02ca.firebaseio.com',
      projectId: 'one-time-pw-f02ca',
      storageBucket: 'one-time-pw-f02ca.appspot.com',
      messagingSenderId: '1066766529453'
    }

    firebase.initializeApp(config)
  }

  render() {
    return (
      <View style={styles.container}>
        <SignUpForm/>
        <SignInForm/>
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
