import React, { useEffect, useState } from 'react'
import './Navbar.css'
import ThemeToggle from "../ui/ThemeToggle";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <header className='site-header'>
      
      <button
        onClick={() => setOpen(!open)}
        className={`mobile-hamburger ${open ? "open" : ""}`}
      >
        <span></span>
        <span></span>
      </button>

      <div className={`mobile-menu-overlay ${open ? "show" : ""}`}>
        <nav className="mobile-menu-links">
          <ThemeToggle/>
          <a onClick={() => setOpen(false)} href="#home">Inicio</a>
          <a onClick={() => setOpen(false)} href="#about">Sobre mí</a>
          <a onClick={() => setOpen(false)} href="#projects">Proyectos</a>
          <a onClick={() => setOpen(false)} href="#contact">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
