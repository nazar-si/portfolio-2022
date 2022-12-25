import React from 'react'

export type Props = {
  size?: number,
  strokeWidth?: number,
}

export default function BrandStrapi({size, strokeWidth = 1} : Props) {
  return (
    <div>
        <svg width={size} height={size} viewBox="50 50 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth={strokeWidth * 20}>
            <path d="M414 182H212V285H315V388H418V186C418 183.791 416.209 182 414 182Z"/>
            <path d="M212 285H311C313.209 285 315 286.791 315 289V388H216C213.791 388 212 386.209 212 384V285Z" />
            <path d="M315 388H418L318.414 487.586C317.154 488.846 315 487.953 315 486.172V388Z" />
            <path d="M212 285H113.828C112.046 285 111.154 282.846 112.414 281.586L212 182V285Z" />
        </svg>

    </div>
  )
}
