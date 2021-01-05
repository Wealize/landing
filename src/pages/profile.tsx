import React from 'react'
import useTranslation from 'next-translate/useTranslation'

import { LayoutOptions } from '../interfaces/Page'
import { ACCENT_COLOR, WHITE_COLOR } from '../theme/color'
import WealizeInANutshell from '../components/WealizeInANutshell'
import ThingsWeAreGoodAt from '../components/ThingsWeAreGoodAt'
import WeDeliver from '../components/WeDeliver'
import { Container, StartedContainer, StartedDescription } from '../styles/pages/Profile'
import Talents from '../components/Talents'
import ServicesAndVentures from '../components/ServicesAndVentures'
import WStaticIcon from '../components/icons/WStaticIcon'
import profileDescriptionData from '../data/profileDescriptionData'
import Accordion from '../components/Accordion'
import toolsTechStackAccordionData from '../data/toolsTechStackAccordionData'

const Profile = (): JSX.Element => {
  const { t } = useTranslation('profile')

  return (
    <Container>
      <StartedContainer>
        <StartedDescription>
          {profileDescriptionData.map((paragraph: string, index: number) =>
            <p key={index}>{t(`started-description.paragraph-${index}`, { text: paragraph })}</p>
          )}
        </StartedDescription>
        <WStaticIcon />
      </StartedContainer>
      <ServicesAndVentures/>
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
