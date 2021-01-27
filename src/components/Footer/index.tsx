import React from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

import WealizeWhiteNormalMediumIcon from '../icons/WealizeWhiteNormalMediumIcon'
import ButtonRounded from '../Buttons/Rounded/'
import { MEDIUM, SMALL } from '../Buttons/Rounded/sizes'
import { ACCENT_COLOR, DARK_GRAY_COLOR, WHITE_COLOR } from '../../theme/color'
import LinkedinIcon from '../icons/social/LinkedinIcon'
import TwitterIcon from '../icons/social/TwitterIcon'
import DevtoIcon from '../icons/social/DevtoIcon'
import CDTIIcon from '../icons/grants/CDTIIcon'
import InnovationPymeIcon from '../icons/grants/InnovationPymeIcon'
import {
  CDTI_HREF,
  COOKIES_POLICY_HREF,
  INNOVATION_SME_HREF,
  PRIVACY_HREF,
  LEGAL_HREF
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
  ContainerPrivacyCopyright,
  InlineLink,
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
            <span>{t('footer.get_in_touch.button_text')}</span>
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
           <span>{t('footer.work_with_us.button_text')}</span>
          </ButtonRounded>
        </ContainerContactSection>
      </ContainerContent>
      <ContainerBottom>
        <DividerMobile></DividerMobile>
        <ContainerSocialMobile>
            <ButtonRounded
              backgroundColor={DARK_GRAY_COLOR}
              textColor={WHITE_COLOR}
              animatedBackgroundColor={ACCENT_COLOR}
              animatedTextColor={WHITE_COLOR}
              size={SMALL}
              handleClick={() => router.push('https://www.linkedin.com/company/wealizedigital/')}
            >
              <LinkedinIcon />
            </ButtonRounded>
            <ButtonRounded
              backgroundColor={DARK_GRAY_COLOR}
              textColor={WHITE_COLOR}
              animatedBackgroundColor={ACCENT_COLOR}
              animatedTextColor={WHITE_COLOR}
              size={SMALL}
              handleClick={() => router.push('https://twitter.com/wealizedigital')}
            >
              <TwitterIcon />
            </ButtonRounded>
            <ButtonRounded
              backgroundColor={DARK_GRAY_COLOR}
              textColor={WHITE_COLOR}
              animatedBackgroundColor={ACCENT_COLOR}
              animatedTextColor={WHITE_COLOR}
              size={SMALL}
              handleClick={() => router.push('https://dev.to/wealize')}
            >
              <DevtoIcon />
            </ButtonRounded>
        </ContainerSocialMobile>
        <ContainerPrivacyCopyright>
          <Link href={PRIVACY_HREF} passHref>
            <InlineLink title="Privacy page link" aria-label="Privacy & Legal" data-cy="footer-privacy-link">
              {t('footer.privacy')}
            </InlineLink>
          </Link>
          <Link href={LEGAL_HREF} passHref>
            <InlineLink title="Legal page link" aria-label="Legal" data-cy="footer-legal-link">
              {t('footer.legal')}
            </InlineLink>
          </Link>
          <Link href={COOKIES_POLICY_HREF} passHref>
            <InlineLink title="Cookies page link" aria-label="Cookies page" data-cy="cookies-page-link">
              {t('footer.cookies_policy')}
            </InlineLink>
          </Link>
          <CopyrightText>&copy;&nbsp;{t('footer.copyright')}</CopyrightText>
        </ContainerPrivacyCopyright>
        <Divider></Divider>
        <ContainerGrantsAndSocials>
          <ContainerGrants>
            <Grant>
              <Link href={CDTI_HREF} passHref>
                <a title="CDTI page link" aria-label="CDTI" data-cy="footer-cdti-link">
                  <CDTIIcon />
                </a>
              </Link>
            </Grant>
            <Grant>
              <Link href={INNOVATION_SME_HREF} passHref>
                <a title="Innovation Pyme page link" aria-label="Innovation Pyme" data-cy="footer-innovation-pyme-link">
                  <InnovationPymeIcon />
                </a>
              </Link>
            </Grant>
          </ContainerGrants>
          <ContainerSocial>
            <ButtonRounded
              backgroundColor={DARK_GRAY_COLOR}
              textColor={WHITE_COLOR}
              animatedBackgroundColor={ACCENT_COLOR}
              animatedTextColor={WHITE_COLOR}
              size={SMALL}
              handleClick={() => window.open(
                'https://www.linkedin.com/company/wealizedigital/', '_blank')}
            >
              <LinkedinIcon />
            </ButtonRounded>
            <ButtonRounded
              backgroundColor={DARK_GRAY_COLOR}
              textColor={WHITE_COLOR}
              animatedBackgroundColor={ACCENT_COLOR}
              animatedTextColor={WHITE_COLOR}
              size={SMALL}
              handleClick={() => window.open(
                'https://twitter.com/wealizedigital', '_blank')}
            >
              <TwitterIcon />
            </ButtonRounded>
            <ButtonRounded
              backgroundColor={DARK_GRAY_COLOR}
              textColor={WHITE_COLOR}
              animatedBackgroundColor={ACCENT_COLOR}
              animatedTextColor={WHITE_COLOR}
              size={SMALL}
              handleClick={() => window.open(
                'https://dev.to/wealize', '_blank')}
            >
              <DevtoIcon />
            </ButtonRounded>
          </ContainerSocial>
        </ContainerGrantsAndSocials>
      </ContainerBottom>
    </Container>
  )
}

export default React.memo(Footer)
