/*
* created by lu.yixin on 2018/02/22
*/

import React, { Component } from 'react'
import Header from '@/components/header'
import LeftMenu from '@/components/leftMenu'

class Main extends Component {
  constructor () {
    super()
    this.state = {
      activeHeaderId: 2,
      showLeftMenu: false
    }
  }

  iconClick (id) {
    if (id === this.state.activeHeaderId) return
    if (!id) {
      return this.setState({
        showLeftMenu: true
      })
    }
    if (id === 4) return
    this.setState({
      activeHeaderId: id
    })
  }

  test () {
    console.log(1)
  }
  render () {
    return (
      <div onClick={this.test}>
        <Header activeHeaderId={this.state.activeHeaderId} iconClick={this.iconClick.bind(this)}/>
        <LeftMenu showLeftMenu={this.state.showLeftMenu}/>
        main
      </div>
    )
  }
}

export default Main
