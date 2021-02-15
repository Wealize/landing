import React, { CSSProperties, useState } from 'react'
import Image from 'next/image'
import ReactPlaceholder from 'react-placeholder'

import { Container } from './styles'

type ImageWithPlaceholderProps = {
  imageUrl: string,
  imageAriaLabel?: string,
  imageTitle?: string,
  imageQuality?: number,
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'
  showLoadingAnimation?: boolean,
  placeholderType?: 'text' | 'media' | 'textRow' | 'rect' | 'round',
  style?: CSSProperties
}

const ImageWithPlaceholder = (props: ImageWithPlaceholderProps) => {
  const {
    imageUrl,
    imageAriaLabel,
    imageTitle,
    imageQuality = 75,
    objectFit = 'cover',
    showLoadingAnimation = true,
    placeholderType = 'rect',
    style
  } = props
  const [showPlaceholder, setIsShowPlaceholder] = useState(false)
  const DELAY_FOR_HIDE_PLACEHOLDER = 3000
  return (
    <Container style={style}>
      <ReactPlaceholder
        type={placeholderType}
        firstLaunchOnly={true}
        showLoadingAnimation={showLoadingAnimation}
        ready={showPlaceholder}
        style={{ marginRight: '0', position: 'absolute' }}
        // eslint-disable-next-line react/no-children-prop
        children={null}
      />
      <Image
        src={imageUrl}
        layout="fill"
        objectFit={objectFit}
        aria-label={imageAriaLabel}
        quality={imageQuality}
        title={imageTitle}
        onLoad={() => {
          setTimeout(() => {
            setIsShowPlaceholder(true)
          }, DELAY_FOR_HIDE_PLACEHOLDER)
        }}
      />
    </Container>
  )
}

export default React.memo(ImageWithPlaceholder)
