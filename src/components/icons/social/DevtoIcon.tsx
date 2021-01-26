import React from 'react'

const DevtoIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{'devto'}</title>
      <g fill="#FFF" fillRule="nonzero">
        <path d="M10.862 15.83a1.552 1.552 0 00-.933-.349h-1.4v8.37h1.4a1.56 1.56 0 00.933-.349c.32-.25.494-.642.466-1.046v-5.583a1.227 1.227 0 00-.467-1.046l.001.003zm2.73 6.642a3.66 3.66 0 01-3.526 3.789 4.352 4.352 0 01-.349 0H5.999V13.002h3.8a3.658 3.658 0 013.8 3.787l-.007 5.683zM22.17 15.369h-4.268v3.077h2.609v2.369h-2.609v3.077h4.27v2.371H17.19a1.619 1.619 0 01-1.66-1.577V14.658A1.62 1.62 0 0117.109 13h5.063l-.002 2.369zM30.377 24.606c-1.057 2.464-2.952 1.974-3.8 0l-3.086-11.6H26.1l2.38 9.116 2.369-9.116h2.611l-3.077 11.6h-.006z" />
      </g>
    </svg>
  )
}

export default DevtoIcon
