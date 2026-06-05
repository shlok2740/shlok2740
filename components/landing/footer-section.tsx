"use client";

import { ArrowUpRight } from "lucide-react";
import { useEffect, useRef } from "react";

type FooterLink = { name: string; href: string; badge?: string; external?: boolean };

const footerLinks: Record<string, FooterLink[]> = {
  Work: [
    { name: "Capabilities", href: "#features" },
    { name: "Process", href: "#how-it-works" },
    { name: "Engagement", href: "#pricing" },
    { name: "Platforms", href: "#integrations" },
  ],
  Writing: [
    { name: "Medium", href: "https://medium.com/@shlokkumar2303", external: true },
    { name: "Hashnode", href: "https://yakuzakiawe.hashnode.dev/", external: true },
    { name: "DEV Community", href: "https://dev.to/shlok2740", external: true },
    { name: "Articles", href: "#developers" },
  ],
  Code: [
    { name: "GitHub", href: "https://github.com/shlok2740", external: true },
    { name: "Kaggle", href: "https://www.kaggle.com/shlokkumar2303", external: true },
    { name: "LeetCode", href: "https://leetcode.com/shlokkumar2303/", external: true },
    { name: "Devpost", href: "https://devpost.com/shlok2740", external: true },
  ],
  Web3: [
    { name: "DoraHacks", href: "https://dorahacks.io/hacker/yakuzakiawe", external: true },
    { name: "Contact", href: "#contact" },
    { name: "Principles", href: "#security" },
  ],
};

const socialLinks = [
  { name: "GitHub", href: "https://github.com/shlok2740", icon: "github" },
  { name: "X", href: "https://x.com/sk2740", icon: "x" },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/sk2740/", icon: "linkedin" },
  { name: "Medium", href: "https://medium.com/@shlokkumar2303", icon: "medium" },
  { name: "Kaggle", href: "https://www.kaggle.com/shlokkumar2303", icon: "kaggle" },
  { name: "Hashnode", href: "https://yakuzakiawe.hashnode.dev/", icon: "hashnode" },
  { name: "DEV", href: "https://dev.to/shlok2740", icon: "dev" },
  { name: "LeetCode", href: "https://leetcode.com/shlokkumar2303/", icon: "leetcode" },
  { name: "DoraHacks", href: "https://dorahacks.io/hacker/yakuzakiawe", icon: "dorahacks" },
  { name: "Devpost", href: "https://devpost.com/shlok2740", icon: "devpost" },
] as const;

