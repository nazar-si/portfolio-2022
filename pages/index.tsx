import Title from "../components/title/Title"
import Layout from "../components/layout/Layout"
import Milestones from "../components/blocks/Milestones"
import Projects from "../components/blocks/Projects"
import About from "../components/blocks/About"
import Roadmap from "../components/blocks/Roadmap"
import Skills from "../components/blocks/Skills"
import Contact from "../components/blocks/Contact"


export const getServerSideProps = () =>{
  const token = "b6113dba9fbeacc3b6fe503e7d5ced0742c3f068750af28c9c0d137e6d3032287b673179b0600f68db7b5823cefb7cc2b4e50c7fd22fcfa5bfd7c5fe96ec816338f19a7515c9f77710e1f2d32f3ea830f9cf5fcb902e154734965ca7d6dfc3d2ec457b49a42af7d3103e373011a39142e720486682e52fae6ac2ee9aa508d113";
  
  return {
    props: {
      a: "b"
    }
  }
}

export default function Home(props: any) {
  return (
    <Layout>
      <Title />
      <About />
      <Roadmap />
      <Skills />
      <Milestones />
      <Projects />
      <Contact />
    </Layout>
  )
}

