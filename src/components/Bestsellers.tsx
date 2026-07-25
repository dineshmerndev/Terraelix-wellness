import { useRef, useState } from 'react';
import { Star, Plus, ArrowUpRight } from 'lucide-react';
import { PRODUCTS, type Product } from '@/data';
import Reveal from '@/components/Reveal';
import MagneticButton from '@/components/MagneticButton';

function TiltCard({ product, index }: { product: Product; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: -py * 8, ry: px * 8 });
  };
  const reset = () => setTilt({ rx: 0, ry: 0 });

  return (
    <Reveal direction="up" delay={index * 0.08}>
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseLeave={reset}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)`,
          transition: 'transform 0.2s ease-out',
        }}
        className="group flex h-full flex-col overflow-hidden rounded-2xl border border-black/10 bg-white transition-shadow duration-300 hover:shadow-[0_25px_60px_-25px_rgba(0,0,0,0.35)]"
      >
        <div className={`relative ${product.accent} overflow-hidden`}>
          <span className="absolute left-4 top-4 z-10 rounded-full bg-black px-3 py-1 font-inter text-xs font-medium tracking-[-0.02em] text-white">
            {product.badge ?? 'TerraElix'}
          </span>
          <button
            aria-label="Add to bag"
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-black opacity-0 shadow-sm backdrop-blur transition-all duration-300 hover:bg-white group-hover:opacity-100"
          >
            <Plus size={18} strokeWidth={1.5} />
          </button>
          <img
            src={product.image}
            alt={product.name}
            className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110 sm:h-72"
          />
        </div>
        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-center gap-2">
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={13}
                  strokeWidth={1.5}
                  className={i < Math.round(product.rating) ? 'fill-amber-500 text-amber-500' : 'text-black/20'}
                />
              ))}
            </div>
            <span className="font-inter text-xs text-black/50">
              {product.rating} · {product.reviews.toLocaleString()} reviews
            </span>
          </div>
          <h3 className="font-dm-sans mt-3 text-xl font-medium tracking-[-0.03em] text-black">
            {product.name}
          </h3>
          <p className="font-inter mt-1.5 flex-1 text-sm leading-[1.5] tracking-[-0.02em] text-black/60">
            {product.tagline}
          </p>
          <div className="mt-5 flex items-center justify-between">
            <div className="flex items-baseline gap-2">
              <span className="font-dm-sans text-2xl font-medium tracking-[-0.04em] text-black">
                ${product.price}
              </span>
              {product.compareAt && (
                <span className="font-inter text-sm text-black/40 line-through">
                  ${product.compareAt}
                </span>
              )}
            </div>
            <MagneticButton className="font-inter flex items-center gap-1.5 rounded-full bg-black px-4 py-2.5 text-sm font-medium text-white hover:-translate-y-0.5">
              Add to bag
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </MagneticButton>
          </div>
        </div>
      </div>
    </Reveal>
  );
}

export default function Bestsellers() {
  return (
    <section id="products" className="bg-[#FAF8F3] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal direction="up" className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <span className="font-inter text-sm font-medium uppercase tracking-[0.15em] text-emerald-800">
              Bestsellers
            </span>
            <h2 className="font-dm-sans mt-3 text-4xl font-normal leading-[1.05] tracking-[-0.05em] text-black sm:text-5xl lg:text-6xl">
              Formulas people
              <br className="hidden sm:block" /> come back for
            </h2>
          </div>
          <a
            href="#bundle"
            className="font-inter group inline-flex items-center gap-2 text-sm font-medium tracking-[-0.02em] text-black"
          >
            View all products
            <ArrowUpRight
              size={18}
              strokeWidth={1.5}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {PRODUCTS.map((p, i) => (
            <TiltCard key={p.id} product={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
