import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
// import { Tooltip } from 'antd'
import '../style'
import briefImg from 'img/jianjie'
// import tz from 'img/icon_tz'
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
        <h1>{type === 'ch' ? 'xswap 简介' : 'About xswap'}</h1>
        <div className='brief'>
          <img src={briefImg} alt='' />
          <div className='brief-right'>
            <h2>{type === 'ch' ? 'xswap交易平台简介' : 'About xswap'}</h2>
            <p>
              {
                type === 'ch' ? `xswap是一家专注于swap合约交易的虚拟交易平台，
                所有产品产生的增值和减值都以稳定币1:1锚定美元计算，
                xswap 不接受法定货币（政府发行的货币），
                并由Pristine Limited全资控股。Pristine Limited
                是一家依据2016年塞舌尔共和国《国际商业公司法》组织成立的公司，
                公司编号212516。Pristine Limited建立于塞舌尔共和国，
                依托于金融科技公司CMX强大的撮合引擎技术以及全球领先区块链技术公司R3的分布式账本技术，
                xswap平台成为了第一个纯粹依靠用户点对点交易的虚拟交易平台，
                我们不是外汇券商，更不是数字货币商，我们只是竭尽所能提供一个尽可能公开透明的平台。`
                  : `The xswap is a virtual trading platform focused on swap contract transactions.
                 All products generate value added and depreciation calculated in stable currency
                  1:1 anchored dollars, xswap does not accept fiat currency (government issued currency),
                 and is fully owned by Pristine Limited. Capital holding.
                Pristine Limited is a company incorporated under the International
                 Business Companies Act of the Republic of Seychelles in 2016,
                  company number 212516. Founded in the Republic of Seychelles, 
                  Pristine Limited is the first virtual transaction to rely solely
                   on user peer-to-peer trading, relying on CMX's powerful trading 
                   and matching engine technology and distributed ledger technology 
                   from R3, the world's leading blockchain technology company.
                    We are not a forex broker, neither a digital currency dealer,
                     we just do everything we can to provide a platform that is as 
                     open and transparent as possible.`
              }
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default App
