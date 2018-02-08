import React, { Component } from 'react'
import { StackNavigator } from 'react-navigation'
import Main from './src/Main'
import Test from './src/Test'

const RootStack = StackNavigator(
{
  Home: {screen: Main},
  Test: {screen: Test}
},
{
  initialRouteName: 'Home'
}
)

export default class App extends Component {
  render () {
    return <RootStack />
  }
}
