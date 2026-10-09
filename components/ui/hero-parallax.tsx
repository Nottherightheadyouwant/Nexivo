"use client";
import React, { useState, useEffect, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FlipWords } from "./flip-words";
import { Sparkles, ArrowRight, ShieldCheck, Zap, Activity } from "lucide-react";
import { NEXIVO_DETAILS } from "@/lib/utils";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
    category: string;
    metrics?: string;
  }[];
}) => {
  const [isMounted, setIsMounted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const firstRow = products.slice(0, 4);
  const secondRow = products.slice(4, 8);
  const thirdRow = products.slice(8, 12);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0, 250]),
    springConfig
  );

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0, -1000]),
    springConfig
  );

  return (
    <div
      ref={ref}
      className="min-h-screen md:h-[300vh] py-12 md:py-20 overflow-hidden antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d] bg-[#05070a] text-white"
    >
      {/* Background Ambient Radial Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] md:w-[800px] h-[400px] md:h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[400px] md:w-[500px] h-[300px] md:h-[400px] bg-indigo-500/10 blur-[140px] rounded-full pointer-events-none" />

      <Header />
      
      {isMounted && (
        <motion.div
          style={{
            rotateX,
            rotateZ,
            translateY,
            opacity,
          }}
          className="hidden md:block"
        >
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-10 mb-10">
            {firstRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={product.title}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row mb-10 space-x-10">
            {secondRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateXReverse}
                key={product.title}
              />
            ))}
          </motion.div>
          <motion.div className="flex flex-row-reverse space-x-reverse space-x-10">
            {thirdRow.map((product) => (
              <ProductCard
                product={product}
                translate={translateX}
                key={product.title}
              />
            ))}
          </motion.div>
        </motion.div>
      )}

      {/* Mobile Grid Layout Fallback */}
      <div className="block md:hidden px-4 mt-8">
        <div className="grid grid-cols-1 gap-6">
          {products.slice(0, 4).map((product) => (
            <div
              key={product.title}
              className="relative h-64 rounded-xl overflow-hidden bg-neutral-900 border border-white/10"
            >
              <Image
                src={product.thumbnail}
                alt={product.title}
                fill
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/50 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 z-10">
                <span className="text-[10px] uppercase tracking-wider text-cyan-400 font-semibold">
                  {product.category}
                </span>
                <h3 className="text-lg font-bold text-white">{product.title}</h3>
                {product.metrics && (
                  <p className="text-xs text-neutral-300 mt-1 font-medium bg-white/10 px-2 py-0.5 rounded border border-white/10 max-w-fit">
                    ? {product.metrics}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const Header = () => {
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
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
    category: string;
    metrics?: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-80 w-[24rem] md:w-[30rem] relative flex-shrink-0 rounded-2xl overflow-hidden bg-neutral-900 border border-white/10 hover:border-cyan-500/50 shadow-2xl transition-all duration-500"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl h-full w-full"
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0 group-hover/product:scale-105 transition-transform duration-700 opacity-80 group-hover/product:opacity-100"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-90 bg-gradient-to-t from-neutral-950 via-neutral-950/60 to-transparent pointer-events-none transition-opacity duration-300" />
      
      <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover/product:opacity-100 transition-opacity duration-300 pointer-events-none z-10 flex flex-col justify-end">
        <span className="text-xs uppercase tracking-wider text-cyan-400 font-semibold mb-1">
          {product.category}
        </span>
        <h2 className="text-xl font-bold text-white leading-snug">
          {product.title}
        </h2>
        {product.metrics && (
          <p className="text-xs text-neutral-300 mt-1 font-medium bg-white/10 backdrop-blur-md px-2.5 py-1 rounded-md inline-block border border-white/10 max-w-fit">
            ? {product.metrics}
          </p>
        )}
      </div>
    </motion.div>
  );
};
