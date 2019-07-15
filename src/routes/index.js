import React from 'react'
import { Route } from 'react-router-dom'
import Counter from './Counter'
import Example from './Example'
// import Home from './HomePage'
export default (
  <React.Fragment>
    {/* <Route exact path='/index' component={Home} /> */}
    <Route exact path='/counter' component={Counter} />
    <Route exact path='/example' component={Example} />
  </React.Fragment>
)
