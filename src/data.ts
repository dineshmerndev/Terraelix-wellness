import type { LucideIcon } from 'lucide-react';
import {
  FlaskConical,
  Leaf,
  Droplets,
  Sun,
  ShieldCheck,
  Sparkles,
  HeartPulse,
  Award,
} from 'lucide-react';

export type Product = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  compareAt?: number;
  rating: number;
  reviews: number;
  badge?: string;
  image: string;
  accent: string;
};

export const PRODUCTS: Product[] = [
  {
    id: 'daily-balance',
    name: 'Daily Balance',
    tagline: 'Adaptogenic blend for steady energy & calm focus',
    price: 42,
    compareAt: 54,
    rating: 4.9,
    reviews: 1284,
    badge: 'Bestseller',
    image:
      'https://images.pexels.com/photos/3683074/pexels-photo-3683074.jpeg?auto=compress&cs=tinysrgb&w=900',
    accent: 'bg-emerald-50',
  },
  {
    id: 'pure-immunity',
    name: 'Pure Immunity',
    tagline: 'Vitamin C, zinc & elderberry for daily defense',
    price: 38,
    rating: 4.8,
    reviews: 962,
    badge: 'New',
    image:
      'https://images.pexels.com/photos/3683056/pexels-photo-3683056.jpeg?auto=compress&cs=tinysrgb&w=900',
    accent: 'bg-amber-50',
  },
  {
    id: 'deep-sleep',
    name: 'Deep Sleep',
    tagline: 'Magnesium & ashwagandha for restorative rest',
    price: 46,
    compareAt: 58,
    rating: 5.0,
    reviews: 743,
    badge: 'Limited',
    image:
      'https://images.pexels.com/photos/3683080/pexels-photo-3683080.jpeg?auto=compress&cs=tinysrgb&w=900',
    accent: 'bg-sky-50',
  },
  {
    id: 'clean-energy',
    name: 'Clean Energy',
    tagline: 'Plant-based B-complex for all-day vitality',
    price: 39,
    rating: 4.7,
    reviews: 511,
    image:
      'https://images.pexels.com/photos/3683076/pexels-photo-3683076.jpeg?auto=compress&cs=tinysrgb&w=900',
    accent: 'bg-rose-50',
  },
];

export type Benefit = {
  Icon: LucideIcon;
  title: string;
  text: string;
};

export const BENEFITS: Benefit[] = [
  {
    Icon: Leaf,
    title: '100% Plant-Based',
    text: 'Every formula is sourced from organic, traceable farms — never synthetic fillers.',
  },
  {
    Icon: ShieldCheck,
    title: 'Third-Party Tested',
    text: 'Each batch is lab-verified for purity and potency by independent ISO-certified labs.',
  },
  {
    Icon: Sparkles,
    title: 'Clinically Dosed',
    text: 'Bioavailable amounts backed by peer-reviewed human studies, not marketing hype.',
  },
  {
    Icon: HeartPulse,
    title: 'Gentle on the Gut',
    text: 'Fermented and buffered forms that absorb cleanly without nausea.',
  },
];

export type Step = {
  num: string;
  title: string;
  text: string;
};

export const STEPS: Step[] = [
  {
    num: '01',
    title: 'Take the Assessment',
    text: 'A 2-minute quiz builds your personalized supplement profile from 14 lifestyle signals.',
  },
  {
    num: '02',
    title: 'Get Your Formula',
    text: 'We match you to a curated daily stack and ship it free, in recyclable glass.',
  },
  {
    num: '03',
    title: 'Feel the Shift',
    text: 'Most members report clearer energy and better sleep within the first 14 days.',
  },
];

export type Testimonial = {
  name: string;
  role: string;
  text: string;
  avatar: string;
  rating: number;
};

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Maya R.',
    role: 'Member since 2024',
    text: 'I noticed steadier energy by day ten. No afternoon crash, no jitters — just a calmer, clearer me.',
    avatar:
      'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
  {
    name: 'Daniel K.',
    role: 'Verified buyer',
    text: 'The Deep Sleep blend is the first thing that has actually worked for my 3am wake-ups. Genuinely life-changing.',
    avatar:
      'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
  {
    name: 'Priya S.',
    role: 'Yoga teacher',
    text: 'I love that everything is traceable. The assessment nailed exactly what I was missing.',
    avatar:
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    rating: 5,
  },
];

export type Ingredient = {
  name: string;
  benefit: string;
  image: string;
};

export const INGREDIENTS: Ingredient[] = [
  {
    name: 'Ashwagandha',
    benefit: 'Adaptogen for stress resilience',
    image:
      'https://images.pexels.com/photos/4113899/pexels-photo-4113899.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Elderberry',
    benefit: 'Antioxidant immune support',
    image:
      'https://images.pexels.com/photos/4871156/pexels-photo-4871156.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Marine Magnesium',
    benefit: 'Deep muscle & nervous system calm',
    image:
      'https://images.pexels.com/photos/1322841/pexels-photo-1322841.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    name: 'Ginger Root',
    benefit: 'Digestive & circulation support',
    image:
      'https://images.pexels.com/photos/161556/ginger-plant-asia-rhizome-161556.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export type Faq = {
  q: string;
  a: string;
};

export const FAQS: Faq[] = [
  {
    q: 'Are TerraElix supplements vegan?',
    a: 'Yes. Every capsule is 100% plant-based, gluten-free, and free from synthetic fillers, binders, or artificial dyes. Our capsules are made from pullulan, a fermented tapioca derivative.',
  },
  {
    q: 'When will I feel results?',
    a: 'Most members notice calmer energy and better sleep within the first 10–14 days. Adaptogenic benefits compound over 30–60 days of consistent daily use.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Absolutely. Subscriptions are commitment-free — pause, skip, or cancel anytime from your account dashboard, no email required.',
  },
  {
    q: 'Are your products third-party tested?',
    a: 'Every batch is tested by independent ISO-certified labs for heavy metals, microbes, and potency. Certificates of Analysis are available for every lot on request.',
  },
  {
    q: 'How does shipping work?',
    a: 'Free carbon-neutral shipping on all orders over $35. Subscriptions ship every 30 days in recyclable glass bottles with a refill pouch to reduce waste.',
  },
];

export const MARQUEE_ITEMS = [
  '100% Organic',
  'Third-Party Tested',
  'Carbon-Neutral Shipping',
  'No Synthetic Fillers',
  'Clinically Dosed',
  'Recyclable Glass',
  'Vegan & Gluten-Free',
  'Made in the USA',
];

export const STATS = [
  { value: 14, suffix: 'K+', label: 'Members optimizing daily' },
  { value: 98, suffix: '%', label: 'Report better sleep' },
  { value: 4.9, suffix: '★', label: 'Average rating', decimals: 1 },
  { value: 0, suffix: '', label: 'Synthetic fillers, ever' },
];

export const CARDS = [
  { Icon: FlaskConical, bg: 'bg-black', text: 'Experience our newly enhanced natural formula' },
  { Icon: Leaf, bg: 'bg-emerald-800', text: 'Pure organic ingredients sourced sustainably' },
  { Icon: Droplets, bg: 'bg-cyan-800', text: 'Advanced bioavailability for maximum absorption' },
  { Icon: Sun, bg: 'bg-amber-700', text: 'Clinically tested for daily energy & vitality' },
];

export const PRESS_LOGOS = [
  { name: 'Vogue', Icon: Award },
  { name: 'Forbes', Icon: Award },
  { name: 'Well+Good', Icon: Award },
  { name: 'Goop', Icon: Award },
  { name: 'mindbodygreen', Icon: Award },
];
