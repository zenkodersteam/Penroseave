import phoneMockup1 from "@/assets/phone-mockup-1.png";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => (
  <section className="bg-hero relative overflow-hidden pt-32 pb-20 md:pt-40 md:pb-32">
    {/* Subtle radial glow */}
    <div className="absolute inset-0 opacity-20" style={{
      background: "radial-gradient(ellipse at 70% 50%, hsl(45, 80%, 55%), transparent 60%)"
    }} />

    <div className="container mx-auto px-6 relative z-10">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-2 text-sm text-primary-foreground/80 font-body">
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
            Now available on iOS & Android
          </div>
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight">
            Your Trusted <br />
            <span className="text-gradient-gold">Household Staff</span><br />
            Marketplace
          </h1>
          <p className="font-body text-lg text-primary-foreground/70 max-w-lg leading-relaxed">
            Browse, hire, and manage qualified household staff with confidence. From nannies to housekeepers — find the perfect fit for your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="secondary" size="lg" className="font-body font-semibold text-base gap-2">
              Download Now <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="lg" className="font-body text-primary-foreground border border-primary-foreground/20 hover:bg-primary-foreground/10">
              Learn More
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <img
            src={phoneMockup1}
            alt="Penrose app showing household job listings"
            width={320}
            height={640}
            className="drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
