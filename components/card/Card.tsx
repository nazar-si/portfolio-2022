import style from "./style.module.css"
import React from 'react'

export default function Card({children} : {children : React.ReactNode}) {
  return (
    <div className="m-4 p-4 border-[1px] border-zinc-700 bg-zinc-800 rounded-md">{children}</div>
  )
}
