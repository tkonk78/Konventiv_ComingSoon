"use client";

import { useState, useRef, MouseEvent, FormEvent } from "react";
import { CheckCircle2, ArrowRight, Loader2, AlertCircle } from "lucide-react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

const GOOGLE_CHAT_WEBHOOK_URL =
  process.env.NEXT_PUBLIC_GOOGLE_CHAT_WEBHOOK ||
  "https://chat.googleapis.com/v1/spaces/AAQA39W1AaQ/messages?key=AIzaSyDdI0hCZtE6vySjMm-WEfRq3CPzqKqqsHI&token=HD5WaSKseNUH4mkGFVhH5heys-PLA1eLtP1-sewA3Xs";

export function NewsletterCard() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = (y - centerY) / 30;
    const rotateY = (centerX - x) / 30;

    cardRef.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
    setIsHovered(false);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanEmail) return;

    setIsLoading(true);
    setError(null);

    try {
      // 1. Save subscriber email to Firebase Firestore
      await addDoc(collection(db, "subscribers"), {
        email: cleanEmail,
        createdAt: serverTimestamp(),
        source: "coming_soon_landingpage",
      });

      // 2. Send instant real-time notification to Google Workspace Chat
      if (GOOGLE_CHAT_WEBHOOK_URL) {
        const now = new Date().toLocaleString("de-DE", {
          timeZone: "Europe/Berlin",
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        });

        const notificationBody = {
          text: `🚀 *Neuer Newsletter-Abonnent für Konventiv!*\n\n📧 *E-Mail:* \`${cleanEmail}\` \n⏰ *Datum:* ${now} Uhr\n🌐 *Quelle:* Konventiv Coming-Soon Landingpage`,
        };

        fetch(GOOGLE_CHAT_WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json; charset=UTF-8" },
          body: JSON.stringify(notificationBody),
        }).catch((webhookErr) => {
          console.error("Google Chat Webhook Notification Error:", webhookErr);
        });
      }

      setSubmitted(true);
    } catch (err: unknown) {
      console.error("Firestore Save Error:", err);
      setError("Es gab ein Problem beim Speichern. Bitte versuchen Sie es erneut.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div
      id="subscribe"
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className={`glass-card p-6 md:p-10 rounded-xl w-full max-w-xl glow-ambient transition-bezier ${
        isHovered ? "shadow-lg shadow-primary/20" : ""
      }`}
      style={{ transformStyle: "preserve-3d" }}
    >
      <h3 className="font-sora text-xl md:text-2xl font-medium text-secondary mb-2">
        Bleiben Sie informiert
      </h3>
      <p className="font-mono text-xs text-on-surface-variant mb-6 tracking-wider">
        Erfahren Sie als Erster vom offiziellen Launch
      </p>

      {submitted ? (
        <div className="flex items-center gap-3 p-4 bg-primary/10 border border-primary/30 rounded-lg text-primary animate-fade-in">
          <CheckCircle2 size={24} className="text-primary shrink-0" />
          <span className="font-geist text-sm">
            Vielen Dank! Ihre E-Mailadresse wurde erfolgreich registriert. Wir benachrichtigen Sie zum Launch.
          </span>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full group">
          <div className="flex flex-col md:flex-row gap-3 w-full">
            <div className="relative flex-grow">
              <input
                type="email"
                required
                disabled={isLoading}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="ihre@email.de"
                className="w-full bg-surface-container-low border-b-2 border-outline-variant focus:border-transparent focus:ring-0 text-on-surface p-3 font-mono text-xs transition-all focus:outline-none placeholder:text-outline/50 rounded-t-sm disabled:opacity-50"
              />
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-primary to-secondary transition-all duration-500 group-focus-within:w-full"></div>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="primary-gradient text-on-primary px-6 py-3 rounded-lg font-mono text-xs font-bold uppercase tracking-widest hover:brightness-110 active:scale-95 transition-bezier whitespace-nowrap flex items-center justify-center gap-2 disabled:opacity-50"
            >
              {isLoading ? (
                <>
                  <Loader2 size={14} className="animate-spin" />
                  <span>Speichern...</span>
                </>
              ) : (
                <>
                  <span>Benachrichtigen</span>
                  <ArrowRight size={14} />
                </>
              )}
            </button>
          </div>

          {error && (
            <div className="flex items-center gap-2 text-xs text-error mt-2">
              <AlertCircle size={14} />
              <span>{error}</span>
            </div>
          )}
        </form>
      )}

      <div className="mt-6 flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
        <span className="font-mono text-[10px] text-on-surface-variant uppercase tracking-wider">
          AI-Engine initialisiert
        </span>
      </div>
    </div>
  );
}