function SocialIcon({ icon }: { icon: string }) {
  const cls = "w-4 h-4";
  switch (icon) {
    case "github":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={cls}>
          <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
        </svg>
      );
    case "x":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={cls}>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={cls}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      );
    case "medium":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={cls}>
          <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.86 0-3.38-2.88-3.38-6.42s1.51-6.42 3.38-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z" />
        </svg>
      );
    case "kaggle":
      return (
        <svg viewBox="0 0 512 512" fill="currentColor" className={cls} aria-label="Kaggle" role="img">
          <path d="M106 103c-.06.3-.3.4-.8.4h-8c-.5 0-.9-.2-1.3-.6L82.7 86l-3.7 3.5v13c0 .6-.3.9-.9.9h-6.1c-.6 0-.9-.3-.9-.9V44c0-.6.3-.9.9-.9h6.1c.6 0 .9.3.9.9v36L94.7 64.2c.4-.4.8-.6 1.2-.6h8.2c.4 0 .6.1.7.4.1.4.1.6-.1.8L88 81l17.3 21.6c.4.2.6.3.7.4z" transform="scale(5.5 5.5) translate(-40 -30)"/>
        </svg>
      );
    case "hashnode":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={cls}>
          <path d="M22.351 8.019l-6.37-6.37a5.11 5.11 0 0 0-7.225 0L2.386 8.02a5.11 5.11 0 0 0 0 7.224l6.37 6.37a5.11 5.11 0 0 0 7.225 0l6.37-6.37a5.11 5.11 0 0 0 0-7.225zm-4.412 3.253l-1.745 1.745a.6.6 0 0 1-.849 0L10.4 8.073a.6.6 0 0 0-.85 0L5.8 11.823a.6.6 0 0 1-.85 0l-1.745-1.745a.6.6 0 0 1 0-.85L8.155 4.28a.6.6 0 0 1 .85 0l4.945 4.945a.6.6 0 0 0 .85 0l4.945-4.945a.6.6 0 0 1 .85 0l1.745 1.745a.6.6 0 0 1 0 .85l-4.945 4.945a.6.6 0 0 0 0 .85z" />
        </svg>
      );
    case "dev":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={cls}>
          <path d="M7.826 10.083a.784.784 0 0 0-.468-.175.52.52 0 0 0-.457.176.716.716 0 0 0-.148.466v4.893a.752.752 0 0 0 .157.486.555.555 0 0 0 .448.183.65.65 0 0 0 .482-.183.74.74 0 0 0 .157-.486v-4.893a.63.63 0 0 0-.171-.467zm1.218 4.797a.86.86 0 0 1-.252-.658v-4.79a.958.958 0 0 1 .222-.65c.149-.174.367-.262.65-.262.272 0 .494.092.667.275a.95.95 0 0 1 .258.66v4.788c0 .262-.087.487-.262.673-.175.187-.4.281-.674.281-.273 0-.5-.09-.676-.27-.018-.022-.035-.04-.052-.06a1.812 1.812 0 0 1-.084-.087zm6.197-6.354v6.665a.776.776 0 0 1-.213.561.71.71 0 0 1-.527.21.687.687 0 0 1-.658-.21.776.776 0 0 1-.213-.561V8.526a.776.776 0 0 1 .213-.561.713.713 0 0 1 .527-.21c.207 0 .381.07.527.21a.776.776 0 0 1 .213.561zm2.244-1.121a.825.825 0 0 0-.21.587v6.31c0 .236.069.43.21.585a.713.713 0 0 0 .527.22c.21 0 .378-.073.515-.22a.811.811 0 0 0 .208-.585V7.992a.825.825 0 0 0-.205-.587.713.713 0 0 0-.518-.22.711.711 0 0 0-.527.22zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 22.594C6.05 22.594 1.219 17.763 1.219 11.812S6.05.969 12 .969c5.95 0 10.781 4.831 10.781 10.844 0 5.95-4.831 10.78-10.781 10.78z" />
        </svg>
      );
    case "leetcode":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={cls}>
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.228 1.667l4.442 4.757a1.42 1.42 0 0 0 1.991 0 1.404 1.404 0 0 0 0-1.992l-4.387-4.713a3.214 3.214 0 0 1-.659-1.299 3.266 3.266 0 0 1 .659-2.092l4.534-4.864a1.404 1.404 0 0 0 0-1.992A1.374 1.374 0 0 0 13.483 0zm-3.428 13.21a1.374 1.374 0 0 0-.961.438 1.404 1.404 0 0 0 0 1.992l2.295 2.461a1.404 1.404 0 0 0 1.992 0 1.374 1.374 0 0 0 .438-.961 1.404 1.404 0 0 0-.438-1.031l-2.295-2.461a1.404 1.404 0 0 0-1.031-.438zM20.16 14.124a1.404 1.404 0 0 0-1.992 0l-2.295 2.461a1.404 1.404 0 0 0 0 1.992 1.374 1.374 0 0 0 1.992 0l2.295-2.461a1.404 1.404 0 0 0 0-1.992z" />
        </svg>
      );
    case "dorahacks":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={cls}>
          <path d="M12 0L1 6.75v10.5L12 24l11-6.75V6.75L12 0zm0 2.51l8.7 5.34v8.3L12 21.49 3.3 16.15v-8.3L12 2.51zM8 9v6h2v-2.5h2V15h2v-2.5h2V15h2V9h-2v2.5h-2V9h-2v2.5h-2V9H8z" />
        </svg>
      );
    case "devpost":
      return (
        <svg viewBox="0 0 24 24" fill="currentColor" className={cls}>
          <path d="M6.002 1.61L0 12.004 6.002 22.39h11.996L24 12.004 17.998 1.61H6.002zm1.593 4.084h6.526c2.887 0 5.225 2.338 5.225 5.225 0 1.37-.527 2.622-1.39 3.561L23.067 18.4l-3.063 3.063-5.451-5.451H10.82l-2.391 2.391-1.357-1.357 2.391-2.391V13.59L7.071 16.04l-3.063-3.063 3.122-3.122A5.236 5.236 0 0 1 7.595 8.7c0-2.886 2.339-5.226 5.225-5.226h.32l-2.41-2.41 1.357-1.357 3.39 3.39-1.357 1.357-1.965-1.965c-.073.005-.144.005-.217.005z" />
        </svg>
      );
    default:
      return null;
  }
}

function AnimatedWaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    };
    resize();
    window.addEventListener("resize", resize);

    const animate = () => {
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      ctx.clearRect(0, 0, width, height);

      ctx.strokeStyle = "rgba(100, 200, 150, 0.3)";
      ctx.lineWidth = 1;

      for (let wave = 0; wave < 3; wave++) {
        ctx.beginPath();
        for (let x = 0; x <= width; x += 5) {
          const y =
            height * 0.5 +
            Math.sin(x * 0.01 + time + wave * 0.5) * 30 +
            Math.sin(x * 0.02 + time * 1.5 + wave) * 20;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }

      time += 0.02;
      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" />;
}

export function FooterSection() {
  return (
    <footer className="relative bg-black">
      {/* Panoramic banner image */}
      <div className="relative w-full h-[340px] md:h-[420px] overflow-hidden">
        <img
          src="/images/footer.png"
          alt="Bioluminescent landscape"
          className="w-full h-full object-cover object-center"
        />
        {/* Gradient fade to black at bottom */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
        {/* Subtle dark vignette on sides */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/40" />
      </div>

      {/* Footer content — black background, white text */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 lg:gap-8">
            {/* Brand Column */}
            <div className="col-span-2">
              <a href="#" className="inline-flex items-center gap-2 mb-6">
                <span className="text-2xl font-display text-white">SHLOK<span className="text-[#eca8d6]">.</span></span>
                <span className="text-xs text-white/40 font-mono">DEV</span>
              </a>

              <p className="text-white/50 leading-relaxed mb-8 max-w-xs text-sm">
                Web3, Blockchain & AI Engineer based in India. Building decentralized systems, AI agents, and writing about the math and mechanics behind it all.
              </p>

              {/* Social icon grid */}
              <div className="mb-6">
                <h4 className="text-xs font-mono text-white/40 mb-3 uppercase tracking-wider">Find me on</h4>
                <div className="flex flex-wrap gap-2">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.name}
                      title={link.name}
                      className="w-9 h-9 flex items-center justify-center text-white/50 hover:text-white border border-white/10 hover:border-[#eca8d6]/50 hover:bg-[#eca8d6]/5 transition-all duration-300"
                    >
                      <SocialIcon icon={link.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Link Columns */}
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-medium text-white mb-6">{title}</h3>
                <ul className="space-y-4">
                  {links.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="text-sm text-white/40 hover:text-white transition-colors inline-flex items-center gap-1.5 group"
                      >
                        {link.name}
                        {link.external && (
                          <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100 transition-opacity" />
                        )}
                        {link.badge && (
                          <span className="text-xs px-2 py-0.5 bg-white text-black rounded-full">
                            {link.badge}
                          </span>
                        )}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-white/30">
            &copy; 2025 Shlok Kumar. Built in public.
          </p>

          <div className="flex items-center gap-4 text-sm text-white/30">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#eca8d6]" />
              Currently shipping — always
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
