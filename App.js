import React, { Component } from 'react'
import { StyleSheet, View, Button } from 'react-native'
import { StackNavigator } from 'react-navigation'
import Main from './src/Main'
import Test from './src/Test'

const RootStack = StackNavigator({
  Index: {screen: Main},
  Test: {screen: Test}
}, {
  initialRouteName: 'Index',
  headerMode: 'none'
})

export default class App extends Component {
   render() {
    return <RootStack/>
  }
}
