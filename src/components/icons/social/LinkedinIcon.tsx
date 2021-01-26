import React from 'react'

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 40 40"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{'linkedin'}</title>
      <path
        d="M15.338 28.727h-4.106V15.504h4.106v13.223zM13.283 13.7a2.39 2.39 0 112.378-2.4 2.4 2.4 0 01-2.378 2.4zm17.422 15.027h-4.1V22.29c0-1.534-.031-3.5-2.135-3.5-2.135 0-2.462 1.667-2.462 3.391v6.547h-4.1V15.504h3.938v1.808h.059a4.314 4.314 0 013.885-2.135c4.156 0 4.919 2.736 4.919 6.291v7.263l-.004-.004z"
        fill="#FFF"
        fillRule="nonzero"
      />
    </svg>
  )
}

export default LinkedinIcon
