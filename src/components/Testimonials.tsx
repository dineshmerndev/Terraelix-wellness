import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '@/data';
import Reveal from '@/components/Reveal';

export default function Testimonials() {
  return (
    <section className="bg-[#FAF8F3] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal direction="up" className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <span className="font-inter text-sm font-medium uppercase tracking-[0.15em] text-emerald-800">
              Real results
            </span>
            <h2 className="font-dm-sans mt-3 text-4xl font-normal leading-[1.05] tracking-[-0.05em] text-black sm:text-5xl lg:text-6xl">
              Loved by 14,000+
              <br className="hidden sm:block" /> members
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={18} strokeWidth={1.5} className="fill-amber-500 text-amber-500" />
              ))}
            </div>
            <span className="font-inter text-sm text-black/60">
              4.9 average · 3,500+ reviews
            </span>
          </div>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} direction="up" delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-2xl border border-black/10 bg-white p-6 lg:p-8 transition-transform duration-300 hover:-translate-y-1">
                <Quote size={28} strokeWidth={1.5} className="text-emerald-700/30" />
                <blockquote className="font-inter mt-4 flex-1 text-base leading-[1.5] tracking-[-0.02em] text-black/80">
                  "{t.text}"
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-dm-sans text-base font-medium tracking-[-0.02em] text-black">
                      {t.name}
                    </p>
                    <p className="font-inter text-xs text-black/50">{t.role}</p>
                  </div>
                  <div className="ml-auto flex">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={13} strokeWidth={1.5} className="fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
