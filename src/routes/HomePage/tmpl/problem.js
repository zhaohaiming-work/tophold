import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import { Icon } from 'antd'
import '../style'
import data from '../data/problem'
import { history } from 'func'
@inject('xswap')
@observer
class App extends React.Component {
  static propTypes = {
    xswap: PropTypes.object
  }
  skip = () => {
    const { xswap } = this.props
    const { type } = xswap
    history.push(`/index/faq/${type}`)
  }
  render () {
    const { xswap } = this.props
    const { type } = xswap
    // console.log(type)
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    const date = now.getDate()

    return (
      <div className='fragment-container'>
        <h1>{type === 'ch' ? '常见问题' : 'FAQ'}</h1>
        <ul className='problem'>
          {
            data.map(v => {
              return (
                <li key={v.index}>
                  <div className='left'>
                    <span>{+date < 10 ? `0${date}` : date}</span>
                    <p>{`${year}/${+month > 10 ? month : `0${month}`}`}</p>
                  </div>
                  <div className='right'>
                    <span>{type === 'ch' ? v.chName : v.enName}</span>
                    <p>{type === 'ch' ? v.chConent : v.enConent}</p>
                  </div>
                </li>
              )
            })
          }
        </ul>
        <div className='text-center'>
          <Icon type='caret-down' onClick={this.skip}
            style={{ fontSize: 20, cursor: 'pointer', color: '#6E6A6A' }}
            title='更多'
          />
        </div>
      </div>
    )
  }
}
export default App
