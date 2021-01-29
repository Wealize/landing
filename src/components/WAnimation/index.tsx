import React from 'react'
import ReactPlayer from 'react-player'

import useWindowSize from '../../hooks/useWindowSize'
import { BREAKPOINT_MD, BREAKPOINT_LG } from '../../theme/media'

import {
  Video
} from './styles'

interface WAnimationProps {
  isMixMultiplyBlendMode: boolean
}

const WAnimation = (props:WAnimationProps) => {
  const W_768_MP4_VIDEO_URL = 'https://wlz-landing-assets.s3.eu-central-1.amazonaws.com/video/w_768.mp4'
  const W_1400_MP4_VIDEO_URL = 'https://wlz-landing-assets.s3.eu-central-1.amazonaws.com/video/w_1400.mp4'
  const W_2048_MP4_VIDEO_URL = 'https://wlz-landing-assets.s3.eu-central-1.amazonaws.com/video/w_2048.mp4'

  const W_700_BLEND_MODE_MULTIPLY_MP4_VIDEO_URL = 'https://wlz-landing-assets.s3.eu-central-1.amazonaws.com/video/w_700_blend_mode_multiply.mp4'
  const W_1300_BLEND_MODE_MULTIPLY_MP4_VIDEO_URL = 'https://wlz-landing-assets.s3.eu-central-1.amazonaws.com/video/w_1300_blend_mode_multiply.mp4'

  const { isMixMultiplyBlendMode = false } = props
  const { width } = useWindowSize()

  const getVideoUrl = () => {
    if (!width || width <= BREAKPOINT_MD) {
      return isMixMultiplyBlendMode ? W_700_BLEND_MODE_MULTIPLY_MP4_VIDEO_URL : W_768_MP4_VIDEO_URL
    }

    if (width > BREAKPOINT_MD && width <= BREAKPOINT_LG) {
      return isMixMultiplyBlendMode ? W_1300_BLEND_MODE_MULTIPLY_MP4_VIDEO_URL : W_1400_MP4_VIDEO_URL
    }

    if (width > BREAKPOINT_LG) {
      return isMixMultiplyBlendMode ? W_1300_BLEND_MODE_MULTIPLY_MP4_VIDEO_URL : W_2048_MP4_VIDEO_URL
    }
  }

  return (
    <Video className="w-animation" isMixMultiplyBlendMode={isMixMultiplyBlendMode}>
      <ReactPlayer className="react-player" url={[
        { src: `${getVideoUrl()}`, type: 'video/mp4' }
      ]} width='100%' height='100%' playing autoPlay muted loop stopOnUnmount>
      </ReactPlayer>
    </Video>
  )
}


export default React.memo(WAnimation)
