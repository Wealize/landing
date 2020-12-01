// eslint-disable-next-line
import React from 'react'
import styled from 'styled-components'

import { LIGHT_GRAY } from '../../theme/color'
import { triplePx, halfPx } from '../../theme/space'
import Navbar from '../Navbar'

const Layout = (props) => {
  // eslint-disable-next-line
  const { children } = props

  return (
    <>
      <Navbar />
      <Main>{children}</Main>
    </>
  )
}

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 120vh;
  background-color: ${LIGHT_GRAY};
  padding-top: ${triplePx()};
  padding-bottom: ${halfPx()};
`

export default React.memo(Layout)
