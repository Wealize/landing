import styled from 'styled-components'

import { WHITE_COLOR, DARK_GRAY_COLOR } from '../../theme/color'
import {
  singlePx,
  doublePx,
  triplePx,
  singleAndHalfPx,
  quadruplePx
} from '../../theme/space'
import { media } from '../../theme/media'
import { CONTAINER_SPACING } from '../../theme/spacingGuide'

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: ${DARK_GRAY_COLOR};
  ${CONTAINER_SPACING.MOBILE}

  ${media.greaterThan('md')`
    ${CONTAINER_SPACING.TABLET}
  `};

  ${media.greaterThan('lg')`
    ${CONTAINER_SPACING.SMALL_DESKTOP};
  `};

  ${media.greaterThan('xl')`
    ${CONTAINER_SPACING.DESKTOP};
  `};

  ${media.greaterThan('xxl')`
    ${CONTAINER_SPACING.WIDE};
  `};
`

export const ContainerContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  ${media.greaterThan('md')`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: ${singlePx()};
  `}

  ${media.greaterThan('xl')`
    grid-gap: ${doublePx()};
  `}

  ${media.greaterThan('xxl')`
    grid-gap: ${quadruplePx()};
  `}
`

export const ContainerLogo = styled.div`
  display: flex;
  width: 9rem;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding-bottom: ${singlePx()};

  ${media.greaterThan('md')`
    width: 8rem;
    padding-bottom: ${singleAndHalfPx()};
  `};

  ${media.greaterThan('lg')`
    padding-bottom: ${doublePx()};
  `};
`

export const BigText = styled.h5`
  color: ${WHITE_COLOR};
  padding: ${singlePx()} 0;
  font-size: 1.8rem;
  line-height: 1.33;

  ${media.greaterThan('lg')`
    font-size: 2.5rem;
  `};
`

export const ContainerContactSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: ${doublePx()} 0;

  > .button-rounded {
    margin-top: 5%;
    min-width: 270px;

    & span {
      font-weight: normal;
    }
  }

  ${media.greaterThan('md')`
    padding: 0;
    justify-content: space-between;
    min-height: 400px;

    > .button-rounded {
      margin-top: 0;
      min-width: 55%;
    }
  `};

  ${media.greaterThan('lg')`
    min-height: 500px;

    > .button-rounded {
      min-width: 60%;
    }
  `};

  ${media.greaterThan('xl')`
    min-height: 400px;

    > .button-rounded {
      min-width: 50%;
    }
  `};

  ${media.greaterThan('xxxl')`
    > .button-rounded {
      min-width: 45%;
    }
  `};
`

export const DividerMobile = styled.hr`
  width: 100%;
  border: 1px solid ${WHITE_COLOR};
  margin: ${doublePx()} 0;

  ${media.greaterThan('md')`
    display: none;
  `};
`

export const Divider = styled.hr`
  width: 100%;
  border: 1px solid ${WHITE_COLOR};
  margin: ${doublePx()} 0;

  ${media.greaterThan('md')`
    margin: ${singlePx()} 0;
  `};
`

export const ContainerBottom = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const ContainerSocialMobile = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-bottom: ${singlePx()};

  > .button-rounded {
    min-width: 42px;
    min-height: 42px;

    & button {
      padding: 0;
    }

    & div {
      padding: 0;
    }

    ${media.greaterThan('md')`
      display: none;
    `};
  }

  ${media.greaterThan('md')`
    display: none;
  `};
`

export const ContainerPrivacyCopyright = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${media.greaterThan('md')`
    width: 100%;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-top: ${triplePx()};
  `};
`

export const ContainerSocial = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  display: none;

  > .button-rounded {
    display: none;
    min-width: 42px;
    min-height: 42px;

    & button {
      padding: 0;
    }

    & div {
      padding: 0;
    }

    ${media.greaterThan('md')`
      min-width: 56px;
      min-height: 56px;
    `};

    ${media.greaterThan('lg')`
      min-width: 60px;
      height: 60px;
    `};

    ${media.greaterThan('xl')`
      min-width: 66px;
      min-height: 66px;
    `};
  }

  ${media.greaterThan('md')`
    display: flex;
    width: 30%;
    justify-content: flex-end;

    > .button-rounded {
      display: block;
    }
  `};

  ${media.greaterThan('lg')`
    width: 20%;
  `};

  ${media.greaterThan('xl')`
    width: 15%;
  `};
`

export const InlineLink = styled.a`
  color: ${WHITE_COLOR};
  font-size: 1.1rem;
  padding: ${singlePx()} 0;
  text-decoration: underline;

  ${media.greaterThan('md')`
    padding:  0;
    margin-right: 4%;
  `};

  ${media.greaterThan('lg')`
    font-size: 1.5rem;
  `};
`

export const CopyrightText = styled.span`
  color: ${WHITE_COLOR};
  font-size: 1.1rem;
  padding: ${singlePx()} 0;

  ${media.greaterThan('lg')`
    font-size: 1.5rem;
  `};
`

export const ContainerGrantsAndSocials = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  ${media.greaterThan('md')`
    justify-content: space-between;
  `};

  ${media.greaterThan('xl')`
    padding-top: ${doublePx()};
  `};
`

export const ContainerGrants = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  ${media.greaterThan('md')`
    width: 70%;
    justify-content: flex-start;
  `};

  ${media.greaterThan('lg')`
    width: 80%;
  `};

  ${media.greaterThan('xl')`
    width: 85%;
  `};
`

export const Grant = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: ${singlePx()};

  & a {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  ${media.greaterThan('md')`
    width: 50%;
    margin-bottom: 0;
  `};

  ${media.greaterThan('lg')`
    width: 40%;
  `};

  ${media.greaterThan('xl')`
    width: 25%;
  `};
`
