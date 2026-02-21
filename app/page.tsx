import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { FAQSection } from "@/components/faq-section";
import { DownloadSection } from "@/components/download-section";
import { StepsSection } from "@/components/steps-section";

export default function Page() {
  return (
    <div id="top" className="relative z-10 min-h-screen">
      <a href="#main" className="focus-ring sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-black">
        본문으로 건너뛰기
      </a>
      <Header />
      <main id="main" className="mx-auto w-full max-w-6xl px-5 pb-16 pt-8 md:px-8 md:pt-12">
        <Hero />
        <div className="my-10 gradient-divider" />
        <StepsSection />
        <div className="my-10 gradient-divider" />
        <DownloadSection />
        <div className="my-10 gradient-divider" />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
