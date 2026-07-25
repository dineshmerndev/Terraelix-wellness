import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQS } from '@/data';
import Reveal from '@/components/Reveal';

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-3xl">
        <Reveal direction="up" className="text-center">
          <span className="font-inter text-sm font-medium uppercase tracking-[0.15em] text-emerald-800">
            FAQ
          </span>
          <h2 className="font-dm-sans mt-3 text-4xl font-normal leading-[1.05] tracking-[-0.05em] text-black sm:text-5xl">
            Questions, answered
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-black/10 border-y border-black/10">
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} direction="up" delay={i * 0.05}>
                <div>
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  >
                    <span className="font-dm-sans text-lg font-medium tracking-[-0.03em] text-black sm:text-xl">
                      {faq.q}
                    </span>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-black/5 text-black transition-transform duration-300" style={{ transform: isOpen ? 'rotate(180deg)' : 'none' }}>
                      {isOpen ? <Minus size={16} strokeWidth={1.5} /> : <Plus size={16} strokeWidth={1.5} />}
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ${
                      isOpen ? 'grid-rows-[1fr] pb-5 opacity-100' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <p className="font-inter overflow-hidden text-base leading-[1.5] tracking-[-0.02em] text-black/60">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
