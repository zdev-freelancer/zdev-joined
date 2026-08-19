import Link from 'next/link';

import { ArrowUpRight, Badge, Card, CircleField } from '@/shared/components';

interface BentoBannerCardProps {
  eyebrow: string;
  title: string;
  href: string;
}

/** Large banner card with an overlaid headline and the ring motif bleeding off-corner. */
export function BentoBannerCard({ eyebrow, title, href }: BentoBannerCardProps) {
  return (
    <Card variant="outline" padding="none" interactive className="group h-full min-h-[20rem]">
      <Link href={href} className="relative flex h-full flex-col justify-end p-10">
        <CircleField
          pattern="rings"
          className="absolute -right-24 -top-24 h-[26rem] w-[26rem] opacity-40"
        />
        <div className="relative">
          <Badge>{eyebrow}</Badge>
          <h3 className="mt-4 max-w-md text-h2 font-semibold">{title}</h3>
          <span className="mt-7 inline-flex h-11 w-11 items-center justify-center rounded-pill bg-fg text-bg transition-transform duration-300 ease-brand group-hover:-translate-y-1">
            <ArrowUpRight />
          </span>
        </div>
      </Link>
    </Card>
  );
}
