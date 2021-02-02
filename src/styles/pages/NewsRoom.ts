import styled from 'styled-components'

import { WHITE_COLOR } from '../../theme/color'
import { singleAndHalfPx } from '../../theme/space'


export const Container = styled.section`
  background-color: ${WHITE_COLOR};
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const PageTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  padding: ${singleAndHalfPx()} 0;
`

export const PostsContainer = styled.ul``
