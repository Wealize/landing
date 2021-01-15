import React from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

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
  PRIVACY_LEGAL_HREF
} from '../../constants/hrefs'
import {
  GET_IN_TOUCH_HREF,
  WORK_WITH_US
} from '../../constants/contacts'

import {
  Container,
  ContainerContent,
  ContainerContactSection,
  ContainerLogo,
  BigText,
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
  const router = useRouter()

  return (
    <Container id="footer">
      <ContainerLogo>
        <WealizeWhiteNormalMediumIcon />
      </ContainerLogo>
      <ContainerContent>
        <ContainerContactSection>
          <BigText>
            {t('footer.get_in_touch.text')}
          </BigText>
          <ButtonRounded
            backgroundColor={DARK_GRAY_COLOR}
            textColor={WHITE_COLOR}
            animatedBackgroundColor={ACCENT_COLOR}
            animatedTextColor={WHITE_COLOR}
            size={MEDIUM}
            handleClick={() => router.push(GET_IN_TOUCH_HREF)}
            id="footer-get-in-touch-button"
          >
            {t('footer.get_in_touch.button_text')}
          </ButtonRounded>
        </ContainerContactSection>
        <ContainerContactSection>
          <BigText>
            {t('footer.work_with_us.text')}
          </BigText>
          <ButtonRounded
            backgroundColor={DARK_GRAY_COLOR}
            textColor={WHITE_COLOR}
            animatedBackgroundColor={ACCENT_COLOR}
            animatedTextColor={WHITE_COLOR}
            size={MEDIUM}
            handleClick={() => router.push(WORK_WITH_US)}
            id="footer-work-whit-us-button"
          >
           {t('footer.work_with_us.button_text')}
          </ButtonRounded>
        </ContainerContactSection>
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
          <Link href={PRIVACY_LEGAL_HREF} passHref>
            <PrivacyLegalLink aria-label="Privacy & Legal" data-cy="footer-privacy-link">
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
                <a aria-label="CDTI" data-cy="footer-cdti-link">
                  <CDTIIcon />
                </a>
              </Link>
            </Grant>
            <Grant>
              <Link href={INNOVATION_SME_HREF} passHref>
                <a aria-label="Innovation Pyme" data-cy="footer-innovation-pyme-link">
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
