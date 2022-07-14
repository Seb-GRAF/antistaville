import React from 'react'

const PostCard = ({ post, children }) => {
  return (
    <article>
      <h3 className='mb-4 text-xl lg:text-2xl font-bold'>{post.title}</h3>
      <div className='text-lg'>{children}</div>
    </article>
  )
}

export default PostCard
