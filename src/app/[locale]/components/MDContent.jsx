'use client'

import ReactMarkdown from 'react-markdown'

function MDContent({content}) {
  return (
    <div className='[&_h3]:mb-4 [&_h3]:text-xl [&_p]:mb-3 [&_ul]:mb-3 [&_li]:list'>
        <ReactMarkdown>{content}</ReactMarkdown>
    </div>
  )
}

export default MDContent