"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    number: "01",
    title: "AI & Machine Learning",
    description: "Focused on Retrieval-Augmented Generation (RAG) systems and AI Agents. Building data pipelines with pandas, numpy, scikit-learn, LightGBM, and XGBoost for time-series forecasting and quantitative modeling. Bridging statistical foundations — SVD, eigen-decomposition, Pearson correlation, bias-variance tradeoff — with production-ready inference.",
    stats: { value: "RAG", label: "current AI focus" },
    stack: ["Python", "PyTorch", "LangChain", "scikit-learn", "XGBoost", "NumPy"],
  },
  {
    number: "02",
    title: "Web3 & Blockchain",
    description: "Deep expertise in Solidity, EVM internals, and the Solana ecosystem via the Anchor framework. Building decentralized apps with Hardhat, Remix, Ethers.js, and Web3.js. Writing technical analyses on smart contract security — ABI encoding, gas optimization, storage packing, and signature recovery via ecrecover.",
    stats: { value: "Solidity", label: "primary smart contract language" },
    stack: ["Solidity", "Rust", "Anchor", "Ethers.js", "Hardhat", "Foundry"],
  },
  {
    number: "03",
    title: "MERN Stack",
    description: "Proficient in MongoDB, Express, React, and Node.js with modern deployment workflows — Next.js, TailwindCSS, and Vercel. Experienced in headless CMS architecture, real-time P2P data with Gun.js, and shipping production-grade UIs for Web3-native experiences.",
    stats: { value: "MERN", label: "core full-stack toolkit" },
    stack: ["MongoDB", "Express", "React", "Node.js", "Next.js", "TailwindCSS"],
  },
];

// Floating dot particles visualization
function ParticleVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    const COUNT = 70;
    const particles = Array.from({ length: COUNT }, (_, i) => {
      const seed = i * 1.618;
      return {
        bx: ((seed * 127.1) % 1),
        by: ((seed * 311.7) % 1),
        phase: seed * Math.PI * 2,
        speed: 0.4 + (seed % 0.4),
        radius: 1.2 + (seed % 2.2),
      };
    });

    let time = 0;
    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      particles.forEach((p) => {
        const flowX = Math.sin(time * p.speed * 0.4 + p.phase) * 38;
        const flowY = Math.cos(time * p.speed * 0.3 + p.phase * 0.7) * 24;

        const bx = p.bx * w;
        const by = p.by * h;
        const dx = p.bx - mx;
        const dy = p.by - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - dist * 2.8);

        const x = bx + flowX + influence * Math.cos(time + p.phase) * 36;
        const y = by + flowY + influence * Math.sin(time + p.phase) * 36;

        const pulse = Math.sin(time * p.speed + p.phase) * 0.5 + 0.5;
        const alpha = 0.08 + pulse * 0.18 + influence * 0.3;

        ctx.beginPath();
        ctx.arc(x, y, p.radius + pulse * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      });

      time += 0.016;
      frameRef.current = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

