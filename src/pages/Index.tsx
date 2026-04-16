import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SocialProofStrip from "@/components/SocialProofStrip";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";
import ComparisonSection from "@/components/ComparisonSection";
import ProcessSection from "@/components/ProcessSection";
import CTASection from "@/components/CTASection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ExitIntentPopup from "@/components/ExitIntentPopup";

const Index = () => (
  <div className="min-h-screen">
    <Header />
    <HeroSection />
    <SocialProofStrip />
    <AboutSection />
    <ServicesSection />
    <WhyChooseUsSection />
    <ComparisonSection />
    <ProcessSection />
    <CTASection />
    <ContactSection />
    <Footer />
    <FloatingWhatsApp />
    <ExitIntentPopup />
  </div>
);

export default Index;
