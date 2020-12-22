import React from 'react'

const BlockchainIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 165.387 159.824"
      {...props}
    >
      <defs>
        <style>
          {
            '.prefix__cls-100,.prefix__cls-2{fill:#f06078}.prefix__cls-100{mix-blend-mode:multiply;isolation:isolate}'
          }
        </style>
      </defs>
      <g id="prefix__Grupo_3945" transform="rotate(180 82.694 79.912)">
        <path
          id="prefix__Rect\xE1ngulo_8424"
          d="M0 0h33.671v33.671H0z"
          className="prefix__cls-100"
          transform="translate(131.716 126.153)"
        />
        <path
          id="prefix__Trazado_11405"
          d="M0 0h45.353v45.353H0z"
          className="prefix__cls-2"
          transform="translate(103.198 103.263)"
        />
        <path
          id="prefix__Trazado_11395"
          d="M0 0h57.543v57.543H0z"
          className="prefix__cls-100"
          transform="translate(68.332 68.23)"
        />
        <path
          id="prefix__Rect\xE1ngulo_8426"
          d="M0 0h97.103v97.103H0z"
          className="prefix__cls-2"
        />
      </g>
    </svg>
  )
}

export default React.memo(BlockchainIcon)
