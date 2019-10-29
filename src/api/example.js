import { ajax } from './'
class Xhr {
  getChainDate = (postData = {}) => (
    ajax.get('/asset2/api/project/chainDateList', { params: postData })
  )
  getqiu = (postData = {}) => (
    ajax.get('/api/hello/finish', { params: postData })
  )
  postqiu = (postData = {}) => (
    ajax.post('/api/hello/say02', postData)
  )
}

export default new Xhr()
