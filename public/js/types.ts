// Ansen Cocoa TypeScript Types

export interface AnsenCocoa {
  urls: Record<string, string>;
  isDarkMode: boolean;
}

declare global {
  interface Window {
    ansenCocoa?: AnsenCocoa;
  }
}

// Type definitions for main.js functions
export interface SearchResult {
  title: string;
  content: string;
  type: 'page' | 'product' | 'blog';
}

export interface ScrollRevealElement extends HTMLElement {
  dataset: DOMStringMap & {
    reveal?: string;
    revealStagger?: string;
  };
}

export interface NavbarState {
  isScrolled: boolean;
  isOpen: boolean;
  lastScrollY: number;
}

export interface Toast {
  message: string;
  type: 'success' | 'error' | 'info';
  duration: number;
}
