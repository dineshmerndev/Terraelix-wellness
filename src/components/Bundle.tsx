import { Check, ArrowUpRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import MagneticButton from '@/components/MagneticButton';

const BUNDLES = [
  {
    name: 'The Essentials',
    price: 84,
    compareAt: 116,
    items: ['Daily Balance', 'Pure Immunity'],
    perDay: '$1.40/day',
    popular: false,
  },
  {
    name: 'The Complete Stack',
    price: 118,
    compareAt: 165,
    items: ['Daily Balance', 'Pure Immunity', 'Deep Sleep', 'Clean Energy'],
    perDay: '$0.98/day',
    popular: true,
  },
  {
    name: 'The Reset',
    price: 92,
    compareAt: 126,
    items: ['Deep Sleep', 'Daily Balance'],
    perDay: '$1.53/day',
    popular: false,
  },
];

export default function Bundle() {
  return (
    <section id="bundle" className="bg-black px-5 py-20 text-white sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal direction="up" className="mx-auto max-w-2xl text-center">
          <span className="font-inter text-sm font-medium uppercase tracking-[0.15em] text-emerald-400">
            Subscribe & save
          </span>
          <h2 className="font-dm-sans mt-3 text-4xl font-normal leading-[1.05] tracking-[-0.05em] sm:text-5xl lg:text-6xl">
            Build a stack that
            <br className="hidden sm:block" /> grows with you
          </h2>
          <p className="font-inter mt-5 text-base leading-[1.5] tracking-[-0.02em] text-white/60 sm:text-lg">
            Subscribe to any bundle and save up to 30% — pause, skip, or cancel anytime.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
          {BUNDLES.map((b, i) => (
            <Reveal key={b.name} direction="up" delay={i * 0.1}>
              <div
                className={`relative flex h-full flex-col rounded-2xl p-7 lg:p-8 ${
                  b.popular
                    ? 'bg-emerald-900/40 ring-2 ring-emerald-400/50'
                    : 'bg-white/5 ring-1 ring-white/10'
                }`}
              >
                {b.popular && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-emerald-400 px-4 py-1 font-inter text-xs font-medium tracking-[-0.02em] text-black">
                    Most popular
                  </span>
                )}
                <h3 className="font-dm-sans text-xl font-medium tracking-[-0.03em]">{b.name}</h3>
                <div className="mt-4 flex items-baseline gap-2">
                  <span className="font-dm-sans text-4xl font-medium tracking-[-0.05em]">
                    ${b.price}
                  </span>
                  <span className="font-inter text-base text-white/40 line-through">
                    ${b.compareAt}
                  </span>
                </div>
                <p className="font-inter mt-1 text-sm text-emerald-300">{b.perDay}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {b.items.map((item) => (
                    <li key={item} className="font-inter flex items-center gap-3 text-sm text-white/80">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-400/20">
                        <Check size={12} strokeWidth={2} className="text-emerald-300" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>

                <MagneticButton
                  className={`font-inter mt-8 flex h-12 items-center justify-center gap-2 rounded-full text-sm font-medium hover:-translate-y-0.5 ${
                    b.popular ? 'bg-emerald-400 text-black' : 'bg-white text-black'
                  }`}
                >
                  Choose {b.name}
                  <ArrowUpRight size={16} strokeWidth={1.5} />
                </MagneticButton>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
