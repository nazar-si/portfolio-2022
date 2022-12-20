import common from "./common.module.css"
import style from "./about.module.css"
import React from 'react'
import Card from "../card/Card"

export default function About() {
  return (
    <div className={style.wrapper}>
        <hr />
      <div className={style.content}>
        <h2 className={common.title + " w-[100%] text-center"}>
          Who am I?
        </h2>
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
          <Card className={"rotate-[-3deg] translate-x-5 md:translate-x-0 "}>
            <img src="/pic.jpg" alt="" className="rounded-md"/>
          </Card>
          <Card className={"col-span-2"}>Test</Card>
        </div>
      </div>
        <hr />
    </div>
  )
}
