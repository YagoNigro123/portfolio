import React, { useEffect, useState } from 'react'
import './Navbar.css'

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
          <a onClick={() => setOpen(false)} href="#about">About me</a>
          <a onClick={() => setOpen(false)} href="##skills-projects">Skills&Projects</a>
          <a onClick={() => setOpen(false)} href="#contact">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
