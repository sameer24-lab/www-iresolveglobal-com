import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import CTASection from "@/components/CTASection";

const studies = [
  {
    title: "SaaS Company Scales Pipeline 3× in 60 Days",
    problem: "A B2B SaaS startup was struggling with inconsistent lead flow. Their sales team had capacity but no pipeline to work.",
    solution: "We deployed a multi-channel outbound engine — email sequences, LinkedIn outreach, and cold calling — with a fully configured CRM pipeline.",
    results: [
      { metric: "3×", label: "Pipeline Growth" },
      { metric: "500+", label: "Leads Generated" },
      { metric: "60 days", label: "Time to Results" },
    ],
  },
  {
    title: "E-Commerce Brand Cuts Costs 60% with Offshore Team",
    problem: "Growing operational costs were eating into margins. Customer support and order management needed full-time staff at lower cost.",
    solution: "We sourced, hired, and onboarded a 12-person offshore team in under 2 weeks — fully integrated with their existing workflows.",
    results: [
      { metric: "60%", label: "Cost Reduction" },
      { metric: "12", label: "Team Members" },
      { metric: "2 weeks", label: "Setup Time" },
    ],
  },
  {
    title: "Agency Generates 500+ Leads/Month for Clients",
    problem: "A marketing agency couldn't deliver consistent lead generation results for their B2B clients.",
    solution: "We white-labeled our demand generation system, allowing the agency to scale client results without building internal capacity.",
    results: [
      { metric: "500+", label: "Monthly Leads" },
      { metric: "8", label: "Clients Scaled" },
      { metric: "45%", label: "Close Rate Increase" },
    ],
  },
];

const CaseStudies = () => (
  <div className="min-h-screen">
    <Header />
    <section className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-grid opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <TrendingUp className="w-4 h-4" />
            Case Studies
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6">
            Real Results, <span className="text-gradient">Real Growth</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto">
            See how businesses like yours scaled with iResolve Global.
          </p>
        </motion.div>

        <div className="space-y-8 max-w-4xl mx-auto">
          {studies.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="glass rounded-2xl overflow-hidden group hover:border-primary/30 transition-all duration-500"
            >
              <div className="p-8 md:p-10">
                <h3 className="font-heading text-xl md:text-2xl font-bold mb-6">{s.title}</h3>

                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  <div>
                    <div className="text-xs font-semibold text-destructive tracking-wide mb-2">PROBLEM</div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.problem}</p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-primary tracking-wide mb-2">SOLUTION</div>
                    <p className="text-muted-foreground text-sm leading-relaxed">{s.solution}</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-border">
                  {s.results.map((r) => (
                    <div key={r.label} className="text-center">
                      <div className="text-2xl md:text-3xl font-heading font-bold text-primary">{r.metric}</div>
                      <div className="text-xs text-muted-foreground mt-1">{r.label}</div>
                    </div>
                  ))}
                </div>
              </div>
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

export default CaseStudies;
