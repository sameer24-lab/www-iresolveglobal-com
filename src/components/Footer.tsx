import logo from "@/assets/logo-updated.png";

const Footer = () => (
  <footer className="border-t border-border py-12">
    <div className="container mx-auto px-4">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={logo} alt="iResolve Global" className="h-24 w-auto" loading="lazy" />
        </div>
        <div className="flex gap-6 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-primary transition-colors">About</a>
          <a href="#services" className="hover:text-primary transition-colors">Services</a>
          <a href="#case-studies" className="hover:text-primary transition-colors">Case Studies</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} iResolve Global. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
