import React, { Component } from 'react'
import { Alert, Button, ScrollView, Text, TextInput } from 'react-native'
import { StyleSheet } from 'react-native'

export default class Signin extends Component {
  constructor (props) {
    super(props)

    this.state = {
      email: '',
      password: '',
    }
  }

  onSubmit () {
    const { email, password } = this.state
    Alert.alert(email, password)
  }

  render () {
    const { email, password } = this.state
    return (
      <ScrollView style={styles.view}>
        <Text style={styles.text}>
          Signin
        </Text>

        <TextInput
          style={styles.input}
          keyboardType='email-address'
          placeholder='email'
          name='email'
          value={email}
          onChangeText={ email => this.setState({email}) } />

        <TextInput
          style={styles.input}
          keyboardType='default'
          placeholder='password'
          name='password'
          value={password}
          onChangeText={ password => this.setState({password}) } />

        <Button title='Signin' onPress={ this.onSubmit.bind(this) } />
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create(
  {
    view: {
      padding: 30,
      paddingTop: 100,
    },
    text: {
      fontSize: 22,
    },
    input: {
      fontSize: 22,
    },
  }
)
