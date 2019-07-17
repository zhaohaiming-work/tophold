import React from 'react'
// import { observer, inject } from 'mobx-react'
import PropTypes from 'prop-types'
// import { Button, Tag } from 'antd'
import '../style'
import faqch from '../data/faq-ch'
import faqen from '../data/faq-en'
import ReactMarkdown from 'react-markdown'

const App = ({ match }) => {
  // console.log(match)
  const { type } = match.params
  return (
    <div className='markdown-container'>
      {/* <div>常见问题</div> */}
      <ReactMarkdown source={type === 'ch' ? faqch : faqen} />
    </div>
  )
}
App.propTypes = {
  match: PropTypes.object
}
export default App
