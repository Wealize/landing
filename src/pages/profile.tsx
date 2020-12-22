import React from 'react'
import { useInView } from 'react-intersection-observer'

import CardExpandable from '../components/Cards/Expandable'
import BlockchainIcon from '../components/icons/thingsWeAreGoodAt/BlockchainIcon'
import CognitiveIcon from '../components/icons/thingsWeAreGoodAt/CognitiveIcon'
import ConversationalIcon from '../components/icons/thingsWeAreGoodAt/ConversationalIcon'
import { LayoutOptions } from '../interfaces/Page'
import {
  PRIMARY,
  SECONDARY,
  WHITE,
  PRIMARY_LIGHT,
  ACCENT
} from '../theme/color'
import {
  Container,
  ThingsWeAreGoodAtContainer,
  ThingsWeAreGoodAtTitle,
  ThingsWeAreGoodAtCardsContainer,
  ThingsWeAreGoodAtFirstCard,
  ThingsWeAreGoodAtSecondCard,
  ThingsWeAreGoodAtThirdCard
} from '../styles/pages/Profile'

const Profile = (): JSX.Element => {
  const { ref, entry } = useInView({
    threshold: 0,
    triggerOnce: true
  })

  return (
    <Container>
      <ThingsWeAreGoodAtContainer ref={ref}>
        <ThingsWeAreGoodAtTitle>Things we are good at</ThingsWeAreGoodAtTitle>
        <ThingsWeAreGoodAtCardsContainer>
          <ThingsWeAreGoodAtFirstCard isVisible={entry?.isIntersecting}>
            <CardExpandable
              headline="Blockchain development"
              subheadline="When transparency and trust are hard requirements"
              description="We build distributed ledgers and consensus networks for identity, traceability and accountability"
              image={<BlockchainIcon />}
              backgroundColor={PRIMARY_LIGHT}
              textColor={PRIMARY}
              isExpanded={true}
            />
          </ThingsWeAreGoodAtFirstCard>

          <ThingsWeAreGoodAtSecondCard isVisible={entry?.isIntersecting}>
            <CardExpandable
              headline="Cognitive services"
              subheadline="Think, predict and act"
              description="We utilize machine learning and artificial intelligence to empower businesses by making better decisions"
              image={<CognitiveIcon />}
              backgroundColor={PRIMARY}
              textColor={WHITE}
              isExpanded={false}
            />
          </ThingsWeAreGoodAtSecondCard>

          <ThingsWeAreGoodAtThirdCard isVisible={entry?.isIntersecting}>
            <CardExpandable
              headline="Conversational agents"
              subheadline="Enhace customer experience"
              description="We build text- and voice-based conversational interfaces for industries like health, tourism, legal, banking and insurance"
              image={<ConversationalIcon />}
              backgroundColor={SECONDARY}
              textColor={ACCENT}
              isExpanded={false}
            />
          </ThingsWeAreGoodAtThirdCard>
        </ThingsWeAreGoodAtCardsContainer>
      </ThingsWeAreGoodAtContainer>
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
