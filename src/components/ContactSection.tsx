import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Mail, MessageCircle, Calendar, Send, CheckCircle2 } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/917620054388?text=Hi%2C%20I%20want%20to%20grow%20my%20business%20with%20iResolve%20Global";
const CALENDLY_URL = "https://calendly.com/sameer-singh-iresolveglobal";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", company: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [activeTab, setActiveTab] = useState<"form" | "calendly">("form");

  // Load Calendly widget script
  useEffect(() => {
    if (activeTab === "calendly") {
      const existing = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (!existing) {
        const script = document.createElement("script");
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        document.head.appendChild(script);
      }
    }
  }, [activeTab]);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!form.name.trim()) errs.name = "Name is required";
    else if (form.name.trim().length > 100) errs.name = "Name must be under 100 characters";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) errs.email = "Invalid email";
    if (form.company.trim().length > 100) errs.company = "Company must be under 100 characters";
    if (!form.message.trim()) errs.message = "Message is required";
    else if (form.message.trim().length > 1000) errs.message = "Message must be under 1000 characters";
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      // Build mailto link with form data
      const subject = encodeURIComponent(`Growth Inquiry from ${form.name.trim()}`);
      const body = encodeURIComponent(
        `Name: ${form.name.trim()}\nEmail: ${form.email.trim()}\nCompany: ${form.company.trim() || "N/A"}\nPhone: ${form.phone.trim() || "N/A"}\n\nMessage:\n${form.message.trim()}`
      );
      window.open(`mailto:info@iresolveglobal.com?subject=${subject}&body=${body}`, "_blank");
      setSubmitted(true);
    }
  };

  const tabs = [
    { id: "form" as const, label: "Send Message", icon: Send },
    { id: "calendly" as const, label: "Book a Call", icon: Calendar },
  ];

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

        <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
          {/* Left: Form / Calendly */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            {/* Tab switcher */}
            <div className="flex gap-2 mb-6">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all ${
                    activeTab === tab.id
                      ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                      : "bg-secondary text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {activeTab === "form" ? (
              submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="glass rounded-2xl p-10 text-center"
                >
                  <CheckCircle2 className="w-14 h-14 text-primary mx-auto mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground text-sm mb-4">We'll get back to you within 2 hours.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", email: "", company: "", phone: "", message: "" }); }}
                    className="text-sm text-primary hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <input
                        type="text"
                        placeholder="Full Name *"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                      />
                      {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <input
                        type="email"
                        placeholder="Email Address *"
                        value={form.email}
                        onChange={(e) => setForm({ ...form, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                      />
                      {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Company"
                      value={form.company}
                      onChange={(e) => setForm({ ...form, company: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                    />
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Tell us about your growth goals... *"
                      rows={4}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-sm resize-none"
                    />
                    {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              )
            ) : (
              <div className="glass rounded-2xl overflow-hidden" style={{ minHeight: 580 }}>
                <div
                  className="calendly-inline-widget"
                  data-url={`${CALENDLY_URL}?hide_gdpr_banner=1&background_color=1a1a2e&text_color=ffffff&primary_color=00d4ff`}
                  style={{ minWidth: 320, height: 580, width: "100%" }}
                />
              </div>
            )}
          </motion.div>

          {/* Right: Contact cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-5"
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-6 flex items-center gap-4 hover:glow-primary transition-all duration-300 group block"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-7 h-7 text-accent" />
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

            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="glass rounded-2xl p-6 flex items-center gap-4 hover:glow-primary transition-all duration-300 group block"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Calendar className="w-7 h-7 text-primary" />
              </div>
              <div>
                <div className="font-heading font-bold text-lg">Schedule a Call</div>
                <div className="text-sm text-muted-foreground">Free 30-min strategy session</div>
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
