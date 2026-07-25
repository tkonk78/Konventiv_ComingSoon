import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { NewsletterCard } from "@/components/NewsletterCard";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-background">
      <Navbar />

      <main className="relative min-h-screen flex flex-col items-center justify-center pt-28 pb-16 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 grid-pattern pointer-events-none"></div>
        <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[140px] pointer-events-none"></div>

        <div className="relative z-10 flex flex-col items-center gap-12 w-full px-4">
          <Hero />
          <NewsletterCard />
        </div>
      </main>

      <Footer />
    </div>
  );
}
