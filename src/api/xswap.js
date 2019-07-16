import { ajax } from './'
class Xhr {
  register = (postData = {}) => (
    ajax.post('/api/v2/users', postData)
  )
  sendCode = (postData = {}) => (
    ajax.post('/api/v2/sms/reg_code', postData)
  )
}

export default new Xhr()
