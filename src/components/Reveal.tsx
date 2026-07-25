import type { ReactNode, CSSProperties } from 'react';
import { useInView } from '@/hooks/useScrollEffects';

type Direction = 'up' | 'down' | 'left' | 'right' | 'scale';

const hidden: Record<Direction, CSSProperties> = {
  up: { opacity: 0, transform: 'translateY(40px)' },
  down: { opacity: 0, transform: 'translateY(-40px)' },
  left: { opacity: 0, transform: 'translateX(-40px)' },
  right: { opacity: 0, transform: 'translateX(40px)' },
  scale: { opacity: 0, transform: 'scale(0.92)' },
};

export default function Reveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
  as: Tag = 'div',
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
  as?: 'div' | 'section' | 'li' | 'span';
}) {
  const { ref, inView } = useInView();
  const style: CSSProperties = inView
    ? { opacity: 1, transform: 'none', transition: 'opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)', transitionDelay: `${delay}s` }
    : hidden[direction];

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}
