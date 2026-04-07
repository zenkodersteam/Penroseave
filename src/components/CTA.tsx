import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTA = () => (
  <section id="download" className="bg-hero py-24 relative overflow-hidden">
    <div className="absolute inset-0 opacity-10" style={{
      background: "radial-gradient(ellipse at 30% 50%, hsl(45, 80%, 55%), transparent 50%)"
    }} />
    <div className="container mx-auto px-6 relative z-10 text-center space-y-8">
      <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground">
        Ready to Find Your <span className="text-gradient-gold">Perfect Staff?</span>
      </h2>
      <p className="font-body text-primary-foreground/70 max-w-lg mx-auto text-lg">
        Join thousands of households already using Penrose to connect with trusted, qualified staff.
      </p>
      <Button variant="secondary" size="lg" className="font-body font-semibold text-base gap-2">
        Download Penrose <ArrowRight className="w-4 h-4" />
      </Button>
    </div>
  </section>
);

export default CTA;
