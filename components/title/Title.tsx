import React, { useEffect, useState } from 'react'
import style from "./style.module.css"
import classNames from 'classnames'



const title = "Fullstack Web-Developer"
const subtitle = "Programmer, Physicist, Math-enjoyer and Researcher"

export default function Title() {
    const [scroll, setScroll] = useState(0);
    useEffect(() => {
      window.addEventListener("scroll", ()=>{setScroll(window.scrollY)})
    }, [])
    const grad = (s : string) => `radial-gradient(rgb(${s}), rgb(${s} / 0.7) 50%, #fff0 80%)`
    
  return (
    <>
        <div className={style.wrapper}>
        <div className={style.back}>
            <div className={classNames(style.flare, "bg-blue-500")} 
                style={{
                    transform: `translate(-50%, -50%)`,
                    width: `15vw`,
                    height: `15vw`,
                    animationDelay: "0s",
                    background: grad("59 130 246")
                }}></div>
            <div className={classNames(style.flare, "bg-indigo-500")} 
                style={{
                    transform: `translate(calc(-50% - 10vw), calc(-50% + 10vw))`,
                    width: `20vw`,
                    height: `20vw`,
                    animationDelay: "2.5s",
                    background: grad("99 102 241")
                }}></div>
            <div className={classNames(style.flare, "bg-sky-500")} 
                style={{
                    transform: `translate(calc(-50% + 5vw), calc(-50% + 10vw))`,
                    width: `13vw`,
                    height: `13vw`,
                    animationDelay: "1s",
                    background: grad("14 165 233")
                }}></div>
            <div className={classNames(style.flare, "bg-teal-500")} 
                style={{
                    transform: `translate(calc(-50% + 5vw), calc(-50% - 10vw))`,
                    width: `20vw`,
                    height: `20vw`,
                    animationDelay: "1s",
                    background: grad("20 184 166")
                }}></div>
            <div className={classNames(style.flare, "bg-indigo-500")} 
                style={{
                    transform: `translate(calc(-50% + 10vw), calc(-50%))`,
                    width: `13vw`,
                    height: `13vw`,
                    animationDelay: "1.5s",
                    background: grad("99 102 241")
                }}></div>
            <div className={classNames(style.flare, "bg-purple-500")} 
                style={{
                    transform: `translate(calc(-50% - 10vw), calc(-50% - 3vw))`,
                    width: `15vw`,
                    height: `15vw`,
                    animationDelay: "3.5s",
                    background: grad("168 85 247")
                }}></div>
            <div className={classNames(style.flare, "bg-teal-500")} 
                style={{
                    transform: `translate(calc(-50% ), calc(-50% + 3vw))`,
                    width: `15vw`,
                    height: `15vw`,
                    animationDelay: "4s",
                    background: grad("20 184 166")
                }}></div>
            <div className={style.left}></div>
            <div className={style.right}></div>
            <div className={style.rect1} style={{width: "20vh", height: "20vh"}}></div>
            <div className={style.rect1} style={{width: "22vh", height: "24vh"}}></div>
            <div className={style.rect1} style={{width: "23vh", height: "28vh"}}></div>
            <div className={style.rect2} style={{width: "25vh", height: "28vh"}}></div>
            <div className={style.rect2} style={{width: "27vh", height: "31vh"}}></div>
            <div className={style.rect2} style={{width: "31vh", height: "33vh"}}></div>
            <div className={style.circ1}></div>
            <div className={style.circ2}></div>
        </div>
        <div className={style.content}>
            <h1 className={style.title}>
                {title}
                <div className={style.appear}>{title}</div>
                <div className={style.fake}>{title}</div>
            </h1>
            <h2 className={style.subtitle}>{subtitle}</h2>
        </div>
    </div>
    <div>
    </div>
    </>
  )
}
