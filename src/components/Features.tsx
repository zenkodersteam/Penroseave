import { Search, MessageSquare, ClipboardCheck, Users, Shield, Star } from "lucide-react";

const features = [
  { icon: Search, title: "Browse Jobs", desc: "Find trusted household jobs near you and apply directly." },
  { icon: ClipboardCheck, title: "Manage Applications", desc: "Track your job applications and status in real-time." },
  { icon: MessageSquare, title: "In-App Messaging", desc: "Message staff and discuss job details seamlessly." },
  { icon: Users, title: "Post & Hire", desc: "Post jobs and find qualified, vetted household staff." },
  { icon: Star, title: "Review Candidates", desc: "Review profiles, ratings, and select the best fit." },
  { icon: Shield, title: "Verified Profiles", desc: "All staff go through a thorough verification process." },
];

const Features = () => (
  <section id="features" className="py-24 bg-background">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16 space-y-4">
        <p className="font-body text-sm font-semibold tracking-widest uppercase text-gold">Features</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
          Everything You Need
        </h2>
        <p className="font-body text-muted-foreground max-w-xl mx-auto">
          A complete platform for hiring and managing household staff, all from your phone.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f) => (
          <div key={f.title} className="group bg-card rounded-2xl p-8 border border-border hover:border-gold/40 hover:shadow-lg transition-all duration-300">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-gold/15 transition-colors">
              <f.icon className="w-6 h-6 text-primary group-hover:text-gold transition-colors" />
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">{f.title}</h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Features;
