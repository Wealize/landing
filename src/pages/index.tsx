import React from 'react'

import projects from '../data/projects'
import SimpleCard from '../components/Cards/Simple'
import RoundedCard from '../components/Cards/Rounded'
import { CardRounded } from '../interfaces/CardRounded'
import HomeSpecial from '../components/HomeSpecial'

const Index = (): JSX.Element => (
  <>
    <HomeSpecial />

    <SimpleCard
      text={
        'We are a digital product studio with the upper hand in blockchain, conversational agents, cognitives services, mobile apps and web development'
      }
    />

    {projects.map((project: CardRounded, index: number) => (
      <RoundedCard
        key={index}
        imageUrl={project.imageUrl}
        title={project.title}
        description={project.description}
        link={project.link}
        tags={project.tags}
        hasPrimary={project.hasPrimary}
      />
    ))}
  </>
)

export default Index
