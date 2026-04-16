import { motion } from "framer-motion";
import { Search, Zap, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Diagnose",
    description: "Deep-dive into your business to identify bottlenecks, inefficiencies, and growth opportunities.",
  },
  {
    icon: Zap,
    title: "Execute",
    description: "Deploy proven systems, teams, and processes — no fluff, just results.",
  },
  {
    icon: TrendingUp,
    title: "Scale",
    description: "Optimize, automate, and expand what works to drive exponential growth.",
  },
];

const AboutSection = () => (
  <section id="about" className="py-24 relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
          We Don't Just Advise — <span className="text-gradient">We Execute</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Most businesses don't struggle with ideas — they struggle with execution. We are the execution engine your business needs.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass rounded-2xl p-8 text-center group hover:glow-primary transition-all duration-500"
          >
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
              <step.icon className="w-8 h-8 text-primary" />
            </div>
            <div className="text-xs font-semibold text-primary tracking-wide mb-2">STEP {i + 1}</div>
            <h3 className="font-heading text-xl font-bold mb-3">{step.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
