import React from "react";
import "./_group.css";
import { MapPin, Phone, Mail, Award, Navigation, Star, Globe, Clock } from "lucide-react";

export function Carpets() {
  return (
    <div className="carpets-theme carpets-bg-ivory font-body min-h-screen text-[#2a2424] overflow-x-hidden selection:bg-[#671f28] selection:text-[#Fdfbf7]">
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Lora:ital,wght@0,400;0,500;0,600;1,400&display=swap"
        rel="stylesheet"
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-24 carpet-pattern-bg carpets-text-ivory">
        <div className="absolute inset-0 z-0">
          <img
            src="/__mockup/images/carpets-hero.png"
            alt="Magnificent rug showroom"
            className="w-full h-full object-cover opacity-30 mix-blend-multiply"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#671f28]/80 via-transparent to-[#671f28]/90" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center fade-in-up">
          <div className="mb-6 flex items-center justify-center space-x-4">
            <div className="h-[1px] w-12 bg-[#d4af37]" />
            <span className="text-[#d4af37] tracking-widest uppercase text-sm font-semibold">Est. 1971</span>
            <div className="h-[1px] w-12 bg-[#d4af37]" />
          </div>
          <h1 className="font-heading text-6xl md:text-8xl font-medium mb-6 leading-tight tracking-tight drop-shadow-md">
            Noor Carpets & Rugs
          </h1>
          <p className="font-heading text-2xl md:text-4xl italic text-[#d4af37] font-light max-w-2xl mx-auto leading-snug">
            "A million knots, a century of stories. We weave history into the floorboards of the present."
          </p>
        </div>
      </section>

      {/* Origin Section */}
      <section className="py-24 px-6 relative carpets-bg-ivory">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <div className="aspect-[3/4] bg-[#f0ebe1] p-4 relative z-10 shadow-xl border border-[#d4af37]/20">
              <div className="w-full h-full border border-[#671f28]/20 flex items-center justify-center p-8 text-center bg-[#Fdfbf7]">
                <p className="font-heading text-xl italic carpets-text-burgundy">
                  "It began with a single loom in the courtyard of a small home in Lahore. The threads were coarse, but the vision was grand."
                </p>
              </div>
            </div>
            <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-[#d4af37] z-0" />
          </div>
          <div className="order-1 md:order-2">
            <h2 className="font-heading text-4xl md:text-5xl carpets-text-burgundy mb-8">The Origin</h2>
            <p className="text-lg leading-relaxed mb-6">
              Founded by Ustad Khalid Noor in the autumn of 1971, Noor Carpets was born out of a profound reverence for the ancestral craft of hand-knotting. What started as a modest endeavor in a sunlit courtyard soon became a sanctuary for the finest artisans of the region.
            </p>
            <p className="text-lg leading-relaxed">
              Ustad Khalid believed that a rug is not merely a covering for the floor, but a canvas that records the passage of time, the spirit of its maker, and the cultural heartbeat of its origin.
            </p>
          </div>
        </div>
      </section>

      {/* Business Journey */}
      <section className="py-24 px-6 carpets-bg-ivory-dark relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="flex items-center justify-center mb-6">
            <Star className="w-6 h-6 carpets-text-saffron" />
          </div>
          <h2 className="font-heading text-4xl md:text-5xl carpets-text-burgundy mb-8">A Journey of Threads</h2>
          <p className="text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
            From the bustling bazaars of Lahore to the grand exhibition halls of Europe, our journey has been woven with perseverance and passion. We spent decades curating relationships with master dyers, spinners, and weavers across Central and South Asia.
          </p>
          <div className="carpet-border-y inline-block mx-auto">
            <p className="font-heading italic text-2xl carpets-text-burgundy px-8">
              Three generations of merchants. Thousands of masterpieces.
            </p>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 px-6 carpets-bg-ivory">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl carpets-text-burgundy mb-16 text-center">Milestones</h2>
          
          <div className="space-y-16 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#671f28]/30 before:to-transparent">
            {[
              { year: "1971", title: "The First Loom", desc: "Ustad Khalid establishes the first workshop in Lahore, employing three master weavers." },
              { year: "1985", title: "The Silk Road Collection", desc: "Launch of our inaugural pure silk collection, garnering international acclaim for its unprecedented knot density." },
              { year: "1998", title: "The Grand Showroom", desc: "Opening of our flagship multi-story showroom, designed to display monumental palace-sized carpets." },
              { year: "2015", title: "Heritage Preservation", desc: "Establishment of the Noor Foundation to support aging weavers and preserve natural dyeing techniques." }
            ].map((milestone, i) => (
              <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#Fdfbf7] carpets-bg-burgundy text-[#d4af37] shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10">
                  <div className="w-2 h-2 bg-[#d4af37] rounded-full transform rotate-45" />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white border border-[#671f28]/10 shadow-sm rounded-sm">
                  <div className="flex items-baseline gap-4 mb-2">
                    <span className="font-heading text-3xl font-bold carpets-text-saffron">{milestone.year}</span>
                    <h3 className="font-heading text-2xl carpets-text-burgundy">{milestone.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The People */}
      <section className="py-24 px-6 carpets-bg-sapphire carpets-text-ivory relative">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#Fdfbf7 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 className="font-heading text-4xl md:text-5xl text-[#d4af37] mb-4 text-center">The Hands That Weave</h2>
          <p className="text-center text-lg mb-16 max-w-2xl mx-auto text-[#f0ebe1]/80">
            A carpet is only as brilliant as the soul who crafted it. Meet the guardians of our heritage.
          </p>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Ustad Khalid Noor", role: "The Founder", note: "Whose vision laid the warp and weft of our legacy." },
              { name: "Amina Bibi", role: "Master Dyer", note: "Guardian of the secret pomegranate and madder root recipes." },
              { name: "Tariq Noor", role: "Curator & Director", note: "Bridging the ancestral craft with the modern collector." }
            ].map((person, i) => (
              <div key={i} className="flex flex-col items-center text-center group">
                <div className="w-48 h-48 rounded-full border-4 border-[#d4af37]/30 p-2 mb-6 transition-transform duration-500 group-hover:scale-105 group-hover:border-[#d4af37]">
                  <div className="w-full h-full rounded-full bg-[#152c4d] flex items-center justify-center">
                     <span className="font-heading text-4xl text-[#d4af37]/50">{person.name.charAt(0)}</span>
                  </div>
                </div>
                <h3 className="font-heading text-2xl mb-1">{person.name}</h3>
                <span className="text-[#d4af37] text-sm uppercase tracking-widest mb-4">{person.role}</span>
                <p className="text-[#f0ebe1]/80 italic max-w-xs">{person.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards (Optional) */}
      <section className="py-16 px-6 border-b border-[#671f28]/10 carpets-bg-ivory text-center">
        <h2 className="font-heading text-3xl carpets-text-burgundy mb-10">Recognition & Heritage</h2>
        <div className="flex flex-wrap justify-center gap-12 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="flex flex-col items-center">
            <Award className="w-12 h-12 mb-3 carpets-text-saffron" />
            <span className="font-heading text-xl">Cultural Heritage Award 2018</span>
          </div>
          <div className="flex flex-col items-center">
            <Globe className="w-12 h-12 mb-3 carpets-text-saffron" />
            <span className="font-heading text-xl">International Guild of Weavers</span>
          </div>
        </div>
      </section>

      {/* Where We Are */}
      <section className="py-24 px-6 carpets-bg-ivory-dark">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-heading text-4xl md:text-5xl carpets-text-burgundy mb-8">Visit the Showroom</h2>
            <p className="text-lg leading-relaxed mb-8">
              To truly understand a hand-knotted carpet, one must touch the lanolin-rich wool, see how the silk catches the light, and trace the intricate borders by hand. We invite you to experience our collection in person.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 mt-1 carpets-text-saffron" />
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-sm text-[#671f28] mb-1">Location</h4>
                  <p className="text-lg font-heading">14 Heritage Road, Gulberg III<br/>Lahore, 54660</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 mt-1 carpets-text-saffron" />
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-sm text-[#671f28] mb-1">Hours</h4>
                  <p className="text-lg font-heading">Monday – Saturday: 10:00 AM – 8:00 PM<br/>Sundays by private appointment</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 mt-1 carpets-text-saffron" />
                <div>
                  <h4 className="font-bold uppercase tracking-wider text-sm text-[#671f28] mb-1">Contact</h4>
                  <p className="text-lg font-heading">+92 42 111 222 333<br/>concierge@noorcarpets.com</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#Fdfbf7] p-2 border border-[#671f28]/10 shadow-sm relative">
            <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#d4af37] -mt-1 -ml-1"></div>
            <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#d4af37] -mb-1 -mr-1"></div>
            <div className="w-full h-full min-h-[400px] bg-[#f0ebe1] flex items-center justify-center">
              <div className="text-center p-8">
                 <Navigation className="w-12 h-12 mx-auto mb-4 carpets-text-burgundy opacity-50" />
                 <p className="font-heading text-xl carpets-text-burgundy italic">Interactive Map View</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center carpets-bg-burgundy carpets-text-ivory font-heading text-lg">
        <p>© {new Date().getFullYear()} Noor Carpets & Rugs. Woven with devotion since 1971.</p>
      </footer>
    </div>
  );
}
