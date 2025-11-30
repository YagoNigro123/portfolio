import NavBar from './components/layout/Navbar.tsx'
import MobileMenu from './components/layout/MobileMenu.tsx'
import Hero from './sections/Hero.tsx'
import About from './sections/About.tsx'
import SkillsAndProjects from './sections/Skills&&Projects.tsx'
import { Contact } from "./sections/Contact";
import Footer from './components/layout/Footer.tsx'
import GalaxyDivider from './components/ui/GalaxyDivider.tsx'
import './index.css'

function App() {
  return (
    <>
      <NavBar/>
      <MobileMenu/>
      <Hero />
      <GalaxyDivider/>
      <About />
      <GalaxyDivider/>
      <SkillsAndProjects />
      <GalaxyDivider/>
      <Contact />
      <Footer />
    </>
  )
}

export default App
