/*
* created by lu.yixin on 2018/02/23
*/

import React, { Component } from 'react'
import MusicTabs from '@/components/music/music_components/music_tabs'
import StoreState from '@/store'
import './music.less'

const storeState = new StoreState()

class Music extends Component {
  constructor (props) {
    super(props)
    this.state = {
      activeMod: 0
    }
  }

  render () {
    return (
      <div>
        <MusicTabs activeMod={this.state.activeMod}/>
        123
      </div>
    )
  }
}

export default Music
