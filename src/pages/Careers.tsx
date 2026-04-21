import { motion } from "framer-motion";
import { Briefcase, Mail, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

const openings = [
  {
    title: "Sales Development Representative",
    type: "Full-time · Remote",
    description: "Drive outbound prospecting and qualify opportunities for our revenue engine clients.",
  },
  {
    title: "Performance Marketing Specialist",
    type: "Full-time · Hybrid",
    description: "Own paid campaigns across Google, Meta, and LinkedIn for B2B growth clients.",
  },
  {
    title: "Operations Analyst",
    type: "Full-time · Remote",
    description: "Build dashboards, automate workflows, and optimize processes for offshore teams.",
  },
];

const Careers = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <section className="pt-40 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-primary/20 mb-6">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium">We're hiring</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Build the Future of <span className="text-gradient">Growth</span> With Us
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join a team that's reshaping how businesses scale revenue, operations, and offshore talent.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-display font-bold mb-10 text-center">Open Roles</h2>
          <div className="grid gap-6">
            {openings.map((role, i) => (
              <motion.div
                key={role.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <Briefcase className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-1">{role.title}</h3>
                    <p className="text-sm text-primary mb-3">{role.type}</p>
                    <p className="text-muted-foreground">{role.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-16 text-center glass rounded-2xl p-10 border border-border/50">
            <h3 className="text-2xl font-display font-bold mb-3">Don't see your role?</h3>
            <p className="text-muted-foreground mb-6">
              We're always looking for exceptional talent. Send us your resume.
            </p>
            <a
              href="mailto:careers@iresolveglobal.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5"
            >
              <Mail className="w-4 h-4" />
              careers@iresolveglobal.com
            </a>
          </div>
        </div>
      </section>
    </main>
    <Footer />
    <FloatingWhatsApp />
  </div>
);

export default Careers;
