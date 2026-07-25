import { useCounter, useInView } from '@/hooks/useScrollEffects';

export default function Counter({
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
  className = '',
}: {
  value: number;
  suffix?: string;
  prefix?: string;
  decimals?: number;
  className?: string;
}) {
  const { ref, inView } = useInView({ threshold: 0.4 });
  const n = useCounter(value, inView);
  const display = decimals > 0 ? n.toFixed(decimals) : Math.round(n).toLocaleString();
  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
