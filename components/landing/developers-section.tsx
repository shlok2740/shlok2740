"use client";

import { useState, useEffect, useRef } from "react";

const features = [
  {
    title: "EVM internals",
    description: "ecrecover, Ripemd160, gas packing, and DELEGATECALL patterns."
  },
  {
    title: "Mathematical foundations",
    description: "Linear algebra (SVD, eigen), statistics, and the bias-variance tradeoff."
  },
  {
    title: "Multi-chain reach",
    description: "Solidity for EVM, Anchor for Solana, Ethers.js everywhere."
  },
  {
    title: "Production pipelines",
    description: "Time-series CV, leakage-safe training, and Sharpe-aware evaluation."
  },
];

export function DevelopersSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="developers" ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">

      {/* Image — absolute, bottom-right, behind all content */}
      <div
        className={`absolute bottom-0 right-0 w-[55%] h-[85%] pointer-events-none transition-all duration-1000 delay-300 ${isVisible ? "opacity-100" : "opacity-0"
          }`}
      >
        <img
          src="/images/developers.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-left-top"
        />
        {/* Fade left edge */}
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/60 to-transparent" />
        {/* Fade top edge */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-transparent" />
      </div>

      {/* All text content sits on top */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header — Full width */}
        <div
          className={`mb-16 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Writing & research
          </span>
          <h2 className="text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.9]">
            Code it, then
            <br />
            <span className="text-muted-foreground">write it up.</span>
          </h2>
        </div>

        {/* Description + Features — left half only */}
        <div
          className={`max-w-[50%] transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
        >
          <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-md">
            I publish deep-dive articles on the math and mechanics behind what I build — Solidity internals, EVM gas optimization, statistical foundations of ML, and the engineering choices that ship to mainnet.
          </p>
          <div className="grid grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`transition-all duration-500 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                style={{ transitionDelay: `${index * 50 + 200}ms` }}
              >
                <h3 className="font-medium mb-1">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
