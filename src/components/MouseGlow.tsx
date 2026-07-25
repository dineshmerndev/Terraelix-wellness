import { useEffect, useRef } from 'react';

/**
 * A soft glow that follows the cursor across the whole page.
 * Rendered once near the root; fixed position, pointer-events none.
 */
export default function MouseGlow() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    let raf = 0;
    const onMove = (e: MouseEvent) => {
      if (!raf) {
        raf = requestAnimationFrame(() => {
          el.style.transform = `translate(${e.clientX - 300}px, ${e.clientY - 300}px)`;
          raf = 0;
        });
      }
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed left-0 top-0 z-[5] h-[600px] w-[600px] rounded-full opacity-30 blur-[100px]"
      style={{
        background:
          'radial-gradient(circle, rgba(16,185,129,0.25) 0%, rgba(16,185,129,0) 70%)',
        willChange: 'transform',
      }}
    />
  );
}
