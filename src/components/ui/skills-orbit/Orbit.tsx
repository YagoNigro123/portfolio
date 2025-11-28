// OrbitHero.tsx
import React, { useEffect, useRef, type CSSProperties } from "react";
import { skillsConfig, type SkillId, type OrbitItemConfig } from "./skillsConfig";
import "./orbit.css";

type OrbitHeroProps = {
  highlightSkillId?: SkillId | null;
  highlightedProjectName?: string | null;
};

type OrbitItemProps = {
  config: OrbitItemConfig;
  isHighlighted: boolean;
  highlightedProjectName?: string | null;
};

const OrbitItem: React.FC<OrbitItemProps> = ({
  config,
  isHighlighted,
  highlightedProjectName,
}) => {
  const { angle, radius, icon, label, bobDelay } = config;

  const style = {
    "--angle": angle,
    "--radius": radius,
    "--bob-delay": bobDelay,
  } as CSSProperties & {
    "--angle": string;
    "--radius": string;
    "--bob-delay": string;
  };

  return (
    <div className="orbit-item" style={style}>
      {isHighlighted && <div className="orbit-connector" />}

      <div className="orbit-content">
        <div className="orbit-dot" />
        <svg
          className="orbit-icon"
          viewBox="0 0 24 24"
          role="img"
          aria-label={icon.title}
        >
          <path d={icon.path} fill="#ffffff" />
        </svg>
        <span className="orbit-label">{label}</span>

        {isHighlighted && highlightedProjectName && (
          <div className="orbit-project-tag">
            <div className="orbit-project-tag-arrow" />
            <div className="orbit-project-tag-body">
              <span className="orbit-project-tag-label">PROJECT</span>
              <span className="orbit-project-tag-name">
                {highlightedProjectName}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default function OrbitHero({
  highlightSkillId = null,
  highlightedProjectName = null,
}: OrbitHeroProps) {
  const wrapperRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const handlePointerMove = (e: PointerEvent) => {
      const rect = wrapper.getBoundingClientRect();
      const xNorm = (e.clientX - rect.left) / rect.width - 0.5;
      const yNorm = (e.clientY - rect.top) / rect.height - 0.5;

      wrapper.style.setProperty("--tilt-x", `${yNorm * -6}deg`);
      wrapper.style.setProperty("--tilt-y", `${xNorm * 6}deg`);
      wrapper.style.setProperty("--tilt-zoom", "1.03");
    };

    const handlePointerLeave = () => {
      wrapper.style.setProperty("--tilt-x", "0deg");
      wrapper.style.setProperty("--tilt-y", "0deg");
      wrapper.style.setProperty("--tilt-zoom", "1");
    };

    wrapper.addEventListener("pointermove", handlePointerMove);
    wrapper.addEventListener("pointerleave", handlePointerLeave);

    return () => {
      wrapper.removeEventListener("pointermove", handlePointerMove);
      wrapper.removeEventListener("pointerleave", handlePointerLeave);
    };
  }, []);

  return (
    <section className="hero-orbit" ref={wrapperRef}>
      <div className="skills-orbit">
        <div className="orbit-ring" />
        <div className="orbit-ring-soft" />

        {skillsConfig.map((cfg) => (
          <OrbitItem
            key={cfg.id}
            config={cfg}
            isHighlighted={cfg.id === highlightSkillId}
            highlightedProjectName={highlightedProjectName}
          />
        ))}
      </div>
    </section>
  );
}
