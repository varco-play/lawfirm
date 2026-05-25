import { AboutFirm } from "@/components/AboutFirm";
import { AmbientMotion } from "@/components/AmbientMotion";
import { ContactSection } from "@/components/ContactSection";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { PracticeAreas } from "@/components/PracticeAreas";
import { Preloader } from "@/components/Preloader";
import { ProcessSection } from "@/components/ProcessSection";
import { ResultsSection } from "@/components/ResultsSection";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { StickyMobileCTA } from "@/components/StickyMobileCTA";
import { Testimonials } from "@/components/Testimonials";
import { TrustBar } from "@/components/TrustBar";
import { WhyChooseUs } from "@/components/WhyChooseUs";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <Preloader />
      <AmbientMotion />
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <WhyChooseUs />
        <PracticeAreas />
        <AboutFirm />
        <ProcessSection />
        <ResultsSection />
        <Testimonials />
        <FAQ />
        <ContactSection />
      </main>
      <Footer />
      <StickyMobileCTA />
    </SmoothScrollProvider>
  );
}
