import type { SimpleIcon } from "simple-icons";
import {
  siGo,
  siNodedotjs,
  siExpress,
  siJavascript,
  siCss,
  siHtml5,
  siC,
  siPostgresql,
} from "simple-icons/icons";

export type SkillId = "go" | "node" | "express" | "js" | "css" | "html" | "c" | "db";

export type OrbitItemConfig = {
  id: SkillId;
  angle: string;
  icon: SimpleIcon;
  label: string;
  radius: string;
  bobDelay: string;
};

export const skillsConfig: OrbitItemConfig[] = [
  { id: "c",     angle: "270deg", icon: siC,          label: "C",              radius: "140px", bobDelay: "0s" },
  { id: "db",    angle: "315deg", icon: siPostgresql, label: "Rel. DBs", radius: "140px", bobDelay: "0.15s" },
  { id: "go",    angle: "0deg",   icon: siGo,         label: "Go",             radius: "140px", bobDelay: "0.3s" },
  { id: "node",  angle: "45deg",  icon: siNodedotjs,  label: "Node.js",        radius: "140px", bobDelay: "0.45s" },
  { id: "express", angle: "90deg", icon: siExpress,   label: "Express",        radius: "140px", bobDelay: "0.6s" },
  { id: "js",    angle: "135deg", icon: siJavascript, label: "JavaScript",     radius: "140px", bobDelay: "0.75s" },
  { id: "css",   angle: "180deg", icon: siCss,        label: "CSS",            radius: "140px", bobDelay: "0.9s" },
  { id: "html",  angle: "225deg", icon: siHtml5,      label: "HTML",           radius: "140px", bobDelay: "1.05s" },
];
