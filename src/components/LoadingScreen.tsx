import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let raf = 0;
    const start = performance.now();
    const duration = 1400;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setProgress(Math.round(eased * 100));
      if (p < 1) raf = requestAnimationFrame(tick);
      else setTimeout(() => setDone(true), 350);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-500 ${
        done ? 'pointer-events-none opacity-0' : 'opacity-100'
      }`}
    >
      <div className="overflow-hidden">
        <span className="font-dm-sans block text-4xl font-medium tracking-[-0.05em] text-white sm:text-5xl">
          TerraElix
        </span>
      </div>
      <div className="mt-6 h-px w-44 overflow-hidden bg-white/15">
        <div
          className="h-full bg-emerald-400 transition-all duration-100 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
      <p className="font-inter mt-3 text-xs tracking-[0.2em] text-white/40 uppercase">
        {progress}%
      </p>
    </div>
  );
}
