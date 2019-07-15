import React from 'react'
import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
import { Button, Tag } from 'antd'
import '../style'
import bg from 'img/bg-1'
const bannerStyle = {
  background: `url(${bg}) center no-repeat`,
  backgroundSize: 'cover'
}
@inject('xswap')
@observer
class App extends React.Component {
  componentDidMount () {
    console.log(this.props)
  }
  change = () => {
    const { changeType } = this.props.xswap
    changeType()
  }
  render () {
    const { type } = this.props.xswap
    return (
      <div className='xswap-banner' style={bannerStyle}>
        {
          type === 'ch' ? '中文' : '英文'
        }
        <button onClick={this.change}>你在我身边，相对无言</button>
      </div>
    )
  }
}
export default App
