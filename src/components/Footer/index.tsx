import React from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

import WealizeWhiteNormalMediumIcon from '../icons/WealizeWhiteNormalMediumIcon'
import ButtonRounded from '../Buttons/Rounded/'
import { MEDIUM } from '../Buttons/Rounded/sizes'
import { ACCENT_COLOR, DARK_GRAY_COLOR, WHITE_COLOR } from '../../theme/color'
import LinkedinIcon from '../icons/social/LinkedinIcon'
import TwitterIcon from '../icons/social/TwitterIcon'
import DevtoIcon from '../icons/social/DevtoIcon'
import CDTIIcon from '../icons/grants/CDTIIcon'
import InnovationPymeIcon from '../icons/grants/InnovationPymeIcon'
import {
  CDTI_HREF,
  INNOVATION_SME_HREF,
  PRIVACY_LEGAL
} from '../../constants/hrefs'

import {
  Container,
  ContainerContent,
  ContainerGetInTouch,
  ContainerLogo,
  BigText,
  ContainerWorkWithUs,
  ContainerBottom,
  Divider,
  DividerMobile,
  ContainerSocialMobile,
  ContainerSocial,
  Social,
  ContainerPrivacyCopyright,
  PrivacyLegalLink,
  CopyrightText,
  ContainerGrantsAndSocials,
  ContainerGrants,
  Grant
} from './styles'
const Footer = () => {
  const { t } = useTranslation('common')

  return (
    <Container id="footer">
      <ContainerLogo>
        <WealizeWhiteNormalMediumIcon />
      </ContainerLogo>
      <ContainerContent>
        <ContainerGetInTouch>
          <BigText>
            {t('footer.get_in_touch.text')}
          </BigText>
          <ButtonRounded
            backgroundColor={DARK_GRAY_COLOR}
            textColor={WHITE_COLOR}
            animatedBackgroundColor={ACCENT_COLOR}
            animatedTextColor={WHITE_COLOR}
            size={MEDIUM}
          >
            {t('footer.get_in_touch.button_text')}
          </ButtonRounded>
        </ContainerGetInTouch>
        <ContainerWorkWithUs>
          <BigText>
            {t('footer.work_with_us.text')}
          </BigText>
          <ButtonRounded
            backgroundColor={DARK_GRAY_COLOR}
            textColor={WHITE_COLOR}
            animatedBackgroundColor={ACCENT_COLOR}
            animatedTextColor={WHITE_COLOR}
            size={MEDIUM}
          >
           {t('footer.work_with_us.button_text')}
          </ButtonRounded>
        </ContainerWorkWithUs>
      </ContainerContent>
      <ContainerBottom>
        <DividerMobile></DividerMobile>
        <ContainerSocialMobile>
          <Link
            href="https://www.linkedin.com/company/wealizedigital/"
            passHref
          >
            <Social target="_blank" aria-label="Linkedin" rel="noreferrer">
              <LinkedinIcon />
            </Social>
          </Link>
          <Link href="https://twitter.com/wealizedigital" passHref>
            <Social target="_blank" aria-label="Twitter" rel="noreferrer">
              <TwitterIcon />
            </Social>
          </Link>
          <Link href="https://dev.to/wealize" passHref>
            <Social target="_blank" aria-label="Dev.to" rel="noreferrer">
              <DevtoIcon />
            </Social>
          </Link>
        </ContainerSocialMobile>
        <ContainerPrivacyCopyright>
          <Link href={PRIVACY_LEGAL} passHref>
            <PrivacyLegalLink aria-label="Privacy & Legal">
              {t('footer.privacy_legal')}
            </PrivacyLegalLink>
          </Link>
          <CopyrightText>{t('footer.copyright')}</CopyrightText>
        </ContainerPrivacyCopyright>
        <Divider></Divider>
        <ContainerGrantsAndSocials>
          <ContainerGrants>
            <Grant>
              <Link href={CDTI_HREF} passHref>
                <a aria-label="CDTI">
                  <CDTIIcon />
                </a>
              </Link>
            </Grant>
            <Grant>
              <Link href={INNOVATION_SME_HREF} passHref>
                <a aria-label="Innovation Pyme">
                  <InnovationPymeIcon />
                </a>
              </Link>
            </Grant>
          </ContainerGrants>
          <ContainerSocial>
            <Link
              href="https://www.linkedin.com/company/wealizedigital/"
              passHref
            >
              <Social target="_blank" rel="noreferrer">
                <LinkedinIcon />
              </Social>
            </Link>
            <Link href="https://twitter.com/wealizedigital" passHref>
              <Social target="_blank" rel="noreferrer">
                <TwitterIcon />
              </Social>
            </Link>
            <Link href="https://dev.to/wealize" passHref>
              <Social target="_blank" rel="noreferrer">
                <DevtoIcon />
              </Social>
            </Link>
          </ContainerSocial>
        </ContainerGrantsAndSocials>
      </ContainerBottom>
    </Container>
  )
}

export default React.memo(Footer)
