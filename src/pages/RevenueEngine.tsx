import { motion } from "framer-motion";
import { Rocket, Mail, Linkedin, Phone, BarChart3, Target, Zap, ArrowRight } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CTASection from "@/components/CTASection";

const features = [
  {
    icon: Mail,
    title: "Email Outbound Campaigns",
    description: "Targeted, personalized email sequences that land in inboxes and generate responses at scale.",
  },
  {
    icon: Linkedin,
    title: "LinkedIn Outreach",
    description: "Strategic connection requests, messaging flows, and engagement strategies that convert prospects into conversations.",
  },
  {
    icon: Phone,
    title: "Cold Calling Systems",
    description: "Trained SDR teams with proven scripts and objection handling to fill your calendar with qualified meetings.",
  },
  {
    icon: BarChart3,
    title: "CRM + Pipeline Setup",
    description: "Full CRM configuration with automated workflows, lead scoring, and pipeline tracking for complete visibility.",
  },
  {
    icon: Target,
    title: "Lead Generation Systems",
    description: "End-to-end lead gen infrastructure — from ICP definition to qualified meeting delivery.",
  },
  {
    icon: Zap,
    title: "Sales Automation",
    description: "Automate follow-ups, data entry, and reporting so your team focuses on closing, not admin.",
  },
];

const results = [
  { metric: "3×", label: "Pipeline Growth" },
  { metric: "500+", label: "Leads/Month" },
  { metric: "60 Days", label: "To Full Ramp" },
  { metric: "45%", label: "Meeting Rate" },
];

const RevenueEngine = () => (
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
            <Rocket className="w-4 h-4" />
            Solution
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Revenue Engine <span className="text-gradient">Setup</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Build a predictable revenue machine with outbound systems, CRM automation, and lead generation frameworks that deliver qualified pipeline consistently.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/#contact" className="px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5">
              Get Started
            </a>
            <a href="https://wa.me/917620054388?text=Hi%2C%20I%20want%20to%20know%20about%20Revenue%20Engine%20Setup" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-lg border border-border text-foreground font-semibold hover:bg-muted/50 transition-all">
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
          A complete revenue infrastructure built and managed for you.
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

export default RevenueEngine;
