"use client";

import { useEffect, useState, useRef } from "react";

const logos: Record<string, React.ReactNode> = {
  // AI & Machine Learning
  Python: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 2c-1.78 0-3.51.1-5.02.31C4.86 2.65 3.5 4.2 3.5 5.32v2.93h6.5v1H2.05C.93 9.25 0 10.66 0 12.18v3.5C0 17.04.93 18.5 2.05 18.5H4.5v-2.84c0-1.71 1.39-3.16 3.11-3.16h6.39c1.45 0 2.62-1.18 2.62-2.62V5.32c0-1.45-1.21-2.66-2.65-2.95C12.55 2.1 11.27 2 12 2zM7.5 4.05a.95.95 0 1 1 0 1.9.95.95 0 0 1 0-1.9zM12 22c1.78 0 3.51-.1 5.02-.31 2.12-.34 3.48-1.89 3.48-3.01v-2.93H14v-1h7.45c1.12 0 2.05-1.41 2.05-2.93v-3.5c0-1.36-.93-2.82-2.05-2.82H19.5v2.84c0 1.71-1.39 3.16-3.11 3.16h-6.39c-1.45 0-2.62 1.18-2.62 2.62v4.56c0 1.45 1.21 2.66 2.65 2.95 1.42.27 2.7.37 1.97.37zm4.5-2.05a.95.95 0 1 1 0-1.9.95.95 0 0 1 0 1.9z" />
    </svg>
  ),
  PyTorch: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 2c.5 0 1 .4 1 1v.6c1.8.4 3.4 1.5 4.4 3 .4.6.7 1.3.9 2 .1.5-.2 1-.7 1.1-.5.1-1-.2-1.1-.7-.4-1.3-1.4-2.4-2.7-2.9.4 1 .2 2.1-.5 2.9-.7.8-1.7 1.2-2.7 1.2-1 0-2-.4-2.7-1.2-.7-.8-.9-1.9-.5-2.9-1.3.5-2.3 1.6-2.7 2.9-.1.5-.6.8-1.1.7-.5-.1-.8-.6-.7-1.1.2-.7.5-1.4.9-2 1-1.5 2.6-2.6 4.4-3V3c0-.6.4-1 1-1zm-2.5 6.4c-.4 0-.7.3-.7.7s.3.7.7.7.7-.3.7-.7-.3-.7-.7-.7zm5 0c-.4 0-.7.3-.7.7s.3.7.7.7.7-.3.7-.7-.3-.7-.7-.7zM8 12.5c-.4 0-.7.3-.7.7v2c0 2.5 2 4.5 4.5 4.5h.4c2.5 0 4.5-2 4.5-4.5v-2c0-.4-.3-.7-.7-.7s-.7.3-.7.7v2c0 1.7-1.4 3.1-3.1 3.1h-.4c-1.7 0-3.1-1.4-3.1-3.1v-2c0-.4-.3-.7-.7-.7zm-1 0c-.4 0-.7.3-.7.7s.3.7.7.7.7-.3.7-.7-.3-.7-.7-.7zm10 0c-.4 0-.7.3-.7.7s.3.7.7.7.7-.3.7-.7-.3-.7-.7-.7z" />
    </svg>
  ),
  LangChain: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M5 6.5C3.6 6.5 2.5 7.6 2.5 9s1.1 2.5 2.5 2.5h.5v-1H5c-.8 0-1.5-.7-1.5-1.5S4.2 7.5 5 7.5h.5v-1H5zm14 0h-.5v1H19c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-.5v1h.5c1.4 0 2.5-1.1 2.5-2.5S20.4 6.5 19 6.5zm-2 0H7v1h10v-1zm0 4H7v1h10v-1zm2 4c-1.4 0-2.5 1.1-2.5 2.5S17.6 19.5 19 19.5h.5v-1H19c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h.5v-1H19zM5 14.5c-1.4 0-2.5 1.1-2.5 2.5S3.6 19.5 5 19.5h.5v-1H5c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5h.5v-1H5zm14 0h-.5v1c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5v1c1.4 0 2.5-1.1 2.5-2.5s-1.1-2.5-2.5-2.5zm-2 0H7v1h10v-1z" />
    </svg>
  ),
  XGBoost: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 2L4 7v4l-2 1v3l2 1v3l8 5 8-5v-3l2-1v-3l-2-1V7L12 2zm0 2.3l6 3.5v3.4l-6 3.4-6-3.4V7.8l6-3.5zm-1 4.2v1.5h-3v1.5h3V13h-2v1.5h2c0 1.4 1.1 2.5 2.5 2.5h1.5V15h-1.5c-.6 0-1-.4-1-1V13h2.5v-1.5H12v-1h3.5V9H12V8.5h-1z" />
    </svg>
  ),

  // Web3 & Blockchain
  Solidity: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 1.5L2.5 7v10L12 22.5 21.5 17V7L12 1.5zm0 2.31l7.5 4.33v8.71L12 21.18l-7.5-4.33V8.14L12 3.81zM12 6L6 9.5v5L12 18l6-3.5v-5L12 6zm0 1.94l3.7 2.13v3.86L12 16.06l-3.7-2.13v-3.86L12 7.94z" />
    </svg>
  ),
  Anchor: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 2a3 3 0 0 0-3 3 3 3 0 0 0 2 2.83V11H8v2h3v6.06A7 7 0 0 1 5.94 14H8v-2H4v4h.06A9 9 0 0 0 12 21.91 9 9 0 0 0 19.94 16H20v-4h-4v2h2.06A7 7 0 0 1 13 19.06V13h3v-2h-3V7.83A3 3 0 0 0 15 5a3 3 0 0 0-3-3zm0 2a1 1 0 0 1 1 1 1 1 0 0 1-1 1 1 1 0 0 1-1-1 1 1 0 0 1 1-1z" />
    </svg>
  ),
  Hardhat: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M3 15a9 9 0 0 1 18 0v2H3v-2zm1.5.5h15v.5h-15v-.5zm.62-1.43l1.2-1.93a6.5 6.5 0 0 1 11.36 0l1.2 1.93H5.12zM7 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm10 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zM8.5 18h7v1.5h-7V18z" />
    </svg>
  ),
  "Ethers.js": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M12 1.6L4.5 6v12L12 22.4 19.5 18V6L12 1.6zM12 4l5.5 3.2v9.6L12 20l-5.5-3.2V7.2L12 4zM8 9v6l1.5.9V11l3-1.7v5.4L11 13.5v-1.4l-1.5-.9V14l3 1.7 1.5-.9V11l-1.5-.9L8 9zm6 1.4V14l1.5.9V11.4L14 12.4z" />
    </svg>
  ),

  // Full-Stack
  "Next.js": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M11.572 0c-.176 0-.31.001-.358.007a19.76 19.76 0 0 1-.364.033C7.443.346 4.25 2.185 2.228 5.012a11.875 11.875 0 0 0-2.119 5.243c-.096.659-.108.854-.108 1.747s.012 1.089.108 1.748c.652 4.506 3.86 8.292 8.209 9.695.779.25 1.6.422 2.534.525.363.04 1.935.04 2.299 0 1.611-.178 2.977-.577 4.323-1.264.207-.106.247-.134.219-.158-.02-.013-.9-1.193-1.955-2.62l-1.919-2.592-2.404-3.558a338.739 338.739 0 0 0-2.422-3.556c-.009-.002-.018 1.579-.023 3.51-.007 3.38-.01 3.515-.052 3.595a.426.426 0 0 1-.206.214c-.075.037-.14.044-.495.044H7.81l-.108-.068a.438.438 0 0 1-.157-.171l-.05-.106.006-4.703.007-4.705.072-.092a.645.645 0 0 1 .174-.143c.096-.047.134-.051.54-.051.478 0 .558.018.682.154.035.038 1.337 1.999 2.895 4.361a10760.433 10760.433 0 0 0 4.735 7.17l1.9 2.879.096-.063a12.317 12.317 0 0 0 2.466-2.16 11.944 11.944 0 0 0 2.824-6.134c.096-.66.108-.854.108-1.748 0-.893-.012-1.088-.108-1.747-.652-4.506-3.859-8.292-8.208-9.695a12.597 12.597 0 0 0-2.499-.523A33.119 33.119 0 0 0 11.573 0zm4.069 7.217c.347 0 .408.005.486.047a.473.473 0 0 1 .237.277c.018.06.023 1.365.018 4.304l-.006 4.218-.744-1.14-.746-1.14v-3.066c0-1.982.01-3.097.023-3.15a.478.478 0 0 1 .233-.296c.096-.05.13-.054.5-.054z" />
    </svg>
  ),
  React: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.958-4.888 2.622-1.78-1.664-3.542-2.622-4.888-2.622-.557 0-1.063.18-1.484.524-.61.498-.91 1.315-.91 2.288 0 .659.131 1.382.394 2.144.158.456.357.93.59 1.413-.37.111-.726.232-1.067.366-1.692.667-2.788 1.732-2.788 2.96 0 1.227 1.096 2.292 2.788 2.959.34.134.696.255 1.067.366-.233.483-.432.957-.59 1.413-.263.762-.394 1.486-.394 2.144 0 .974.3 1.79.91 2.289.42.344.927.524 1.484.524 1.346 0 3.107-.958 4.888-2.624 1.78 1.666 3.542 2.624 4.888 2.624.557 0 1.063-.18 1.484-.524.61-.499.91-1.315.91-2.289 0-.658-.131-1.382-.394-2.144-.158-.456-.357-.93-.59-1.413.37-.111.726-.232 1.067-.366 1.692-.667 2.788-1.732 2.788-2.959 0-1.228-1.096-2.293-2.788-2.96-.34-.134-.696-.255-1.067-.366.233-.483.432-.957.59-1.413.263-.762.394-1.486.394-2.144 0-.973-.3-1.79-.91-2.288-.42-.344-.927-.524-1.484-.524zm-5.223 4.063c-.32.43-.622.876-.903 1.328a27.6 27.6 0 0 0-1.396-.064c-.467 0-.927.014-1.376.04.22-.49.488-.964.798-1.41.434-.624.879-1.114 1.32-1.464.193-.155.395-.272.59-.342a1.69 1.69 0 0 1 .642-.103c.232 0 .45.038.65.114.197.075.379.181.535.323.318.34.616.764.886 1.262.227.42.42.864.554 1.31-.49.057-.99.097-1.495.117-.43.018-.857.022-1.276.022a17.5 17.5 0 0 1-1.029-.06c.13-.293.297-.59.499-.893zm-1.78 5.79c.41.61.86 1.19 1.34 1.73.4.45.81.84 1.22 1.16.31.25.62.43.93.54.21.07.43.1.66.1.22 0 .44-.03.65-.1.3-.11.61-.29.92-.54.41-.32.82-.71 1.22-1.16.48-.54.93-1.12 1.34-1.73a14.7 14.7 0 0 0-2.36-1.13 15.5 15.5 0 0 0-2.22-.65 16.6 16.6 0 0 0-2.22.65c-.83.27-1.62.66-2.36 1.13zm-3.05-3.16c-.43-.09-.84-.18-1.23-.27-.32-.07-.62-.16-.88-.27-.32-.13-.55-.29-.66-.5-.13-.22-.19-.5-.19-.83 0-.33.06-.61.19-.83.11-.21.34-.37.66-.5.26-.11.56-.2.88-.27.39-.09.8-.18 1.23-.27.28.49.61.96.99 1.41a14.2 14.2 0 0 0-.99 1.41zm.27 1.94c.43-.09.85-.18 1.27-.27.27-.06.55-.12.83-.18a18.6 18.6 0 0 1-1.07 1.36c-.42-.49-.79-.97-1.07-1.36.13-.02.27-.04.41-.06.18-.02.36-.05.55-.08zm-1.07 3.06c.32.5.66.97 1.02 1.41-.43.09-.84.18-1.23.27-.32.07-.62.16-.88.27-.32.13-.55.29-.66.5-.13.22-.19.5-.19.83 0 .33.06.61.19.83.11.21.34.37.66.5.26.11.56.2.88.27.39.09.8.18 1.23.27-.28-.49-.61-.96-.99-1.41.38-.45.71-.92.99-1.41zm6.96 6.61c-.32-.43-.62-.88-.9-1.33.18 0 .36-.01.54-.02.41-.02.83-.05 1.24-.1.43-.05.86-.12 1.28-.21-.13.27-.27.53-.42.78-.27.45-.56.84-.88 1.16-.22.22-.46.4-.7.51-.18.08-.37.12-.58.12-.21 0-.4-.04-.58-.12-.24-.11-.48-.29-.7-.51-.32-.32-.61-.71-.88-1.16-.15-.25-.29-.51-.42-.78.42.09.85.16 1.28.21.41.05.83.08 1.24.1.18.01.36.02.54.02-.28.45-.58.9-.9 1.33z" />
    </svg>
  ),
  "Node.js": (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M11.5 1.5L3 6.25v11.5L11.5 22.5l8.5-4.75V6.25L11.5 1.5zm0 2.31l6.5 3.62v8.94L11.5 19.99l-6.5-3.62V7.43l6.5-3.62zM8 8.5v6.5l1 .58v-5.5l1.5.87v2.4l-1 .58v-1.95l-1-.58V14l3 1.74 1-.58V9.5L8 8.5zm6 0v6.5l1 .58V9.07l-1-.57zm2 1.16v1l1 .58v-1l-1-.58z" />
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
      <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.49-7.55a.485.485 0 0 0-.502 0c-.235.137-3.226 1.97-4.49 7.55C6.97 13.092 7.5 16.032 8.5 18.087c.97 1.987 2.157 3.13 3.262 3.842a.5.5 0 0 0 .475 0c1.105-.713 2.292-1.855 3.262-3.842 1-2.055 1.53-4.995 1.694-8.532zM12 19.5c-1.5-1.5-3-4-3-7.5 0-3 1.5-6 3-8.5 1.5 2.5 3 5.5 3 8.5 0 3.5-1.5 6-3 7.5zm0-15.42c-1.34 2.16-2.5 4.94-2.5 7.92 0 2.86 1.16 4.95 2.5 6.42 1.34-1.47 2.5-3.56 2.5-6.42 0-2.98-1.16-5.76-2.5-7.92z" />
    </svg>
  ),
};

