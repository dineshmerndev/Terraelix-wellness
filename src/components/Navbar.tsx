import { useEffect, useState } from 'react';
import { Search, ShoppingBag, CornerUpLeft, Menu, X } from 'lucide-react';

const AVATAR =
  'https://polo-pecan-73837341.figma.site/_assets/v11/ca8093996e970200cbcf8bde8744175e52da5a79.png';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Products', href: '#products' },
  { label: 'Promotions', href: '#bundle' },
  { label: 'Contact', href: '#footer' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed inset-x-0 top-0 z-40 flex items-center justify-between px-5 py-4 transition-colors duration-300 sm:px-8 lg:px-10 lg:py-5 ${
          scrolled
            ? 'bg-black/70 backdrop-blur-md shadow-[0_1px_0_0_rgba(255,255,255,0.08)]'
            : 'bg-transparent'
        }`}
      >
        <a
          href="#top"
          className="font-dm-sans text-[30px] font-medium tracking-[-0.05em] text-white"
        >
          TerraElix
        </a>

        <div className="hidden gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-dm-sans text-[18px] font-medium text-white/90 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3 sm:gap-4">
          <button
            aria-label="Search"
            className="text-white/90 transition-colors hover:text-white"
          >
            <Search size={20} strokeWidth={1.5} />
          </button>
          <button
            aria-label="Shopping bag"
            className="text-white/90 transition-colors hover:text-white"
          >
            <ShoppingBag size={20} strokeWidth={1.5} />
          </button>
          <button
            aria-label="Return"
            className="text-white/90 transition-colors hover:text-white"
          >
            <CornerUpLeft size={20} strokeWidth={1.5} />
          </button>
          <img
            src={AVATAR}
            alt="User avatar"
            className="h-8 w-8 rounded-full object-cover lg:h-10 lg:w-10"
          />
          <button
            aria-label="Toggle menu"
            className="text-white md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-30 flex flex-col items-center justify-center gap-8 bg-black/95 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="font-dm-sans text-2xl font-medium text-white"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}
