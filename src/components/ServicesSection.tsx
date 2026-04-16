import { motion } from "framer-motion";
import { TrendingUp, Megaphone, Users, DollarSign } from "lucide-react";

const services = [
  {
    icon: TrendingUp,
    title: "Pipeline Generation",
    description:
      "Build a consistent flow of qualified leads through targeted outreach, structured pipelines, and optimized conversion strategies.",
    tags: [
      "Lead sourcing & targeting",
      "Pipeline setup & tracking",
      "Conversion improvement",
    ],
    size: "normal" as const,
  },
  {
    icon: Megaphone,
    title: "Marketing & Demand Generation",
    description:
      "Drive awareness, generate demand, and convert prospects through performance-driven marketing strategies.",
    tags: [
      "Demand Generation",
      "Digital Marketing",
      "Campaign Strategy",
      "Awareness Campaigns",
      "Marketing Automation",
      "SEO Optimization",
      "Brand Positioning",
      "Marketing Acceleration",
    ],
    size: "large" as const,
  },
  {
    icon: Users,
    title: "Sales & Team Enablement",
    description:
      "Strengthen your sales function with the right strategy, processes, and team support to improve performance.",
    tags: [
      "Pipeline to Revenue",
      "Growth Enablement",
      "Inside Sales Setup",
      "Sales Acceleration",
    ],
    size: "large" as const,
  },
  {
    icon: DollarSign,
    title: "Cost Optimization",
    description:
      "Build and scale dedicated teams or execute projects efficiently while optimizing operational costs.",
    tags: [
      "Identify Gaps",
      "Productivity",
      "Improve margins",
      "Team Setup",
      "Project Based Execution",
      "Smart Scaling",
      "Execution Pods",
    ],
    size: "normal" as const,
  },
];

const ServicesSection = () => (
  <section id="services" className="py-24 relative">
    <div className="absolute inset-0 bg-grid opacity-30" />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
          Our <span className="text-gradient">4 Pillars</span> of Growth
        </h2>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          Everything you need to build, scale, and dominate your market.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass rounded-2xl p-8 group hover:border-primary/30 transition-all duration-500"
          >
            <h3 className="font-heading text-2xl font-bold mb-3">
              {s.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
              {s.description}
            </p>

            {/* Tags area */}
            <div className="flex flex-wrap gap-2">
              {s.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/50 border border-border/50 text-xs text-muted-foreground"
                >
                  {tag}
                  <TrendingUp className="w-3 h-3 text-primary/60" />
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
