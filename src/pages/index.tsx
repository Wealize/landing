import React from 'react'
import useTranslation from 'next-translate/useTranslation'

import projectsData from '../data/projectsData'
import SimpleCard from '../components/Cards/Simple'
import RoundedCard from '../components/Cards/Rounded'
import { CardRounded } from '../interfaces/Cards/CardRounded'
import HomeSpecial from '../components/HomeSpecial'
import Partners from '../components/Partners'
import { LayoutOptions } from '../interfaces/Page'

const Index = (): JSX.Element => {
  const { t } = useTranslation('home')

  return (
  <>
    <HomeSpecial />

    <SimpleCard>
      {t('principal_description')}
    </SimpleCard>

    <section>
      {projectsData.map((project: CardRounded, index: number) => {
        const { t } = useTranslation('common')
        return (
          <RoundedCard
            key={index}
            imageUrl={project.imageUrl}
            title={t(`projects.${project.trans_key}.title`, { title: project.title })}
            description={t(`projects.${project.trans_key}.description`, { description: project.description })}
            link={project.link}
            tags={project.tags.map((tag: string, index: number) => t(`projects.${project.trans_key}.tag-${index}`, { text: tag }))}
            hasPrimary={project.hasPrimary}
          />
        )
      })}
    </section>

    <Partners />
  </>
  )
}


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
