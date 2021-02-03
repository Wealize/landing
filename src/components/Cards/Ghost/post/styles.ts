import styled from 'styled-components'

import { WHITE_COLOR } from '../../../../theme/color'
import { singlePx } from '../../../../theme/space'

export const Container = styled.a`
  width: 100%;
  background: ${WHITE_COLOR};
  z-index: 1;
`

export const CardHeadline = styled.h4`
  font-size: 1rem;
  font-weight: bold;
  padding-bottom: ${singlePx()};
`

export const CardPublishedAt = styled.span`
  font-size: 1rem;
  padding: ${singlePx()} 0;
`
