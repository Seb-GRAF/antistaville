import React from 'react'

const PostCard = ({ post, children }) => {
  return (
    <article>
      <h3 className='mb-4 text-xl font-bold'>{post.title}</h3>
      <div className=''>{children}</div>
    </article>
  )
}

export default PostCard
