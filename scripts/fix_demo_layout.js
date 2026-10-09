const fs = require('fs');
const path = require('path');

// 1. Fix broken unicode characters in lib/utils.ts
let utilsContent = fs.readFileSync('lib/utils.ts', 'utf8');
utilsContent = utilsContent.replace(//g, '•');
fs.writeFileSync('lib/utils.ts', utilsContent);

// 2. Fix HeroParallax card overlap & dark background contrast
let parallaxContent = fs.readFileSync('components/ui/hero-parallax.tsx', 'utf8');

// Replace broken unicode characters
parallaxContent = parallaxContent.replace(//g, '•');
parallaxContent = parallaxContent.replace(/\?/g, '?');

// Adjust translateY from [-700, 200] to [0, 300] to prevent card overlap on header
parallaxContent = parallaxContent.replace('[-700, 200]', '[0, 300]');

// Ensure dark background and full z-index separation
parallaxContent = parallaxContent.replace(
  'className="min-h-screen md:h-[300vh] py-12 md:py-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-[#07080b]"',
  'className="min-h-screen md:h-[260vh] py-12 md:py-24 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-[#05070a] text-white"'
);

fs.writeFileSync('components/ui/hero-parallax.tsx', parallaxContent);

// 3. Fix Navigation button truncation
let navContent = fs.readFileSync('components/Navigation.tsx', 'utf8');
navContent = navContent.replace(
  'className="hidden sm:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase text-white bg-brand-orange hover:bg-amber-500 transition-all duration-300 transform hover:scale-105 box-glow-orange shadow-2xl"',
  'className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-bold tracking-wider uppercase text-white bg-brand-orange hover:bg-amber-500 transition-all duration-300 transform hover:scale-105 box-glow-orange shadow-2xl whitespace-nowrap flex-shrink-0"'
);
fs.writeFileSync('components/Navigation.tsx', navContent);

console.log('Successfully fixed demo layout, card overlap, contrast, unicode glyphs, and navigation truncation!');
