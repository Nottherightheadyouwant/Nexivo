const fs = require('fs');
const path = require('path');

// 1. Update app/layout.tsx to include Cormorant Garamond & JetBrains Mono fonts
let layoutContent = fs.readFileSync('app/layout.tsx', 'utf8');
layoutContent = layoutContent.replace(
  'family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Syne:wght@700;800&display=swap',
  'family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Syne:wght@700;800&display=swap'
);
fs.writeFileSync('app/layout.tsx', layoutContent);

// 2. Update tailwind.config.ts
let tailwindConfig = fs.readFileSync('tailwind.config.ts', 'utf8');
if (!tailwindConfig.includes('serif: [')) {
  tailwindConfig = tailwindConfig.replace(
    'fontFamily: {',
    `fontFamily: {
        serif: ["Cormorant Garamond", "Playfair Display", "Georgia", "serif"],`
  );
  fs.writeFileSync('tailwind.config.ts', tailwindConfig);
}

// 3. Update Header in components/ui/hero-parallax.tsx with CollectUI Editorial Typography
let parallaxContent = fs.readFileSync('components/ui/hero-parallax.tsx', 'utf8');

const updatedHeader = `export const Header = () => {
  const flipWordsList = [
    "High-Converting",
    "Sub-Second Fast",
    "Scalable Next.js",
    "Award-Winning"
  ];

  return (
    <div className="max-w-7xl relative mx-auto py-10 md:py-24 px-4 w-full left-0 top-0 z-20">
      {/* Monospaced Technical Badge */}
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-950/40 border border-cyan-500/30 text-cyan-400 font-mono text-xs font-medium uppercase tracking-widest mb-6 backdrop-blur-md">
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
        [ DIGITAL EXPERIENCE STUDIO &bull; Q4/2026 ]
      </div>

      {/* Editorial High-Contrast Serif Headline */}
      <h1 className="text-4xl sm:text-6xl md:text-8xl font-serif text-white tracking-tight leading-[1.05] max-w-5xl font-normal">
        We Design &amp; Engineer <br />
        <span className="font-serif italic text-cyan-300 font-normal">
          <FlipWords words={flipWordsList} className="text-cyan-300 font-serif italic" />
        </span> <br />
        Digital Artifacts.
      </h1>

      <p className="max-w-2xl text-base md:text-xl mt-6 text-neutral-300 font-sans leading-relaxed tracking-wide">
        Bespoke web platforms, Next.js architectures, and editorial visual identities built for ambitious global brands.
      </p>

      {/* Action Buttons & Bracket Monospaced Tags */}
      <div className="mt-8 flex flex-wrap items-center gap-4">
        <a
          href="#audit"
          className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-mono font-medium rounded-xl group bg-gradient-to-br from-cyan-500 to-indigo-600 group-hover:from-cyan-500 group-hover:to-indigo-600 hover:text-white text-white focus:ring-4 focus:outline-none focus:ring-cyan-800 shadow-lg shadow-cyan-500/20 transition-all duration-300 active:scale-95 tracking-wider"
        >
          <span className="relative px-6 py-3.5 transition-all ease-in duration-75 bg-neutral-950/90 rounded-[10px] group-hover:bg-opacity-0 flex items-center gap-2">
            <Zap className="w-4 h-4 text-cyan-400 group-hover:text-white" />
            [ GET AUDIT ]
            <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
          </span>
        </a>

        <a
          href={NEXIVO_DETAILS.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 text-white font-mono text-sm font-medium transition-all duration-300 flex items-center gap-2 hover:border-cyan-500/40 backdrop-blur-sm tracking-wider"
        >
          <Sparkles className="w-4 h-4 text-cyan-400" />
          [ ESTIMATE PROJECT ]
        </a>
      </div>

      {/* Metrics Bar with Monospaced Labels */}
      <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl pt-8 border-t border-white/10 font-mono">
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-serif italic text-white flex items-center gap-1.5">
            0.4s <Activity className="w-4 h-4 text-cyan-400 inline" />
          </span>
          <span className="text-xs text-neutral-400 font-mono tracking-wider">[ LCP SPEED ]</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-serif italic text-white">99/100</span>
          <span className="text-xs text-neutral-400 font-mono tracking-wider">[ CORE VITALS ]</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-serif italic text-cyan-300">3.2x</span>
          <span className="text-xs text-neutral-400 font-mono tracking-wider">[ REVENUE LIFT ]</span>
        </div>
        <div className="flex flex-col">
          <span className="text-xl md:text-2xl font-serif italic text-white flex items-center gap-1">
            <ShieldCheck className="w-4 h-4 text-cyan-400 inline" /> 100%
          </span>
          <span className="text-xs text-neutral-400 font-mono tracking-wider">[ TYPESCRIPT ]</span>
        </div>
      </div>
    </div>
  );
};`;

// Replace Header in parallaxContent
parallaxContent = parallaxContent.replace(/export const Header = \(\) => {[\s\S]*?};/, updatedHeader);
fs.writeFileSync('components/ui/hero-parallax.tsx', parallaxContent);

console.log('Successfully applied CollectUI Editorial Typography to demo-nexivo!');
