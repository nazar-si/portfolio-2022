import common from "./common.module.css"
import React from 'react'
import style from "./projects.module.css"
import Card from '../card/Card'
import Projects from "../projects/Projects"

import { RotateDot, RotateClockwise, RotateClockwise2} from "tabler-icons-react"


// const states = {
//   done: {
//     color: "text-teal-500 border-teal-500",
//     icon: RotateDot
//   },
//   progress: {
//     color: "text-blue-500 border-blue-500",
//     icon: RotateClockwise
//   },
//   canceled: {
//     color: "text-rose-500 border-rose-500",
//     icon: RotateClockwise2
//   },
//   planed: {
//     color: "text-zinc-600 border-zinc-600",
//     icon: RotateClockwise2
//   },
//   waiting: {
//     color: "text-purple-500 border-purple-500",
//     icon: RotateClockwise2
//   }
// }
// type state = keyof typeof states;

// type projectType = "personal" | "team" | "experiment" | "research"

// interface project {
//   state: state, 
//   title: string,
//   description: string,
//   date: Date,
//   endDate?: Date, 
//   role: string,
//   type: projectType
// }

// const Projects : Array<project> = [
//   {
//     state : "done",
//     title: "Test",
//     description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, suscipit iste. Ullam similique accusamus quo sapiente ad exercitationem, odit aliquam eius, corporis, obcaecati tempore. Consequuntur veniam fugiat quisquam voluptatum ab?",
//     date: new Date(),
//     role: "Developer",
//     type: "team"
//   }
// ]

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
