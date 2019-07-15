import React from 'react'
// import { observer, inject } from 'mobx-react'
// import PropTypes from 'prop-types'
// import { Button, Tag } from 'antd'
import '../style'
import Banner from './banner'
class App extends React.Component {
  componentDidMount () {
    // console.log(this.props)
  }
  add = () => {

  }
  render () {
    return (
      <div className='xswap'>
        <Banner />
      </div>
    )
  }
}
export default App
