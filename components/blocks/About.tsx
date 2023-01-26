import common from "./common.module.css"
import style from "./about.module.css"
import React from 'react'
import Card from "../card/Card"

export default function About() {
  return (
    <div className={style.wrapper}>
        <hr />
      <div className={style.content}>
        {/* <h2 className={common.title + " w-[100%] text-center"}>
          Who am I?
        </h2> */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-1 lg:grid-cols-3 items-center justify-center">
          <Card className={"rotate-[-3deg] translate-x-5 md:translate-x-0 w-fit max-w-[400px] m-auto lg:m-8 " + style.imageCard}>
            <img src="/pic.jpg" alt="" className="rounded-md border-[1px] border-white/25"/>
          </Card>
          <div className="col-span-2 m-4 rounded-lg bg-black/30 relative">
            <h3 className="text-xl font-bold m-4">Hello, my name is Nazar</h3>
            <section className="text-light m-4">
              I am a lead frontend developer and project manager of Entropy Concept team - group of enthusiasts with a common main goal to bring innovation to the world.
              <br /> <br />
              Currently I am studying physics and data science at Higher School of Economics. Development became essential in my life as it required to compute behavior of complex systems in physics and economics and is essential for study in general.
    
            </section>
          </div>
        </div>
      </div>
        <hr />
    </div>
  )
}
