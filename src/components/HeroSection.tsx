import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import AnimatedCounter from "./AnimatedCounter";

const WHATSAPP_URL = "https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20grow%20my%20business%20with%20iResolve%20Global";

const HeroSection = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; r: number; o: number }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r: Math.random() * 2 + 0.5,
        o: Math.random() * 0.5 + 0.1,
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(45, 212, 191, ${p.o})`;
        ctx.fill();
      });

      particles.forEach((a, i) => {
        particles.slice(i + 1).forEach((b) => {
          const d = Math.hypot(a.x - b.x, a.y - b.y);
          if (d < 150) {
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(45, 212, 191, ${0.06 * (1 - d / 150)})`;
            ctx.stroke();
          }
        });
      });

      animId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="absolute inset-0 bg-gradient-radial z-0" />

      <div className="relative z-10 container mx-auto px-4 text-center pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide text-primary border border-primary/30 bg-primary/5 mb-6">
            EXECUTION-FIRST BUSINESS PARTNER
          </span>
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            We Build Revenue Engines
            <br />
            <span className="text-gradient">That Scale Your Business</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            500+ Leads/Month · 3× Pipeline Growth · 60% Cost Savings
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="#contact"
              className="px-8 py-4 rounded-lg bg-primary text-primary-foreground font-bold text-lg hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5"
            >
              Book Free Strategy Call
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-lg border border-primary/30 text-primary font-bold text-lg hover:bg-primary/10 transition-all hover:-translate-y-0.5"
            >
              💬 Chat on WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {[
              { end: 500, suffix: "+", label: "Leads/Month" },
              { end: 3, suffix: "×", label: "Pipeline Growth" },
              { end: 60, suffix: "%", label: "Cost Savings" },
              { end: 2, suffix: " Weeks", label: "Team Ready" },
            ].map((m) => (
              <div key={m.label} className="glass rounded-xl p-4">
                <div className="text-2xl md:text-3xl font-heading font-bold text-primary">
                  <AnimatedCounter end={m.end} suffix={m.suffix} />
                </div>
                <div className="text-xs text-muted-foreground mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
