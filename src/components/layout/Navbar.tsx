import React, { useEffect, useState } from 'react'
import './Navbar.css'
import ThemeToggle from "../ui/ThemeToggle";

export default function Navbar() {
    const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
    ) => {
    event.preventDefault();

    const target = document.getElementById(targetId);
    if (!target) return;

    const header = document.querySelector(".site-header") as HTMLElement | null;
    const headerOffset = header ? header.offsetHeight : 0;

    const startY = window.scrollY;
    const targetY =
        target.getBoundingClientRect().top + window.scrollY - headerOffset;

    const distance = targetY - startY;
    const duration = 1100;

    let startTime: number | null = null;

    const easeInOutCubic = (t: number) =>
        t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const animate = (currentTime: number) => {
        if (startTime === null) startTime = currentTime;

        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = easeInOutCubic(progress);

        window.scrollTo(0, startY + distance * eased);

        if (elapsed < duration) {
        requestAnimationFrame(animate);
        }
    };

    requestAnimationFrame(animate);
    };

    return(
        <header className='site-header header-border'>
            <nav className='primary-navigation nav-container'>
                <a className='brand-name brand-text' href="#hero" onClick={(e) => scrollToSection(e, "hero")}>
                    YN
                </a>
                <ul className='nav-list'>
                    <li className='nav-item'>
                        <a href="#about" className='nav-link' onClick={(e) => scrollToSection(e, "about")}>About me</a>
                    </li>
                    <li className='nav-item'>
                        <a href="#skills-projects" className='nav-link' onClick={(e) => scrollToSection(e, "skills-projects")}>Experience</a>
                    </li>
                    <li className='nav-item nav-item--highlight'>
                        <a href="#contact" className='nav-link nav-link--cta' onClick={(e) => scrollToSection(e, "contact")}>Contact</a>
                    </li>
                    
                </ul>
            </nav>
        </header>
    );
};