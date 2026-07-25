import { Leaf, BadgeCheck, Sprout, Dna, Wheat, Flag, CloudOff } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

type Cert = { name: string; Icon: LucideIcon };

const CERTS: Cert[] = [
  { name: 'USDA Organic', Icon: Sprout },
  { name: 'GMP Certified', Icon: BadgeCheck },
  { name: 'Vegan', Icon: Leaf },
  { name: 'Non-GMO', Icon: Dna },
  { name: 'Gluten Free', Icon: Wheat },
  { name: 'Made in USA', Icon: Flag },
  { name: 'Carbon Neutral', Icon: CloudOff },
];

export default function Certifications() {
  return (
    <section className="border-b border-black/10 bg-white px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
      <div className="mx-auto max-w-7xl">
        <p className="font-inter mb-8 text-center text-xs font-medium uppercase tracking-[0.2em] text-black/40">
          Certified & trusted
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12 lg:gap-x-16">
          {CERTS.map(({ name, Icon }) => (
            <div
              key={name}
              className="group flex items-center gap-2.5 transition-transform duration-300 hover:-translate-y-0.5"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-[#FAF8F3] text-emerald-800 transition-colors group-hover:border-emerald-700/30 group-hover:bg-emerald-50">
                <Icon size={18} strokeWidth={1.5} />
              </span>
              <span className="font-dm-sans text-sm font-medium tracking-[-0.02em] text-black/70 sm:text-base">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
