/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  feedback: string;
  avatar: string;
  rating: number;
}

export interface Project {
  id: string;
  title: string;
  category: "Themes" | "Plugins" | "WooCommerce" | "Optimization";
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  metrics: { label: string; value: string }[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
}

export interface SkillCategory {
  title: string;
  skills: { name: string; level: number }[];
}

export interface SliderItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  accent: string;
  badge: string;
}
