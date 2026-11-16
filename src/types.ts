export type Animation = 'draw' | 'rotate' | 'float' | 'pulse' | 'fade' | 'sequential-reveal' | 'parallax' | 'static';
export type CategoryKey = 'software' | 'ai' | 'creative';
export interface Decoration { src: string; x: string; y: string; width: number; rotation: number; opacity: number; zIndex: number; animation: Animation; hideOnMobile: boolean }
export interface Project {
  id: number; slug: string; title: string; category: CategoryKey; categoryLabel: string; theme: string;
  cardType: 1 | 2 | 3; background: string; summary: string; role: string | null; technologies: string[];
  links: { label: string; href: string }[];
  artwork: { src: string; width: number; height: number; alt: string };
  decorations: Decoration[];
}
