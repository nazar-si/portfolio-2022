import React from 'react'
import style from "./projects.module.css"
import Card from '../card/Card'

export default function Comments() {
  return (
    <div className={style.wrapper}>
        <div className={style.grid}>
            <div className={style.column}>
              <Card>Test</Card>
              <Card>Test</Card>
            </div>
            <div className={style.column}>
              <Card>Test</Card>
              <Card>Test</Card>
            </div>
            <div className={style.column}>
              <Card>Test</Card>
              <Card>Test</Card>
            </div>
        </div>
    </div>
  )
}
