import React, { useEffect, useState } from 'react'
import './Navbar.css'
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
    return(
        <header className='site-header header-border'>
            <nav className='primary-navigation nav-container'>
                <span className='brand-name brand-text'>
                    YN
                </span>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <a href="#about" className='nav-link'>About me</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#skills-projects" className='nav-link'>Skills&Projects</a>
                    </li>
                    <li className='nav-item nav-item--highlight'>
                        <a href="#contact" className='nav-link nav-link--cta'>Contact</a>
                    </li>
                    
                </ul>
            </nav>
        </header>
    );
};