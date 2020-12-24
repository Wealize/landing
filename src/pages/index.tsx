import React from 'react'

import projectsData from '../data/projectsData'
import SimpleCard from '../components/Cards/Simple'
import RoundedCard from '../components/Cards/Rounded'
import { CardRounded } from '../interfaces/Cards/CardRounded'
import HomeSpecial from '../components/HomeSpecial'
import Partners from '../components/Partners'
import { LayoutOptions } from '../interfaces/Page'

const Index = (): JSX.Element => (
  <>
    <HomeSpecial />

    <SimpleCard>
      We are a digital product studio with the upper hand in blockchain,
      conversational agents, cognitives services, mobile apps and web
      development
    </SimpleCard>

    <section>
      {projectsData.map((project: CardRounded, index: number) => (
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
    </section>

    <Partners />
  </>
)

export const getStaticProps = async (): Promise<{
  props: { layoutOptions: LayoutOptions }
}> => {
  const layoutOptions: LayoutOptions = {
    showFooter: true,
    showNavigationBarClosablePage: false
  }

  return { props: { layoutOptions } }
}

export default Index
