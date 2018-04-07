import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { FormLabel, FormInput, Button } from 'react-native-elements';
import axios from 'axios';

// NOTE: This should be defined somewhere else normally.
const ROOT_URL = 'https://us-central1-one-time-password-9c427.cloudfunctions.net';

class SignUpForm extends Component {
  // NOTE: ES2017 style.
  state = { phone: '' };
  // NOTE: ES2016 style. This is equivalent to the above.
  // constructor(props) {
  //   super(props);

  //   this.state = { phone: '' };
  // }


  // NOTE: With ES2017, the arrow function takes care of 'this'.
  //   So you don't need to use bind(this).
  //   Then you can write this.handleSubmit instead of this.handleSubmit.bind(this).
  //   But if you write like handleSubmit() {..}, you should write this.handleSubmit.bind(this).
  // NOTE: async/await is a feature from ES2016. It's a syntax sugar and ), you don't need to write a `then` clause with this.
  //   The lines below with await are executed sequentially.
  handleSubmit = async () => {
    try {
      await axios.post(`${ROOT_URL}/createUser`, { phone: this.state.phone });
      await axios.post(`${ROOT_URL}/requestOneTimePassword`, { phone: this.state.phone });
    } catch (err) {
      console.log(err);
    }
  }

  // NOTE: onChangeText is from react-native-elements.
  render() {
    return (
      <View>
        <View style={{ marginBottom: 10 }}>
          <FormLabel>Enter Phone Number</FormLabel>
          <FormInput
            value={this.state.phone}
            onChangeText={phone => this.setState({ phone })}
          />
          <Button onPress={this.handleSubmit} title="Submit" />
        </View>
      </View>
    );
  }
}

export default SignUpForm;
