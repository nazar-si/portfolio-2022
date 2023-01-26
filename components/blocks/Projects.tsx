import common from "./common.module.css"
import React from 'react'
import style from "./projects.module.css"
import Card from '../card/Card'
import Projects from "../projects/Projects"

import { RotateDot, RotateClockwise, RotateClockwise2} from "tabler-icons-react"


export default function Comments() {
  return (
    <div className={style.wrapper}>
      <h2 className={common.title}>My other projects</h2>
      <div className={style.content}>
        <Projects></Projects>
      </div>
    </div>
  )
}
