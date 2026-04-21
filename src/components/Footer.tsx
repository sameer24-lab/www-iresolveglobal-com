import { Link } from "react-router-dom";
import logo from "@/assets/logo-updated.png";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="iResolve Global" className="h-36 w-auto" loading="lazy" />
        </Link>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          <Link to="/about" className="hover:text-primary transition-colors">About</Link>
          <a href="/#solutions" className="hover:text-primary transition-colors">Solutions</a>
          <Link to="/case-studies" className="hover:text-primary transition-colors">Execution Playbooks</Link>
          <Link to="/careers" className="hover:text-primary transition-colors">Careers</Link>
          <Link to="/#contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} iResolve Global. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
