import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20grow%20my%20business%20with%20iResolve%20Global";

const ExitIntentPopup = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    let triggered = false;
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !triggered) {
        triggered = true;
        setShow(true);
      }
    };
    document.addEventListener("mouseleave", handleMouseLeave);
    return () => document.removeEventListener("mouseleave", handleMouseLeave);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/80 backdrop-blur-sm p-4"
          onClick={() => setShow(false)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="glass rounded-2xl p-8 max-w-md w-full text-center glow-primary relative"
          >
            <button
              onClick={() => setShow(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
            >
              <X size={20} />
            </button>
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="font-heading text-2xl font-bold mb-2">Wait — Don't Leave Yet!</h3>
            <p className="text-muted-foreground text-sm mb-6">
              Get a free strategy call and discover how we can 3× your pipeline in 60 days.
            </p>
            <div className="flex flex-col gap-3">
              <a
                href="#contact"
                onClick={() => setShow(false)}
                className="px-6 py-3 rounded-lg bg-primary text-primary-foreground font-bold hover:shadow-lg hover:shadow-primary/25 transition-all"
              >
                Get Free Strategy Call
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 rounded-lg border border-primary/30 text-primary font-bold hover:bg-primary/10 transition-all"
              >
                💬 Quick Chat on WhatsApp
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExitIntentPopup;
