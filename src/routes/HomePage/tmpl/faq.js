import React from 'react'
// import { observer, inject } from 'mobx-react'
// import PropTypes from 'prop-types'
// import { Button, Tag } from 'antd'
import '../style'
import faqch from '../data/faq-ch'
import ReactMarkdown from 'react-markdown'

export default () => (
  <div className='markdown-container'>
    <div>常见问题</div>
    <ReactMarkdown source={faqch} />
  </div>
)
