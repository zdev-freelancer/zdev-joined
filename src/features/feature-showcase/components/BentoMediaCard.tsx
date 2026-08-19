import { Card, CircleField } from '@/shared/components';

interface BentoMediaCardProps {
  label: string;
}

/**
 * Media placeholder card. The circular-cropped composition stands in for real
 * imagery (marked [PLACEHOLDER]); swap the CircleField for a photo with a
 * circular mask to keep the motif (§3.3).
 */
export function BentoMediaCard({ label }: BentoMediaCardProps) {
  return (
    <Card
      interactive
      padding="none"
      className="group relative flex h-full min-h-[20rem] items-center justify-center"
    >
      {/* [PLACEHOLDER] imagery */}
      <CircleField
        pattern="pill"
        className="h-60 w-60 opacity-80 transition-transform duration-700 ease-brand group-hover:scale-105"
      />
      <span className="absolute bottom-6 left-6 text-label uppercase text-fg-muted">{label}</span>
    </Card>
  );
}
