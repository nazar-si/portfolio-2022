import Title from "../components/title/Title"
import Layout from "../components/layout/Layout"
import Milestones from "../components/blocks/Milestones"
import Projects from "../components/blocks/Projects"
import About from "../components/blocks/About"
import Roadmap from "../components/blocks/Roadmap"

export default function Home() {
  return (
    <Layout>
      <Title />
      {/* <About /> */}
      <Roadmap />
      <Milestones />
      <Projects />  
    </Layout>
  )
}

