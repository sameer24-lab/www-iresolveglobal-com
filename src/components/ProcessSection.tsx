import { motion } from "framer-motion";

const steps = [
  { week: "Week 1", title: "Strategy & Discovery", description: "Deep-dive audit of your business, goals, and growth levers. We build the playbook." },
  { week: "Week 2", title: "Setup & Launch", description: "Deploy systems, hire teams, configure campaigns. Everything goes live." },
  { week: "Week 3+", title: "Scale & Optimize", description: "Continuous optimization, reporting, and scaling what works. Growth compounds." },
];

const ProcessSection = () => (
  <section id="process" className="py-24 relative">
    <div className="absolute inset-0 bg-grid opacity-20" />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
          Your <span className="text-gradient">Growth Timeline</span>
        </h2>
        <p className="text-muted-foreground text-lg">From strategy to scale in weeks, not months.</p>
      </motion.div>

      <div className="max-w-3xl mx-auto relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />

        {steps.map((step, i) => (
          <motion.div
            key={step.week}
            initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className={`relative flex items-start gap-6 mb-12 ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div className="hidden md:block flex-1" />
            <div className="relative z-10 w-12 h-12 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center flex-shrink-0 glow-primary">
              <span className="text-xs font-bold text-primary">{i + 1}</span>
            </div>
            <div className="flex-1 glass rounded-2xl p-6">
              <div className="text-xs font-semibold text-primary tracking-wide mb-1">{step.week}</div>
              <h3 className="font-heading text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;
