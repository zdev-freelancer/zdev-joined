'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { routes, siteConfig } from '@/config';
import { ArrowUpRight, Button, MenuIcon, NavLink, Wordmark } from '@/shared/components';
import { BRAND_EASE } from '@/shared/animations';
import { cn } from '@/shared/lib';
import { useNavbarState } from '../hooks';
import { MobileMenu } from './MobileMenu';

/**
 * Navbar — transparent over the hero, solidifies to the elevated surface on
 * scroll and hides on scroll-down (prompt §5.1). Motion is transform-only (§7);
 * scroll logic lives in useNavbarState (§6.3-S).
 */
export function Navbar() {
  const { solid, hidden } = useNavbarState();
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <motion.header
        className="fixed inset-x-0 top-0 z-50"
        initial={{ y: 0 }}
        animate={{ y: hidden ? '-100%' : '0%' }}
        transition={{ duration: 0.45, ease: BRAND_EASE }}
      >
        <div
          className={cn(
            'transition-colors duration-500 ease-brand',
            solid
              ? 'border-b border-border bg-bg-elevated/85 backdrop-blur-md'
              : 'border-b border-transparent bg-transparent',
          )}
        >
          <div className="mx-auto flex h-16 max-w-shell items-center justify-between px-gutter md:h-20">
            <Link
              href={routes.home}
              aria-label={`${siteConfig.name} — inicio`}
              className="text-xl md:text-2xl"
            >
              <Wordmark />
            </Link>

            <nav className="hidden items-center gap-9 md:flex" aria-label="Principal">
              {siteConfig.nav.map((item) => (
                <NavLink key={item.href} href={item.href} active={item.href === pathname}>
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Button href={routes.unete} size="sm" className="hidden md:inline-flex">
                Únete
                <ArrowUpRight width={16} height={16} />
              </Button>
              <button
                type="button"
                onClick={() => setMenuOpen(true)}
                aria-label="Abrir menú"
                className="p-2 text-fg md:hidden"
              >
                <MenuIcon />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} items={siteConfig.nav} />
    </>
  );
}
