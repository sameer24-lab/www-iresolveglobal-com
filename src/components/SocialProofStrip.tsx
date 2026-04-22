import { motion } from "framer-motion";

const logos = [
  "0xMetaLabs", "Cerebral Alphatech", "O2b Technologies", "Brickslane", "Krishna Enterprises", "TLB",
];

const SocialProofStrip = () => (
  <section className="py-12 border-y border-border/50 overflow-hidden relative">
    <div className="container mx-auto px-4 text-center mb-8">
      <p className="text-sm text-muted-foreground font-medium tracking-wide uppercase">
        Trusted by ambitious companies worldwide
      </p>
    </div>
    <div className="relative">
      <div className="flex animate-scroll-logos will-change-transform hover:[animation-play-state:paused]">
        {[...logos, ...logos].map((name, i) => (
          <div
            key={i}
            className="flex-shrink-0 mx-8 px-6 py-3 glass rounded-lg text-sm font-medium text-muted-foreground"
          >
            {name}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofStrip;
