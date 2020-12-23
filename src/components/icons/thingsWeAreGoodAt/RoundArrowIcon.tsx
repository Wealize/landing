import React from 'react'

const RoundArrowIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="100%"
      height="100%"
      viewBox="0 0 40 40"
      {...props}
    >
      <g fill="none">
        <path d="M20 40a20 20 0 1120-20 20 20 0 01-20 20z" />
        <path
          fill="#f06078"
          d="M20 38.5c4.942 0 9.587-1.924 13.081-5.419A18.375 18.375 0 0038.5 20c0-4.942-1.924-9.587-5.419-13.081A18.375 18.375 0 0020 1.5 18.374 18.374 0 006.919 6.919 18.375 18.375 0 001.5 20c0 4.942 1.924 9.587 5.419 13.081A18.375 18.375 0 0020 38.5m0 1.5C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20z"
        />
      </g>
      <path
        fill="#f06078"
        d="M13.79 15.465l5.4-4.139v19.673h1.5V11.325l5.4 4.139.912-1.19-6.311-4.839-.045-.035h-1.41l-.045.034-6.312 4.839z"
      />
    </svg>
  )
}

export default React.memo(RoundArrowIcon)
