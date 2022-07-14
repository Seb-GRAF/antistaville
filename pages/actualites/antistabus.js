import React from 'react'
import {
  Seo,
  Breadcrumbs,
  PostTitle,
  PostCard,
  StyledLink,
  Accordion,
} from '../../components'

const Antistabus = () => {
  const title = "L'Antistabus : une ludothèque sur roues"

  const postTitle = {
    title: 'L’Antistabus : une ludothèque sur roues',
    category: 'Activité extérieure',
    description:
      "Le service de la cohésion sociale propose aux habitantes et habitants d'Antistaville des animations itinérantes et gratuites durant toutes les vacances scolaires d'été.",
    publishedAt: '6 avril 2022',
    updatedAt: '8 avril 2022',
    image: '/actualites/antistabus.jpg',
    imageAlt: "Photo de l'agence Antistatique célébrant leur 10 ans",
    imageCaption: 'Description optionnelle de l’image.',
  }

  const posts = [
    {
      title: 'Nombreux jeux adaptés au plein air',
    },
    {
      title: 'Une équipe accueillante et attentive',
    },
  ]

  const accordionItems = [
    {
      title: 'Faut-il venir habillé en magenta ?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et dolorum doloribus nobis! Quos, iusto. Voluptate consequatur modi odit, quo aliquam odio adipisci deserunt autem accusantium corrupti culpa sunt et.',
    },
    {
      title: 'Est-ce que les chiens sont admis ?',
      description:
        'Oui bien sûr ! Cras justo odio, dapibus ac facilisis in egestas eget quam. Aenean lacinia bibendum nulla sed consectetur. Fusce dapibus tellus ac cursus commodo tortor mauris.',
    },
    {
      title: 'Les jeux sont-ils adaptés aux enfants ?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et dolorum doloribus nobis! Quos, iusto. Voluptate consequatur modi odit, quo aliquam odio adipisci deserunt autem accusantium corrupti culpa sunt et.',
    },
    {
      title: 'Est-ce qu’il y aura des glaces ?',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et dolorum doloribus nobis! Quos, iusto. Voluptate consequatur modi odit, quo aliquam odio adipisci deserunt autem accusantium corrupti culpa sunt et.',
    },
  ]

  return (
    <>
      <Seo title={postTitle.title} description={postTitle.title} />
      <Breadcrumbs crumbs={['Actualités', postTitle.title]} />

      <PostTitle postTitle={postTitle} />
      <section className='flex flex-col gap-10'>
        {posts.map((post, index) => (
          <div key={`index-${index}`}>
            <PostCard post={post}>
              <p>
                L’Antistabus, un véhicule transportant de{' '}
                <StyledLink href={'/'}>nombreux jeux</StyledLink> adaptés aux
                activités de plein air, sillonnera la ville d’Antistaville
                pendant les mois de juillet et d’août afin de proposer des
                moments ludiques pour les petits et les grands. Des{' '}
                <StyledLink href={'/'}>chaises longues</StyledLink> et diverses
                animations garantiront une ambiance conviviale.
              </p>
            </PostCard>
          </div>
        ))}
      </section>
      <section className='pb-6'>
        <h3 className='mb-4 text-xl font-bold'>FAQ</h3>
        <Accordion accordionItems={accordionItems} />
      </section>
    </>
  )
}

export default Antistabus
