import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { StyleSheet } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { signin } from '../../../actions/UserActions'

class Home extends Component {
  render () {
    const { user } = this.props
    return (
      <View style={styles.view}>
        <Text style={styles.title}>
          { user.authenticated
            ? 'Hello, User.'
            : 'Hello, Guest.' }
        </Text>
      </View>
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

function mapStateToProps (state) {
  const { user } = state
  return { user, }
}

const mapDispatchToProps = function (dispatch) {
  return bindActionCreators(
    { signin },
    dispatch
  )
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
