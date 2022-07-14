import React from 'react'
import Image from 'next/image'

const PostTitle = ({ postTitle }) => {
  return (
    <section className='text-xl'>
      <p className='mb-2 text-mint-500 font-semibold lg:text-2xl'>
        <span className='sr-only'>catégorie :</span>
        <span>{postTitle.category}</span>
      </p>
      <h2 className='mb-6 font-bold text-3xl lg:text-5xl tracking-tight'>
        {postTitle.title}
      </h2>
      <p className='mb-4 lg:text-2xl'>{postTitle.description}</p>
      <p className='mb-10 lg:mb-16 text-gray-700 text-base'>
        Publié le <time dateTime='06.04.2022'>{postTitle.publishedAt}</time> ·
        Mis à jour le <time dateTime='08.04.2022'>{postTitle.updatedAt}</time>
      </p>
      <figure className='lg:mb-10 lg:w-[130%] lg:-translate-x-[11%]'>
        <Image
          src={postTitle.image}
          alt={postTitle.imageAlt}
          priority={true}
          layout='responsive'
          height={544}
          width={816}
          className='rounded-lg'
        />

        <figcaption className='mt-3 text-sm'>
          {postTitle.imageCaption}
        </figcaption>
      </figure>
    </section>
  )
}

export default PostTitle
