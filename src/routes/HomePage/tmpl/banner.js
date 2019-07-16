import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
// import { Tooltip } from 'antd'
import '../style'
import bg from 'img/bg-1'
import logo from 'img/logo.png'
import english from 'img/english'
import china from 'img/china'
import down from 'img/down-load'
import zc from 'img/zc'
import khzj from 'img/icon_33zj'
import rjzj from 'img/rj-zj'
import js from 'img/js'
import Register from './register'

const bannerStyle = {
  background: `url(${bg}) center no-repeat`,
  backgroundSize: 'cover'
}
@inject('xswap')
@observer
class App extends React.Component {
  static propTypes = {
    xswap: PropTypes.object
  }
  change = (e) => {
    const { type } = e.target.dataset
    const { xswap } = this.props
    const { changeType } = xswap
    changeType(type)
  }
  render () {
    const { xswap } = this.props
    const { type } = xswap
    // console.log(type)
    return (
      <div className='xswap-banner' style={bannerStyle}>
        <div className='xswap-banner-logo'>
          <div>
            <img src={logo} alt='' className='logo' />
          </div>
          <div>
            <img src={english} alt='' className='pr-20'
              data-type='en' onClick={this.change} title='English' />
            <img src={china} alt='' data-type='ch' onClick={this.change} title='切换成中文' />
          </div>
        </div>
        <div className='xswap-banner-center'>
          <div className='blank' />
          <div className='trade'>
            {type === 'ch' ? <h2>交易无边界</h2> : <div className='font-25'>Freely Trade Everything</div>}

            <span>
              {type === 'ch' ? '最先进的货币对保证金永续掉期交易平台' : 'Collateralized Perpetual Swaps'}</span>
            <p>
              {type === 'ch' ? '区块链技术保障用户点对点低成本透明交易全球产品' : 'Deposit digital currencies  P2P trading platform'}</p>
          </div>
          <img src={down} alt='' />
          <Register />
        </div>
        <ul className='xswap-banner-business'>
          <li>
            <img src={zc} alt='' />
            <p>{type === 'ch' ? '10秒注册' : '10 seconds to register'}</p>
          </li>
          <li>
            <img src={khzj} alt='' />
            <p>{type === 'ch' ? '开户送33赠金' : '$33 bonus reward'}</p>
          </li>
          <li>
            <img src={rjzj} alt='' />
            <p>{type === 'ch' ? '入金100%赠金(可抗亏损)' : '100% bonus fist deposit'}</p>
          </li>
          <li>
            <img src={js} alt='' />
            <p>{type === 'ch' ? '世界第一家受监管的加密货币PAX结算'
              : 'PAX settlement (the first regulated cryptocurrency)'}</p>
          </li>
        </ul>
      </div>
    )
  }
}
export default App
