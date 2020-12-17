import React from 'react'

import { LayoutOptions } from '../interfaces/Page'

const Profile = (): JSX.Element => <h1>Profile</h1>

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
