import React, { useEffect } from "react";
import "./_group.css";
import { Separator } from "@/components/ui/separator";

export function Jewellery() {
  useEffect(() => {
    // Basic intersection observer to trigger slide-up animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-j-slide-up");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen jewellery-dark-bg jewellery-cream-text jewellery-font-sans selection:bg-[#D4AF37] selection:text-[#050505] overflow-x-hidden">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500&family=Montserrat:wght@300;400;500&display=swap" rel="stylesheet" />
      {/* Navigation */}
      <nav className="absolute top-0 w-full z-50 px-6 py-8 flex justify-between items-center animate-j-fade-in">
        <div className="jewellery-font-serif text-2xl tracking-widest uppercase jewellery-gold-text">
          House of Zain
        </div>
        <div className="hidden md:flex gap-8 text-sm tracking-[0.2em] uppercase opacity-70">
          <a href="#heritage" className="hover:jewellery-gold-text transition-colors">Heritage</a>
          <a href="#milestones" className="hover:jewellery-gold-text transition-colors">Milestones</a>
          <a href="#artisans" className="hover:jewellery-gold-text transition-colors">Artisans</a>
          <a href="#contact" className="hover:jewellery-gold-text transition-colors">Boutique</a>
        </div>
      </nav>

      {/* 1. Hero */}
      <section className="relative h-screen flex flex-col justify-center items-center text-center px-4">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505]/40 via-transparent to-[#050505] z-10" />
          <img 
            src="/__mockup/images/jewellery-hero.png" 
            alt="Intricate gold bridal jewellery on dark velvet" 
            className="w-full h-full object-cover opacity-60"
          />
        </div>
        
        <div className="relative z-10 flex flex-col items-center mt-20">
          <h2 className="jewellery-font-sans text-xs md:text-sm tracking-[0.4em] uppercase mb-6 jewellery-gold-text animate-j-slide-up">
            Est. 1963
          </h2>
          <h1 className="jewellery-font-serif text-6xl md:text-8xl lg:text-9xl text-white mb-8 drop-shadow-2xl animate-j-slide-up delay-200">
            House of Zain
          </h1>
          <div className="w-px h-16 jewellery-gold-bg animate-j-slide-up delay-400 mb-8" />
          <p className="jewellery-font-serif italic text-xl md:text-3xl max-w-2xl text-white/90 animate-j-slide-up delay-600 px-4">
            "We do not merely shape gold; we forge the quiet witnesses to your family's greatest joys."
          </p>
        </div>
      </section>

      {/* 2. Origin */}
      <section id="heritage" className="py-32 px-6 md:px-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2 reveal-on-scroll opacity-0">
          <h3 className="jewellery-font-sans text-xs tracking-[0.3em] uppercase jewellery-gold-text mb-4">The Genesis</h3>
          <h2 className="jewellery-font-serif text-4xl md:text-6xl mb-8 leading-tight">Born from Fire<br/>and Devotion</h2>
          <div className="w-12 h-px jewellery-gold-bg mb-8" />
          <p className="text-lg leading-relaxed opacity-80 mb-6 font-light">
            In the winding, spice-scented alleys of the old gold souk, Ustad Tanveer Ahmed struck his first anvil in 1963. He was not a merchant, but a master craftsman whose hands bore the permanent calluses of dedication.
          </p>
          <p className="text-lg leading-relaxed opacity-80 font-light">
            House of Zain began as a single wooden workbench illuminated by a solitary oil lamp. It was here that the Ustad pioneered his signature filigree—so delicate it seemed woven from golden silk, yet resilient enough to be passed from mother to daughter for generations.
          </p>
        </div>
        <div className="md:w-1/2 relative reveal-on-scroll opacity-0 delay-200">
          <div className="aspect-[3/4] bg-[#111] p-2 rounded-t-full border border-[#D4AF37]/20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#D4AF37]/10 to-transparent" />
            <div className="w-full h-full rounded-t-full border border-[#D4AF37]/40 flex items-center justify-center p-8 text-center">
              <p className="jewellery-font-serif text-3xl italic text-[#D4AF37]">The original anvil still rests at the heart of our modern workshop, a grounding force for every piece we create.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Business Journey */}
      <section className="py-24 bg-[#111] px-6 md:px-20 border-y border-[#D4AF37]/10">
        <div className="max-w-5xl mx-auto text-center reveal-on-scroll opacity-0">
          <h3 className="jewellery-font-sans text-xs tracking-[0.3em] uppercase jewellery-gold-text mb-4">Our Legacy</h3>
          <h2 className="jewellery-font-serif text-4xl md:text-5xl mb-12">Six Decades of Trust</h2>
          <p className="text-xl md:text-2xl jewellery-font-serif leading-relaxed opacity-90 max-w-4xl mx-auto italic">
            What began as a solitary master's pursuit has blossomed into a generational atelier. We survived shifting empires, changing eras, and the modernization of our craft by refusing to compromise on one singular element: the integrity of our gold and the honesty of our word.
          </p>
        </div>
      </section>

      {/* 4. Milestones */}
      <section id="milestones" className="py-32 px-6 md:px-20 relative max-w-6xl mx-auto">
        <div className="text-center mb-20 reveal-on-scroll opacity-0">
          <h2 className="jewellery-font-serif text-5xl mb-4">The Ledger of Time</h2>
          <div className="w-16 h-px jewellery-gold-bg mx-auto" />
        </div>

        <div className="relative timeline-line">
          {[
            { year: "1963", title: "The First Workbench", desc: "Ustad Tanveer opens his first atelier, accepting only five commissions a year to ensure absolute perfection." },
            { year: "1981", title: "The Royal Commission", desc: "House of Zain is selected to craft the ceremonial wedding collar for the regional royal family, cementing our reputation for exceptional high jewellery." },
            { year: "1998", title: "Passing the Hammer", desc: "The second generation officially takes the helm, bringing modern gemological science to traditional 22-karat gold-smithing." },
            { year: "2015", title: "The Grand Boutique", desc: "Opening of our flagship experiential gallery, designed not as a store, but as an exhibition of wearable art." }
          ].map((milestone, i) => (
            <div key={i} className={`relative flex flex-col md:flex-row items-center justify-between mb-24 reveal-on-scroll opacity-0 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="hidden md:block md:w-5/12" />
              <div className="absolute left-6 md:left-1/2 w-4 h-4 rounded-full jewellery-gold-bg transform -translate-x-1/2 z-10 shadow-[0_0_15px_rgba(212,175,55,0.5)]" />
              <div className="md:w-5/12 pl-16 md:pl-0 pt-2 md:pt-0">
                <div className={`flex flex-col ${i % 2 === 0 ? 'md:items-start md:text-left' : 'md:items-end md:text-right'}`}>
                  <span className="jewellery-font-serif text-4xl jewellery-gold-text mb-2">{milestone.year}</span>
                  <h4 className="text-xl uppercase tracking-widest mb-3">{milestone.title}</h4>
                  <p className="opacity-70 font-light leading-relaxed">{milestone.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. The People */}
      <section id="artisans" className="py-32 bg-[#0A0A0A] px-6 md:px-20 border-t border-[#D4AF37]/20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center reveal-on-scroll opacity-0">
            <h3 className="jewellery-font-sans text-xs tracking-[0.3em] uppercase jewellery-gold-text mb-4">The Masters</h3>
            <h2 className="jewellery-font-serif text-5xl">Hands of Gold</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { name: "Ustad Tanveer Ahmed", role: "The Founder & Patriarch", note: "Though his hands rest now, every apprentice must study his original 1963 sketches before touching a crucible." },
              { name: "Zainab Ahmed", role: "Master Designer", note: "Translating ancient motifs into contemporary heirlooms. Her sketches are poetry before they become gold." },
              { name: "Ibrahim 'The Silent'", role: "Head Gemsetter", note: "A master who speaks only through his work. He has set over ten thousand stones without a single flaw." }
            ].map((person, i) => (
              <div key={i} className="group reveal-on-scroll opacity-0 border border-[#D4AF37]/10 p-8 hover:border-[#D4AF37]/50 transition-colors duration-500 bg-[#111]">
                <div className="w-16 h-16 rounded-full border border-[#D4AF37] flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500">
                  <span className="jewellery-font-serif text-2xl text-[#D4AF37]">{person.name.charAt(0)}</span>
                </div>
                <h4 className="text-center text-xl uppercase tracking-wider mb-2">{person.name}</h4>
                <p className="text-center jewellery-gold-text text-sm tracking-widest mb-6">{person.role}</p>
                <Separator className="bg-[#D4AF37]/20 mb-6" />
                <p className="text-center opacity-70 font-light italic leading-relaxed text-sm">
                  "{person.note}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Optional - Certifications & Press */}
      <section className="py-16 bg-black border-y border-[#D4AF37]/10">
        <div className="max-w-4xl mx-auto px-6 text-center reveal-on-scroll opacity-0">
          <h3 className="jewellery-font-sans text-[10px] tracking-[0.4em] uppercase text-white/50 mb-10">Honoured & Recognized By</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            <span className="jewellery-font-serif text-2xl">VOGUE Luxury</span>
            <span className="jewellery-font-serif text-2xl">BIS Hallmark Gold</span>
            <span className="jewellery-font-serif text-2xl">The Artisan Guild</span>
          </div>
        </div>
      </section>

      {/* 6. Where We Are */}
      <section id="contact" className="py-32 px-6 bg-[#050505] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#D4AF37]/5 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10 reveal-on-scroll opacity-0">
          <h2 className="jewellery-font-serif text-5xl mb-12">Visit the Boutique</h2>
          
          <div className="grid md:grid-cols-2 gap-16 text-left border border-[#D4AF37]/20 p-12 bg-[#111]/80 backdrop-blur-sm">
            <div>
              <h4 className="jewellery-font-sans text-sm tracking-[0.2em] uppercase jewellery-gold-text mb-6">Location</h4>
              <p className="opacity-80 font-light leading-relaxed text-lg">
                The Heritage Gallery<br />
                42 Goldsmith's Avenue<br />
                Artisan District, 10024
              </p>
            </div>
            
            <div>
              <h4 className="jewellery-font-sans text-sm tracking-[0.2em] uppercase jewellery-gold-text mb-6">Private Appointments</h4>
              <p className="opacity-80 font-light leading-relaxed text-lg mb-4">
                We receive clients by appointment to ensure absolute privacy and attention.
              </p>
              <a href="mailto:concierge@houseofzain.com" className="text-white border-b border-[#D4AF37] pb-1 hover:text-[#D4AF37] transition-colors">
                concierge@houseofzain.com
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black text-center border-t border-[#D4AF37]/30 px-6">
        <div className="jewellery-font-serif text-2xl jewellery-gold-text mb-6">House of Zain</div>
        <p className="text-xs tracking-[0.2em] uppercase opacity-40">
          © {new Date().getFullYear()} House of Zain Gold. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
