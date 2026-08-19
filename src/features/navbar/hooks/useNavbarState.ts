'use client';

import { useScrollDirection } from '@/shared/hooks';
import type { NavbarState } from '../navbar.types';

/**
 * Derives navbar presentation from scroll (prompt §5.1 — own hook, no library).
 * Keeps all scroll logic out of the Navbar component (§6.3-S).
 */
export function useNavbarState(): NavbarState {
  const { direction, scrollY, atTop } = useScrollDirection();
  return {
    solid: !atTop,
    hidden: direction === 'down' && scrollY > 280,
  };
}
