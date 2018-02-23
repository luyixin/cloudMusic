/*
* created by lu.yixin on 2018/02/23
*/

import React, { Component } from 'react'

import './header.less'

class Header extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div className="component-header">
        <i className="fa fa-navicon left" aria-hidden="true"></i>
        <i className="fa fa-music" aria-hidden="true"></i>
        <i className="fa fa-mixcloud active" aria-hidden="true"></i>
        <i className="fa fa-user-o" aria-hidden="true"></i>
        <i className="fa fa-search right" aria-hidden="true"></i>
      </div>
    )
  }
}

export default Header
