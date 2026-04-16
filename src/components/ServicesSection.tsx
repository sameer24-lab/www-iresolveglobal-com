import { motion } from "framer-motion";
import { Rocket, Users, Target, Settings } from "lucide-react";
import { useState } from "react";

const services = [
  {
    icon: Rocket,
    title: "Revenue Engine Setup",
    description: "End-to-end pipeline infrastructure that generates leads on autopilot.",
    features: ["Outbound campaigns (email, LinkedIn, calling)", "CRM + pipeline setup & management", "Lead generation systems & automation"],
  },
  {
    icon: Users,
    title: "Offshore Team Setup",
    description: "Build dedicated remote teams at a fraction of the cost.",
    features: ["60% cost savings vs in-house", "Hiring + onboarding in 2 weeks", "Dedicated, fully managed remote teams"],
  },
  {
    icon: Target,
    title: "Demand Generation",
    description: "Multi-channel campaigns that flood your pipeline with qualified leads.",
    features: ["Multi-channel outreach campaigns", "500+ qualified prospects/month", "Meeting booking systems & follow-up"],
  },
  {
    icon: Settings,
    title: "Business Operations",
    description: "Streamline operations so you can focus on growth.",
    features: ["Process optimization & SOPs", "Automation + workflow design", "KPI tracking & reporting dashboards"],
  },
];

const ServicesSection = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
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
              onClick={() => setExpanded(expanded === i ? null : i)}
              className="glass rounded-2xl p-8 cursor-pointer group hover:glow-primary transition-all duration-500 hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-bold mb-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{s.description}</p>
                  <motion.ul
                    initial={false}
                    animate={{ height: expanded === i ? "auto" : 0, opacity: expanded === i ? 1 : 0 }}
                    className="overflow-hidden space-y-2"
                  >
                    {s.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-secondary-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </motion.ul>
                  <span className="text-xs text-primary mt-2 inline-block">
                    {expanded === i ? "Click to collapse" : "Click to learn more →"}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
