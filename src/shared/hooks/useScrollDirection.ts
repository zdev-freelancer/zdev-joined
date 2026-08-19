'use client';

import { useEffect, useState } from 'react';

export type ScrollDirection = 'up' | 'down';

export interface ScrollState {
  readonly direction: ScrollDirection;
  readonly scrollY: number;
  readonly atTop: boolean;
}

/**
 * rAF-throttled scroll observer. Transversal (prompt §6.2 shared/hooks) — the
 * navbar composes this to decide when to become solid or hide. Only reads
 * window.scrollY; never touches layout.
 */
export function useScrollDirection(topThreshold = 8): ScrollState {
  const [state, setState] = useState<ScrollState>({
    direction: 'up',
    scrollY: 0,
    atTop: true,
  });

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      const direction: ScrollDirection = y > lastY && y > 64 ? 'down' : 'up';
      setState({ direction, scrollY: y, atTop: y <= topThreshold });
      lastY = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [topThreshold]);

  return state;
}
