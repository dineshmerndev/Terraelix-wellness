import { useState } from 'react';
import { ShoppingBag, X, Plus, Minus, Truck, ArrowUpRight } from 'lucide-react';

type CartLine = { id: string; name: string; price: number; qty: number; image: string };

const INITIAL: CartLine[] = [
  {
    id: 'daily-balance',
    name: 'Daily Balance',
    price: 42,
    qty: 1,
    image:
      'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
  {
    id: 'deep-sleep',
    name: 'Deep Sleep',
    price: 46,
    qty: 1,
    image:
      'https://images.pexels.com/photos/3683080/pexels-photo-3683080.jpeg?auto=compress&cs=tinysrgb&w=300',
  },
];

export default function StickyCart() {
  const [open, setOpen] = useState(false);
  const [lines, setLines] = useState<CartLine[]>(INITIAL);

  const subtotal = lines.reduce((s, l) => s + l.price * l.qty, 0);
  const count = lines.reduce((s, l) => s + l.qty, 0);
  const freeShip = subtotal >= 35;

  const setQty = (id: string, delta: number) =>
    setLines((ls) =>
      ls
        .map((l) => (l.id === id ? { ...l, qty: Math.max(0, l.qty + delta) } : l))
        .filter((l) => l.qty > 0),
    );

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed right-4 bottom-4 z-40 flex items-center gap-2 rounded-full bg-black px-4 py-3 text-white shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] transition-transform hover:-translate-y-0.5 sm:right-6 sm:bottom-6"
      >
        <ShoppingBag size={18} strokeWidth={1.5} />
        <span className="font-inter text-sm font-medium">Cart ({count})</span>
      </button>

      {/* Drawer */}
      <div
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          open ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute right-0 top-0 flex h-full w-full max-w-sm flex-col bg-white shadow-2xl transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex items-center justify-between border-b border-black/10 px-5 py-4">
            <h3 className="font-dm-sans text-lg font-medium tracking-[-0.03em] text-black">
              Your Cart ({count})
            </h3>
            <button
              aria-label="Close cart"
              onClick={() => setOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-black/5 text-black transition-colors hover:bg-black/10"
            >
              <X size={18} strokeWidth={1.5} />
            </button>
          </div>

          {/* Free shipping banner */}
          <div className="flex items-center gap-2 bg-emerald-50 px-5 py-3 text-emerald-800">
            <Truck size={16} strokeWidth={1.5} />
            <span className="font-inter text-xs font-medium tracking-[-0.02em]">
              {freeShip ? 'Free shipping unlocked!' : `Add $${(35 - subtotal).toFixed(0)} for free shipping`}
            </span>
          </div>

          {/* Lines */}
          <div className="flex-1 overflow-y-auto px-5 py-4">
            {lines.length === 0 ? (
              <p className="font-inter py-20 text-center text-sm text-black/40">
                Your cart is empty.
              </p>
            ) : (
              <ul className="space-y-4">
                {lines.map((l) => (
                  <li key={l.id} className="flex gap-3">
                    <img
                      src={l.image}
                      alt={l.name}
                      className="h-16 w-16 rounded-xl object-cover"
                    />
                    <div className="flex flex-1 flex-col">
                      <p className="font-dm-sans text-sm font-medium tracking-[-0.02em] text-black">
                        {l.name}
                      </p>
                      <p className="font-inter text-sm text-black/50">${l.price}</p>
                      <div className="mt-auto flex items-center gap-2">
                        <button
                          onClick={() => setQty(l.id, -1)}
                          aria-label="Decrease"
                          className="flex h-7 w-7 items-center justify-center rounded-full bg-black/5 text-black hover:bg-black/10"
                        >
                          <Minus size={13} strokeWidth={1.5} />
                        </button>
                        <span className="font-inter w-6 text-center text-sm text-black">
                          {l.qty}
                        </span>
                        <button
                          onClick={() => setQty(l.id, 1)}
                          aria-label="Increase"
                          className="flex h-7 w-7 items-center justify-center rounded-full bg-black/5 text-black hover:bg-black/10"
                        >
                          <Plus size={13} strokeWidth={1.5} />
                        </button>
                      </div>
                    </div>
                    <span className="font-dm-sans text-sm font-medium tracking-[-0.02em] text-black">
                      ${l.price * l.qty}
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Footer */}
          <div className="border-t border-black/10 px-5 py-4">
            <div className="flex items-center justify-between">
              <span className="font-inter text-sm text-black/60">Subtotal</span>
              <span className="font-dm-sans text-xl font-medium tracking-[-0.04em] text-black">
                ${subtotal}
              </span>
            </div>
            <button className="font-inter mt-4 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-black text-sm font-medium text-white transition-transform hover:-translate-y-0.5">
              Checkout
              <ArrowUpRight size={16} strokeWidth={1.5} />
            </button>
          </div>
        </aside>
      </div>
    </>
  );
}
