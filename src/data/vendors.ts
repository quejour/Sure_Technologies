export type Vendor = {
  id: string;
  name: string;
  hero: string;     // hero img
  logo: string;     // small logo img
  tagline: string;
  bullets: string[];
  site: string;
};

import c4Hero  from '../assets/hero-control4.jpg';
import c4Logo  from '../assets/logo-control4.png';
import savHero from '../assets/hero-savant.jpg';
import savLogo from '../assets/logo-savant.png';
import creHero from '../assets/hero-crestron.jpg';
import creLogo from '../assets/logo-crestron.png';

export const vendors: Vendor[] = [
  {
    id: 'control4',
    name: 'Control4',
    hero:  c4Hero,
    logo:  c4Logo,
    tagline: 'One-app control for your entire house',
    bullets: [
      'Whole-home scenes & voice shortcuts',          // :contentReference[oaicite:0]{index=0}
      'Native iOS & Android apps',                    // :contentReference[oaicite:1]{index=1}
      'Smart lighting, AV, security & climate',       // :contentReference[oaicite:2]{index=2}
    ],
    site: 'https://www.control4.com',
  },
  {
    id: 'savant',
    name: 'Savant',
    hero:  savHero,
    logo:  savLogo,
    tagline: 'Premium, personalised smart-home living',
    bullets: [
      'Single-app control for lighting, AV & security',   // :contentReference[oaicite:3]{index=3}
      'Savant Power backup keeps you running off-grid',    // :contentReference[oaicite:4]{index=4}
      'Elegant remotes & touchscreen hubs',               // :contentReference[oaicite:5]{index=5}
    ],
    site: 'https://www.savant.com',
  },
  {
    id: 'crestron',
    name: 'Crestron',
    hero:  creHero,
    logo:  creLogo,
    tagline: 'The flagship platform for bespoke luxury homes',
    bullets: [
      'OS 4 with voice, shortcuts, circadian lighting',    // :contentReference[oaicite:6]{index=6}
      'Lighting, shading, audio & wellness scenes',        // :contentReference[oaicite:7]{index=7}
      'Integrator-grade customisation',
    ],
    site: 'https://www.crestron.com',
  },
];
