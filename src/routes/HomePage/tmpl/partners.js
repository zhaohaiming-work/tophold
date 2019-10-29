import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
// import { Tooltip } from 'antd'
import '../style'
import bo from 'img/cxm'
import capxm from 'img/capxm'
import charter from 'img/charter'
import cmx from 'img/cmx'
import crda from 'img/crda'
import ethereum from 'img/ethereum'
import forex from 'img/forex'
import paxos from 'img/paxos'
import r3 from 'img/r3'
import shift from 'img/shift'
const imgArr = [
  {
    href: 'https://www.cxmtrading.com',
    url: bo
  }, {
    href: 'https://www.capxm.com',
    url: capxm
  }, {
    href: 'https://www.charterprime.com',
    url: charter
  }, {
    href: 'https://www.capxm.com',
    url: cmx
  }, {
    href: 'https://www.corda.net',
    url: crda
  }, {
    href: 'https://www.ethereum.org',
    url: ethereum
  }, {
    href: 'http://www.shiftforex.com',
    url: forex
  }, {
    href: 'https://www.paxos.com',
    url: paxos
  }, {
    href: 'https://www.r3.com',
    url: r3
  }, {
    href: 'https://www.shiftmarkets.com',
    url: shift
  },
]
@inject('xswap')
@observer
class App extends React.Component {
  static propTypes = {
    xswap: PropTypes.object
  }
  skip = e => {
    const { url } = e.target.dataset
    window.open(url)
  }
  render () {
    const { xswap } = this.props
    const { type } = xswap
    // console.log(type)
    return (
      <div className='fragment-container'>
        <h1>{type === 'ch' ? '合作伙伴' : 'Partners'}</h1>
        <ul className='partners-list'>
          {
            imgArr.map((v, i) => {
              return (
                <li key={i}>
                  <img data-url={v.href} onClick={this.skip} src={v.url} alt='' />
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}
export default App
