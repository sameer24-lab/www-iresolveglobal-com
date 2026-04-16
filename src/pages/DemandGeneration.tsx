import { motion } from "framer-motion";
import { Megaphone, Globe, CalendarCheck, BarChart, Layers, Zap } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CTASection from "@/components/CTASection";

const features = [
  {
    icon: Globe,
    title: "Multi-Channel Campaigns",
    description: "Orchestrated campaigns across email, LinkedIn, paid ads, and content — reaching prospects wherever they are.",
  },
  {
    icon: Megaphone,
    title: "500+ Prospects/Month",
    description: "Consistent top-of-funnel activity that keeps your pipeline full with qualified prospects every month.",
  },
  {
    icon: CalendarCheck,
    title: "Meeting Booking Systems",
    description: "Automated scheduling and follow-up systems that convert interest into booked meetings with decision-makers.",
  },
  {
    icon: BarChart,
    title: "Campaign Analytics",
    description: "Real-time dashboards tracking opens, replies, meetings, and revenue attribution across every channel.",
  },
  {
    icon: Layers,
    title: "Content & Messaging",
    description: "Compelling copy, value propositions, and messaging frameworks tailored to your ICP and buyer journey.",
  },
  {
    icon: Zap,
    title: "Marketing Automation",
    description: "Set up nurture sequences, retargeting, and trigger-based workflows that work while you sleep.",
  },
];

const results = [
  { metric: "500+", label: "Prospects/Month" },
  { metric: "3×", label: "Pipeline Growth" },
  { metric: "45%", label: "Open Rates" },
  { metric: "8+", label: "Channels Used" },
];

const DemandGeneration = () => (
  <div className="min-h-screen">
    <Header />
    <section className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <Megaphone className="w-4 h-4" />
            Solution
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Demand <span className="text-gradient">Generation</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Drive awareness, fill your pipeline, and book meetings with multi-channel demand generation campaigns that deliver results.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/#contact" className="px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5">
              Launch Campaigns
            </a>
            <a href="https://wa.me/917620054388?text=Hi%2C%20I%20want%20to%20know%20about%20Demand%20Generation" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-lg border border-border text-foreground font-semibold hover:bg-muted/50 transition-all">
              Chat on WhatsApp
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mt-16"
        >
          {results.map((r) => (
            <div key={r.label} className="glass rounded-xl p-5 text-center">
              <div className="text-2xl md:text-3xl font-heading font-bold text-primary">{r.metric}</div>
              <div className="text-xs text-muted-foreground mt-1">{r.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>

    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-3xl md:text-4xl font-bold text-center mb-4"
        >
          What's <span className="text-gradient">Included</span>
        </motion.h2>
        <p className="text-muted-foreground text-center mb-14 max-w-xl mx-auto">
          Full-funnel demand generation built to deliver qualified pipeline at scale.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="glass rounded-2xl p-7 group hover:border-primary/30 transition-all duration-500"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-heading text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <CTASection />
    <Footer />
    <FloatingWhatsApp />
  </div>
);

export default DemandGeneration;
