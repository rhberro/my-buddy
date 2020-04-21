import React, { Component } from 'react'
import { ScrollView, Text } from 'react-native'
import { StyleSheet } from 'react-native'

export default class Signup extends Component {
  static navigationOptions = {
    title: 'Signup',
  }

  render () {
    return (
      <ScrollView style={styles.view}>
        <Text style={styles.title}>Signup</Text>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create(
  {
    view: {
      padding: 15,
    },
    title: {
      fontSize: 22,
    },
  }
)
