"use client";

import { useState, useEffect } from "react";
import { ShieldCheck, Cookie, X } from "lucide-react";

export function CookieBanner() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("konventiv_cookie_consent");
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("konventiv_cookie_consent", "accepted");
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem("konventiv_cookie_consent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-4 right-4 left-4 md:left-auto md:max-w-md z-50 animate-fade-in">
      <div className="glass-card p-5 rounded-xl glow-ambient flex flex-col gap-3 text-on-surface border border-outline-variant/40 shadow-2xl">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2 text-primary font-sora font-semibold text-sm">
            <Cookie size={18} className="shrink-0" />
            <span>Datenschutz & Performance</span>
          </div>
          <button
            onClick={handleDecline}
            className="text-on-surface-variant hover:text-on-surface transition-colors p-1"
            aria-label="Schließen"
          >
            <X size={16} />
          </button>
        </div>

        <p className="font-geist text-xs text-on-surface-variant leading-relaxed">
          Wir nutzen anonymisierte Web Analytics & Speed Insights, um die Ladezeiten und Nutzung unserer Website fortlaufend zu optimieren.
        </p>

        <div className="flex items-center justify-end gap-2 pt-2 border-t border-outline-variant/20">
          <button
            onClick={handleDecline}
            className="px-3 py-1.5 font-mono text-[11px] text-on-surface-variant hover:text-on-surface transition-colors rounded-md"
          >
            Nur notwendige
          </button>
          <button
            onClick={handleAccept}
            className="primary-gradient px-4 py-1.5 rounded-md font-mono text-[11px] font-bold text-on-primary hover:brightness-110 transition-bezier shadow-md flex items-center gap-1.5"
          >
            <ShieldCheck size={13} />
            <span>Akzeptieren</span>
          </button>
        </div>
      </div>
    </div>
  );
}
