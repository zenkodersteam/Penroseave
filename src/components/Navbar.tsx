import penroseLogo from "@/assets/penrose-logo.png";
import { Button } from "@/components/ui/button";

const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md border-b border-primary-foreground/10">
    <div className="container mx-auto flex items-center justify-between py-4 px-6">
      <div className="flex items-center gap-3">
        <img src={penroseLogo} alt="Penrose" width={40} height={40} className="rounded-lg" />
        <span className="font-display text-xl font-bold text-primary-foreground">Penrose</span>
      </div>
      <div className="hidden md:flex items-center gap-8 font-body text-sm text-primary-foreground/80">
        <a href="#features" className="hover:text-primary-foreground transition-colors">Features</a>
        <a href="#how-it-works" className="hover:text-primary-foreground transition-colors">How It Works</a>
        <a href="#download" className="hover:text-primary-foreground transition-colors">Download</a>
      </div>
      <Button variant="secondary" size="sm" className="font-body font-semibold">
        Get the App
      </Button>
    </div>
  </nav>
);

export default Navbar;
