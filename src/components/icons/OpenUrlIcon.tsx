import React from 'react'

const OpenUrlIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width=".8em"
      height=".8em"
      viewBox="0 0 11.966 12.059"
      {...props}
    >
      <g id="prefix__Grupo_4662" transform="translate(-281.995 -7112.112)">
        <g id="prefix__Grupo_4426" transform="translate(282.745 7112.862)">
          <path
            id="prefix__Trazado_11470"
            d="M6889.425-3355.839h-5.518v10.559h10.466v-5.392"
            className="prefix__cls-1"
            transform="translate(-6883.908 3355.839)"
            fill="none"
            stroke={props.color}
            strokeWidth={1.5}
          />
          <path
            id="prefix__Trazado_11471"
            d="M6907.384-3355.839h3.2v3.307"
            className="prefix__cls-1"
            transform="translate(-6900.186 3355.839)"
            fill="none"
            stroke={props.color}
            strokeWidth={1.5}
          />
          <path
            id="prefix__Trazado_11472"
            d="M6902.391-3355.839l-6.067 6.306"
            className="prefix__cls-1"
            transform="translate(-6891.996 3355.839)"
            fill="none"
            stroke={props.color}
            strokeWidth={1.5}
          />
        </g>
      </g>
    </svg>
  )
}

export default React.memo(OpenUrlIcon)
