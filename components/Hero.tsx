import Image from "next/image";
import { Terminal, Cpu, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <div className="relative z-10 flex flex-col items-center text-center px-4 md:px-16 max-w-4xl mx-auto">
      {/* Logo Section */}
      <div className="mb-8 md:mb-12 transition-all">
        <Image
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBU1Pv9T7kUSPHHIWmrGYPdxuhjRZvk4m2dnSZGHTbAMMVRGlUKxGNYi-gyFCFoqT2euoIrqYy8gX63IsEnUxBVWTfOJLAxKO0-6TFY-OZooji7hHj6ya1A4aVIdbF11myIghTTVInrur6fb3-qI5oe2-VwkFnYWiRyNRMaNt3pHlbMU7vF0E8V74P4jbtL46BwIs1WJfxDNcvZcCHs2GTU1AG2RSa9PQgnAAaEyIujQ3Gu6ArPnL9FThf4xT9dZFEZAA2TX38uuw0"
          alt="Konventiv Logo"
          width={280}
          height={280}
          priority
          className="h-40 md:h-56 w-auto object-contain drop-shadow-[0_0_35px_rgba(98,214,232,0.35)] hover:scale-105 transition-bezier"
        />
      </div>

      {/* Headline Section */}
      <h1 className="font-sora text-3xl md:text-5xl lg:text-6xl text-on-background font-bold mb-6 leading-tight tracking-tight max-w-3xl">
        Die Zukunft der Softwareentwicklung –{" "}
        <span className="text-primary italic">getrieben durch KI.</span>
      </h1>

      <p className="font-geist text-base md:text-lg text-on-surface-variant max-w-2xl mb-10 md:mb-14 leading-relaxed">
        Konventiv entwickelt innovative, intelligente Lösungen für die digitale Welt von morgen. Wir bereiten gerade unseren offiziellen Launch vor.
      </p>

      {/* Tech Badges */}
      <div className="mt-8 flex flex-wrap justify-center gap-3 opacity-60">
        <div className="flex items-center gap-1.5 px-3 py-1 border border-outline-variant/60 rounded-full bg-surface-container-low/40">
          <Terminal size={14} className="text-primary" />
          <span className="font-mono text-[11px]">Next-Gen Architecture</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 border border-outline-variant/60 rounded-full bg-surface-container-low/40">
          <Cpu size={14} className="text-secondary" />
          <span className="font-mono text-[11px]">Neural Optimization</span>
        </div>
        <div className="flex items-center gap-1.5 px-3 py-1 border border-outline-variant/60 rounded-full bg-surface-container-low/40">
          <Sparkles size={14} className="text-tertiary" />
          <span className="font-mono text-[11px]">Intelligent Design</span>
        </div>
      </div>
    </div>
  );
}
