import React, { CSSProperties, useState } from 'react'
import Image from 'next/image'
import ReactPlaceholder from 'react-placeholder'

import { Container } from './styles'

type ImageWithPlaceholderProps = {
  imageUrl: string,
  imageAriaLabel?: string,
  imageTitle?: string,
  imageQuality?: number,
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
    showLoadingAnimation = true,
    placeholderType = 'rect',
    style
  } = props
  const [showPlaceholder, setIsShowPlaceholder] = useState(false)

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
        objectFit="cover"
        aria-label={imageAriaLabel}
        quality={imageQuality}
        title={imageTitle}
        onLoad={() => {
          setTimeout(() => {
            setIsShowPlaceholder(true)
          }, 3000)
        }}
      />
    </Container>
  )
}

export default React.memo(ImageWithPlaceholder)
