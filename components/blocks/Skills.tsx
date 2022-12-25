import style from "./skills.module.css"
import common from "./common.module.css"
import React, { useState } from 'react'
import { 
    BrandGithub,
    BrandSvelte,
    BrandReact,
    BrandVscode,
    CSharp,
    BrandTailwind,
    BrandPython,
    BrandAdobe,
    BrandFigma,
    BrandCypress,
    BrandBlender,
    BrandD3,
    BrandDocker,
    BrandNextjs,
    BrandCss3,
    BrandHtml5,
    BrandTypescript,
    BrandGraphql,
    BrandSolidjs,
    BrandVite,
    BrandUnity,
    Database,
    BrandNotion,
    BrandPrisma,
    BrandGit,
} from "tabler-icons-react"
import BrandStrapi from "../icons/BrandStrapi"
import classNames from "classnames"
import Card from "../card/Card"



const Apps = [
    {
        icon: BrandGithub,
        name: "Github",
        level:  90,
        description: ["Sole platform to store all my works and projects. It's been helpful for many years. Now I am especially interested in Github actions and looking forward to try them."],
    },
    {
        icon: BrandGit,
        name: "Git",
        level:  70,
        description: ["git add .", "git -m commit -m 'Project init'", "git push"],
    },
    {
        icon: BrandSvelte,
        name: "Svelte",
        level: 95,
        description: ["I've been using Svelte for half of the year and absolutely love it. Created several projects, including milestone ones. Had an opportunity to develop two libraries for it."],
    },
    {
        icon: BrandReact,
        name: "React",
        level: 90,
        description: ["First and beloved framework. So many stuff have been created and will be created very soon. Anyway, this site wouldn't been possible without it."],
    },
    {
        icon: BrandVscode,
        name: "VSCode",
        level: 100,
        description: ["There are no developer without one's code editor of choice."],
    },
    {
        icon: CSharp,
        name: "C#",
        level: 60,
        description: ["Language that was with me during all stages of programming study. Started as language for Unity 3D and ended up being main driver for ASP.Net backend development."],
    },
    {
        icon: BrandD3,
        name: "D3.js",
        level: 20,
        description: ["'No way, our application must have beautiful data visualization!'"],
    },
    {
        icon: BrandTailwind,
        name: "Tailwind",
        level: 95,
        description: ["Not only styles and easy developer experience, but clever design system with copious methodologies to develop best UI for web including this site."],
    },
    {
        icon: BrandPython,
        name: "Python",
        level: 90,
        description: ["My second language that's saved me during data-science projects and my physics study. Some of advanced features and libraries inspired me to enter web-development world."],
    },
    {
        icon: BrandAdobe,
        name: "Adobe Tools",
        level: 100,
        description: ["Have been using adobe tools stack from 2017 and still have enjoyed process of working with art and designs both for professional and hobby usage. My favorite of all are Photoshop and Illustrator."],
    },
    {
        icon: BrandFigma,
        name: "Figma",
        level: 95,
        description: ["- I have prototype design in Figma. Do you have it?", "- Sure! "],
    },
    {
        icon: BrandCypress,
        name: "Cypress",
        level: 70,
        description: ["Still best way for me to implement E2E testing on any web-site and play with different things."],
    },
    {
        icon: BrandBlender,
        name: "Blender",
        level: 70,
        description: ["Just like playing with 3D models, especially when some of them required in projects featuring Three.js"],
    },
    {
        icon: BrandDocker,
        name: "Docker",
        level: 25,
        description: ["It helps to run someone's code even faster and deploy complex architecture in seconds."],
    },
    {
        icon: BrandNextjs,
        name: "Next.js",
        level: 90,
        description: ["Best framework to build a web-application today, featuring powerful SEO and html-compilation features like ISR, SSR while working on React and offering powerful-enough backend features."],
    },
    {
        icon: BrandCss3,
        name: "CSS",
        level: 95,
        description: ["CSS is my way to go while styling HTML, but not without help of:", "1. SCSS", "2. PostCSS", "3. Emotion.js", "4. Styled Components", "5. Tailwind's @apply"],
    },
    {
        icon: BrandHtml5,
        name: "HTML",
        level: 100,
        description: ["Show me a web-developer, who haven't studied HTML and SEO optimization."],
    },
    {
        icon: BrandTypescript,
        name: "TypeScript",
        level: 100,
        description: ["JS could've been in that list, but I think world developed better option for any developer to use instead."],
    },
    {
        icon: BrandGraphql,
        name: "GraphQL",
        level: 15,
        description: ["Data-fetching option and query language that I regard as very useful for my future projects. Still, I am researching and studying it while looking forwards for it's application."],
    },
    {
        icon: BrandPrisma,
        name: "PrismaORM",
        level:100,
        description: ["While using typescript it is best-to-go solution for data-fetching. Models clearly defined separately from main codebase while instantly providing typed api for my data fetching based on created models."],
    },
    {
        icon: BrandSolidjs,
        name: "Solid.js",
        level: 15,
        description: ["Framework that will have bright future and may be regarded as React's ancestor for sure. It makes so many stuff obvious and easy, while providing great speed. Thing I adore studding more about."],
    },
    {
        icon: BrandVite,
        name: "Vite",
        level: 40,
        description: ["Best package-bundler I encountered during my svelte kit experience and it's certainly provides better option for fast and reliable project builds."],
    },
    {
        icon: BrandUnity,
        name: "Unity",
        level: 90,
        description: ["My development experience started from game-development. Still regard Unity as powerful option for large games and small projects. Moreover, it's an excellent option to get into development world."],
    },
    {
        icon: Database,
        name: "SQL",
        level: 90,
        description: ["I studied PostgresSQL in my university. No matter how many ORM's I tried, sometimes I've just needed to use bare SQL that offered me full control over the database."],
    },
    {
        icon: BrandNotion,
        name: "Notion",
        level: 100,
        description: ["One application I've been using for my note taking experience. Not the best, but still the most loved."],
    },
    {
        icon: BrandStrapi,
        name: "Strapi",
        level: 70,
        description: ["My first and mostly adored CMS. It offers best experience both for developers and administrators for managing and developing content for any web-site."],
    }
]
Apps.sort((a,b) => b.level - a.level)

