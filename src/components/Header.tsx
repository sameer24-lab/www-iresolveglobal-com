import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown, Rocket, Users, Megaphone, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import logo from "@/assets/logo-updated.png";

const WHATSAPP_URL = "https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20grow%20my%20business%20with%20iResolve%20Global";

const solutionLinks = [
  { label: "Revenue Engine Setup", href: "/solutions/revenue-engine", icon: Rocket },
  { label: "Offshore Team Setup", href: "/solutions/offshore-team", icon: Users },
  { label: "Demand Generation", href: "/solutions/demand-generation", icon: Megaphone },
  { label: "Business Operations", href: "/solutions/business-operations", icon: Settings },
];

const navLinks = [
  { label: "Explore Solutions", href: "/#solutions", dropdown: true },
  { label: "What We Solve", href: "/#execution" },
  { label: "Why Choose Us", href: "/#why-us" },
  { label: "Execution Playbooks", href: "/case-studies" },
  { label: "Plan Your Growth Strategy", href: "/#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("/#")) {
      const sectionId = href.replace("/#", "");
      if (location.pathname === "/") {
        const el = document.getElementById(sectionId);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      } else {
        window.location.href = href;
      }
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Logo - sits above header bar */}
      <Link to="/" className="absolute top-2 left-4 lg:left-8 z-10">
        <img src={logo} alt="iResolve Global" className="h-16 w-auto" />
      </Link>
      <div className="container mx-auto flex items-center justify-end py-3 px-4 lg:px-8">

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => {
            if (l.dropdown) {
              return (
                <div
                  key={l.href}
                  className="relative"
                  onMouseEnter={() => setSolutionsOpen(true)}
                  onMouseLeave={() => setSolutionsOpen(false)}
                >
                  <button
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(l.href);
                    }}
                  >
                    {l.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${solutionsOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {solutionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 glass rounded-xl border border-border/50 shadow-xl overflow-hidden"
                      >
                        {solutionLinks.map((s) => (
                          <Link
                            key={s.href}
                            to={s.href}
                            className="flex items-center gap-3 px-4 py-3 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 transition-colors"
                            onClick={() => setSolutionsOpen(false)}
                          >
                            <s.icon className="w-4 h-4 text-primary" />
                            {s.label}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            if (l.href.startsWith("/") && !l.href.startsWith("/#")) {
              return (
                <Link
                  key={l.href}
                  to={l.href}
                  className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
                >
                  {l.label}
                </Link>
              );
            }

            return (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => {
                  if (l.href.startsWith("/#") && location.pathname === "/") {
                    e.preventDefault();
                    handleNavClick(l.href);
                  }
                }}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            );
          })}
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm hover:shadow-lg hover:shadow-primary/25 transition-all hover:-translate-y-0.5"
          >
            Book a Call
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass border-t border-border overflow-hidden"
          >
            <div className="container mx-auto py-4 px-4 flex flex-col gap-2">
              {navLinks.map((l) => {
                if (l.dropdown) {
                  return (
                    <div key={l.href}>
                      <button
                        onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                        className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                      >
                        {l.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${mobileSolutionsOpen ? "rotate-180" : ""}`} />
                      </button>
                      <AnimatePresence>
                        {mobileSolutionsOpen && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="pl-4 flex flex-col gap-1"
                          >
                            {solutionLinks.map((s) => (
                              <Link
                                key={s.href}
                                to={s.href}
                                onClick={() => setMobileOpen(false)}
                                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors py-2"
                              >
                                <s.icon className="w-4 h-4 text-primary" />
                                {s.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                if (l.href.startsWith("/") && !l.href.startsWith("/#")) {
                  return (
                    <Link
                      key={l.href}
                      to={l.href}
                      onClick={() => setMobileOpen(false)}
                      className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                    >
                      {l.label}
                    </Link>
                  );
                }

                return (
                  <a
                    key={l.href}
                    href={l.href}
                    onClick={(e) => {
                      if (l.href.startsWith("/#") && location.pathname === "/") {
                        e.preventDefault();
                        handleNavClick(l.href);
                      } else {
                        setMobileOpen(false);
                      }
                    }}
                    className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors py-2"
                  >
                    {l.label}
                  </a>
                );
              })}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-semibold text-sm text-center"
              >
                Book a Call
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;
