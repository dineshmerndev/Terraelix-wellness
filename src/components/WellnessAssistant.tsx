import { useEffect, useRef, useState } from 'react';
import { Sparkles, X, Send, Bot } from 'lucide-react';

type Msg = { role: 'bot' | 'user'; text: string };

const SUGGESTIONS = [
  'I need more energy',
  'Help me sleep better',
  'What is good for immunity?',
];

const RESPONSES: Record<string, string> = {
  energy:
    'For clean, sustained energy I would recommend Clean Energy — our plant-based B-complex. Pair it with Daily Balance for adaptogenic support against afternoon crashes.',
  sleep:
    'Deep Sleep is our most-loved formula for that. Magnesium glycinate plus ashwagandha helps calm the nervous system for restorative rest. Most members feel a difference within 5–7 nights.',
  immunity:
    'Pure Immunity combines vitamin C, zinc, and elderberry for daily defense. It is a great foundational layer alongside Daily Balance.',
  default:
    'Great question! Tell me a bit more about your goal — energy, sleep, immunity, or stress — and I will match you to the right formula.',
};

function match(input: string): string {
  const t = input.toLowerCase();
  if (t.match(/energ|tired|fatigue|focus/)) return RESPONSES.energy;
  if (t.match(/sleep|insomnia|rest|tired at night|wake/)) return RESPONSES.sleep;
  if (t.match(/immun|sick|cold|defen/)) return RESPONSES.immunity;
  return RESPONSES.default;
}

export default function WellnessAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([
    { role: 'bot', text: 'Hi! I am TerraBot, your wellness guide. What can I help you with today?' },
  ]);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [msgs, typing]);

  const send = (text: string) => {
    if (!text.trim()) return;
    setMsgs((m) => [...m, { role: 'user', text }]);
    setInput('');
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setMsgs((m) => [...m, { role: 'bot', text: match(text) }]);
    }, 900);
  };

  return (
    <>
      {/* Launcher */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Open wellness assistant"
        className="group fixed bottom-4 left-4 z-40 flex items-center gap-2 rounded-full bg-emerald-700 px-4 py-3 text-white shadow-[0_10px_40px_-10px_rgba(4,120,87,0.6)] transition-transform hover:-translate-y-0.5 sm:bottom-6 sm:left-6"
      >
        <span className="relative flex h-7 w-7 items-center justify-center">
          <span className="absolute inset-0 animate-ping rounded-full bg-emerald-400/40" />
          <Sparkles size={18} strokeWidth={1.5} className="relative" />
        </span>
        <span className="font-inter text-sm font-medium">Ask TerraBot</span>
      </button>

      {/* Panel */}
      <div
        className={`fixed bottom-20 left-4 z-40 w-[calc(100vw-2rem)] max-w-sm transition-all duration-300 sm:bottom-24 sm:left-6 ${
          open ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
        }`}
      >
        <div className="flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.3)]">
          {/* Header */}
          <div className="flex items-center justify-between bg-emerald-900 px-4 py-3 text-white">
            <div className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-400/20">
                <Bot size={16} strokeWidth={1.5} />
              </span>
              <div>
                <p className="font-dm-sans text-sm font-medium tracking-[-0.02em]">TerraBot</p>
                <p className="font-inter text-[11px] text-emerald-300">Online · replies instantly</p>
              </div>
            </div>
            <button
              aria-label="Close assistant"
              onClick={() => setOpen(false)}
              className="flex h-7 w-7 items-center justify-center rounded-full bg-white/10 hover:bg-white/20"
            >
              <X size={15} strokeWidth={1.5} />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="h-64 space-y-3 overflow-y-auto bg-[#FAF8F3] px-4 py-4">
            {msgs.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <p
                  className={`font-inter max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-[1.4] tracking-[-0.02em] ${
                    m.role === 'user'
                      ? 'bg-black text-white'
                      : 'bg-white text-black/80 ring-1 ring-black/5'
                  }`}
                >
                  {m.text}
                </p>
              </div>
            ))}
            {typing && (
              <div className="flex justify-start">
                <div className="flex gap-1 rounded-2xl bg-white px-4 py-3 ring-1 ring-black/5">
                  {[0, 1, 2].map((d) => (
                    <span
                      key={d}
                      className="h-1.5 w-1.5 animate-bounce rounded-full bg-black/30"
                      style={{ animationDelay: `${d * 0.15}s` }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Suggestions */}
          {msgs.length <= 1 && (
            <div className="flex flex-wrap gap-2 bg-[#FAF8F3] px-4 pb-3">
              {SUGGESTIONS.map((s) => (
                <button
                  key={s}
                  onClick={() => send(s)}
                  className="font-inter rounded-full border border-black/10 bg-white px-3 py-1.5 text-xs text-black/70 transition-colors hover:border-emerald-700/30 hover:text-emerald-800"
                >
                  {s}
                </button>
              ))}
            </div>
          )}

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
            className="flex items-center gap-2 border-t border-black/10 bg-white px-3 py-3"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about products..."
              className="font-inter flex-1 rounded-full bg-black/5 px-4 py-2.5 text-sm text-black outline-none transition focus:bg-black/10"
            />
            <button
              type="submit"
              aria-label="Send"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-emerald-700 text-white transition-transform hover:-translate-y-0.5"
            >
              <Send size={15} strokeWidth={1.5} />
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
