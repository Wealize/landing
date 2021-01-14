import styled from 'styled-components'

import { media } from '../../theme/media'
import { LIGHT_GRAY_COLOR, WHITE_COLOR } from '../../theme/color'

export const ContainerProjects = styled.section`

  ${media.greaterThan('md')`
    > .rounded-card:first-child {
      height: 100%;
      background: linear-gradient(180deg, ${WHITE_COLOR} 50%, ${LIGHT_GRAY_COLOR} 50%);
    }
  `};
`
