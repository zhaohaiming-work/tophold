import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
// import { Tooltip } from 'antd'
import '../style'
import yongyou from 'img/yongyou'
import tz from 'img/icon_tz'
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
      <div className='fragment-container grey'>
        <h1>{type === 'ch' ? '在xswap你将拥有' : 'In xswap you will have'}</h1>
        <div className='have'>
          <div className='left'>
            <div className='ground-top' />
            <ul>
              <li>
                {type === 'ch' ? 'A、区块链技术保障用户与用户点对点交易，最优价格成交，让交易费用更低。'
                  : 'A、Advanced blockchain technology，Visualize trade patterns，Lowest Cost'}
              </li>
              <li>
                {type === 'ch' ? 'B、货币对、商品期货、股票指数等保证金掉期合约制交易。'
                  : 'B、FX,Stocks,Indices,Commodities virtual margin swaps contract transactions'}
              </li>
              <li>
                {type === 'ch' ? 'C、CXM旗下交易软件，FCA全牌照监管。'
                  : 'C、regulated by the Financial Conduct Authority of the UK (FCA) xswap in partnership with CXM'}
              </li>
            </ul>
            <div className='ground-bottom' />
          </div>
          <div className='invest'>
            <img src={tz} alt='' />
            <span>FINANCIAL</span>
            <p className='font-20'>{type === 'ch' ? '金融投资' : 'Financial investment'}</p>
          </div>
          <img src={yongyou} alt='' />
        </div>
      </div>
    )
  }
}
export default App
