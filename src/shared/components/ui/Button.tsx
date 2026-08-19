import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import Link from 'next/link';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/shared/lib';

/** Internal hrefs get client-side routing via next/link; external stay plain <a>. */
const isInternal = (href: string) => href.startsWith('/') || href.startsWith('#');

/**
 * Button — the extension point for all CTAs (prompt §6.3-O). New looks are added
 * via cva variants, never by editing consumers. Two orthogonal axes:
 *   - `variant`: primary | outline | ghost
 *   - `surface`: dark | cream  (which brand surface the button sits on)
 * All variants share one prop contract, so any variant substitutes for another
 * without breaking a consumer (Liskov, §6.3-L). Hover uses transform only (§7).
 */
export const buttonVariants = cva(
  'inline-flex select-none items-center justify-center gap-2 whitespace-nowrap rounded-pill font-medium tracking-tight transition duration-300 ease-brand active:translate-y-0 active:scale-[0.985] disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        primary: '',
        outline: 'border bg-transparent',
        ghost: 'bg-transparent',
      },
      surface: {
        dark: '',
        cream: '',
      },
      size: {
        sm: 'h-9 px-4 text-caption',
        md: 'h-11 px-6 text-body',
        lg: 'h-14 px-8 text-body-lg',
        icon: 'h-11 w-11 p-0',
      },
    },
    compoundVariants: [
      { variant: 'primary', surface: 'dark', class: 'bg-fg text-bg hover:-translate-y-0.5 hover:bg-fg/90' },
      { variant: 'primary', surface: 'cream', class: 'bg-bg text-fg hover:-translate-y-0.5 hover:bg-bg-elevated' },
      { variant: 'outline', surface: 'dark', class: 'border-border-strong text-fg hover:-translate-y-0.5 hover:bg-fg/[0.06]' },
      { variant: 'outline', surface: 'cream', class: 'border-bg/25 text-bg hover:-translate-y-0.5 hover:bg-bg/[0.06]' },
      { variant: 'ghost', surface: 'dark', class: 'text-fg hover:bg-fg/[0.06]' },
      { variant: 'ghost', surface: 'cream', class: 'text-bg hover:bg-bg/[0.06]' },
    ],
    defaultVariants: { variant: 'primary', surface: 'dark', size: 'md' },
  },
);

type Variants = VariantProps<typeof buttonVariants>;

interface CommonProps extends Variants {
  className?: string;
  children: ReactNode;
}

type ButtonAsButton = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof CommonProps | 'href'> & {
    href?: undefined;
  };

type ButtonAsLink = CommonProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof CommonProps> & {
    href: string;
  };

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ className, variant, surface, size, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, surface, size }), className);

  if (props.href !== undefined) {
    const { children, href, ...anchor } = props;
    if (isInternal(href)) {
      return (
        <Link href={href} className={classes} {...anchor}>
          {children}
        </Link>
      );
    }
    return (
      <a className={classes} href={href} {...anchor}>
        {children}
      </a>
    );
  }

  const { children, ...button } = props;
  return (
    <button className={classes} {...button}>
      {children}
    </button>
  );
}
