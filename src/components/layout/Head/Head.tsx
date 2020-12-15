import React from 'react'
import NextHead from 'next/head'

import MetaTags from './MetaTags'
import Links from './Links'
import Scripts from './Scripts'

export const Head = (): JSX.Element => (
  <NextHead>
    <title>Wealize unlocks today&apos;s world</title>
    <Links />
    <MetaTags />
    <Scripts />
    );
  </NextHead>
)
