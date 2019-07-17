import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import { message, Modal } from 'antd'
import '../style'
import api from 'api'
let timer = null
@inject('xswap')
@observer
class App extends React.Component {
  static propTypes = {
    xswap: PropTypes.object
  }
  state = {
    phone: '',
    phone_code: '',
    password: '',
    password_confirmation: '',
    codeState: false,
    num: 30
  }
  change = e => {
    // console.log(e.target.dataset)
    const { type } = e.target.dataset
    this.setState({
      [type]: e.target.value
    })
  }
  reg = () => {
    const phoneReg = /(^1[1-9]\d{9}$)|(^09\d{8}$)/
    const { phone, password } = this.state
    const pc = this.state.password_confirmation
    const phoneCode = this.state.phone_code
    if (phone === '') {
      message.info('请填写手机号')
      return
    }
    if (phoneCode === '') {
      message.info('请填写验证码')
      return
    }
    if (password === '') {
      message.info('请填写密码')
      return
    }
    if (pc === '') {
      message.info('请重复密码')
      return
    }
    if (!phoneReg.test(phone)) {
      message.info('手机号格式不正确')
      return
    }
    if (password !== pc) {
      message.info('密码输入不一致')
      return
    }
    api.register({
      phone,
      phone_code: phoneCode,
      password,
      password_confirmation: pc,
      phone_country_code: 'cn'
    })
      .then(res => {
        message.success('注册成功')
        this.setState({
          phone: '',
          phone_code: '',
          password: '',
          password_confirmation: '',
        })
      })
      .catch(res => {
        // console.log(res)
        message.error('注册失败,请检查信息填是否正确')
      })
  }
  sendCode = () => {
    const { phone } = this.state
    if (phone === '') {
      message.info('请填写手机号')
      return
    }
    const obj = {
      k: phone,
      phone_country_code: 'cn',
    }
    api.captchaUrl(obj)
      .then(res => {
        // console.log(res)
        this.setState({
          codeState: true
        }, this.starTime)
        this.inputCode(res.authUrl)
      })
      .catch(() => message.error('发送失败'))
  }
  inputCode = (url) => {
    let code = ''
    const change = e => (code = e.target.value)
    const { phone } = this.state
    const confirm = () => {
      // console.log(code)
      const obj = {
        phone,
        phone_country_code:'cn',
        captcha_code:code
      }
      if (code) {
        api.sendCode(obj)
          .then(res => {
            // console.log(res)
            message.success('发送成功,请注意查看手机')
          })
          .catch(() => message.error('发送失败'))
      }
    }
    Modal.confirm({
      title: '请输入验证码',
      content: (
        <div className='input-code'>
          <img src={url} alt='' />
          <input type='text' placeholder='请输入左侧验证码' onChange={change} />
        </div>
      ),
      okText: '确认',
      cancelText: '取消',
      onOk:confirm
    })
  }
  starTime = () => {
    timer = setInterval(() => {
      let { num } = this.state
      if (num < 1) {
        clearInterval(timer)
        this.setState({ codeState: false })
      } else {
        this.setState({
          num: num -= 1
        })
      }
    }, 1000)
  }
  componentWillUnmount () {
    clearInterval(timer)
  }
  render () {
    const { xswap } = this.props
    const { type } = xswap
    const { phone, password, codeState, num } = this.state
    // console.log(type)
    return (
      <div className='register'>
        <div className='mask' />
        <h3>{type === 'ch' ? '注册' : 'Register'}</h3>
        <section className='register-list'>
          <label htmlFor='phone'>{type === 'ch' ? '手机号' : 'Phone'}</label>
          <input type='text' id='phone' data-type='phone' onChange={this.change} value={phone} />
        </section>
        <section className='register-list'>
          <label htmlFor='yzm'>{type === 'ch' ? '验证码' : 'Verify Code'}</label>
          <input type='text' id='yzm' onChange={this.change} data-type='phone_code' value={this.state.phone_code} />
          {
            codeState ? `${num}s` : <span onClick={this.sendCode}>{type === 'ch' ? '获取验证码' : 'Request'}</span>
          }
        </section>
        <section className='register-list'>
          <label htmlFor='Password'>{type === 'ch' ? '密码' : 'Password'}</label>
          <input type='password' id='Password' onChange={this.change} data-type='password' value={password} />
        </section>
        <section className='register-list'>
          <label htmlFor='Repeat'>{type === 'ch' ? '重复密码' : 'Repeat Password'}</label>
          <input type='password' id='Repeat' onChange={this.change} data-type='password_confirmation'
            value={this.state.password_confirmation} />
        </section>
        <button onClick={this.reg}>{type === 'ch' ? '注册送$33赠金' : 'Register for $33'}</button>
      </div>
    )
  }
}
export default App
