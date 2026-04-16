import { motion } from "framer-motion";
import { Settings, RefreshCw, BarChart3, Workflow, CheckCircle, TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CTASection from "@/components/CTASection";

const features = [
  {
    icon: Workflow,
    title: "Process Optimization",
    description: "Audit, streamline, and redesign your workflows to eliminate bottlenecks and improve efficiency across teams.",
  },
  {
    icon: RefreshCw,
    title: "Automation + Workflows",
    description: "Implement smart automations that reduce manual work, minimize errors, and free your team for high-value tasks.",
  },
  {
    icon: BarChart3,
    title: "KPI Tracking & Reporting",
    description: "Build real-time dashboards and reporting systems so you always know what's working and where to improve.",
  },
  {
    icon: CheckCircle,
    title: "SOPs & Documentation",
    description: "Create clear, scalable standard operating procedures so your team runs consistently, even as you grow.",
  },
  {
    icon: TrendingUp,
    title: "Performance Management",
    description: "Set up goal tracking, review cycles, and accountability systems that drive continuous improvement.",
  },
  {
    icon: Settings,
    title: "Tool & Stack Optimization",
    description: "Evaluate and optimize your tech stack — consolidate tools, reduce costs, and improve integration across systems.",
  },
];

const results = [
  { metric: "40%", label: "Efficiency Gain" },
  { metric: "3×", label: "Faster Processes" },
  { metric: "30%", label: "Cost Reduction" },
  { metric: "100+", label: "SOPs Created" },
];

const BusinessOperations = () => (
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
            <Settings className="w-4 h-4" />
            Solution
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Business <span className="text-gradient">Operations</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
            Streamline your processes, automate workflows, and track KPIs to run a lean, scalable operation that grows with your business.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/#contact" className="px-8 py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5">
              Optimize Operations
            </a>
            <a href="https://wa.me/917620054388?text=Hi%2C%20I%20want%20to%20know%20about%20Business%20Operations" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 rounded-lg border border-border text-foreground font-semibold hover:bg-muted/50 transition-all">
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
          Complete operational transformation — from process audit to automated workflows.
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

export default BusinessOperations;
