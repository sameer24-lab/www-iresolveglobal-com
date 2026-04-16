import { motion } from "framer-motion";

const WHATSAPP_URL = "https://wa.me/917620054388?text=Hi%2C%20I%20want%20to%20grow%20my%20business%20with%20iResolve%20Global";

const CTASection = () => (
  <section className="py-24 relative overflow-hidden">
    <div className="absolute inset-0 bg-gradient-radial" />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="glass rounded-3xl p-12 md:p-16 text-center max-w-4xl mx-auto glow-primary"
      >
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
          Ready to Build Your <span className="text-gradient">Revenue Engine</span>?
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          Book a free 30-minute strategy call. No pitch, just a real conversation about scaling your business.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
      </motion.div>
    </div>
  </section>
);

export default CTASection;
