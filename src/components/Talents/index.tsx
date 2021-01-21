import React from 'react'
import useTranslation from 'next-translate/useTranslation'
import { shuffle } from 'lodash'

import TalentCard from '../Cards/Talent'
import talentsData from '../../data/talentsData'
import { CardTalent } from '../../interfaces/Cards/CardTalent'
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
        {shuffle(dataToDisplay).map((talent: CardTalent, index: number) => (
          <TalentCard
            key={index}
            imageUrl={talent.imageUrl}
            name={talent.name}
            role={t(`talents.${talent.trans_key}.role`, { text: talent.role })}
            socialNetworks={talent.socialNetworks}
          />
        ))}
      </CardsContainer>
    </Container>
  )
}

export default React.memo(Talents)
