import type { IconType } from "react-icons";
import {
  SiGo,
  SiNodedotjs,
  SiExpress,
  SiJavascript,
  SiReact,
  SiGin,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscDatabase } from "react-icons/vsc";
import { BiData } from "react-icons/bi";
import { TbBrandJavascript } from "react-icons/tb";

export type SkillId =
  | "go"
  | "node"
  | "express"
  | "js"
  | "css"
  | "html"
  | "react"
  | "db"
  | "gin";

export type OrbitItemConfig = {
  id: SkillId;
  angle: string;
  icon: IconType;
  label: string;
  radius: string;
  bobDelay: string;
};

const SCALE = "var(--orbit-radius-scale, 1)";

export const skillsConfig: OrbitItemConfig[] = [
  { id: "go",      angle: "270deg", icon: SiGo,         label: "", radius: `calc(200px * ${SCALE})`, bobDelay: "0s" },
  { id: "gin",     angle: "315deg", icon: SiGin,        label: "", radius: `calc(180px * ${SCALE})`, bobDelay: "0.15s" },
  { id: "express", angle: "0deg",   icon: SiExpress,    label: "", radius: `calc(155px * ${SCALE})`, bobDelay: "0.3s" },
  { id: "node",    angle: "45deg",  icon: SiNodedotjs,  label: "", radius: `calc(150px * ${SCALE})`, bobDelay: "0.45s" },
  { id: "react",   angle: "90deg",  icon: SiReact,      label: "", radius: `calc(155px * ${SCALE})`, bobDelay: "0.6s" },
  { id: "js",      angle: "135deg", icon: TbBrandJavascript, label: "", radius: `calc(180px * ${SCALE})`, bobDelay: "0.75s" },
  { id: "css",     angle: "180deg", icon: DiCss3,       label: "", radius: `calc(200px * ${SCALE})`, bobDelay: "0.9s" },
  { id: "db",      angle: "225deg", icon: BiData,  label: "", radius: `calc(210px * ${SCALE})`, bobDelay: "1.05s" },
];