const integrations = [
  // AI & Machine Learning
  { name: "Python", category: "AI · Language", group: "ai" },
  { name: "PyTorch", category: "AI · Framework", group: "ai" },
  { name: "LangChain", category: "AI · RAG", group: "ai" },
  { name: "XGBoost", category: "AI · Models", group: "ai" },
  // Web3 & Blockchain
  { name: "Solidity", category: "Web3 · EVM", group: "web3" },
  { name: "Anchor", category: "Web3 · Solana", group: "web3" },
  { name: "Hardhat", category: "Web3 · Toolchain", group: "web3" },
  { name: "Ethers.js", category: "Web3 · SDK", group: "web3" },
  // Full-Stack
  { name: "Next.js", category: "FS · Framework", group: "fs" },
  { name: "React", category: "FS · Library", group: "fs" },
  { name: "Node.js", category: "FS · Runtime", group: "fs" },
  { name: "MongoDB", category: "FS · Database", group: "fs" },
];

const groupLabels: Record<string, { label: string; subtitle: string }> = {
  ai: { label: "AI & Machine Learning", subtitle: "RAG agents, time-series, statistical modeling" },
  web3: { label: "Web3 & Blockchain", subtitle: "EVM, Solana, decentralized primitives" },
  fs: { label: "Full-Stack Development", subtitle: "MERN, Next.js, production deployments" },
};

