import React, { Component } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import Header from './components/header'

export default class Main extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header/>
        <Button title="Go to Test" onPress={() => this.props.navigation.navigate('Test')}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D33A32'
  }
})
