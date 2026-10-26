import About from "../../components/About/About"
import Hero from "../../components/Hero/Hero"
import Projects from "../../components/Projects/Projects"
import Skills from "../../components/Skills/Skills"
import Timeline from "../../components/Timeline/Timeline"
import Contact from "../../components/Contact/Contact"

const Home = () => {
   return (
      <>
         <Hero/>
         <About/>
         <Skills/>
         <Projects/>
         <Timeline/>
         <Contact/>
      </>
   )
}

export default Home 