export function FeaturesSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const ROTATION_INTERVAL = 5000; // 5 seconds per card

  // Intersection observer for visibility
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

  // Auto-rotation with progress bar
  useEffect(() => {
    if (!isVisible || isPaused) {
      setProgress(0);
      return;
    }

    let animationFrame: number;
    let startTime: number | null = null;

    const tick = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const newProgress = Math.min((elapsed / ROTATION_INTERVAL) * 100, 100);
      setProgress(newProgress);

      if (elapsed >= ROTATION_INTERVAL) {
        setActiveFeature((prev) => (prev + 1) % features.length);
        startTime = null;
      } else {
        animationFrame = requestAnimationFrame(tick);
      }
    };

    animationFrame = requestAnimationFrame(tick);

    return () => {
      if (animationFrame) cancelAnimationFrame(animationFrame);
      setProgress(0);
    };
  }, [isVisible, isPaused, activeFeature]);

  return (
    <section
      id="features"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header - Full width with diagonal layout */}
        <div className="relative mb-24 lg:mb-32">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                <span className="w-12 h-px bg-foreground/30" />
                Capabilities
              </span>
              <h2
                className={`text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.9] transition-all duration-1000 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                What I
                <br />
                <span className="text-muted-foreground">build.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pb-4">
              <p
                className={`text-xl text-muted-foreground leading-relaxed transition-all duration-1000 delay-200 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}
              >
                Bridging traditional MERN stack development with Web3 and modern AI research. I build in public — proof-of-concept projects, deep technical tutorials, and production-grade integrations.
              </p>
            </div>
          </div>
        </div>

        {/* Stacked Carousel - cards layered on top of each other */}
        <div
          className={`relative transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Stacked cards wrapper - same height as one card */}
          <div
            className="relative w-full"
            style={{ height: "560px", perspective: "1500px" }}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {features.map((feature, index) => {
              const isActive = index === activeFeature;
              const stackOffset = features.length - 1 - index; // 2, 1, 0
              return (
                <div
                  key={feature.number}
                  onClick={() => setActiveFeature(index)}
                  className={`absolute inset-0 bg-black border overflow-hidden cursor-pointer transition-all duration-700 ease-out ${
                    isActive
                      ? "border-foreground/30 z-30"
                      : "border-foreground/10 z-20 hover:border-foreground/20"
                  }`}
                  style={{
                    transform: isActive
                      ? "translateY(0) scale(1)"
                      : `translateY(${stackOffset * 12}px) scale(${1 - stackOffset * 0.03})`,
                    opacity: isActive ? 1 : 0.5 - stackOffset * 0.15,
                    boxShadow: isActive
                      ? "0 30px 80px -20px rgba(236, 168, 214, 0.2), 0 0 0 1px rgba(236, 168, 214, 0.1)"
                      : "0 10px 40px -20px rgba(0, 0, 0, 0.5)",
                  }}
                >
                  <div className="flex flex-col lg:flex-row h-full">
                    {/* Left: text content */}
                    <div className="relative flex-1 p-8 lg:p-12 bg-black overflow-hidden">
                      {isActive && <ParticleVisualization />}
                      <div className="relative z-10 flex flex-col h-full">
                        <div className="flex items-center justify-between mb-4">
                          <span className="font-mono text-sm text-muted-foreground">
                            {feature.number}
                          </span>
                          <div className="flex items-center gap-1.5">
                            {features.map((_, i) => (
                              <span
                                key={i}
                                className={`h-1 transition-all duration-500 ${
                                  i === activeFeature
                                    ? "w-8 bg-[#eca8d6]"
                                    : "w-1.5 bg-foreground/20"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-display mt-2 mb-6">
                          {feature.title}
                        </h3>
                        <p className="text-base lg:text-lg text-muted-foreground leading-relaxed max-w-xl mb-8">
                          {feature.description}
                        </p>

                        <div className="mt-auto">
                          <span className="text-5xl lg:text-6xl font-display block">
                            {feature.stats.value}
                          </span>
                          <span className="block text-sm text-muted-foreground font-mono mt-2 mb-6">
                            {feature.stats.label}
                          </span>

                          <div className="flex flex-wrap gap-2">
                            {feature.stack.map((tech) => (
                              <span
                                key={tech}
                                className="text-xs font-mono px-3 py-1.5 border border-foreground/15 text-muted-foreground"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Navigation controls + progress bar */}
          <div className="mt-12 flex flex-col items-center gap-6">
            {/* Progress bar — fills over the rotation interval */}
            <div className="relative w-full max-w-md h-px bg-foreground/15 overflow-hidden">
              <div
                className="absolute inset-y-0 left-0 bg-[#eca8d6] transition-all duration-100 ease-linear"
                style={{ width: `${progress}%` }}
              />
            </div>

            {/* Tabs */}
            <div className="flex items-center justify-center gap-3">
              {features.map((feature, index) => (
                <button
                  key={feature.number}
                  type="button"
                  onClick={() => setActiveFeature(index)}
                  className={`group flex items-center gap-3 px-4 py-2 transition-all duration-500 ${
                    activeFeature === index
                      ? "bg-foreground text-background"
                      : "border border-foreground/15 text-muted-foreground hover:text-foreground hover:border-foreground/30"
                  }`}
                  aria-label={`Show ${feature.title}`}
                >
                  <span className="font-mono text-xs">{feature.number}</span>
                  <span className="text-sm font-medium hidden sm:inline">
                    {feature.title}
                  </span>
                </button>
              ))}
            </div>

            {/* Status hint */}
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground">
              <span
                className={`w-1.5 h-1.5 rounded-full transition-colors ${
                  isPaused ? "bg-amber-400" : "bg-[#eca8d6] animate-pulse"
                }`}
              />
              {isPaused ? "Paused · hover to resume" : "Auto-rotating · hover to pause"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
