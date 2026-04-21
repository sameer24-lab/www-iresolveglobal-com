import { motion } from "framer-motion";
import { Target, Eye, Heart, Users } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AboutSection from "@/components/AboutSection";
import CTASection from "@/components/CTASection";

const values = [
  { icon: Target, title: "Mission", description: "Empower businesses to scale revenue, operations, and teams with execution-first solutions that drive measurable growth." },
  { icon: Eye, title: "Vision", description: "To be the trusted growth partner for ambitious companies worldwide—turning complex challenges into clear outcomes." },
  { icon: Heart, title: "Values", description: "Ownership, transparency, and speed. We treat your business as our own and execute with relentless focus." },
  { icon: Users, title: "People", description: "A global team of strategists, marketers, and operators committed to delivering real impact, not slides." },
];

const About = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main>
      <section className="pt-40 pb-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 text-primary text-xs font-semibold tracking-widest uppercase mb-6">
              About iResolve Global
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              We Build <span className="text-gradient">Growth Engines</span>, Not Decks
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              iResolve Global is a growth partner for businesses that want results, not theories. We design, build, and execute revenue systems that scale.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl grid md:grid-cols-2 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-8 border border-border/50 hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <v.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{v.title}</h3>
              <p className="text-muted-foreground">{v.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <AboutSection />
      <CTASection />
    </main>
    <Footer />
    <FloatingWhatsApp />
  </div>
);

export default About;
