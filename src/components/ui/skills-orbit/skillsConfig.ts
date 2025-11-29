import type { SimpleIcon } from "simple-icons";
import {
  siGo,
  siNodedotjs,
  siExpress,
  siJavascript,
  siCss,
  siGin,
  siReact,
  siDatabricks,
} from "simple-icons/icons";

export type SkillId = "go" | "node" | "express" | "js" | "css" | "html" | "react" | "db" | "gin";

export type OrbitItemConfig = {
  id: SkillId;
  angle: string;
  icon: SimpleIcon;
  label: string;
  radius: string;
  bobDelay: string;
};

const SCALE = "var(--orbit-radius-scale, 1)";

export const skillsConfig: OrbitItemConfig[] = [
  { id: "go",      angle: "270deg", icon: siGo,         label: "", radius: `calc(200px * ${SCALE})`, bobDelay: "0s" },
  { id: "gin",     angle: "315deg", icon: siGin,        label: "", radius: `calc(180px * ${SCALE})`, bobDelay: "0.15s" },
  { id: "express", angle: "0deg",   icon: siExpress,    label: "", radius: `calc(155px * ${SCALE})`, bobDelay: "0.3s" },
  { id: "node",    angle: "45deg",  icon: siNodedotjs,  label: "", radius: `calc(150px * ${SCALE})`, bobDelay: "0.45s" },
  { id: "react",   angle: "90deg",  icon: siReact,      label: "", radius: `calc(155px * ${SCALE})`, bobDelay: "0.6s" },
  { id: "js",      angle: "135deg", icon: siJavascript, label: "", radius: `calc(180px * ${SCALE})`, bobDelay: "0.75s" },
  { id: "css",     angle: "180deg", icon: siCss,        label: "", radius: `calc(200px * ${SCALE})`, bobDelay: "0.9s" },
  { id: "db",      angle: "225deg", icon: siDatabricks, label: "", radius: `calc(210px * ${SCALE})`, bobDelay: "1.05s" },
];

