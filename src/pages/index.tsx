import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'
import dynamic from 'next/dynamic'

import projectsData from '../data/projectsData'
import SimpleCard from '../components/Cards/Simple'
import { CardRounded } from '../interfaces/Cards/CardRounded'
import HomeSpecial from '../components/HomeSpecial'
import { LayoutOptions } from '../interfaces/Page'
import { ContainerProjects } from '../styles/pages/Home'

const Index = (): JSX.Element => {
  const { t, lang } = useTranslation('home')
  const RoundedCard = dynamic(() => import('../components/Cards/Rounded'))
  const Partners = dynamic(() => import('../components/Partners'))

  return (
  <>
    <Head>
      <title>{t('meta_title')}</title>
      <meta
        name="description"
        content={t('meta_description')}
      />
      <link rel="alternate" hrefLang="es" href="https://wealize.digital/es" />
      <link rel="alternate" hrefLang="en" href="https://wealize.digital/" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://wealize.digital/" />
      <meta property="og:image" content="https://wlz-branding.s3.eu-central-1.amazonaws.com/banner_400x400.png" />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="500" />
      <meta property="og:image:alt" content={t('meta_title')} />
      <meta property="og:title" content={t('meta_title')} />
      <meta property="og:description" content={t('meta_description')} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={t('meta_title')} />
      <meta name="twitter:description" content={t('meta_description')} />
      <meta name="twitter:image" content="https://wlz-branding.s3.eu-central-1.amazonaws.com/banner_400x400.png" />

      {lang.toLowerCase() === 'en'
        ? (
          <>
            <link rel="canonical" href="https://wealize.digital/" />
            <meta property="og:locale" content="en_En" />
            <meta property="og:site_name" content="Wealize, digital products" />
          </>
          )
        : null}
      {lang.toLowerCase() === 'es'
        ? (
          <>
            <link rel="canonical" href="https://wealize.digital/es" />
            <meta property="og:locale" content="es_Es" />
            <meta property="og:site_name" content="Wealize, productos digitales" />
          </>
          )
        : null}
    </Head>

    <HomeSpecial />

    <SimpleCard>
      {t('principal_description')}
    </SimpleCard>

    <ContainerProjects>
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
    </ContainerProjects>
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
