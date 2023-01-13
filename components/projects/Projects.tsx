import React from 'react'
import style from "./style.module.css"

const data = {
  "teams": {
      "ec": "Entropy C",
      "aen": "AEN Team",
      "dl": "Dima Labuznyi",
      "s": "Solo"
  },
  "priority": [
      {
        title: "Urgent", 
        color: "#f00"
      }, 
      {
        title: "High", 
        color: "#f08"
      }, 
      {
        title: "Major", 
        color: "#80f"
      }, 
      {
        title: "Minor", 
        color: "#08f"
      }, 
      {
        title: "Low", 
        color: "#096"
      }, 
      {
        title: "Ignore", 
        color: "#8888"
      }, 
      {
        title: "Extra", 
        color: "#8888"
      }
  ],
  "statuses": [
      {
        title: "Review", 
        color: "#80f"
      },
      {
        title: "To do", 
        color: "#8885"
      },
      {
        title: "In Progress", 
        color: "#08f"
      },
      {
        title: "Waiting", 
        color: "#8888"
      },
      {
        title: "Canceled", 
        color: "#f40"
      },
      {
        title: "Done", 
        color: "#0f4"
      },
      {
        title: "Maintain", 
        color: "#0f8"
      }
  ],
  "uecs": {
      "pro": {
        name: "Programming",
        color: "#28f"
      },
      "com": {
        name: "Community",
        color: "#8885"
      },
      "std": {
        name: "Study",
        color: "#8885"
      },
      "tls": {
        name: "Tools",
        color: "#8888"
      },
      "b2b": {
        name: "B2B",
        color: "#096"
      },
      "man": {
        name: "Management",
        color: "#f08"
      },
      "des": {
        name: "Design",
        color: "#f48"
      },
      "ai": {
        name: "AI",
        color: "#f48"
      },
      "eco": {
        name: "Economics",
        color: "#f60"
      },
      "enr": {
        name: "Energy",
        color: "#d30"
      },
      "eng": {
        name: "Engine",
        color: "#00f"
      },
      "phy": {
        name: "Physics",
        color: "#0f8"
      },
      "tch": {
        name: "Technology",
        color: "#80f"
      },
      "urb": {
        name: "Urbanistic",
        color: "#0f0"
      }
  },
  "projects" : [
      {
          "title": "Second Brain",
          "status": 2,
          "priority": 1,
          "team": "ec",
          "uec": ["pro", "tls", "man"]
      },
      {
          "title": "YourEdu",
          "status": 1,
          "priority": 2,
          "team": "ec",
          "uec": ["pro", "std", "com"]
      },
      {
          "title": "Refactor",
          "status": 3,
          "priority": 1,
          "team": "aen",
          "uec": ["pro", "enr", "man"]
      },
      {
          "title": "AENetwork",
          "status": 3,
          "priority": 2,
          "team": "aen",
          "uec": ["pro", "enr", "eco", "b2b"]
      },
      {
          "title": "ESG system for business",
          "status": 3,
          "priority": 3,
          "team": "aen",
          "uec": ["pro", "b2b", "man"]
      },
      {
          "title": "Analog Computing",
          "status": 0,
          "priority": 3,
          "team": "ec",
          "uec": ["tch", "b2b", "pro", "ai"]
      },
      {
          "title": "Vibro Stylo",
          "status": 0,
          "priority": 4,
          "team": "ec",
          "uec": ["tch", "tls"]
      },
      {
          "title": "Team Portfolio",
          "status": 1,
          "priority": 2,
          "team": "ec",
          "uec": ["pro", "com"]
      },
      {
          "title": "Lynx Manager",
          "status": 0,
          "priority": 3,
          "team": "ec",
          "uec": ["pro", "man", "tls"]
      },
      {
          "title": "Text-2-math service",
          "status": 0,
          "priority": 6,
          "team": "ec",
          "uec": ["tls"]
      },
      {
          "title": "Surreal UI components",
          "status": 3,
          "priority": 2,
          "team": "ec",
          "uec": ["pro", "tls"]
      },
      // {
      //     "title": "",
      //     "status": 1,
      //     "priority": 0,
      //     "team": "",
      //     "uec": ["", ""]
      // },
  ]
}

data.projects.sort((a, b)=>{
  return (a.status - b.status) + (a.priority - b.priority) * 10;
})

export default function Projects() {
  return (
    <div className={style.wrapper}>
      <table className={style.table}>
        <tr className={style.row}>
          <td>Name</td>
          <td>Priority</td>
          <td>Status</td>
          <td>Team</td>
          <td>UFI</td>
        </tr>
        {data.projects.map((e, i)=>(
          <tr className={style.row} key={i}>
            <td>{e.title}</td>
            <td>
              <div className={style.tag} style={{
                backgroundColor: data.priority[e.priority].color
              }}>
                {data.priority[e.priority].title}
              </div>
            </td>
            <td>
              <div className={style.tag} style={{
                backgroundColor: data.statuses[e.status].color
              }}>
                {data.statuses[e.status].title}
              </div>
            </td>
            <td>{data.teams[e.team]}</td>
            <td className={style.uecs}>
              {e.uec.map((u, i)=>(
                <div className={style.tag} style={{
                  backgroundColor: data.uecs[u].color
                }}>
                  {data.uecs[u].name}
                </div>
              ))}
            </td>
          </tr>
        ))}
      </table>
    </div>
  )
}
