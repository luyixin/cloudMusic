import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default class Header extends Component {
  render () {
    const { navigate } = this.props.navigation

    return (
      <View style={styles.container}>
        <Button title="Go to Test" onPress={() => navigate('Test')}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    backgroundColor: '#D33A32'
  }
})
