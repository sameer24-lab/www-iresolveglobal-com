import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/917620054388?text=Hi%2C%20I%20want%20to%20grow%20my%20business%20with%20iResolve%20Global";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-4">
            Let's <span className="text-gradient">Talk Growth</span>
          </h2>
          <p className="text-muted-foreground text-lg">Get in touch — we reply within 2 hours.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {submitted ? (
              <div className="glass rounded-2xl p-8 text-center">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="font-heading text-xl font-bold mb-2">Message Sent!</h3>
                <p className="text-muted-foreground text-sm">We'll get back to you within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {(["name", "email", "company"] as const).map((field) => (
                  <input
                    key={field}
                    type={field === "email" ? "email" : "text"}
                    placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                    required={field !== "company"}
                    value={form[field]}
                    onChange={(e) => setForm({ ...form, [field]: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                  />
                ))}
                <textarea
                  placeholder="Tell us about your growth goals..."
                  rows={4}
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm resize-none"
                />
                <button
                  type="submit"
                  className="w-full px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5"
                >
                  Send Message
                </button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-6 flex items-center gap-4 hover:glow-primary transition-all duration-300 group block"
            >
              <div className="w-14 h-14 rounded-xl bg-green-500/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-7 h-7 text-green-400" />
              </div>
              <div>
                <div className="font-heading font-bold text-lg">Chat on WhatsApp</div>
                <div className="text-sm text-muted-foreground">Fastest way to reach us — reply in minutes</div>
              </div>
            </a>

            <a
              href="mailto:info@iresolveglobal.com"
              className="glass rounded-2xl p-6 flex items-center gap-4 hover:glow-primary transition-all duration-300 group block"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-7 h-7 text-primary" />
              </div>
              <div>
                <div className="font-heading font-bold text-lg">Email Us</div>
                <div className="text-sm text-muted-foreground">info@iresolveglobal.com</div>
              </div>
            </a>

            <div className="glass rounded-2xl p-6">
              <h3 className="font-heading font-bold mb-3">Why talk to us?</h3>
              <ul className="space-y-2">
                {[
                  "Free 30-min strategy session",
                  "No commitments or long contracts",
                  "Custom growth plan for your business",
                  "Actionable insights you can use immediately",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
