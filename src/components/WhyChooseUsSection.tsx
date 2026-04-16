import { motion } from "framer-motion";
import { Zap, Star, Lightbulb, GitBranch, TrendingUp, RefreshCw } from "lucide-react";

const values = [
  {
    icon: Zap,
    title: "Fast Execution",
    description:
      "We move quickly from identifying the problem to taking action—eliminating delays, reducing unnecessary complexity, and ensuring faster progress toward your goals.",
  },
  {
    icon: Star,
    title: "Accountability Driven",
    description:
      "We take full responsibility for your challenges, treating them as our own and staying accountable until the desired outcomes are achieved.",
  },
  {
    icon: Lightbulb,
    title: "Practical Solutions",
    description:
      "We focus on real-world solutions that work—designed to solve actual business problems, not just theoretical ideas or presentations.",
  },
  {
    icon: GitBranch,
    title: "Clarity First",
    description:
      "We break down complex challenges into clear, actionable steps—giving you direction, confidence, and a structured path forward.",
  },
  {
    icon: TrendingUp,
    title: "Built for Growth",
    description:
      "Every solution we deliver is designed to scale with your business, ensuring long-term growth and sustainable progress.",
  },
  {
    icon: RefreshCw,
    title: "Flexible Engagement",
    description:
      "We adapt our engagement to your needs — whether it's a short-term project, ongoing support, or building a dedicated team from scratch.",
  },
];

const scrollingTags = [
  "Sales Enablement",
  "Growth Consulting",
  "Execution Support",
  "Dedicated Support",
  "Offshore Teams",
  "Smart Insights",
  "Customizable Plans",
  "Intelligent Spending",
  "Lead Generation",
  "Operational Excellence",
];

const WhyChooseUsSection = () => (
  <section id="why-us" className="py-24 relative overflow-hidden">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
          Why <span className="text-gradient">Choose Us</span>?
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          We don't just advise—we take ownership, execute with speed, and
          deliver measurable progress.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-2xl p-8 group hover:border-primary/30 transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
              <v.icon className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-heading text-lg font-bold mb-3">{v.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {v.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Scrolling tags */}
      <div className="relative overflow-hidden">
        <div className="flex gap-4 animate-scroll-logos">
          {[...scrollingTags, ...scrollingTags].map((tag, i) => (
            <span
              key={i}
              className="flex-shrink-0 px-5 py-2.5 rounded-full border border-border/50 bg-muted/30 text-sm text-muted-foreground whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection;
