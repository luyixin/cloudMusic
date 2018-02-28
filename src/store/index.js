/*
* ceated by .luyixin on 2018/02/28
*/

import { observable, asReference } from 'mobx'

export default class StoreState {
  @observable activeHeaderId = 1
  @observable activeModId = 0

  setActiveHeaderId (id) {
    this.activeHeaderId = id
  }

  setActiveModId (id) {
    this.activeModId = id
  }
}
