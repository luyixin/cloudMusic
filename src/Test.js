import React, { Component } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

export default class Test extends Component {
  render() {
    return (
      <View style={ styles.container }>
        <Text>TEST</Text>
        <Button title="Go to Home" onPress={() => this.props.navigation.navigate('Index')}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 50,
    backgroundColor: '#cccccc'
  }
})
