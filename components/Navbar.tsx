"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/40 backdrop-blur-xl border-b border-outline-variant/30 flex justify-between items-center px-4 md:px-16 py-4 max-w-full shadow-sm shadow-secondary/5 transition-all duration-300 ease-in-out">
      <div className="font-sora text-xl md:text-2xl font-bold tracking-tighter text-primary">
        KONVENTIV
      </div>

      <div className="hidden md:flex gap-6 items-center">
        <a
          href="#about"
          className="font-mono text-xs text-on-surface-variant hover:text-primary transition-colors py-1"
        >
          About
        </a>
        <a
          href="#innovation"
          className="font-mono text-xs text-on-surface-variant hover:text-primary transition-colors py-1"
        >
          Innovation
        </a>
        <a
          href="#solutions"
          className="font-mono text-xs text-on-surface-variant hover:text-primary transition-colors py-1"
        >
          Solutions
        </a>
        <a
          href="#subscribe"
          className="ml-4 px-6 py-2 primary-gradient rounded-lg text-on-primary font-mono text-xs font-bold hover:scale-105 transition-bezier shadow-lg shadow-primary/20"
        >
          Get Notified
        </a>
      </div>

      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="md:hidden text-primary p-2 focus:outline-none"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-surface-container-low/95 backdrop-blur-2xl border-b border-outline-variant/30 flex flex-col p-6 gap-4 md:hidden">
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="font-mono text-sm text-on-surface-variant hover:text-primary py-2"
          >
            About
          </a>
          <a
            href="#innovation"
            onClick={() => setMobileMenuOpen(false)}
            className="font-mono text-sm text-on-surface-variant hover:text-primary py-2"
          >
            Innovation
          </a>
          <a
            href="#solutions"
            onClick={() => setMobileMenuOpen(false)}
            className="font-mono text-sm text-on-surface-variant hover:text-primary py-2"
          >
            Solutions
          </a>
          <a
            href="#subscribe"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 px-6 py-3 primary-gradient rounded-lg text-on-primary font-mono text-xs font-bold text-center"
          >
            Get Notified
          </a>
        </div>
      )}
    </nav>
  );
}
