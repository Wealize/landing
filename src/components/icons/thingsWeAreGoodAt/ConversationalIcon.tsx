import React from 'react'

const ConversationalIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 212.909 188.256"
      {...props}
    >
      <defs>
        <style>{'.prefix__cls-75000{fill:#66f}'}</style>
      </defs>
      <g id="prefix__Grupo_3878" transform="translate(0 -23.871)">
        <circle
          id="prefix__Elipse_314"
          cx={59.263}
          cy={59.263}
          r={59.263}
          className="prefix__cls-75000"
          transform="translate(0 93.601)"
        />
        <path
          id="prefix__Rect\xE1ngulo_8421"
          fill="#66f"
          d="M0 0h118.526v118.526H0z"
          transform="translate(59.269 48.321)"
          style={{
            mixBlendMode: 'multiply',
            isolation: 'isolate'
          }}
        />
        <circle
          id="prefix__Elipse_314-2"
          cx={35.119}
          cy={35.119}
          r={35.119}
          className="prefix__cls-75000"
          transform="translate(142.671 23.871)"
        />
      </g>
    </svg>
  )
}

export default React.memo(ConversationalIcon)
