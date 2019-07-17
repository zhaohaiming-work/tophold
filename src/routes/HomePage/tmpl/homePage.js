import React from 'react'
// import { observer, inject } from 'mobx-react'
// import PropTypes from 'prop-types'
// import { Button, Tag } from 'antd'
import '../style'
import Banner from './banner'
import Customer from './customer'
import Have from './have'
import Brief from './brief'
import Footer from './footer'
import Problem from './problem'
import Partners from './partners'
class App extends React.Component {
  render () {
    return (
      <div className='xswap'>
        <Banner />
        <Customer />
        <Have />
        <Brief />
        <Problem />
        <Partners />
        <Footer />
      </div>
    )
  }
}
export default App
