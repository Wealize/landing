import React from 'react'

const CognitiveIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 280 280"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{'cognitives@1x'}</title>
      <g transform="translate(-1 94)" fill="#FFC9C9" fillRule="nonzero">
        <path d="M137.098 0h92.046v92.047h-92.046z" />
        <path d="M45.985 0h92.046v92.047H45.985z" />
        <path
          style={{
            mixBlendMode: 'multiply'
          }}
          d="M229.144.001l-53.143 92.046h106.286z"
        />
        <circle
          style={{
            mixBlendMode: 'multiply'
          }}
          cx={45.985}
          cy={46.024}
          r={45.985}
        />
      </g>
    </svg>
  )
}

export default React.memo(CognitiveIcon)
