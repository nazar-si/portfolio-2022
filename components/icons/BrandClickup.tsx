import React from 'react'

export type Props = {
  size?: number,
  strokeWidth?: number,
  stroke?: string,
  fill?: string,
}

export default function BrandClickup({size, stroke, fill, strokeWidth = 1} : Props) {
  return (
        // <svg width={size} height={size} viewBox="50 50 500 500" xmlns="http://www.w3.org/2000/svg" stroke={stroke?stroke:"currentColor"} strokeWidth={strokeWidth * 20} fill={fill?fill:"none"}>
        //     <path d="M414 182H212V285H315V388H418V186C418 183.791 416.209 182 414 182Z"/>
        //     <path d="M212 285H311C313.209 285 315 286.791 315 289V388H216C213.791 388 212 386.209 212 384V285Z" />
        //     <path d="M315 388H418L318.414 487.586C317.154 488.846 315 487.953 315 486.172V388Z" />
        //     <path d="M212 285H113.828C112.046 285 111.154 282.846 112.414 281.586L212 182V285Z" />
        // </svg>
        <svg width={size} height={size} viewBox="20 20 140 120" xmlns="http://www.w3.org/2000/svg" stroke={stroke?stroke:"currentColor"} strokeWidth={strokeWidth * 6} fill={fill?fill:"none"}>
          <path clip-rule="evenodd" d="M55.8789 105.714L69.3974 95.3593C76.5762 104.732 84.1998 109.051 92.6948 109.051C101.143 109.051 108.557 104.781 115.414 95.4832L129.119 105.59C119.232 118.996 106.932 126.079 92.6948 126.079C78.5049 126.079 66.0907 119.046 55.8789 105.714Z"/>
          <path clip-rule="evenodd" d="M92.6491 60.7078L68.5883 81.4406L57.4727 68.5407L92.6969 38.1885L127.647 68.5644L116.477 81.417L92.6491 60.7078Z"/>
        </svg>
        
  )
}
