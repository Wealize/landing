import React, { useState } from 'react'

import { CardExpandable } from '../../../interfaces/Cards/CardExpandable'
import RoundArrowIcon from '../../icons/thingsWeAreGoodAt/RoundArrowIcon'
import {
  Container,
  Header,
  Content,
  Headline,
  Toggle,
  ImageContainer,
  Subheadline,
  Description
} from './styles'

const ExpandableCard = (props: CardExpandable) => {
  const {
    headline,
    subheadline,
    description,
    image,
    backgroundColor,
    textColor,
    isExpanded
  } = props

  const [isExpandedState, setIsExpandedState] = useState(isExpanded)

  return (
    <Container
      backgroundColor={backgroundColor}
      textColor={textColor}
      isExpanded={isExpandedState}
    >
      <Header isExpanded={isExpandedState}>
        <Headline>{headline}</Headline>
        <Toggle
          textColor={textColor}
          isExpanded={isExpandedState}
          onClick={() => setIsExpandedState(!isExpandedState)}
          aria-label="expand card content button"
        >
          <RoundArrowIcon />
        </Toggle>
      </Header>
      <Content isExpanded={isExpandedState}>
        <ImageContainer>{image}</ImageContainer>
        <Subheadline>{subheadline}</Subheadline>
        <Description>{description}</Description>
      </Content>
    </Container>
  )
}

export default React.memo(ExpandableCard)
