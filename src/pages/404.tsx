import React from 'react'
import DefaultErrorPage from 'next/error'

const Custom404 = (): JSX.Element => {
  return (
    <DefaultErrorPage statusCode={404} />
  )
}

export default Custom404
