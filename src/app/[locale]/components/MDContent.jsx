'use client'

import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

function MDContent({content}) {
  return (
    <div className='[&_h3]:mb-4 [&_h3]:text-xl [&_h4]:my-6 [&_p]:mb-3 [&_ul]:mb-3 [&_li]:list [&_table]:table [&_tr]:border-b [&_td]:py-2 [&_td]:min-w-40 [&_td]:text-left'>
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </div>
  )
}

export default MDContent