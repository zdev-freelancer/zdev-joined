import type { ReactNode } from 'react';

import { cn } from '@/shared/lib';

export interface ContainerProps {
  className?: string;
  children: ReactNode;
}

/** The page shell: centered max-width row with the responsive gutter token. */
export function Container({ className, children }: ContainerProps) {
  return <div className={cn('mx-auto w-full max-w-shell px-gutter', className)}>{children}</div>;
}
