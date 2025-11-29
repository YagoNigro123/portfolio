import React from 'react';
import { useState } from 'react';
import Orbit from '../components/ui/skills-orbit/Orbit';
import OrbitWithProjects from '../components/ui/skills-orbit/OrbitWithProjectts';
import '../index.css'
import './styles/about.css';

export default function Hero() {
const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;  // posición dentro del div
    const y = e.clientY - rect.top;

    const midX = rect.width / 2;
    const midY = rect.height / 2;

    // Ajustá 10 si querés más/menos inclinación
    const rotateY = ((x - midX) / midX) * 10;    // izquierda/derecha
    const rotateX = -((y - midY) / midY) * 10;   // arriba/abajo

    setTilt({ rx: rotateX, ry: rotateY });
  };

  const handleMouseLeave = () => {
    setTilt({ rx: 0, ry: 0 });
  };
  return (
    <section className="about container" id="about">
      <header className="about-header">
        <div className="about-text">
          <p className="title">About me</p>
          <h1 className="about-title">Code & Craft</h1>
          <p className="about-description">
            Soy un desarrollador enfocado en crear interfaces claras, eficientes y modernas.<br/>
            Disfruto diseñar soluciones simples pero inteligentes, con atención al detalle y un enfoque práctico.<br/>
            Me motiva construir proyectos que representen calidad, buen código y una experiencia fluida para el usuario.
          </p>
        </div>
        <div
          className="about-photo-tilt-wrapper"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
            <figure className="about-photo"style={{transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,}}>
            <img src='/photo.png' alt="Yo, en formato cachorro filosófico" className='photo'/>
            </figure>
        </div>
      </header>
    </section>
  );
}