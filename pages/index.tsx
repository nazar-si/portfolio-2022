import Title from "../components/title/Title"
import Layout from "../components/layout/Layout"
import Milestones from "../components/blocks/Milestones"
// import Projects from "../components/blocks/Projects"
import About from "../components/blocks/About"
import Triangle from "../components/blocks/Triangle"
import Roadmap from "../components/blocks/Roadmap"
import Skills from "../components/blocks/Skills"
import Contact from "../components/blocks/Contact"
import dynamic from "next/dynamic"

const Projects = dynamic(() => import('../components/blocks/Projects'), {
  ssr: false,
})

export default function Home() {
  return (
    <Layout>
      <Title />
      <About />
      <Roadmap />
      <Skills />
      <Triangle />
      <Milestones />
      <Projects />
      <Contact />
    </Layout>
  )
}

