import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
// import { Tooltip } from 'antd'
import '../style'
import cdcb from 'img/chaodichengben'
import whqq from 'img/quanqiu'
import zrsj from 'img/zhenrenshejiao'
import szqb from 'img/shuziqianbao'
@inject('xswap')
@observer
class App extends React.Component {
  static propTypes = {
    xswap: PropTypes.object
  }
  render () {
    const { xswap } = this.props
    const { type } = xswap
    // console.log(type)
    return (
      <div className='fragment-container'>
        <h1>{type === 'ch' ? '客户的青睐' : 'Most customers choices'}</h1>
        <ul className='customer'>
          <li>
            <img src={cdcb} alt='' />
            <span>{type === 'ch' ? '超低成本' : 'Ultra-low spread'}</span>
            <p>{type === 'ch' ? '0手续费，0隐形费用，超低点差' : 'No service charge,No Implicit cost'}</p>
          </li>
          <li>
            <img src={whqq} alt='' />
            <span>{type === 'ch' ? '嗨玩全球' : 'Global trading instrument'}</span>
            <p>{type === 'ch' ? '涵盖全球最有趣的金融产品，1个单位即可随心交易'
              : 'FX,Stocks,Indices,Commodities 1 unit can be traded freely'}</p>
          </li>
          <li>
            <img src={zrsj} alt='' />
            <span>{type === 'ch' ? '真人社交' : 'Real social'}</span>
            <p>{type === 'ch' ? '24小时有趣的的社交聊天，真实榜单高手传授交易技术，交易记录透明'
              : '7/24 fun chating，perfect traders & perfect trading experience，On-chain recordings'}</p>
          </li>
          <li>
            <img src={szqb} alt='' />
            <span>{type === 'ch' ? '极速出入金' : 'Fast deposit and withdrawal'}</span>
            <p>{type === 'ch' ? '多种入金方式，极速出金，资金安全'
              : 'Various deposit methods, quicker withdrawals, and safer funds'}</p>
          </li>
        </ul>
      </div>
    )
  }
}
export default App
