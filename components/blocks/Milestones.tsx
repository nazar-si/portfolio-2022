import classNames from "classnames";
import style from "./milestones.module.css"
import common from "./common.module.css"
import React, { useState } from 'react'

const projects = [
    {
        title: "Sequelix",
        description: "Innovative note-taking application with the creation of links between them. Not just notes but new ideas, new understanding.",
        url: "/sb.jpg"
    },
    {
        title: "Refactor",
        description: "AI-based project ment for prediction of energy flow and state of equipment in energy-supply system.",
        url: "/refactor.jpg"
    },
]

export default function Projects() {

    const [selected, setSelected] = useState(0);

    return (
        <div className={style.wrapper}>
            <img src="/abstract-1.png" alt="" className='blur-sm absolute sm:-translate-x-[50%]'/>
            <h2 className={common.title}>
                Milestone Projects
            </h2>
            <h3 className={common.subtitle}>Biggest projects I am working with.</h3>
            <div className={style.container}>
                <div className={style.column}>
                    {projects.map((p, id)=>
                        <button className={classNames({[style.selected]: selected == id })} onClick={()=>{setSelected(id)}}>
                            <div className={style.projectTitle}>{p.title}</div>
                            <div className={style.projectDescription}>{p.description}</div>
                        </button>
                    )}
                </div>
                <div className={style.content}>
                    <div className={style.placeholder}>
                    <img src={projects[selected].url} alt="" />
                    </div>
                </div>
            </div>
        </div>
    )
}
