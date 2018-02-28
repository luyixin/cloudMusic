/*
* created by lu.yixin on 2018/02/23
*/

import React, { Component } from 'react'
import './music_tabs.less'

import { mainTabs } from '@/static/data/tabs'

class MusicTab extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    const tabs = mainTabs.map((a, i) => <span className={`tab-item${this.props.activeMod === a.id ? ' active' : ''}`} key={`tab-${i}`}>{ a.text }</span>)
    return (
      <div className="components-music-tabs">
        { tabs }
      </div>
    )
  }
}

export default MusicTab
