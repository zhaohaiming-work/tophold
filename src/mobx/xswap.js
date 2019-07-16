import { observable, action } from 'mobx'
// import Api from 'api'
class Store {
  @observable type = 'ch'
  @action changeType = (type) => {
    this.type = type
  }
}

export default new Store()
