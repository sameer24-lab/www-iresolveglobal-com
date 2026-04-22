import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const rows = [
  { feature: "Execution-first approach", us: true, them: false },
  { feature: "Team ready in 3 weeks", us: true, them: false },
  { feature: "60% cost savings", us: true, them: false },
  { feature: "Full pipeline ownership", us: true, them: false },
  { feature: "Dedicated account manager", us: true, them: false },
  { feature: "Multi-channel campaigns", us: true, them: false },
  { feature: "Long contracts required", us: false, them: true },
  { feature: "Just advisory, no execution", us: false, them: true },
];

const ComparisonSection = () => (
  <section className="py-24 relative">
    <div className="container mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
          Why <span className="text-gradient">iResolve</span>?
        </h2>
        <p className="text-muted-foreground text-lg">See how we compare to traditional agencies.</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto glass rounded-2xl overflow-hidden"
      >
        <div className="grid grid-cols-3 text-center font-heading font-bold text-sm border-b border-border p-4">
          <div className="text-left text-muted-foreground">Feature</div>
          <div className="text-primary">iResolve Global</div>
          <div className="text-muted-foreground">Others</div>
        </div>
        {rows.map((row, i) => (
          <motion.div
            key={row.feature}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="grid grid-cols-3 text-center text-sm border-b border-border/50 p-4 hover:bg-primary/5 transition-colors"
          >
            <div className="text-left text-secondary-foreground">{row.feature}</div>
            <div>
              {row.us ? (
                <Check className="w-5 h-5 text-primary mx-auto" />
              ) : (
                <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />
              )}
            </div>
            <div>
              {row.them ? (
                <Check className="w-5 h-5 text-muted-foreground/60 mx-auto" />
              ) : (
                <X className="w-5 h-5 text-muted-foreground/40 mx-auto" />
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default ComparisonSection;
