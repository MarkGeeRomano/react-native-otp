import React from 'react'
import { View } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'
import firebase from 'firebase'

const ROOT_URL = 'https://us-central1-one-time-pw-f02ca.cloudfunctions.net/'

class SignInForm extends React.Component {
  state = { phone: '18603719093', code: '' }

  handleSubmit = async () => {
    const opts = {
      method: 'POST',
      body: JSON.stringify({ ...this.state }),
      headers: { "Content-Type": "application/json" }
    }

    try {
      const { token } = await (await fetch(ROOT_URL + '/verifyOTP', opts)).json()
      firebase.auth().signInWithCustomToken(token)
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <View>

        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
        </View>

        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Code</FormLabel>
          <FormInput
            value={this.state.code}
            onChangeText={code => this.setState({ code })}
          />
        </View>
        <Button title="Submit" onPress={this.handleSubmit} />

      </View>
    )
  }
}

export default SignInForm