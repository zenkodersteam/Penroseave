import penroseLogo from "@/assets/penrose-logo.png";

const Footer = () => (
  <footer className="bg-foreground py-12">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <img src={penroseLogo} alt="Penrose" width={32} height={32} className="rounded-md" />
          <span className="font-display text-lg font-bold text-background">Penrose</span>
        </div>
        <div className="flex gap-8 font-body text-sm text-background/50">
          <a href="#" className="hover:text-background/80 transition-colors">Privacy</a>
          <a href="#" className="hover:text-background/80 transition-colors">Terms</a>
          <a href="#" className="hover:text-background/80 transition-colors">Contact</a>
        </div>
        <p className="font-body text-xs text-background/30">© 2026 Penrose. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
