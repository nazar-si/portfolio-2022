import React from 'react'
import style from "./projects.module.css"
import Card from '../card/Card'

export default function Comments() {
  return (
    <div className={style.wrapper}>
      {/* <svg viewBox="0 0 558 558" width="300" height="300" fill="none" aria-hidden="true" className={style["rotate-clockwise"]     + " absolute mt-12"}><defs><linearGradient id=":R3b9m:" x1="79" y1="16" x2="105" y2="237" gradientUnits="userSpaceOnUse"><stop stop-color="#0084ff"></stop><stop offset="1" stop-color="#8400ff" stop-opacity="0"></stop></linearGradient></defs><path opacity=".2" d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z" stroke="#0084ff"></path><path d="M1 279C1 125.465 125.465 1 279 1" stroke="url(#:R3b9m:)" stroke-linecap="round"></path></svg>
      <svg viewBox="0 0 558 558" width="350" height="350" fill="none" aria-hidden="true" className={style["rotate-anticlockwise"] + " absolute mt-10"}><defs><linearGradient id=":R3b9m:" x1="79" y1="16" x2="105" y2="237" gradientUnits="userSpaceOnUse"><stop stop-color="#0084ff"></stop><stop offset="1" stop-color="#8400ff" stop-opacity="0"></stop></linearGradient></defs><path opacity=".2" d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z" stroke="#0084ff"></path><path d="M1 279C1 125.465 125.465 1 279 1" stroke="url(#:R3b9m:)" stroke-linecap="round"></path></svg>
      <svg viewBox="0 0 558 558" width="400" height="400" fill="none" aria-hidden="true" className={style["rotate-clockwise"]     + " absolute mt-8" }><defs><linearGradient id=":R3b9m:" x1="79" y1="16" x2="105" y2="237" gradientUnits="userSpaceOnUse"><stop stop-color="#0084ff"></stop><stop offset="1" stop-color="#8400ff" stop-opacity="0"></stop></linearGradient></defs><path opacity=".2" d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z" stroke="#0084ff"></path><path d="M1 279C1 125.465 125.465 1 279 1" stroke="url(#:R3b9m:)" stroke-linecap="round"></path></svg>
      <svg viewBox="0 0 558 558" width="450" height="450" fill="none" aria-hidden="true" className={style["rotate-anticlockwise"] + " absolute mt-4" }><defs><linearGradient id=":R3b9m:" x1="79" y1="16" x2="105" y2="237" gradientUnits="userSpaceOnUse"><stop stop-color="#0084ff"></stop><stop offset="1" stop-color="#8400ff" stop-opacity="0"></stop></linearGradient></defs><path opacity=".2" d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z" stroke="#0084ff"></path><path d="M1 279C1 125.465 125.465 1 279 1" stroke="url(#:R3b9m:)" stroke-linecap="round"></path></svg>
      <svg viewBox="0 0 558 558" width="500" height="500" fill="none" aria-hidden="true" className={style["rotate-clockwise"]     + " absolute mt-2" }><defs><linearGradient id=":R3b9m:" x1="79" y1="16" x2="105" y2="237" gradientUnits="userSpaceOnUse"><stop stop-color="#0084ff"></stop><stop offset="1" stop-color="#8400ff" stop-opacity="0"></stop></linearGradient></defs><path opacity=".2" d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z" stroke="#0084ff"></path><path d="M1 279C1 125.465 125.465 1 279 1" stroke="url(#:R3b9m:)" stroke-linecap="round"></path></svg>
      <svg viewBox="0 0 558 558" width="550" height="550" fill="none" aria-hidden="true" className={style["rotate-anticlockwise"] + " absolute"      }><defs><linearGradient id=":R3b9m:" x1="79" y1="16" x2="105" y2="237" gradientUnits="userSpaceOnUse"><stop stop-color="#0084ff"></stop><stop offset="1" stop-color="#8400ff" stop-opacity="0"></stop></linearGradient></defs><path opacity=".2" d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z" stroke="#0084ff"></path><path d="M1 279C1 125.465 125.465 1 279 1" stroke="url(#:R3b9m:)" stroke-linecap="round"></path></svg> */}
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
