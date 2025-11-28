import NavBar from './components/layout/Navbar.tsx'
import MobileMenu from './components/layout/MobileMenu.tsx'
import Hero from './sections/Hero.tsx'
// import About from './sections/About.tsx'
import SkillsAndProjects from './components/ui/skills-orbit/OrbitWithProjectts.tsx'
// import Contact from './sections/Contact.tsx'
// import Footer from './components/layout/Footer.tsx'
import './index.css'

function App() {
  return (
    <>
      <NavBar/>
      <MobileMenu/>
      <Hero />
      {/* <About /> */}
      <SkillsAndProjects />
      {/* <Contact />
      <Footer /> */}
    </>
  )
}

export default App
