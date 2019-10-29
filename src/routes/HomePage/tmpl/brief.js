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
                type === 'ch' ? `xswap是CXM（希盟）集团旗下一家技术供应商，将CXM集团丰富的交易品种带给更多中小个人用户。
                CXM集团包括CXM Trading (SV) 和CXM Prime(UK)公司。
                CXM Trading (SV)地址位于文森特和格林纳丁斯金斯敦Suite 305, Griffith Corporate Center, Beachmont Kingstown, Saint Vincent and the Grenadines金融中心（公司代码：24912）；
                CXM Prime (UK)是Alchemy Prime Limited的注册商标，Alchemy Prime Limited是一家位于英格兰和威尔士由FCA监管的公司，
                监管号612233。该办公室位于13 Leyden Street, London E1 7LE。
                CXM精英云集，团队成员来自美国、亚太、东欧等地区的全球前十券商，拥有精湛的技术与过硬的口碑，提供所有主流交易品种。
                CXM采用真正的STP/ECN技术，和一级银行和主标保持深度合作关系，为客户提供充沛的市场流动性，可满足对交易环境要求最高的客户群体需求。
                了解更多关于CXM，请访问：https://www.cxmtrading.com
                `
                  : `Xswap is a technology provider of the CXM Group,
                   bringing the rich products of CXM Group to more small and medium-sized individuals. 
                   The CXM Group companies include CXM Trading (SV) and CXM Prime (UK).
                    CXM Trading (SV) has it's business address at Suite 305,
                     Griffith Corporate Center,
                      Beachmont Kingstown, Saint Vincent and the Grenadines with the The Financial Services Centre at Stoney Ground,
                       Kingstown，St. Vincent & the Grenadines （company number 24912 IBC） ; 
                       CXM Prime is a trading name of Alchemy Prime Limited (a company registered in England and Wales authorized and regulated by the Financial Conduct Authority of the UK (FCA) under firm reference no 612233).
                        The UK offices is located at 13 Leyden Street, London E1 7LE United Kingdom. 
                        CXM gathers elites, the team members from the United States, Asia Pacific, Eastern Europe and other regions of the world's top 10 brokers,
                         with superb technology and excellent reputation, providing all major trading varieties. 
                         CXM's STP/ECN technology and great relationships with tier one banks and prime brokers enabled them to provide deep custom liquidity,
                          capable of handling the needs of even most sophisticated clients.
                           CXM Trading has earned a solid reputation as a reliable institutional broker.
                  To learn more about CXM, please visit: https://www.cxmtrading.com
                  `
              }
            </p>
          </div>
        </div>
      </div>
    )
  }
}
export default App
