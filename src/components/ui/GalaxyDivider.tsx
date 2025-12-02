import React from "react";
import "./galaxy-divider.css";

type Props = {
  variant?: "light" | "glow" | "dots";
};

const GalaxyDivider: React.FC<Props> = ({ variant = "light" }) => {
  return <div className={`galaxy-divider ${variant}`} />;
};

export default GalaxyDivider;
