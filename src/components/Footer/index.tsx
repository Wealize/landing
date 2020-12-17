import React from 'react'
import Link from 'next/link'

import WealizeWhiteNormalMediumIcon from '../icons/WealizeWhiteNormalMediumIcon'
import ButtonRounded from '../Buttons/Rounded/'
import { MEDIUM } from '../Buttons/Rounded/sizes'
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
import { ACCENT, DARK_GRAY, WHITE } from '../../theme/color'
import LinkedinIcon from '../icons/social/LinkedinIcon'
import TwitterIcon from '../icons/social/TwitterIcon'
import DevtoIcon from '../icons/social/DevtoIcon'
import CDTIIcon from '../icons/grants/CDTIIcon'
import InnovationPymeIcon from '../icons/grants/InnovationPymeIcon'
import { CDTI_HREF, INNOVATION_SME_HREF } from '../../constants/hrefs'
const Footer = () => {
  return (
    <Container id="footer">
      <ContainerLogo>
        <WealizeWhiteNormalMediumIcon />
      </ContainerLogo>
      <ContainerContent>
        <ContainerGetInTouch>
          <BigText>
            Contact us about your project, your idea or for more information
            about our Work
          </BigText>
          <ButtonRounded
            backgroundColor={DARK_GRAY}
            textColor={WHITE}
            animatedBackgroundColor={ACCENT}
            animatedTextColor={WHITE}
            size={MEDIUM}
          >
            Get in touch
          </ButtonRounded>
        </ContainerGetInTouch>
        <ContainerWorkWithUs>
          <BigText>
            Join the culture. We are always looking for talent to grow our
            global community
          </BigText>
          <ButtonRounded
            backgroundColor={DARK_GRAY}
            textColor={WHITE}
            animatedBackgroundColor={ACCENT}
            animatedTextColor={WHITE}
            size={MEDIUM}
          >
            Work with us
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
          <Link href="">
            <PrivacyLegalLink aria-label="Privacy & Legal">
              Privacy & Legal
            </PrivacyLegalLink>
          </Link>
          <CopyrightText>Wealize 2020. All Rights Reserved.</CopyrightText>
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
