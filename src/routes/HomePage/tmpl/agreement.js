import React from 'react'
import ReactMarkdown from 'react-markdown'
import strCh from '../data/agreement-ch'
import '../style'
export default () => (
  <div className='markdown-container'>
    <div>faq</div>
    <ReactMarkdown source={strCh} />
  </div>
)
