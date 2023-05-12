import style from "./roadmap.module.css"
import common from "./common.module.css"
import React from 'react'
import { GitCommit, GitFork, RotateDot } from "tabler-icons-react"

const Entries = [
    {
        title: "Optimize and Organize Hack",
        description: "For this hackathon I was building dashboard for monitoring of the condition of construction facilities. It was very tedious process and despite the fact that I haven't gotten any winning place I was very glad for experience. This project showed me how far I've gotten with React development, when it became tool that I can fully understand and control.",
        date: new Date("2023-04-11")
    },
    {
        title: "Creating gamification platform for VTB",
        description: "The VTB Bank gamification platform is a fun and engaging way for users to track their progress and earn rewards, while also promoting the bank's services and products. Using Svelte allowed me to build a fast and responsive platform that integrates seamlessly with the bank's existing systems.",
        date: new Date("2022-10-09")
    },
    {
        title: "Refactor product for Rosseti",
        description: "I have developed a website application using Svelte for analyzing the status of electrical equipment, with real-time equipment monitoring and an electric circuit builder for simulating emergency situations. It was certainly one of the greatest teamworks I've ever had.",
        date: new Date("2022-08"),
        dateEnd: new Date("2022-09-30")
    }
]

const formatter = new Intl.DateTimeFormat("en", {month: "long", year: "numeric", day: "numeric"})
const formatterStart = new Intl.DateTimeFormat("en", {month: "long", day: "numeric"})

export default function roadmap() {
  return (
    <div className={style.wrapper}>
        <div  className="absolute -z-10 right-0 opacity-80 min-w-[1000px] 2xl:right-[10%]">
            <img src="/abstract-3.png" alt=""/>
        </div>
        <div className={style.container}>
            <h2 className={common.title}>Roadmap</h2>
            <h2 className={common.subtitle}>Things I've experienced so far. <span className="text-indigo-400">This section is under development.</span></h2>
            <br />
            {Entries.map((e, i) => <div className={style.entry} key={i}>
                <div className={style.road}>
                    <div className={style.circle}>
                        {i == 0 ? <RotateDot /> : <GitCommit />}
                    </div>
                    <div className={style.line}></div>
                </div>
                <div className={style.content}>
                    <div className={style.date}>
                        {!e.dateEnd && <>{formatter.format(e.date)}</>}
                        {e.dateEnd && <>{formatterStart.format(e.date)} - {formatter.format(e.dateEnd)}</>}
                    
                    </div>
                    <div className={style.title}>{e.title}</div>
                    <div className={style.description}>{e.description}</div>
                </div>
            </div>)}
            <div className={style.entry}>
                <div className={style.road}>
                    <div className={style.circle}>
                        <GitFork className="rotate-180"/>
                    </div>
                </div>
                <div className={style.content + " text-blue-50 underline hover:text-teal-400 transition-all cursor-pointer"}>
                    <div className={style.title}>Show all events...</div>
                </div>
            </div>
        </div>
    </div>
  )
}
