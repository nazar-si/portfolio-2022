import React, { useState } from 'react'
import style from "./tiangle.module.css"
import { Analyze, Atom, World } from 'tabler-icons-react';
import classNames from 'classnames';
import { App, Palet } from './Skills';
import iconStyle from "./skills.module.css"

type Props = {}
const Apps : Array<Pick<App, "palet" | "icon">> = [
    {
        palet: "white",
        icon: null,
    },
    {
        palet: "blue",
        icon: World,
    },
    {
        palet: "teal",
        icon: Analyze,
    },
    {
        palet: "red",
        icon: Atom,
    },
]

export default function Triangle({}: Props) {
    const [hovered, setHovered] = useState(0);
    const [selected, setSelected] = useState(0);
    const [prevSelected, setPrevSelected] = useState(0);
    const [rotation, setRotation] = useState(0);
    const [rotations, setRotations] = useState([0, 0, 0]);
    const [selections, setSelections] = useState([0, 0, 0]);
    const Select = (i: number, selected: number, setSelect: any, setRot: (i:(i:number)=>any)=>any, setPrevSelect: any)=>{
        if (i == selected){
            i = 0 
        }
        setPrevSelect(selected)
        setSelect(i)
        if (selected == 0){
            if (i == 1){
                setRot(i=>i-30);
            }
            if (i == 2){
                setRot(i=>i+90);
            }
            if (i == 3){
                setRot(i=>i-150);
            }
        }
        if (selected == 1){
            if (i == 0){
                setRot(i=>i+30)
            }
            if (i == 2){
                setRot(i=>i+120)
            }
            if (i == 3){
                setRot(i=>i-120)
            }
        }
        if (selected == 2){
            if (i == 0){
                setRot(i=>i-90)
            }
            if (i == 1){
                setRot(i=>i-120)
            }
            if (i == 3){
                setRot(i=>i+120)
            }
        }
        if (selected == 3){
            if (i == 0){
                setRot(i=>i+150)
            }
            if (i == 1){
                setRot(i=>i+120)
            }
            if (i == 2){
                setRot(i=>i-120)
            }
        }
    }
    const MainSelect = (i:number) => Select(i, selected, setSelected, setRotation, setPrevSelected);
    // const Rotate = (index: number, i: number) =>{
    //     const sPS = ()=>null;
    //     const sS = (i:number)=>{
    //         selections[index] = i;
    //         setSelections(selections);
    //     }
    //     const sR = (f: (i:number)=>any)=>{
    //         setRotations(f);
    //     }
    // }
  return (
    <div className={style.wrapper}>
        <div className={classNames(style.info, selected!==0 && style.show)}  style={{pointerEvents: "none"}}>
            <div className={classNames(style.block, selected==1 && style.show)}  style={{transform: `rotateX(${+rotation +30}deg) ${selected!==1?"rotateY(45deg) translateZ(200px)":""}`}}>
                <div className={style.title}>
                    Web Development
                </div>
                <div className={style.description}>
                    I am into web-dev since 2019, when I participated in several projects involving creation of web-application for enterprise need. 
                </div>
            </div>
            <div className={classNames(style.block, selected==2 && style.show)} style={{transform: `rotateX(${+rotation + 30 -   120}deg) ${selected!==2?"rotateY(45deg) translateZ(200px)":""}`}}>
                <div className={style.title}>
                    Data Analysis
                </div>
                <div className={style.description}>
                    My minor university degree is physical and intellectual data analysis, for which I studied databases and machine learning.   
                </div>
            </div>
            <div className={classNames(style.block, selected==3 && style.show)} style={{transform: `rotateX(${+rotation + 30 + 120}deg) ${selected!==3?"rotateY(45deg) translateZ(200px)":""}`}}>
                <div className={style.title}>
                    Sciences
                </div>
                <div className={style.description}>
                    My major is physics. It helped me to embrase my passion for hard work and to develop my problem-solving skills. 
                </div>
            </div>
        </div>
        {/* <div className={style.items} style={{zIndex: 100}} >
            <div className={classNames(style.container, style.small, selected === 0 && style.no )} style={{transform: selected === 0 ? `translateX(200px) rotate(90deg)`: ''}}>
                <div className={style.row} style={{transform: `translate(2rem, 3rem) rotate(${rotation}deg)`}}>
                    <div className={style.entry} style={{background: "#000"}}></div>
                    <div className={style.entry} style={{background: "#000"}}></div>
                    <div className={style.entry} style={{background: "#000"}}></div>
                </div>
            </div>
        </div> */}
        <div className={style.container} >
            <div className={classNames(style.circle, selected==0 && style.hidden)}></div>
            <div className={classNames(style.circle, selected==0 && style.hidden)}></div>
            <div className={style.row} style={{transform: `translateY(3.5rem) rotate(${rotation}deg)`}}>
                <div className={style.entry + " " + (selected==1?style.selected:"")}
                    onMouseLeave={()=>setHovered(0)}
                    onMouseOver={()=>{setHovered(1)}}
                    onClick={()=>{MainSelect(1)}}
                >
                    <div className={style.line} style={{transform: `translateZ(40px)`}}>
                        <div className={classNames(style.text, (hovered == 1 || hovered == 3 || selected == 1 || selected == 3) && style.hovered, selected==3 && style.rotate)}>
                            Projects
                        </div>
                    </div>
                    <div className={style.line}></div>
                    <div className={style.line}></div>
                    <div className={style.hover}></div>
                    <div className={iconStyle.icon} style={{transform: `translate(calc(-50%), calc(-50%)) rotate(${-rotation}deg) scale(0.75)`, top: "50%", left: "50%", zIndex: 3, pointerEvents: "none"}}>
                        {selected == 1 && Apps.map((e,i)=><>
                        {((i == selected ) && e.icon) && <div key={i} className={classNames({[iconStyle.remove]: i == prevSelected, [iconStyle.appear]: i == selected})}>
                            <div className={iconStyle.backIcon}  style={{transform: "none", opacity: 0.4}}>
                                <e.icon size={150} strokeWidth={1} stroke={Palet[e.palet].back} fill={Palet[e.palet].back}></e.icon>
                            </div>
                            <div className={iconStyle.backIcon2}  style={{transform: "none", filter: "blur(.2rem)", opacity: 0.7}}>
                                <e.icon size={150} strokeWidth={1} stroke={Palet[e.palet].second}></e.icon>
                            </div>
                            <div className={iconStyle.backIcon3}  style={{transform: "none"}}>
                                <e.icon size={150} strokeWidth={0.2} stroke={Palet[e.palet].primary}></e.icon>
                            </div>
                        </div>}</>)}
                    </div>
                    <div className={style.icon} style={{transform: `rotate(${-rotation}deg)`}}>
                        <World size={40} strokeWidth={1.5}></World>
                    </div>
                    <div className={style.subline}></div>
                    <div className={style.subline}></div>
                </div>
                <div className={style.entry + " " + (selected==2?style.selected:"")}
                    onMouseLeave={()=>setHovered(0)}
                    onMouseOver={()=>{setHovered(2)}}
                    onClick={()=>{MainSelect(2)}}
                >
                    <div className={style.line}>
                        <div className={classNames(style.text, (hovered == 1 || hovered == 2 || selected == 1 || selected == 2) && style.hovered, (selected!=2 && selected!=3) && style.rotate)}>
                            Team Work
                        </div>
                    </div>
                    <div className={style.line}></div>
                    <div className={style.line}></div>
                    <div className={style.hover}></div>
                    <div className={iconStyle.icon} style={{transform: `translate(calc(-50%), calc(-50%)) rotate(${-rotation + 120}deg) scale(0.75)`, top: "50%", left: "50%", zIndex: 3, pointerEvents: "none"}}>
                        {selected == 2 && Apps.map((e,i)=><>
                        {((i == selected ) && e.icon) && <div key={i} className={classNames({[iconStyle.remove]: i == prevSelected, [iconStyle.appear]: i == selected})}>
                            <div className={iconStyle.backIcon}  style={{transform: "none", opacity: 0.4}}>
                                <e.icon size={150} strokeWidth={1} stroke={Palet[e.palet].back} fill={Palet[e.palet].back}></e.icon>
                            </div>
                            <div className={iconStyle.backIcon2}  style={{transform: "none", filter: "blur(.2rem)", opacity: 0.7}}>
                                <e.icon size={150} strokeWidth={1} stroke={Palet[e.palet].second}></e.icon>
                            </div>
                            <div className={iconStyle.backIcon3}  style={{transform: "none"}}>
                                <e.icon size={150} strokeWidth={0.2} stroke={Palet[e.palet].primary}></e.icon>
                            </div>
                        </div>}</>)}
                    </div>
                    <div className={style.icon} style={{transform: `rotate(${-rotation + 120}deg)`}}>
                        <Analyze size={40} strokeWidth={1.5}></Analyze>
                    </div>
                    <div className={style.subline}></div>
                    <div className={style.subline}></div>
                </div>
                <div className={style.entry + " " + (selected==3?style.selected:"")}
                    onMouseLeave={()=>setHovered(0)}
                    onMouseOver={()=>{setHovered(3)}}
                    onClick={()=>{MainSelect(3)}}
                >
                    <div className={style.line}>
                        <div className={classNames(style.text, (hovered == 3 || hovered == 2 || selected == 3 || selected == 2) && style.hovered, selected!=3 && selected!=1 && style.rotate)}>
                            Research
                        </div>
                    </div>
                    <div className={style.line}></div>
                    <div className={style.line}></div>
                    <div className={style.hover}></div>
                    <div className={iconStyle.icon} style={{transform: `translate(calc(-50%), calc(-50%)) rotate(${-rotation- 120}deg) scale(0.75)`, top: "50%", left: "50%", zIndex: 3, pointerEvents: "none"}}>
                        {selected == 3 && Apps.map((e,i)=><>
                        {((i == selected ) && e.icon) && <div key={i} className={classNames({[iconStyle.remove]: i == prevSelected, [iconStyle.appear]: i == selected})}>
                            <div className={iconStyle.backIcon}  style={{transform: "none", opacity: 0.4}}>
                                <e.icon size={150} strokeWidth={1} stroke={Palet[e.palet].back} fill={Palet[e.palet].back}></e.icon>
                            </div>
                            <div className={iconStyle.backIcon2}  style={{transform: "none", filter: "blur(.2rem)", opacity: 0.7}}>
                                <e.icon size={150} strokeWidth={1} stroke={Palet[e.palet].second}></e.icon>
                            </div>
                            <div className={iconStyle.backIcon3}  style={{transform: "none"}}>
                                <e.icon size={150} strokeWidth={0.2} stroke={Palet[e.palet].primary}></e.icon>
                            </div>
                        </div>}</>)}
                    </div>
                    <div className={style.icon} style={{transform: `rotate(${-rotation - 120}deg)`}}>
                        <Atom size={40} strokeWidth={1.5}></Atom>
                    </div>
                    <div className={style.subline}></div>
                    <div className={style.subline}></div>
                </div>
            </div>
        </div>
    </div>
  )
}