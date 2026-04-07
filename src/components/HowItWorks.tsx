import phoneMockup2 from "@/assets/phone-mockup-2.png";
import phoneMockup3 from "@/assets/phone-mockup-3.png";

const steps = [
  { num: "01", title: "Create Your Profile", desc: "Sign up and set up your profile as a household employer or staff member." },
  { num: "02", title: "Browse or Post Jobs", desc: "Search for available positions or post your own job listings with detailed requirements." },
  { num: "03", title: "Connect & Hire", desc: "Message candidates, review applications, and find the perfect match for your home." },
];

const HowItWorks = () => (
  <section id="how-it-works" className="py-24 bg-muted/50">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-12">
          <div className="space-y-4">
            <p className="font-body text-sm font-semibold tracking-widest uppercase text-gold">How It Works</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
              Simple. Seamless. Secure.
            </h2>
          </div>
          {steps.map((s) => (
            <div key={s.num} className="flex gap-6">
              <span className="font-display text-3xl font-bold text-gold/30">{s.num}</span>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-1">{s.title}</h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-end gap-[-20px]">
          <img src={phoneMockup2} alt="Penrose messaging" width={240} height={480} className="drop-shadow-xl -mr-8 relative z-10" loading="lazy" />
          <img src={phoneMockup3} alt="Penrose candidates" width={240} height={480} className="drop-shadow-xl opacity-80" loading="lazy" />
        </div>
      </div>
    </div>
  </section>
);

export default HowItWorks;
