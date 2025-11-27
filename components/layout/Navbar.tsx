import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
    const [darkMode,setDarkMode] = useState(()=>{
        return localStorage.getItem('theme') === 'dark'
    })

    useEffect(()=>{
        if(darkMode){
            document.documentElement.classList.add('dark')
            localStorage.setItem('theme','dark')
        }else{
            document.documentElement.classList.remove('dark')
            localStorage.setItem('theme','light')
        }
    }, [darkMode])

    return(
        <header className='site-header header-border'>
            <nav className='primary-navigation nav-container'>
                <span className='brand-name brand-text'>
                    YN
                </span>
                <ul className='nav-list'>
                    <button className='nav-item theme-toggle' onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? <Sun size={20}/> : <Moon size={20}/>}
                    </button>
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