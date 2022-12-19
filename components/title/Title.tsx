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
    
  return (
    <>
        <div className={style.wrapper}>
        <div className={style.back}>
            <div className={classNames(style.flare, "bg-blue-500")} 
                style={{
                    transform: `translate(-50%, -50%)`,
                    width: `10vw`,
                    height: `10vw`,
                    animationDelay: "0s"
                }}></div>
            <div className={classNames(style.flare, "bg-indigo-500")} 
                style={{
                    transform: `translate(calc(-50% - 10vw), calc(-50% + 10vw))`,
                    width: `15vw`,
                    height: `15vw`,
                    animationDelay: "2.5s"
                }}></div>
            <div className={classNames(style.flare, "bg-sky-500")} 
                style={{
                    transform: `translate(calc(-50% + 5vw), calc(-50% + 10vw))`,
                    width: `8vw`,
                    height: `8vw`,
                    animationDelay: "1s",
                }}></div>
            <div className={classNames(style.flare, "bg-teal-500")} 
                style={{
                    transform: `translate(calc(-50% + 5vw), calc(-50% - 10vw))`,
                    width: `15vw`,
                    height: `15vw`,
                    animationDelay: "1s",
                }}></div>
            <div className={classNames(style.flare, "bg-indigo-500")} 
                style={{
                    transform: `translate(calc(-50% + 10vw), calc(-50%))`,
                    width: `8vw`,
                    height: `8vw`,
                    animationDelay: "1.5s",
                }}></div>
            <div className={classNames(style.flare, "bg-purple-500")} 
                style={{
                    transform: `translate(calc(-50% - 10vw), calc(-50% - 3vw))`,
                    width: `10vw`,
                    height: `10vw`,
                    animationDelay: "3.5s",
                }}></div>
            <div className={classNames(style.flare, "bg-teal-500")} 
                style={{
                    transform: `translate(calc(-50% ), calc(-50% + 3vw))`,
                    width: `10vw`,
                    height: `10vw`,
                    animationDelay: "4s",
                }}></div>
            <div className={style.left}></div>
            <div className={style.right}></div>
            <div className={style.rect1} style={{width: "10vw", height: "10vw"}}></div>
            <div className={style.rect1} style={{width: "12vw", height: "14vw"}}></div>
            <div className={style.rect1} style={{width: "13vw", height: "18vw"}}></div>
            <div className={style.rect2} style={{width: "15vw", height: "18vw"}}></div>
            <div className={style.rect2} style={{width: "17vw", height: "21vw"}}></div>
            <div className={style.rect2} style={{width: "21vw", height: "23vw"}}></div>
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
