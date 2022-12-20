import Title from "../components/title/Title"
import Layout from "../components/layout/Layout"
import Milestones from "../components/blocks/Milestones"
import Projects from "../components/blocks/Projects"

export default function Home() {
  return (
    <Layout>
      <Title />
      <Milestones />
      <Projects />
    </Layout>
  )
}

