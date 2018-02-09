import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default class Header extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text>Header</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    padding: 20
  }
})