export function IntegrationsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState<{ x: number; y: number } | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

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

  const groupedIntegrations = (integrations as Array<typeof integrations[number]>).reduce((acc, item) => {
    if (!acc[item.group]) acc[item.group] = [];
    acc[item.group]!.push(item);
    return acc;
  }, {} as Record<string, typeof integrations>);

  return (
    <section id="integrations" ref={sectionRef} className="relative overflow-hidden">

      {/* Header — centré verticalement sur l'image */}
      <div className="relative z-10 pt-32 lg:pt-40 text-center">
        <span className={`inline-flex items-center gap-4 text-sm font-mono text-muted-foreground mb-8 transition-all duration-700 justify-center ${isVisible ? "opacity-100" : "opacity-0"
          }`}>
          <span className="w-12 h-px bg-foreground/20" />
          Tech stack
          <span className="w-12 h-px bg-foreground/20" />
        </span>

        <h2 className={`text-6xl md:text-7xl lg:text-[128px] font-display tracking-tight leading-[0.9] transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}>
          Tools I
          <br />
          <span className="text-muted-foreground">work with.</span>
        </h2>

        <p className={`mt-8 text-xl text-muted-foreground leading-relaxed max-w-lg mx-auto transition-all duration-1000 delay-100 ${isVisible ? "opacity-100" : "opacity-0"
          }`}>
          A blend of smart contract languages, full-stack frameworks, and ML libraries — picked for what they enable, not for hype. Each tool has shipped to production in at least one public repository.
        </p>
      </div>

      {/* Full-width image */}
      <div className={`relative left-1/2 -translate-x-1/2 w-screen -mt-16 transition-all duration-1000 delay-200 ${isVisible ? "opacity-100" : "opacity-0"
        }`}>
        <img
          src="/images/integrations.png"
          alt=""
          aria-hidden="true"
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Integration grid — remonte sur l'image avec spacing mobile approprié */}
      <div className="relative z-10 mt-0 lg:-mt-24 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Grouped sections */}
        <div className="space-y-12 mb-16">
          {(["ai", "web3", "fs"] as const).map((groupKey, groupIndex) => (
            <div key={groupKey}>
              {/* Group label */}
              <div
                className={`flex items-baseline gap-4 mb-4 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                  }`}
                style={{ transitionDelay: `${200 + groupIndex * 100}ms` }}
              >
                <span className="font-mono text-xs text-[#eca8d6]">
                  0{groupIndex + 1}
                </span>
                <h3 className="text-xl lg:text-2xl font-display">
                  {groupLabels[groupKey].label}
                </h3>
                <span className="text-xs font-mono text-muted-foreground hidden sm:inline">
                  — {groupLabels[groupKey].subtitle}
                </span>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {groupedIntegrations[groupKey]?.map((integration, index) => {
                  const globalIndex = groupIndex * 4 + index;
                  return (
                    <div
                      key={integration.name}
                      className={`group relative overflow-hidden p-6 lg:p-8 border transition-all duration-500 cursor-default ${hoveredIndex === globalIndex
                          ? "border-foreground bg-foreground/[0.04] scale-[1.02]"
                          : "border-foreground/10 hover:border-foreground/30"
                        } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                      style={{
                        transitionDelay: `${index * 60 + 300 + groupIndex * 100}ms`,
                      }}
                      onMouseEnter={(e) => {
                        setHoveredIndex(globalIndex);
                        const rect = e.currentTarget.getBoundingClientRect();
                        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                      }}
                      onMouseMove={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
                      }}
                      onMouseLeave={() => {
                        setHoveredIndex(null);
                        setMousePos(null);
                      }}
                    >
                      {/* Cursor-following halo */}
                      {hoveredIndex === globalIndex && mousePos && (
                        <span
                          aria-hidden="true"
                          className="pointer-events-none absolute inset-0 z-0"
                          style={{
                            background: `radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255,255,255,0.1) 0%, transparent 70%)`,
                          }}
                        />
                      )}
                      {/* Category tag */}
                      <span className={`absolute top-3 right-3 text-[10px] font-mono px-2 py-0.5 transition-colors ${hoveredIndex === globalIndex
                          ? "bg-foreground text-background"
                          : "bg-foreground/10 text-muted-foreground"
                        }`}>
                        {integration.category}
                      </span>

                      {/* Logo */}
                      <div className={`w-10 h-10 mb-6 flex items-center justify-center transition-colors ${hoveredIndex === globalIndex ? "text-white" : "text-foreground/60"
                        }`}>
                        {logos[integration.name]}
                      </div>

                      <span className="font-medium block">{integration.name}</span>

                      {/* Animated underline */}
                      <div className="absolute bottom-0 left-0 right-0 h-px bg-foreground/20 overflow-hidden">
                        <div className={`h-full bg-foreground transition-all duration-500 ${hoveredIndex === globalIndex ? "w-full" : "w-0"
                          }`} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom stats row */}
        <div className={`flex flex-wrap items-center justify-between gap-8 pt-12 border-t border-foreground/10 transition-all duration-1000 delay-500 pb-32 lg:pb-40 ${isVisible ? "opacity-100" : "opacity-0"
          }`}>
          <div className="flex flex-wrap gap-12">
            {[
              { value: "12", label: "Core technologies" },
              { value: "3", label: "Practice domains" },
              { value: "Multi", label: "chain support" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-3">
                <span className="text-3xl font-display">{stat.value}</span>
                <span className="text-sm text-muted-foreground">{stat.label}</span>
              </div>
            ))}
          </div>

          <a href="https://github.com/shlok2740" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 text-sm font-mono text-muted-foreground hover:text-foreground transition-colors">
            See them in action on GitHub
            <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
          </a>
        </div>
      </div>
    </section>
  );
}
