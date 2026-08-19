import type { NavItem } from '@/config';

/** Scroll-derived presentation state for the navbar. */
export interface NavbarState {
  /** Becomes solid (elevated surface) once scrolled away from the top. */
  readonly solid: boolean;
  /** Hides on downward scroll, reveals on upward scroll. */
  readonly hidden: boolean;
}

export interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  items: readonly NavItem[];
}
