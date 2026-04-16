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
      {/* Top-left — large cyan glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[150px] top-[10%] -left-48"
        style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.15), transparent 70%)" }}
        animate={{ opacity: [0.15, 0.55, 0.15], scale: [0.85, 1.15, 0.85], x: [0, 30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Mid-right — warm accent glow */}
      <motion.div
        className="absolute w-[450px] h-[450px] rounded-full blur-[130px] top-[35%] -right-24"
        style={{ background: "radial-gradient(circle, hsl(var(--accent) / 0.2), transparent 70%)" }}
        animate={{ opacity: [0.2, 0.6, 0.2], scale: [1, 1.2, 1], y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      {/* Center — subtle primary pulse */}
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full blur-[100px] top-[60%] left-[30%]"
        style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.12), transparent 70%)" }}
        animate={{ opacity: [0.1, 0.45, 0.1], scale: [0.9, 1.15, 0.9] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
      {/* Bottom-left — deep glow */}
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full blur-[140px] top-[80%] -left-20"
        style={{ background: "radial-gradient(circle, hsl(var(--primary) / 0.1), transparent 65%)" }}
        animate={{ opacity: [0.1, 0.4, 0.1], scale: [0.95, 1.1, 0.95], x: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
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
