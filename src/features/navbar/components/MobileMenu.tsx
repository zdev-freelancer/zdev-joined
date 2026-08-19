'use client';

import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

import { routes } from '@/config';
import { Button, CloseIcon, NavLink, Wordmark } from '@/shared/components';
import { BRAND_EASE } from '@/shared/animations';
import { useReducedMotion } from '@/shared/hooks';
import type { MobileMenuProps } from '../navbar.types';

/** Full-screen mobile navigation overlay. Locks body scroll while open. */
export function MobileMenu({ open, onClose, items }: MobileMenuProps) {
  const reduced = useReducedMotion();

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="fixed inset-0 z-[60] bg-bg md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: reduced ? 0.15 : 0.3, ease: BRAND_EASE }}
        >
          <div className="flex h-16 items-center justify-between px-gutter">
            <Wordmark className="text-xl" />
            <button type="button" onClick={onClose} aria-label="Cerrar menú" className="p-2 text-fg">
              <CloseIcon />
            </button>
          </div>
          <nav className="flex flex-col gap-2 px-gutter pt-8">
            {items.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: reduced ? 0 : 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: reduced ? 0 : 0.05 * index, ease: BRAND_EASE }}
              >
                <NavLink href={item.href} onClick={onClose} className="text-h3 text-fg">
                  {item.label}
                </NavLink>
              </motion.div>
            ))}
            <Button href={routes.unete} size="lg" className="mt-8 w-full" onClick={onClose}>
              Únete a Joined
            </Button>
          </nav>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
