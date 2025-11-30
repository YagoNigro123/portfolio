import React, { useEffect, useState } from 'react'
import Orbit from '../components/ui/skills-orbit/Orbit'
import OrbitWithProjects from '../components/ui/skills-orbit/OrbitWithProjectts'
import './styles/hero.css'

export default function Hero(){
    const NAME = "Yago Nigro";
    return(
        <section className='' id='hero'>
            <section className="hero">
                <div className="hero-content">
                    <h1 className="hero-title">
                        <span className="hero-title-main">
                            <span className="hero-star" aria-hidden="true">
                            ✦
                            </span>
                            <span className="hero-name">{NAME}</span>
                        </span>
                        <span className="hero-underline" aria-hidden="true" />
                    </h1>
                    <p className="hero-subtitle">Back End Developer</p>
                </div>
            </section>
        </section>
    );
};