import style from "./roadmap.module.css"
import common from "./common.module.css"
import React from 'react'
import { GitCommit, GitFork, RotateDot } from "tabler-icons-react"

const Entries = [
    {
        title: "Crafting a design system for a multiplanetary future",
        description: "Most companies try to stay ahead of the curve when it comes to visual design, but for Planetaria we needed to create a brand that would still inspire us 100 years from now when humanity has spread across our entire solar system.",
        date: new Date("2022-09-05")
    },
    {
        title: "Introducing Animaginary: High performance web animations",
        description: "When you’re building a website for a company as ambitious as Planetaria, you need to make an impression. I wanted people to visit our website and see animations that looked more realistic than reality itself.",
        date: new Date("2022-09-02")
    },
    {
        title: "Rewriting the cosmOS kernel in Rust",
        description: "When we released the first version of cosmOS last year, it was written in Go. Go is a wonderful programming language with a lot of benefits, but it’s been a while since I’ve seen an article on the front page of Hacker News about rewriting some important tool in Go and I see articles on there about rewriting things in Rust every single week.",
        date: new Date("2022-08-22")
    }
]

const formatter = new Intl.DateTimeFormat("en", {month: "long", year: "numeric", day: "numeric"})

export default function roadmap() {
  return (
    <div className={style.wrapper}>
        <div  className="absolute -z-10 right-0 opacity-80 min-w-[1000px] 2xl:right-[10%]">
            <img src="/abstract-3.png" alt=""/>
        </div>
        <div className={style.container}>
            <h2 className={common.title}>Roadmap</h2>
            <h2 className={common.subtitle}>Things I've experienced so far. <span className="text-indigo-400">This section is under development and uses placeholder text.</span></h2>
            <br />
            {Entries.map((e, i) => <div className={style.entry} key={i}>
                <div className={style.road}>
                    <div className={style.circle}>
                        {i == 0 ? <RotateDot /> : <GitCommit />}
                    </div>
                    <div className={style.line}></div>
                </div>
                <div className={style.content}>
                    <div className={style.date}>{formatter.format(e.date)}</div>
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
