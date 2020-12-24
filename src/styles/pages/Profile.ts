import styled from 'styled-components'

import { WHITE_COLOR } from '../../theme/color'
import { media } from '../../theme/media'

export const Container = styled.div`
  min-height: 100vh;
  background-color: ${WHITE_COLOR};
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  ${media.greaterThan('lg')`
    /* FIXME: for test Intersection observer functionality*/
    margin-top: 100vh;
  `};
`
