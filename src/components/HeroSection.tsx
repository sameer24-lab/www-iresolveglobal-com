import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";
import heroBgVideo from "@/assets/hero-bg-video.mp4.asset.json";

const WHATSAPP_URL = "https://wa.me/917620054388?text=Hi%2C%20I%20want%20to%20grow%20my%20business%20with%20iResolve%20Global";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={heroBgVideo.url}
      />
      <div className="absolute inset-0 bg-background/75 z-0" />
      <div className="absolute inset-0 bg-gradient-radial z-0" />

      <div className="relative z-10 container mx-auto px-4 text-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-primary border border-primary/30 bg-primary/5 mb-6">
            EXECUTION-FIRST BUSINESS PARTNER
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            We Build Revenue Engines
            <br />
            <span className="text-gradient">That Scale Your Business</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            500+ Leads/Month · 3× Pipeline Growth · 60% Cost Savings
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#contact"
              className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5"
            >
              Book Free Strategy Call
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg border border-primary/30 text-primary font-bold text-lg hover:bg-primary/10 transition-all hover:-translate-y-0.5"
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { end: 500, suffix: "+", label: "Leads/Month" },
              { end: 3, suffix: "×", label: "Pipeline Growth" },
              { end: 60, suffix: "%", label: "Cost Savings" },
              { end: 2, suffix: " Weeks", label: "Team Ready" },
            ].map((m) => (
              <div key={m.label} className="glass rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-heading font-bold text-primary">
                  <AnimatedCounter end={m.end} suffix={m.suffix} />
                </div>
                <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