export default function Skills() {
    const [selected, setSelected] = useState(-1);
    const [prevSelected, setPrevSelected] = useState(-1);
    return (
        <div className={style.wrapper}>
            <h2 className={common.title}>My skills</h2>
            <h3 className={common.subtitle}>Click something!</h3>
            <div className={style.container}>

                <div className={style.icon}>
                    {Apps.map((e,i)=><>
                    {(i == selected || i == prevSelected) && <div className={classNames({[style.remove]: i == prevSelected, [style.appear]: i == selected})}>
                        <div className={style.backIcon}>
                            <e.icon size={300} strokeWidth={1} fill="rgb(59 130 246)"></e.icon>
                        </div>
                        <div className={style.backIcon2}>
                            <e.icon size={300} strokeWidth={1}></e.icon>
                        </div>
                        <div className={style.backIcon3}>
                            <e.icon size={300} strokeWidth={0.2} ></e.icon>
                        </div>
                    </div>}</>)}
                </div>
                <div className="flex-col items-center relative justify-center">
                        
                    <div className={style.skills}>
                        {Apps.map((E, i)=>
                            <button key={i} className={classNames(style.skill, {[style.selected] : i == selected})} onClick={()=>{setPrevSelected(selected); setSelected(i == selected?-1:i)}}>
                                <E.icon size={32} strokeWidth={1}/>
                            </button>)}
                    </div>
                </div>
                <div className={classNames(style.card, {[style.show] : selected != -1})}>
                    <h3 className={style.title}>{Apps[selected == -1?prevSelected:selected]?.name} : <span className={style.percent}>{Apps[selected == -1?prevSelected:selected]?.level}%</span></h3>
                    <hr />
                    {Apps[selected == -1?prevSelected:selected]?.description.map((e)=><h4 className={style.description}>{e}</h4>)}
                    
                </div>
            </div>
        </div>
    )
}
