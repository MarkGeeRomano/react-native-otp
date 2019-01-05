import React from 'react'
import { View } from 'react-native'
import { FormLabel, FormInput, Button } from 'react-native-elements'

const ROOT_URL = 'https://us-central1-one-time-pw-f02ca.cloudfunctions.net/'

class SignUpForm extends React.Component {
  state = { phone: '18603719093' }

  handleSubmit = async () => {
    const opts = {
      method: 'POST',
      body: JSON.stringify({ phone: this.state.phone }),
      headers: { "Content-Type": "application/json" }
    }

    try {
      await (await fetch(ROOT_URL + '/createUser', opts)).json()
      await (await fetch(ROOT_URL + '/requestOTP', opts)).json()
    } catch (err) {
      await (await fetch(ROOT_URL + '/requestOTP', opts)).json()
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
          <Button title="Submit" onPress={this.handleSubmit} />
        </View>
      </View>
    )
  }
}

export default SignUpForm