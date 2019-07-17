import React from 'react'
// import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
// import { Button, Tag } from 'antd'
import '../style'
import agreementch from '../data/agreement-ch'
import agreementen from '../data/agreement-en'
import ReactMarkdown from 'react-markdown'
class App extends React.Component {
  render () {
    const { type } = this.props.match.params
    return (
      <div className='markdown-container'>
        {/* <div>常见问题</div> */}
        <ReactMarkdown source={type === 'ch' ? agreementch : agreementen} />
      </div>
    )
  }
}
App.propTypes = {
  match: PropTypes.object
}
export default App
