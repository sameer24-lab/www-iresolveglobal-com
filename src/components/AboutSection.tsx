import { motion } from "framer-motion";
import { AlignLeft, CheckCheck, Layers } from "lucide-react";
import { TrendingUp, Settings, ListChecks } from "lucide-react";

const steps = [
  {
    icon: AlignLeft,
    title: "Consult & Identify",
    description:
      "We understand your business challenges, uncover gaps, and define a clear direction for growth.",
  },
  {
    icon: CheckCheck,
    title: "Execute & Deliver",
    description:
      "We take ownership and implement solutions quickly—ensuring real progress without delays.",
  },
  {
    icon: Layers,
    title: "Build & Scale",
    description:
      "We help you set up systems, processes, and teams to support long-term scalable growth.",
  },
];

const badges = [
  { icon: TrendingUp, label: "Scalable Growth" },
  { icon: Settings, label: "Ownership Mindset" },
  { icon: ListChecks, label: "Fast Execution" },
];

const AboutSection = () => (
  <section id="about" className="py-24 relative overflow-hidden">
    {/* Decorative glow */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-semibold tracking-widest uppercase mb-6">
          Execution-First Approach
        </span>
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
          From Challenge to <span className="text-gradient">Execution</span>
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We identify your challenges, deliver practical solutions, and execute
          with a clear roadmap for growth.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
        {steps.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="glass rounded-2xl p-8 group hover:border-primary/30 transition-all duration-500"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <step.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-bold mb-3">
              {step.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {step.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom badges */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-8"
      >
        {badges.map((b, i) => (
          <div
            key={b.label}
            className="flex items-center gap-2 text-muted-foreground text-sm"
          >
            <b.icon className="w-5 h-5 text-primary" />
            <span>{b.label}</span>
            {i < badges.length - 1 && (
              <span className="hidden md:inline ml-6 w-px h-5 bg-border" />
            )}
          </div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default AboutSection;
