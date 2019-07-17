import { ajax } from './'
class Xhr {
  register = (postData = {}) => (
    ajax.post('/api/v2/users', postData)
  )
  // 发送验证码
  sendCode = (postData = {}) => (
    ajax.post('/api/v2/sms/reg_code', postData)
  )
  // 验证码链接
  captchaUrl = (postData = {}) => (
    ajax.get('/api/v2/sms/captcha_url', { params: postData })
  )
}

export default new Xhr()
