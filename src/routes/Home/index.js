import React from 'react'
import './home.scss'
import { history } from 'func'
class App extends React.Component {
  constructor (props) {
    super(props)
    history.push('/index')
  }
  render () {
    return (
      <React.Fragment>

      </React.Fragment>
    )
  }
}

export default App
