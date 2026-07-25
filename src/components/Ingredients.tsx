import { INGREDIENTS } from '@/data';
import Reveal from '@/components/Reveal';
import { useParallax } from '@/hooks/useScrollEffects';

function IngredientCard({
  ing,
  index,
}: {
  ing: (typeof INGREDIENTS)[number];
  index: number;
}) {
  const { ref, offset } = useParallax<HTMLDivElement>(0.06);
  return (
    <Reveal direction="up" delay={index * 0.08}>
      <div ref={ref} className="group relative overflow-hidden rounded-2xl">
        <div className="aspect-[4/5] overflow-hidden">
          <img
            src={ing.image}
            alt={ing.name}
            className="h-[115%] w-full object-cover transition-transform duration-500 group-hover:scale-110"
            style={{ transform: `translateY(${offset}px)` }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 p-5">
          <h3 className="font-dm-sans text-xl font-medium tracking-[-0.03em] text-white">
            {ing.name}
          </h3>
          <p className="font-inter mt-1 text-sm tracking-[-0.02em] text-white/70">
            {ing.benefit}
          </p>
        </div>
      </div>
    </Reveal>
  );
}

export default function Ingredients() {
  return (
    <section className="bg-[#FAF8F3] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal direction="up" className="max-w-2xl">
          <span className="font-inter text-sm font-medium uppercase tracking-[0.15em] text-emerald-800">
            The Ingredients
          </span>
          <h2 className="font-dm-sans mt-3 text-4xl font-normal leading-[1.05] tracking-[-0.05em] text-black sm:text-5xl lg:text-6xl">
            Traceable from
            <br className="hidden sm:block" /> soil to capsule
          </h2>
          <p className="font-inter mt-5 max-w-xl text-base leading-[1.5] tracking-[-0.02em] text-black/60 sm:text-lg">
            Every active is sourced from a named farm, tested for purity, and dosed at the
            amount shown to work in human studies.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {INGREDIENTS.map((ing, i) => (
            <IngredientCard key={ing.name} ing={ing} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
