import NavBar from './components/layout/Navbar.tsx'
import MobileMenu from './components/layout/MobileMenu.tsx'
import Hero from './sections/Hero.tsx'
// import About from './sections/About.tsx'
// import Projects from './sections/Projects.tsx'
// import Contact from './sections/Contact.tsx'
// import Footer from './components/layout/Footer.tsx'
import './index.css'

function App() {
  return (
    <>
      <NavBar/>
      <MobileMenu/>
      <Hero />
      {/* <About />
      <Projects />
      <Contact />
      <Footer /> */}
    </>
  )
}

export default App
