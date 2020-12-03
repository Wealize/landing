import React from 'react'

import SimpleCard from '../components/Cards/Simple'
import RoundedCard from '../components/Cards/Rounded'
import projects from '../data/projects'
import { CardRounded } from '../interfaces/CardRounded'

const Index = (): JSX.Element => (
  <>
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
