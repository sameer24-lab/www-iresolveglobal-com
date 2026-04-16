import { motion } from "framer-motion";
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
  <div className="relative min-h-screen">
    {/* Animated glowing circles - page-wide background */}
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] top-[20%] -left-40"
        animate={{ opacity: [0.2, 0.6, 0.2], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full bg-accent/15 blur-[100px] top-[50%] -right-32"
        animate={{ opacity: [0.3, 0.7, 0.3], scale: [1, 1.15, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full bg-primary/8 blur-[80px] top-[75%] left-1/2 -translate-x-1/2"
        animate={{ opacity: [0.15, 0.5, 0.15], scale: [0.95, 1.1, 0.95] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />
    </div>

    <div className="relative z-10">
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
    </div>
    <FloatingWhatsApp />
    <ExitIntentPopup />
  </div>
);

export default Index;
