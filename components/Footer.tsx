export function Footer() {
  return (
    <footer className="w-full py-12 mt-16 bg-surface-container-lowest border-t border-outline-variant/20 flex flex-col md:flex-row justify-between items-center px-6 md:px-16 gap-6 z-10 relative">
      <div className="flex flex-col gap-1 items-center md:items-start">
        <div className="font-sora text-lg font-bold text-primary tracking-tight">
          KONVENTIV
        </div>
        <p className="font-mono text-[11px] text-on-surface-variant opacity-80">
          © {new Date().getFullYear()} Konventiv AI. Architecting the Digital Future.
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-6">
        <a
          href="#"
          className="font-mono text-xs text-on-surface-variant hover:text-secondary transition-colors"
        >
          Privacy Policy
        </a>
        <a
          href="#"
          className="font-mono text-xs text-on-surface-variant hover:text-secondary transition-colors"
        >
          Terms of Service
        </a>
        <a
          href="#"
          className="font-mono text-xs text-on-surface-variant hover:text-secondary transition-colors"
        >
          Contact
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-on-surface-variant hover:text-secondary transition-colors"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-on-surface-variant hover:text-secondary transition-colors"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
