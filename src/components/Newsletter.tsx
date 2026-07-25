import { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import Reveal from '@/components/Reveal';
import MagneticButton from '@/components/MagneticButton';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [sent, setSent] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSent(true);
    setEmail('');
  };

  return (
    <section className="bg-[#FAF8F3] px-5 py-20 sm:px-8 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <Reveal direction="scale">
          <div className="overflow-hidden rounded-3xl bg-emerald-900 px-6 py-12 text-center text-white sm:px-12 lg:py-16">
            <span className="font-inter text-sm font-medium uppercase tracking-[0.15em] text-emerald-300">
              Join the list
            </span>
            <h2 className="font-dm-sans mt-3 text-3xl font-normal leading-[1.1] tracking-[-0.05em] sm:text-4xl lg:text-5xl">
              Get 15% off your first order
            </h2>
            <p className="font-inter mx-auto mt-4 max-w-md text-base leading-[1.5] tracking-[-0.02em] text-white/70">
              Wellness tips, new launches, and subscriber-only offers — straight to your inbox.
            </p>

            {sent ? (
              <div className="mx-auto mt-8 flex max-w-md items-center justify-center gap-2 rounded-full bg-emerald-400/20 px-6 py-4 text-emerald-200">
                <Check size={18} strokeWidth={2} />
                <span className="font-inter text-sm font-medium">
                  You're in. Check your inbox for your code.
                </span>
              </div>
            ) : (
              <form
                onSubmit={submit}
                className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@email.com"
                  className="font-inter h-13 flex-1 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm text-white placeholder:text-white/40 outline-none transition focus:border-emerald-300 focus:bg-white/15"
                />
                <MagneticButton
                  type="submit"
                  className="font-inter flex h-13 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black hover:-translate-y-0.5"
                >
                  Get my code
                  <ArrowUpRight size={16} strokeWidth={1.5} />
                </MagneticButton>
              </form>
            )}
            <p className="font-inter mt-4 text-xs text-white/40">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
