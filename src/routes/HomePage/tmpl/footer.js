import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
// import { Tooltip } from 'antd'
import '../style'
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
      <div className='footer'>
        <div className='left'>
          <h2>xswap</h2>
          <ul>
            <li>
              {
                type === 'ch' ? `该网站由Pristine Limited有限公司运行。` : `The website is run by Pristine Limited Ltd.`
              }

            </li>
            <li>
              {
                type === 'ch' ? `Pristine Limited注册地址：塞舌尔共和国`
                  : `Pristine Limited registered address：Republic of Seychelles`
              }
            </li>
            <li>
              {
                type === 'ch' ? `Pristine Limited监管编号：212516`
                  : `Pristine Limited Regulation Number：212516`
              }
            </li>
            <li>{
              type === 'ch' ? `如果您对我们有任何疑问，请通过邮件help@xswap.io联系我们。`
                : `If you have any questions ，please contact us by email:   help@xswap.io`
            } </li>
            <li>{
              type === 'ch' ? `风险提示: 掉期交易对于您的投资资本含有风险，请确保您已经通读并完全理解了我们的风险披露。`
                : `Risk Disclaimer: Collateralized perpetual swaps has some sort of risk，
                Please ensure that you have read through and fully understand our risk disclosure.`
            }</li>
            <li>© 2019 xswap {type === 'ch' ? '版权所有' : 'copyright'}</li>
          </ul>
        </div>
        <div className='right'>
          <div>
            <a href=''>{type === 'ch' ? '隐私政策' : 'PRIVACY POLICY'}</a>
            <a href=''>{type === 'ch' ? '用户协议' : 'USER AGREEMENT'}</a>
          </div>
          <h3>投资有风险,入市需谨慎</h3>
          <ul>
            <li>交易产品属于高风险、高收益投资品种；</li>
            <li>投资者应具有较高的风险识别能力、资金实力与风险承受能力。</li>
            <li>投资者应合理配置资产、不应用全部资金做投资，不应借钱来做投资</li>
          </ul>
        </div>
      </div>
    )
  }
}
export default App