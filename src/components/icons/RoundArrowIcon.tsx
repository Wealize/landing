import React from 'react'

const RoundArrowIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="6em"
      height="6em"
      viewBox="0 0 90 90"
      {...props}
    >
      <path fill="#66f" d="M44.999 89.999a45 45 0 1145-45 45 45 0 01-45 45z" />
      <path
        fill="#fff"
        d="M32.513 36.173l11.2-9.05v38.525h2.119V27.162l11.158 9.012 1.336-1.654-12.493-10.09-.415-.335h-1.336l-.368.3-12.54 10.129z"
      />
    </svg>
  )
}

export default React.memo(RoundArrowIcon)
