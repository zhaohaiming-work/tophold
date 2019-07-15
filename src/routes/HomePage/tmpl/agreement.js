import React from 'react'
import ReactMarkdown from 'react-markdown'
import strCh from '../data/agreement-ch'
export default () => (
  <div className='pd-25'>
    <ReactMarkdown source={strCh} />
  </div>
)
