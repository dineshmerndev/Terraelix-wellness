import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { CARDS } from '@/data';

const BG_IMAGE =
  'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260624_110248_b62f758d-f68c-4045-a7b4-91771d6d0a0f.png&w=1280&q=85';
const INLINE_IMAGE =
  'https://polo-pecan-73837341.figma.site/_assets/v11/6a7de4fbe9c9e2315040607320a9ff5e93117bf4.png';
const PRODUCT_IMAGE =
  'https://polo-pecan-73837341.figma.site/_assets/v11/50ad042b3cd48a2e120ea3ba17c8cfeaf3cc334c.png';
const PANEL1_IMAGE =
  'https://polo-pecan-73837341.figma.site/_assets/v11/6736cbe6e26afa2cd7c04a91892a79f7640785b5.png';
const PANEL3_IMAGE =
  'https://polo-pecan-73837341.figma.site/_assets/v11/30e8f38d1f993c357a3be2721557fc899d5640fc.png';

function Word({ children, delay }: { children: string; delay: string }) {
  return (
    <span className="inline-block overflow-hidden align-bottom">
      <span
        className={`inline-block animate-word-reveal ${delay}`}
        style={{ willChange: 'transform, opacity, filter' }}
      >
        {children}
      </span>
    </span>
  );
}

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((i) => (i + 1) % CARDS.length);
    }, 3500);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      id="top"
      className="relative flex min-h-screen flex-col overflow-hidden font-inter"
      style={{
        backgroundImage: `url(${BG_IMAGE})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Spacer for fixed navbar */}
      <div className="h-[72px] lg:h-[84px]" />

      {/* Hero content */}
      <section className="relative z-10 flex flex-1 flex-col justify-center px-5 sm:px-8 lg:px-10">
        <h1 className="font-dm-sans font-normal tracking-[-0.05em] text-white">
          <span className="block text-[48px] leading-[50px] sm:text-[80px] sm:leading-[72px] md:text-[110px] md:leading-[95px] lg:text-[130px] lg:leading-[110px] xl:text-[155px] xl:leading-[125px]">
            <Word delay="delay-300">The</Word>{' '}
            <Word delay="delay-400">Power</Word>{' '}
            <span className="text-white/45">
              <Word delay="delay-500">of</Word>
            </span>
          </span>
          <span className="block text-[48px] leading-[50px] sm:text-[80px] sm:leading-[72px] md:text-[110px] md:leading-[95px] lg:text-[130px] lg:leading-[110px] xl:text-[155px] xl:leading-[125px]">
            <span className="text-white/45">
              <Word delay="delay-600">Nature</Word>{' '}
              <Word delay="delay-700">in</Word>
            </span>{' '}
            <Word delay="delay-800">Every</Word>
          </span>
          <span className="block text-[48px] leading-[50px] sm:text-[80px] sm:leading-[72px] md:text-[110px] md:leading-[95px] lg:text-[130px] lg:leading-[110px] xl:text-[155px] xl:leading-[125px]">
            <Word delay="delay-900">Capsule</Word>
            <img
              src={INLINE_IMAGE}
              alt=""
              className="animate-scale-in delay-1000 ml-2 hidden align-middle sm:inline-block lg:ml-4"
              style={{ height: 'clamp(60px, 10vw, 160px)', width: 'auto' }}
            />
          </span>
        </h1>

        {/* CTA */}
        <div className="animate-fade-up delay-600 mt-8 flex flex-col gap-5 sm:mt-12 sm:flex-row sm:items-center sm:gap-8 lg:mt-[75px] lg:gap-[50px]">
          <a
            href="#products"
            className="flex h-14 w-full items-center justify-center gap-2 rounded-md bg-black text-white transition-transform hover:-translate-y-0.5 sm:w-[240px] md:w-[280px] lg:h-[72px] lg:w-[310px]"
          >
            <span className="font-inter text-base font-medium tracking-[-0.03em] sm:text-lg lg:text-xl xl:text-2xl">
              Explore Now
            </span>
            <ArrowUpRight size={22} strokeWidth={1.5} />
          </a>
          <p className="max-w-[310px] font-inter text-sm font-normal leading-[1.45] tracking-[-0.03em] text-white sm:text-base lg:text-lg">
            Discover our new plant-based supplements for daily balance and clean energy.
          </p>
        </div>
      </section>

      {/* Mobile/tablet product image */}
      <div className="animate-scale-in delay-800 relative z-10 -mb-[180px] sm:-mb-[220px] lg:hidden">
        <img
          src={PRODUCT_IMAGE}
          alt="TerraElix product"
          className="mx-auto w-[180%] max-w-[1296px] object-contain drop-shadow-2xl sm:w-[151%]"
        />
      </div>

      {/* Bottom 3-panel grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-[2fr_1fr_2fr]">
        {/* Panel 1 */}
        <div className="animate-fade-up delay-900 relative overflow-hidden bg-[#ECEDEC] p-6 sm:p-8 lg:p-10">
          <p className="font-dm-sans max-w-[350px] text-2xl font-normal leading-[1.1] tracking-[-0.05em] text-black sm:text-[28px] lg:text-[35px]">
            Start your personalized path to natural balance
          </p>
          <a
            href="#how"
            className="font-inter mt-6 inline-block text-base font-normal underline tracking-[-0.03em] text-black lg:text-lg"
          >
            Personal Assessment
          </a>
          <img
            src={PANEL1_IMAGE}
            alt=""
            className="pointer-events-none absolute bottom-0 right-0 h-full mix-blend-multiply object-contain"
          />
        </div>

        {/* Panel 2 - carousel */}
        <div className="animate-fade-up delay-1000 relative flex flex-col justify-between bg-[#FEFDF9] p-6 sm:p-8 lg:p-10">
          <div className="relative h-[120px] sm:h-[140px] lg:h-[160px]">
            {CARDS.map(({ Icon, bg, text }, i) => (
              <div
                key={i}
                className={`absolute inset-0 flex items-start gap-3 transition-all duration-500 ${
                  i === active ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                }`}
              >
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${bg} sm:h-12 sm:w-12`}
                >
                  <Icon size={18} strokeWidth={1.5} className="text-white" />
                </div>
                <p className="font-inter text-sm font-normal leading-[1.2] tracking-[-0.03em] text-black/80 sm:text-base lg:text-lg">
                  {text}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex gap-1.5">
            {CARDS.map((_, i) => (
              <span
                key={i}
                className={`h-0.5 flex-1 rounded-full transition-colors duration-300 ${
                  i === active ? 'bg-black' : 'bg-black/20'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Panel 3 */}
        <div className="animate-fade-up delay-1100 flex items-center gap-4 bg-black p-6 sm:gap-6 sm:p-8 lg:p-10">
          <img
            src={PANEL3_IMAGE}
            alt="TerraElix product"
            className="h-[82px] w-[120px] shrink-0 object-contain sm:h-[110px] sm:w-[160px] lg:h-[142px] lg:w-[208px]"
          />
          <div>
            <p className="font-inter text-2xl font-normal tracking-[-0.05em] text-white sm:text-3xl lg:text-[35px]">
              +14K
            </p>
            <p className="font-inter mt-1 text-sm font-normal leading-[1.2] text-white/60 sm:text-base lg:text-lg">
              People have already optimized their wellness
            </p>
          </div>
        </div>
      </div>

      {/* Desktop floating product */}
      <img
        src={PRODUCT_IMAGE}
        alt="TerraElix product"
        className="animate-scale-in delay-700 pointer-events-none absolute z-0 hidden lg:block"
        style={{
          width: 'clamp(600px, 80vw, 1412px)',
          height: 'auto',
          bottom: '-10%',
          right: 'clamp(-400px, -20vw, -100px)',
        }}
      />
    </div>
  );
}
