import React from "react";
import "./_group.css";

export default function Kashmir() {
  return (
    <div 
      className="min-h-screen bg-[#FDFBF7] text-[#1E3A5F] font-sans selection:bg-[#B91C1C] selection:text-white"
      style={{
        "--pattern-color": "rgba(30, 58, 95, 0.05)"
      } as React.CSSProperties}
    >
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500&display=swap" rel="stylesheet" />
      
      <style dangerouslySetInnerHTML={{__html: `
        .font-serif { font-family: 'Cormorant Garamond', serif; }
        .font-sans { font-family: 'Outfit', sans-serif; }
      `}} />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden py-24 px-6 text-center">
        <div className="absolute inset-0 z-0 kashmir-bg-pattern opacity-50" />
        
        <div className="z-10 w-full max-w-4xl mx-auto flex flex-col items-center animate-fade-in-up">
          <span className="text-[#B91C1C] font-sans tracking-[0.2em] text-sm uppercase mb-6 font-medium">Est. 1965 • Srinagar, Kashmir</span>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-[#0F2942] mb-8 leading-tight">
            Valley Craft <br />Emporium
          </h1>
          <p className="font-serif italic text-xl md:text-3xl text-[#2B4B29] max-w-2xl leading-relaxed">
            "A thread pulled from the valley, a color painted from the lakes—our hands do not merely craft; they remember."
          </p>
        </div>

        <div className="z-10 mt-16 w-full max-w-5xl animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <div className="relative aspect-[16/9] w-full overflow-hidden kashmir-border p-2 bg-white shadow-2xl">
            <img 
              src="/__mockup/images/kashmir-hero.png" 
              alt="Intricate Kashmiri crafts" 
              className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
            />
          </div>
        </div>
      </section>

      {/* Origin Section */}
      <section className="py-24 px-6 bg-[#0F2942] text-[#FDFBF7] relative overflow-hidden">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <h2 className="text-4xl md:text-6xl font-serif text-[#D4AF37]">The Origin</h2>
            <div className="space-y-6 font-sans text-lg text-white/80 leading-relaxed font-light">
              <p>
                In the labyrinthine alleys of Downtown Srinagar, where the scent of cedarwood mingles with morning mist, the tradition began. Long before it was a business, it was a way of life—a quiet devotion to the loom, the chisel, and the brush.
              </p>
              <p>
                Ghulam Hassan Mir sat by the Jhelum river, tracing the Chinar leaves that fell onto his workbench. He didn't just want to sell papier-mâché; he wanted to preserve the soul of Kashmir in a rapidly changing world.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="aspect-[3/4] bg-[#1E3A5F] kashmir-border p-1">
              <div className="w-full h-full bg-[#0A1A2A] flex items-center justify-center p-6 text-center">
                <span className="font-serif italic text-[#D4AF37] text-2xl">Pashmina</span>
              </div>
            </div>
            <div className="aspect-[3/4] bg-[#1E3A5F] kashmir-border p-1 translate-y-8">
              <div className="w-full h-full bg-[#2B4B29] flex items-center justify-center p-6 text-center">
                <span className="font-serif italic text-[#D4AF37] text-2xl">Papier-Mâché</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Journey */}
      <section className="py-32 px-6 kashmir-bg-pattern">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <span className="text-[#B91C1C] font-sans tracking-widest text-sm uppercase">Our Journey</span>
          <h2 className="text-4xl md:text-6xl font-serif text-[#0F2942]">From the Shikaras to the World</h2>
          <p className="font-sans text-lg md:text-xl text-[#1E3A5F]/80 leading-relaxed font-light">
            What started as a modest stall near the Dal Lake in 1965 grew into a sanctuary for Kashmir's master artisans. As generations shifted, so did we—bridging the gap between the isolated artisan in the valley and the connoisseur across the oceans, ensuring that every knot tied and every motif painted received its true worth.
          </p>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 px-6 bg-white relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-center text-[#0F2942] mb-16">The Craftsman's Log</h2>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#D4AF37] before:to-transparent">
            
            {[
              { year: "1965", title: "The First Stall", desc: "Ghulam Hassan Mir opens a modest stall selling handmade walnut wood boxes near Dal Lake." },
              { year: "1982", title: "Master Artisan Collective", desc: "Formed a cooperative of 50 families dedicated to authentic Kani shawl weaving." },
              { year: "1998", title: "Crossing Oceans", desc: "First major international export of chain-stitch rugs to Europe." },
              { year: "2015", title: "Heritage Recognition", desc: "Awarded the GI (Geographical Indication) Tag certification for pure Pashmina." },
            ].map((milestone, i) => (
              <div key={milestone.year} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active`}>
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white bg-[#0F2942] text-[#D4AF37] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-2 h-2 bg-[#D4AF37] rounded-full"></div>
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-[#FDFBF7] kashmir-border">
                  <div className="font-sans text-[#B91C1C] font-bold mb-1">{milestone.year}</div>
                  <h3 className="font-serif text-2xl text-[#0F2942] mb-2">{milestone.title}</h3>
                  <p className="font-sans text-[#1E3A5F]/70 text-sm md:text-base">{milestone.desc}</p>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </section>

      {/* The People */}
      <section className="py-24 px-6 bg-[#2B4B29] text-[#FDFBF7]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-serif text-[#D4AF37] mb-6">The Hands That Remember</h2>
            <p className="font-sans text-white/80 max-w-2xl mx-auto">Without the artisan, the craft is merely a concept. Meet the custodians of our heritage.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Ghulam Hassan Mir", role: "The Founder", note: "A visionary who saw art where others saw mere objects." },
              { name: "Abdul Rashid", role: "Master Weaver (Kani)", note: "His fingers move with the memory of a thousand intricate patterns." },
              { name: "Zooni Begum", role: "Papier-Mâché Artist", note: "Paints the chinar leaves with colors ground from semi-precious stones." }
            ].map((person, i) => (
              <div key={i} className="bg-[#1D361B] p-8 kashmir-border border-[#D4AF37]/30 text-center flex flex-col items-center">
                <div className="w-20 h-20 rounded-full bg-[#0F2942] flex items-center justify-center mb-6 border border-[#D4AF37]/50">
                  <span className="font-serif text-2xl text-[#D4AF37]">{person.name.charAt(0)}</span>
                </div>
                <h3 className="font-serif text-2xl text-white mb-2">{person.name}</h3>
                <span className="text-[#D4AF37] font-sans text-sm uppercase tracking-wider mb-4 block">{person.role}</span>
                <p className="font-sans text-white/70 italic text-sm">{person.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Heritage Certifications */}
      <section className="py-20 px-6 bg-[#0F2942] border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="font-sans uppercase tracking-[0.2em] text-[#D4AF37] text-sm mb-8">Honours & Heritage</h3>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="text-white font-serif text-xl border border-white/20 p-4">UNESCO Recognized</div>
            <div className="text-white font-serif text-xl border border-white/20 p-4">GI Tag Certified</div>
            <div className="text-white font-serif text-xl border border-white/20 p-4">Master Craftsman Award '92</div>
          </div>
        </div>
      </section>

      {/* Where We Are / Footer */}
      <footer className="py-24 px-6 bg-[#0A1A2A] text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl font-serif text-[#D4AF37] mb-8">Visit the Emporium</h2>
            <div className="space-y-4 font-sans text-white/70 font-light">
              <p>Residency Road, Srinagar</p>
              <p>Jammu & Kashmir, 190001</p>
              <p className="mt-8 pt-8 border-t border-white/10">
                <span className="block text-[#D4AF37] mb-2 uppercase tracking-wider text-sm">For Enquiries</span>
                heritage@valleycraft.com <br/>
                +91 194 245 0000
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-between">
            <p className="font-serif italic text-2xl text-white/50 leading-relaxed mb-8">
              "We do not sell objects. We pass on centuries of patience, woven and carved into existence."
            </p>
            <div className="mt-auto">
              <span className="text-4xl font-serif text-white">Valley Craft</span>
              <p className="text-white/40 text-sm mt-2 font-sans">© {new Date().getFullYear()} Valley Craft Emporium. All traditions reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
