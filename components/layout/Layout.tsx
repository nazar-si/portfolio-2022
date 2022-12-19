import style from "./style.module.css"
import React from 'react'
import Nav from "../nav/Nav"

export default function Layout({children} : {children : React.ReactNode}) {
  return (
    <>
        <Nav></Nav>
        <div>{children}</div>
    </>
  )
}
