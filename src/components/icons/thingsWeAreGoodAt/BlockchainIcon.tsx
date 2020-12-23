import React from 'react'

const BlockchainIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 280 280"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{'blockchain@1x'}</title>
      <g fill="none" fillRule="evenodd">
        <g fill="#F06078" fillRule="nonzero">
          <path
            style={{
              mixBlendMode: 'multiply'
            }}
            d="M84.976 87.703H46.361V49.06h38.615z"
          />
          <path d="M117.68 113.972H65.668v-52.05h52.012z" />
          <path
            style={{
              mixBlendMode: 'multiply'
            }}
            d="M157.667 154.178H91.675v-66.04h65.992z"
          />
          <path d="M236.033 232.482H124.67V121.04h111.363z" />
        </g>
        <path fill="#E12438" d="M91.674 88.139h26.006V114H91.674z" />
      </g>
    </svg>
  )
}

export default React.memo(BlockchainIcon)
