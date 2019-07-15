import { observable, action } from 'mobx'
// import Api from 'api'
class Store {
  @observable type = 'ch'

  @action changeType = () => {
    const type = this.type
    console.log(type)
    this.type = type === 'ch' ? 'en' : 'ch'
  }
}

export default new Store()
