import React from 'react'

const ConversationalIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 280 280"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{'conversational@1x'}</title>
      <g transform="translate(34 46)" fill="#66F" fillRule="nonzero">
        <circle cx={59.263} cy={128.993} r={59.263} />
        <path
          style={{
            mixBlendMode: 'multiply'
          }}
          d="M59.269 24.45h118.526v118.526H59.269z"
        />
        <circle cx={177.79} cy={35.119} r={35.119} />
      </g>
    </svg>
  )
}

export default React.memo(ConversationalIcon)
