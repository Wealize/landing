import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import Head from 'next/head'

import { LayoutOptions } from '../interfaces/Page'
import { ACCENT_COLOR, WHITE_COLOR } from '../theme/color'
import WealizeInANutshell from '../components/WealizeInANutshell'
import ThingsWeAreGoodAt from '../components/ThingsWeAreGoodAt'
import WeDeliver from '../components/WeDeliver'
import { Container, ContainerOverflowHidden, StartedContainer, StartedDescription, WAnimationContainer } from '../styles/pages/Profile'
import Talents from '../components/Talents'
import ServicesAndVentures from '../components/ServicesAndVentures'
import profileDescriptionData from '../data/profileDescriptionData'
import Accordion from '../components/Accordion'
import toolsTechStackAccordionData from '../data/toolsTechStackAccordionData'
import WAnimation from '../components/WAnimation'

const Profile = (): JSX.Element => {
  const { t, lang } = useTranslation('profile')

  return (
    <>
      <Head>
        <title>{t('meta_title')}</title>
        <meta
          name="description"
          content={t('meta_description')}
        />
        <link rel="alternate" hrefLang="es" href="https://wealize.digital/es/profile" />
        <link rel="alternate" hrefLang="en" href="https://wealize.digital/profile" />
        {lang.toLowerCase() === 'en'
          ? <link rel="canonical" href="https://wealize.digital/profile" />
          : null}
        {lang.toLowerCase() === 'es'
          ? <link rel="canonical" href="https://wealize.digital/es/profile" />
          : null}
      </Head>
      <Container>
      <ContainerOverflowHidden>
        <StartedContainer>
          <StartedDescription>
            {profileDescriptionData.map((paragraph: string, index: number) =>
              <p key={index}>{t(`started-description.paragraph-${index}`, { text: paragraph })}</p>
            )}
          </StartedDescription>
          <WAnimationContainer>
            <WAnimation isMixMultiplyBlendMode={true}/>
          </WAnimationContainer>
        </StartedContainer>
        <ServicesAndVentures/>
      </ContainerOverflowHidden>
      <ThingsWeAreGoodAt />
      <WeDeliver />
      <WealizeInANutshell highlightColor={ACCENT_COLOR} />
      <Talents />
      <Accordion
        backgroundColor={ACCENT_COLOR}
        textColor={WHITE_COLOR}
        title="Tools & Tech Stack"
        sectionsData={toolsTechStackAccordionData}
        ToggleButtonBackgroundColor={ACCENT_COLOR}
        ToggleButtonTextColor={WHITE_COLOR}
        ToggleButtonAnimatedBackgroundColor={WHITE_COLOR}
        ToggleButtonAnimatedTextColor={ACCENT_COLOR}
      />
    </Container>
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

export default Profile
