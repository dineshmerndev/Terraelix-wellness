import { ArrowUpRight } from 'lucide-react';
import { STEPS } from '@/data';
import Reveal from '@/components/Reveal';

export default function HowItWorks() {
  return (
    <section id="how" className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal direction="up" className="max-w-2xl">
          <span className="font-inter text-sm font-medium uppercase tracking-[0.15em] text-emerald-800">
            How it works
          </span>
          <h2 className="font-dm-sans mt-3 text-4xl font-normal leading-[1.05] tracking-[-0.05em] text-black sm:text-5xl lg:text-6xl">
            Your routine,
            <br className="hidden sm:block" /> personalized
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10">
          {STEPS.map((step, i) => (
            <Reveal key={step.num} direction="up" delay={i * 0.12}>
              <div className="flex items-baseline gap-4">
                <span className="font-dm-sans text-5xl font-medium tracking-[-0.05em] text-black/15 lg:text-6xl">
                  {step.num}
                </span>
                <div className="h-px flex-1 bg-black/10" />
              </div>
              <h3 className="font-dm-sans mt-5 text-2xl font-medium tracking-[-0.03em] text-black">
                {step.title}
              </h3>
              <p className="font-inter mt-2.5 text-base leading-[1.5] tracking-[-0.02em] text-black/60">
                {step.text}
              </p>
              {i === STEPS.length - 1 && (
                <a
                  href="#bundle"
                  className="font-inter mt-5 inline-flex items-center gap-1.5 text-sm font-medium tracking-[-0.02em] text-emerald-800"
                >
                  Start your assessment
                  <ArrowUpRight size={16} strokeWidth={1.5} />
                </a>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
