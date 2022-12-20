import style from "./style.module.css"
import React from 'react'

export default function Nav() {
  return (
    <nav className={style.wrapper}>
        <div className={style.cover}></div>
        <div className={style.row}>
          <button className={style.selected}>Main</button>
          <button>Blog</button>
          <button>Projects</button>
        </div>
        <hr className={style.bottomLine} />
    </nav>
  )
}
