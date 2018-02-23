/*
* created by lu.yixin on 2018/02/23
*/

import React, { Component } from 'react'

import './header.less'

const icons = [
  {
    id: 0,
    icon: 'icon-yinyue'
  },
  {
    id: 1,
    icon: 'icon-changpian'
  },
  {
    id: 2,
    icon: 'icon-duorenyonghu'
  }
]

class Header extends Component {
  constructor () {
    super()
    this.state = {
      activeItemId: 1
    }
  }

  attachClassName (id, className) {
    return ('iconfont ' + className + (id === this.state.activeItemId ? ' active' : ''))
  }

  switchActiveMod (id) {
    if (id === this.state.activeItemId) return
    this.setState({
      activeItemId: id
    })
  }

  render () {
    const iconItem = icons.map((a, i) => (
      <i className={this.attachClassName(a.id, a.icon)} key={i} aria-hidden="true" onClick={this.switchActiveMod.bind(this, a.id)}></i>
    ))
    // console.log(iconItem)
    return (
      <div className="component-header">
        <i className="iconfont icon-hanbaocaidan left" aria-hidden="true"></i>
        { iconItem }
        <i className="iconfont icon-xingzhuang right" aria-hidden="true"></i>
      </div>
    )
  }
}

export default Header
