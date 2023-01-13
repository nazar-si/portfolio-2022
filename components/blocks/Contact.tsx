import style from "./contact.module.css";
import React from 'react'
import common from "./common.module.css";
import { Building, MapPin, Mail, BrandGithub, BrandTelegram} from "tabler-icons-react";

export default function Contact() {
  return (
    <div className={style.wrapper}>
      <div className={common.title}>
        Contact
      </div>
      <div className={style.content}>
        <form className={style.form}>
          <input type="text" name="" id="" placeholder="name"/>
          <input type="text" name="" id="" placeholder="Phone / Email"/>
          <textarea name="message" id="" rows={10} ></textarea>
        </form>
        <div className={style.info}>
          <div className={style.row}>
            <div className={style.icon}><MapPin/></div>
            <div className={style.text}>Russia, Moscow</div>
          </div>
          <div className={style.row}>
            <div className={style.icon}><Building/></div>
            <div className={style.text}><a href="https://github.com/EntropyConcept">Entropy Concept</a></div>
          </div>
          <div className={style.row}>
            <div className={style.icon}><Mail/></div>
            <div className={style.text}><a href="mailto:nisimchuk@edu.hse.ru">nisimchuk@edu.hse.ru</a></div>
          </div>
          <div className={style.row}>
            <div className={style.icon}><Mail/></div>
            <div className={style.text}><a href="mailto:technotche@gmail.com">technotche@gmail.com</a></div>
          </div>
          <hr />
          <div className="row">
            <a href="https://github.com" className={style.icon}>
              <BrandGithub />
            </a>
            <a href="https://t.me/sciencekatze" className={style.icon}>
              <BrandTelegram />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
