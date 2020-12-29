import React from 'react'

import { LayoutOptions } from '../interfaces/Page'
import { ACCENT_COLOR } from '../theme/color'
import WealizeInANutshell from '../components/WealizeInANutshell'
import ThingsWeAreGoodAt from '../components/ThingsWeAreGoodAt'
import WeDeliver from '../components/WeDeliver'
import { Container } from '../styles/pages/Profile'
import Talents from '../components/Talents'

const Profile = (): JSX.Element => {
  return (
    <Container>
      <ThingsWeAreGoodAt />
      <WeDeliver />
      <WealizeInANutshell highlightColor={ACCENT_COLOR} />
      <Talents />
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
