import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { animated, useTransition } from 'react-spring'

import TalentCard from '../Cards/Talent'
import talentsData from '../../data/talentsData'
import RoundedButton from '../Buttons/Rounded'
import { MEDIUM } from '../Buttons/Rounded/sizes'
import { ACCENT_COLOR, WHITE_COLOR } from '../../theme/color'
import useRefreshContent from '../../hooks/useRefreshContent'

import { Container, ContentContainer, Headline, CardsContainer } from './styles'


const Talents = () => {
  const { t } = useTranslation('profile')

  const MAX_ITEMS_TO_SHOW = 9
  const MAX_ITEMS_TO_REFRESH = 3
  const { dataToDisplay, refreshData } = useRefreshContent(
    talentsData,
    MAX_ITEMS_TO_SHOW,
    MAX_ITEMS_TO_REFRESH
  )
  const transitions = useTransition(dataToDisplay, item => item.trans_key, {
    initial: { opacity: 0 },
    from: { opacity: 0 },
    enter: { opacity: 1 },
    update: { opacity: 1 },
    leave: { opacity: 1 },
    unique: true,
    reset: true,
    config: { duration: 600 }
  })

  return (
      <Container>
      <ContentContainer>
        <Headline>{t('talents.title')}</Headline>
        <RoundedButton
          backgroundColor={WHITE_COLOR}
          textColor={ACCENT_COLOR}
          animatedBackgroundColor={ACCENT_COLOR}
          animatedTextColor={WHITE_COLOR}
          size={MEDIUM}
          handleClick={refreshData}
        >
          {t('talents.refresh-button-text')}
        </RoundedButton>
      </ContentContainer>

      <CardsContainer>
          {transitions.map(({ item, key, props }) => (
              <animated.div style={props} key={key}>
                <TalentCard
                  imageUrl={item.imageUrl}
                  name={item.name}
                  role={t(`talents.${item.trans_key}.role`, { text: item.role })}
                  socialNetworks={item.socialNetworks}
                />
              </animated.div>
          ))}
        </CardsContainer>
    </Container>
  )
}

export default React.memo(Talents)
