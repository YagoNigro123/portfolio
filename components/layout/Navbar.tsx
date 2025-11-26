import React from 'react'
import './Navbar.css'

const Navbar = () => {
    return(
        <header className='site-header header-border'>
            <nav className='primary-navigation nav-container'>
                <span className='brand-name brand-text'>
                    Yago Nigro
                </span>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <a href="#about" className='nav-link'>About me</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#skills" className='nav-link'>Skills</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#projects" className='nav-link'>Projects</a>
                    </li>
                    <li className='nav-item nav-item--highlight'>
                        <a href="#contact" className='nav-link nav-link--cta'>Contact</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;