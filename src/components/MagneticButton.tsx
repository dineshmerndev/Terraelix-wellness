import type { ReactNode } from 'react';
import { useMagnetic } from '@/hooks/useMagnetic';

export default function MagneticButton({
  children,
  className = '',
  strength = 0.3,
  ...props
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const ref = useMagnetic<HTMLButtonElement>(strength);
  return (
    <button
      ref={ref}
      className={`transition-transform duration-300 will-change-transform ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
