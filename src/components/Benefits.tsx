import { BENEFITS, STATS } from '@/data';
import Reveal from '@/components/Reveal';
import Counter from '@/components/Counter';

export default function Benefits() {
  return (
    <section id="about" className="bg-black px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal direction="up" className="max-w-2xl">
          <span className="font-inter text-sm font-medium uppercase tracking-[0.15em] text-emerald-400">
            Why TerraElix
          </span>
          <h2 className="font-dm-sans mt-3 text-4xl font-normal leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            Supplements that
            <br className="hidden sm:block" /> actually do what they say
          </h2>
          <p className="font-inter mt-5 max-w-xl text-base leading-[1.5] tracking-[-0.02em] text-white/60 sm:text-lg">
            We obsess over bioavailability, sourcing, and honest dosing so you feel a real
            difference — not a marketing promise.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map(({ Icon, title, text }, i) => (
            <Reveal key={title} direction="up" delay={i * 0.1} className="bg-black p-6 lg:p-8">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-800/40 ring-1 ring-emerald-400/30">
                <Icon size={22} strokeWidth={1.5} className="text-emerald-300" />
              </div>
              <h3 className="font-dm-sans mt-5 text-lg font-medium tracking-[-0.03em]">
                {title}
              </h3>
              <p className="font-inter mt-2 text-sm leading-[1.5] tracking-[-0.02em] text-white/55">
                {text}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} direction="up" delay={i * 0.1} className="border-l border-white/15 pl-4">
              <p className="font-dm-sans text-4xl font-medium tracking-[-0.05em] lg:text-5xl">
                <Counter value={s.value} suffix={s.suffix} decimals={'decimals' in s ? (s as { decimals: number }).decimals : 0} />
              </p>
              <p className="font-inter mt-2 text-sm tracking-[-0.02em] text-white/50">
                {s.label}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
