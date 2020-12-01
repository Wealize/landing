// eslint-disable-next-line
import React from 'react'

const WealizeMinimalMedium = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="3em"
      height="3em"
      viewBox="0 0 45 24.824"
      {...props}
    >
      <path
        fill="#f06078"
        d="M10.612 24.824L4.737 6.473H-.001V.001h10.472a.328.328 0 01.315.236l4.178 14.453L19.981.001h8.217l4.947 14.741L37.393.001h7.6l-7.867 24.824h-7.708L23.893 8.794l-5.419 16.031z"
      />
    </svg>
  )
}

export default React.memo(WealizeMinimalMedium)
