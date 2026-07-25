import { MARQUEE_ITEMS } from '@/data';

export default function Marquee() {
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <div className="overflow-hidden border-y border-black/10 bg-[#FAF8F3] py-4">
      <div className="flex w-max animate-[marquee_32s_linear_infinite] gap-12 whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="font-dm-sans flex items-center gap-3 text-sm font-medium tracking-[-0.02em] text-black/70 uppercase"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-700" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
