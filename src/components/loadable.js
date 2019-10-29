import React from 'react'
// import propTypes from 'prop-types'
// const OverLoadTmpl = <div>loading...</div>
import nprogress from 'nprogress'
class OverLoadTmpl extends React.Component {
  constructor (props) {
    super(props)
    nprogress.start()
  }
  componentWillMount () {
    nprogress.done()
  }
  render () {
    return <div />
  }
}
export default <OverLoadTmpl />
