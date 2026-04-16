import { motion } from "framer-motion";
import { Rocket, Users, Megaphone, Settings, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Rocket,
    title: "Revenue Engine Setup",
    description:
      "Build a predictable revenue machine with outbound systems, CRM automation, and lead generation frameworks.",
    tags: [
      "Outbound Campaigns (Email, LinkedIn, Calling)",
      "CRM + Pipeline Setup",
      "Lead Generation Systems",
    ],
    href: "/solutions/revenue-engine",
  },
  {
    icon: Users,
    title: "Offshore Team Setup",
    description:
      "Scale your operations with dedicated remote teams — hired, trained, and managed for peak performance.",
    tags: [
      "60% Cost Savings",
      "Hiring + Onboarding in 2 Weeks",
      "Dedicated Remote Teams",
    ],
    href: "/solutions/offshore-team",
  },
  {
    icon: Megaphone,
    title: "Demand Generation",
    description:
      "Drive awareness, fill your pipeline, and book meetings with multi-channel demand generation campaigns.",
    tags: [
      "Multi-Channel Campaigns",
      "500+ Prospects/Month",
      "Meeting Booking Systems",
    ],
    href: "/solutions/demand-generation",
  },
  {
    icon: Settings,
    title: "Business Operations",
    description:
      "Streamline your processes, automate workflows, and track KPIs to run a lean, scalable operation.",
    tags: [
      "Process Optimization",
      "Automation + Workflows",
      "KPI Tracking",
    ],
    href: "/solutions/business-operations",
  },
];

const ServicesSection = () => (
  <section id="solutions" className="py-24 relative">
    <div className="absolute inset-0 bg-grid opacity-30" />
    <div className="container mx-auto px-4 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
          Our <span className="text-gradient">Solutions</span>
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
          >
            <Link
              to={s.href}
              className="glass rounded-2xl p-8 group hover:border-primary/30 transition-all duration-500 block h-full"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <s.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-3">
                {s.title}
              </h3>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                {s.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted/50 border border-border/50 text-xs text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
