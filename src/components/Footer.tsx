import { useState } from 'react';
import { Instagram, Twitter, Youtube, ArrowUpRight, Globe, Clock, ShieldCheck, QrCode } from 'lucide-react';

const COLUMNS = [
  {
    title: 'Shop',
    links: ['Daily Balance', 'Pure Immunity', 'Deep Sleep', 'Clean Energy', 'Bundles'],
  },
  {
    title: 'Company',
    links: ['About Us', 'Our Ingredients', 'Sustainability', 'Lab Testing', 'Careers'],
  },
  {
    title: 'Support',
    links: ['Help Center', 'Shipping', 'Returns', 'Subscription', 'Contact'],
  },
];

const PAYMENTS = ['Visa', 'Mastercard', 'PayPal', 'Apple Pay', 'Google Pay'];
const SHIPPING = ['USPS', 'UPS', 'DHL', 'FedEx'];
const COUNTRIES = ['United States', 'Canada', 'United Kingdom', 'Australia', 'Germany', 'Japan'];
const LANGUAGES = ['English', 'Español', 'Français', 'Deutsch', '日本語'];

export default function Footer() {
  const [country, setCountry] = useState('United States');
  const [lang, setLang] = useState('English');

  return (
    <footer id="footer" className="bg-black px-5 pt-16 pb-8 text-white sm:px-8 lg:px-10 lg:pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_3fr]">
          {/* Brand block */}
          <div className="max-w-sm">
            <a href="#top" className="font-dm-sans text-[30px] font-medium tracking-[-0.05em]">
              TerraElix
            </a>
            <p className="font-inter mt-4 text-sm leading-[1.5] tracking-[-0.02em] text-white/55">
              Plant-based supplements, clinically dosed and traceably sourced — for daily
              balance and clean energy.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Twitter, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social link"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <Icon size={18} strokeWidth={1.5} />
                </a>
              ))}
            </div>

            {/* App QR */}
            <div className="mt-8 flex items-center gap-4 rounded-2xl bg-white/5 p-4">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <QrCode size={32} strokeWidth={1.5} className="text-white/80" />
              </div>
              <div>
                <p className="font-dm-sans text-sm font-medium tracking-[-0.02em]">Get the app</p>
                <p className="font-inter mt-0.5 text-xs text-white/50">
                  Scan to download TerraElix for iOS & Android.
                </p>
              </div>
            </div>
          </div>

          {/* Link columns + selectors */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {COLUMNS.map((col) => (
              <div key={col.title}>
                <h4 className="font-dm-sans text-sm font-medium uppercase tracking-[0.12em] text-white/40">
                  {col.title}
                </h4>
                <ul className="mt-4 space-y-3">
                  {col.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="font-inter group inline-flex items-center gap-1 text-sm tracking-[-0.02em] text-white/70 transition-colors hover:text-white"
                      >
                        {link}
                        <ArrowUpRight
                          size={13}
                          strokeWidth={1.5}
                          className="opacity-0 transition-opacity group-hover:opacity-100"
                        />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Selectors + support hours */}
        <div className="mt-12 grid grid-cols-1 gap-6 border-t border-white/10 pt-8 sm:grid-cols-3">
          <label className="flex items-center gap-3">
            <Globe size={16} strokeWidth={1.5} className="text-white/50" />
            <select
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              className="font-inter rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none transition focus:border-emerald-400"
            >
              {COUNTRIES.map((c) => (
                <option key={c} value={c} className="bg-black text-white">
                  {c}
                </option>
              ))}
            </select>
          </label>
          <label className="flex items-center gap-3">
            <Globe size={16} strokeWidth={1.5} className="text-white/50" />
            <select
              value={lang}
              onChange={(e) => setLang(e.target.value)}
              className="font-inter rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white outline-none transition focus:border-emerald-400"
            >
              {LANGUAGES.map((l) => (
                <option key={l} value={l} className="bg-black text-white">
                  {l}
                </option>
              ))}
            </select>
          </label>
          <div className="flex items-center gap-3 text-white/50">
            <Clock size={16} strokeWidth={1.5} />
            <p className="font-inter text-sm tracking-[-0.02em]">
              Support: Mon–Fri, 9am–6pm ET
            </p>
          </div>
        </div>

        {/* Payment + shipping + trust */}
        <div className="mt-8 flex flex-col gap-6 border-t border-white/10 pt-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-inter text-xs uppercase tracking-[0.15em] text-white/40">
              Pay with
            </span>
            {PAYMENTS.map((p) => (
              <span
                key={p}
                className="font-dm-sans rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium text-white/80"
              >
                {p}
              </span>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="font-inter text-xs uppercase tracking-[0.15em] text-white/40">
              Ships via
            </span>
            {SHIPPING.map((s) => (
              <span
                key={s}
                className="font-dm-sans rounded-md bg-white/10 px-2.5 py-1 text-xs font-medium text-white/80"
              >
                {s}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-2 text-white/50">
            <ShieldCheck size={16} strokeWidth={1.5} />
            <span className="font-inter text-xs tracking-[-0.02em]">
              SSL secured · PCI compliant
            </span>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-8 flex flex-col gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-inter text-xs text-white/40">
            © {new Date().getFullYear()} TerraElix. All rights reserved.
          </p>
          <div className="flex flex-wrap gap-6">
            <a href="#" className="font-inter text-xs text-white/40 hover:text-white/70">
              Privacy Policy
            </a>
            <a href="#" className="font-inter text-xs text-white/40 hover:text-white/70">
              Terms of Service
            </a>
            <a href="#" className="font-inter text-xs text-white/40 hover:text-white/70">
              Accessibility
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
