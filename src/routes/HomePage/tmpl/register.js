import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
// import { Tooltip } from 'antd'
import '../style'
import api from 'api'
@inject('xswap')
@observer
class App extends React.Component {
  static propTypes = {
    xswap: PropTypes.object
  }
  state = {
    phone: '',
    captcha_code: '',
    password: '',
    password_confirmation: ''
  }
  change=e => {
    console.log(e.target.dataset)
    const { type } = e.target.dataset
    this.setState({
      [type]:e.target.value
    })
  }
  render () {
    const { xswap } = this.props
    const { type } = xswap
    // console.log(type)
    return (
      <div className='register'>
        <div className='mask' />
        <h3>{type === 'ch' ? '注册' : 'Register'}</h3>
        <section className='register-list'>
          <label htmlFor='phone'>{type === 'ch' ? '手机号' : 'Phone'}</label>
          <input type='text' id='phone' data-type='phone' onChange={this.change} />
        </section>
        <section className='register-list'>
          <label htmlFor='yzm'>{type === 'ch' ? '验证码' : 'Verify Code'}</label>
          <input type='text' id='yzm' onChange={this.change} data-type='captcha_code' />
          <span>{type === 'ch' ? '获取验证码' : 'Request'}</span>
        </section>
        <section className='register-list'>
          <label htmlFor='Password'>{type === 'ch' ? '密码' : 'Password'}</label>
          <input type='password' id='Password' onChange={this.change} data-type='password' />
        </section>
        <section className='register-list'>
          <label htmlFor='Repeat'>{type === 'ch' ? '重复密码' : 'Repeat Password'}</label>
          <input type='password' id='Repeat' onChange={this.change} data-type='password_confirmation' />
        </section>
        <button>{type === 'ch' ? '注册送$33赠金' : 'Register for $33'}</button>
      </div>
    )
  }
}
export default App
