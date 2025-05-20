// src/types/index.ts
import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

// Common device type for project display
export type DeviceType = "desktop" | "mobile" | "tablet" | "dual";

// Interface for media content like screenshots
export interface MediaItem {
  id: string;
  name: string;
  path: string;
  webpPath?: string;
  description?: string;
  alt?: string;
}

// Interface for project section data
export interface ProjectSection {
  title: string;
  content: string;
  features?: string[];
}

// Interface for project technology
export interface Technology {
  name: string;
  icon?: string;
  category?: string;
}