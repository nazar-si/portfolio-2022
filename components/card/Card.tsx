import style from "./style.module.css"
import React, { useState } from 'react'

export default function Card({children, className} : {children : React.ReactNode, className?: string}) {
  const [position, setPosition] = useState([-500, -500])
  const [size, setSize] = useState(0);
  const [rot, setRot] = useState([0, 0])
  return (
    <div className={style.wrapper + " m-4 border-[1px] rounded-md shadow-lg relative " + className} style={{
        // transform: `rotateX(${rot[1] * 5}deg) rotateY(${rot[0] * 5}deg)`
      }}>
      <div className="p-4">{children}</div>
      <div className="absolute top-0 bottom-0 left-0 right-0 rounded-md overflow-hidden"  onMouseMove={(e)=>{
        e.stopPropagation();
        let r = e.currentTarget.getBoundingClientRect();
        setSize((r.width ** 2 + r.height ** 2) ** 0.5 )
        let x = e.clientX - r.left;
        let y = e.clientY - r.top
        setPosition([x, y])
        setRot([2 * x / r.width - 1, 2 * y / r.height - 1])
      }}>
        <div className={"flare absolute " + style.flare} style={{
          background: "radial-gradient(#0084ff15, #0000 70%)",
          width: size,
          height: size,
          top: position[1] - size / 2,
          left: position[0] - size / 2,
          transition: "opacity 0.5s",
        }}>
          
        </div>
      </div>
    </div>
  )
}
