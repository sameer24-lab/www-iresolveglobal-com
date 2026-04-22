import { motion } from "framer-motion";
import { Users, DollarSign, Clock, Shield, Briefcase, HeadphonesIcon } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CTASection from "@/components/CTASection";

const features = [
  {
    icon: DollarSign,
    title: "60% Cost Savings",
    description: "Access top-tier talent at a fraction of the cost — without sacrificing quality or output.",
  },
  {
    icon: Clock,
    title: "Team Ready in 3 Weeks",
    description: "From job brief to onboarded team members in under 21 days. No long hiring cycles.",
  },
  {
    icon: Users,
    title: "Dedicated Remote Teams",
    description: "Your team, your processes — fully dedicated professionals who work exclusively on your projects.",
  },
  {
    icon: Shield,
    title: "Quality Assurance",
    description: "Rigorous vetting, training, and performance tracking ensure consistent quality delivery.",
  },
  {
    icon: Briefcase,
    title: "Full HR Management",
    description: "We handle payroll, benefits, performance reviews, and retention — so you focus on growth.",
  },
  {
    icon: HeadphonesIcon,
    title: "Ongoing Support",
    description: "Dedicated account management with regular check-ins, reporting, and team optimization.",
  },
];

const results = [
  { metric: "60%", label: "Cost Savings" },
  { metric: "3 Weeks", label: "Setup Time" },
  { metric: "50+", label: "Teams Built" },
  { metric: "96%", label: "Retention Rate" },
];

const OffshoreTeam = () => (
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
            <Users className="w-4 h-4" />
            Solution
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Offshore Team <span className="text-gradient">Setup</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Scale your operations with dedicated remote teams — hired, trained, and managed for peak performance at 60% lower costs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/#contact" className="px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5">
              Build Your Team
            </a>
            <a href="https://wa.me/917620054388?text=Hi%2C%20I%20want%20to%20know%20about%20Offshore%20Team%20Setup" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-lg border border-border text-foreground font-semibold hover:bg-muted/50 transition-all">
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
          End-to-end team building and management — so you can scale without the overhead.
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

export default OffshoreTeam;
