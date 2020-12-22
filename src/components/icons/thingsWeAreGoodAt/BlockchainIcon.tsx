import React from 'react'

const BlockchainIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      height="100%"
      viewBox="0 0 280 280"
      width="100%"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill="#f06078">
        <path d="M85.592 88.591H47.999V50.998h37.593z" />
        <path d="M117.43 114.146H66.795V63.511h50.635z" />
        <path d="M156.358 153.26H92.113V89.015h64.245z" />
        <path d="M232.648 229.436H124.235V121.023h108.413z" />
      </g>
    </svg>
  )
}

export default React.memo(BlockchainIcon)
