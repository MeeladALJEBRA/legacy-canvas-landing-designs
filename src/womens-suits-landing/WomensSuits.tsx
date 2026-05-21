import React from "react";
import { MapPin, Phone, Mail, Star, Scissors, Quote } from "lucide-react";
import "./_group.css";

export default function WomensSuits() {
  return (
    <div className="min-h-screen bg-[#f9f6f0] text-[#2c121f] selection:bg-[#d5b881] selection:text-[#2c121f]">
      {/* Fonts */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,600&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap"
        rel="stylesheet"
      />
      <style dangerouslySetInnerHTML={{ __html: `
        .font-serif { font-family: 'Cormorant Garamond', serif; }
        .font-sans { font-family: 'Plus Jakarta Sans', sans-serif; }
      `}} />

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#2c121f]/95 backdrop-blur-sm border-b border-[#d5b881]/20 text-[#f9f6f0]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-2xl font-serif tracking-widest uppercase">Niloofar Couture</div>
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-sans font-medium text-[#d5b881]">
            <a href="#origin" className="hover:text-white transition-colors">Origin</a>
            <a href="#atelier" className="hover:text-white transition-colors">Atelier</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <button className="bg-[#d5b881] text-[#2c121f] px-6 py-2 text-sm uppercase tracking-widest font-sans font-semibold hover:bg-white transition-colors">
            Book Consultation
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-[#2c121f] text-[#f9f6f0] pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-40 mix-blend-overlay">
          <img 
            src="/__mockup/images/womens-suits-hero.png" 
            alt="Confident woman in a tailored plum suit" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#2c121f] via-[#2c121f]/80 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif leading-[1.1] mb-8 animate-fade-in-up">
              Power,<br />
              <span className="text-[#d5b881] italic">Tailored.</span>
            </h1>
            <div className="flex items-start gap-4 mb-10 opacity-0 animate-fade-in-up animation-delay-200">
              <Quote className="text-[#d5b881] w-8 h-8 flex-shrink-0 opacity-50" />
              <p className="text-xl md:text-2xl font-serif font-light leading-relaxed border-l border-[#d5b881]/30 pl-6">
                "We do not design garments. We engineer armor for the modern woman's most defining moments."
                <span className="block mt-4 text-sm font-sans uppercase tracking-widest text-[#d5b881]">— Saba Niloofar</span>
              </p>
            </div>
            <div className="opacity-0 animate-fade-in-up animation-delay-400">
              <button className="border border-[#d5b881] text-[#d5b881] px-8 py-4 text-sm uppercase tracking-widest font-sans hover:bg-[#d5b881] hover:text-[#2c121f] transition-all duration-300">
                Discover The Collection
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Section */}
      <section id="origin" className="py-24 md:py-32 relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[#d5b881] text-sm uppercase tracking-widest font-sans mb-6 flex items-center gap-4">
              <span className="w-12 h-px bg-[#d5b881]"></span>
              The Genesis
            </div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 text-[#2c121f]">The First Cut</h2>
            <div className="space-y-6 text-lg font-sans text-gray-700 font-light leading-relaxed">
              <p>
                In 2001, Saba Niloofar noticed a glaring void in women's executive wear. The choices were stark: either adopt a miniaturised version of men's tailoring, or sacrifice authority for 'feminine' aesthetics.
              </p>
              <p>
                Niloofar Couture was born from a singular conviction: that a woman's power is intrinsic, and her clothing should amplify it, not disguise it. We began with a single master tailor and a commitment to architectural precision.
              </p>
              <p>
                Every lapel, every dart, every seam is considered. We don't just dress women; we equip them for the boardrooms, the stages, and the ceremonies where history is made.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] bg-[#4a2334] relative z-10 p-8 flex flex-col justify-end">
              <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1581375221882-74d3f52136e0?q=80&w=2940&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity"></div>
              <Scissors className="text-[#d5b881] w-12 h-12 mb-6" />
              <h3 className="text-3xl font-serif text-[#f9f6f0] mb-2">Bespoke Mastery</h3>
              <p className="font-sans text-[#f9f6f0]/80 text-sm tracking-wide">Where craft meets conviction.</p>
            </div>
            <div className="absolute -bottom-8 -left-8 w-full h-full border border-[#2c121f] z-0"></div>
          </div>
        </div>
      </section>

      {/* Business Journey */}
      <section className="py-24 bg-[#2c121f] text-[#f9f6f0] text-center px-6">
        <div className="max-w-4xl mx-auto">
          <Star className="text-[#d5b881] w-8 h-8 mx-auto mb-8" />
          <h2 className="text-3xl md:text-5xl font-serif mb-8">From a Single Tailoring Block to a House of Empowerment</h2>
          <p className="text-lg md:text-xl font-sans font-light text-white/80 leading-relaxed max-w-2xl mx-auto">
            What started as bespoke commissions for a select group of female executives has grown into a definitive voice in formal wear. Today, Niloofar Couture represents the pinnacle of tailoring, bridging traditional techniques with contemporary demands.
          </p>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-[#2c121f]">The Chapters</h2>
            <div className="w-24 h-px bg-[#d5b881] mx-auto mt-8"></div>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-1/2 -ml-px top-0 bottom-0 w-px bg-[#d5b881]/30 hidden md:block"></div>
            
            <div className="space-y-16">
              {[
                { year: "2001", title: "The Foundation", desc: "Saba Niloofar opens her first private studio, catering exclusively to C-suite women." },
                { year: "2005", title: "The 'Executive' Silhouette", desc: "Launch of our signature strong-shoulder, nipped-waist blazer that redefined power dressing." },
                { year: "2012", title: "The Bridal Suit", desc: "Pioneering the formal bridal suit, offering an elegant alternative to the traditional gown." },
                { year: "2023", title: "The Grand Atelier", desc: "Opening of our flagship experiential tailoring house in the heart of the luxury district." }
              ].map((milestone, i) => (
                <div key={i} className={`relative flex flex-col md:flex-row items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className="md:w-1/2 flex justify-center md:justify-start md:px-12 w-full mb-8 md:mb-0">
                    <div className={`text-center md:text-left ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                      <span className="text-[#d5b881] font-sans text-xl font-bold tracking-widest block mb-2">{milestone.year}</span>
                      <h4 className="text-2xl font-serif text-[#2c121f] mb-3">{milestone.title}</h4>
                      <p className="font-sans text-gray-600 font-light leading-relaxed">{milestone.desc}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex absolute left-1/2 -ml-3 w-6 h-6 rounded-full border-4 border-white bg-[#d5b881] items-center justify-center z-10"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The People */}
      <section id="atelier" className="py-24 bg-[#f9f6f0]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 md:flex justify-between items-end">
            <div>
              <div className="text-[#d5b881] text-sm uppercase tracking-widest font-sans mb-4 flex items-center gap-4">
                <span className="w-12 h-px bg-[#d5b881]"></span>
                The Artisans
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#2c121f]">Hands of Mastery</h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] overflow-hidden mb-6 relative bg-[#2c121f]">
                <img 
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=988&auto=format&fit=crop" 
                  alt="Saba Niloofar" 
                  className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:scale-105 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-700"
                />
              </div>
              <h4 className="text-2xl font-serif text-[#2c121f]">Saba Niloofar</h4>
              <p className="text-[#d5b881] font-sans uppercase tracking-widest text-xs mt-2 mb-4">Founder & Creative Director</p>
              <p className="font-sans text-gray-600 font-light leading-relaxed">The visionary behind the silhouette. Saba's obsession with structural perfection and female empowerment drives every collection.</p>
            </div>
            <div className="group cursor-pointer md:mt-24">
              <div className="aspect-[4/5] overflow-hidden mb-6 relative bg-[#2c121f]">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1061&auto=format&fit=crop" 
                  alt="Elena Rostova" 
                  className="w-full h-full object-cover mix-blend-luminosity opacity-80 group-hover:scale-105 group-hover:opacity-100 group-hover:mix-blend-normal transition-all duration-700"
                />
              </div>
              <h4 className="text-2xl font-serif text-[#2c121f]">Elena Rostova</h4>
              <p className="text-[#d5b881] font-sans uppercase tracking-widest text-xs mt-2 mb-4">Master Tailor</p>
              <p className="font-sans text-gray-600 font-light leading-relaxed">With 30 years of Savile Row experience, Elena translates Saba's vision into mathematical reality. Her hands craft the armor.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Awards / Press */}
      <section className="py-20 border-y border-[#d5b881]/20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm font-sans uppercase tracking-widest text-gray-400 mb-10">Recognised For Excellence</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale">
            {['VOGUE', 'HARPER\'S BAZAAR', 'FINANCIAL TIMES', 'FORBES'].map((brand, i) => (
              <span key={i} className="text-2xl font-serif font-bold tracking-widest">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Where We Are */}
      <section id="contact" className="py-24 bg-[#2c121f] text-[#f9f6f0]">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-12">The Atelier</h2>
            <div className="space-y-8 font-sans font-light text-lg">
              <div className="flex items-start gap-6">
                <MapPin className="w-6 h-6 text-[#d5b881] flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-white">Niloofar Couture Flagship</p>
                  <p className="text-white/70">42 Beauchamp Place<br/>Knightsbridge, London<br/>SW3 1NX</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <Phone className="w-6 h-6 text-[#d5b881] flex-shrink-0" />
                <p className="text-white/70">+44 (0) 20 7123 4567</p>
              </div>
              <div className="flex items-center gap-6">
                <Mail className="w-6 h-6 text-[#d5b881] flex-shrink-0" />
                <p className="text-white/70">appointments@niloofarcouture.com</p>
              </div>
            </div>
          </div>
          <div className="bg-white/5 p-8 md:p-12 border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-serif mb-6">Request a Consultation</h3>
            <p className="font-sans font-light text-white/70 mb-8 text-sm">
              True elegance requires time. We welcome you to experience our bespoke service. Consultations are strictly by appointment.
            </p>
            <form className="space-y-4 font-sans">
              <input 
                type="text" 
                placeholder="Name" 
                className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder:text-white/40 focus:outline-none focus:border-[#d5b881] transition-colors"
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-white/20 pb-2 text-white placeholder:text-white/40 focus:outline-none focus:border-[#d5b881] transition-colors"
              />
              <select defaultValue="" className="w-full bg-transparent border-b border-white/20 pb-2 text-white/70 focus:outline-none focus:border-[#d5b881] transition-colors appearance-none">
                <option value="" disabled>Nature of Enquiry</option>
                <option value="bespoke" className="bg-[#2c121f]">Bespoke Suiting</option>
                <option value="bridal" className="bg-[#2c121f]">Bridal Formal Wear</option>
                <option value="collection" className="bg-[#2c121f]">Current Collection</option>
              </select>
              <button 
                type="button" 
                className="w-full bg-[#d5b881] text-[#2c121f] py-4 mt-8 uppercase tracking-widest text-sm font-bold hover:bg-white transition-colors"
              >
                Submit Request
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1a0a10] text-white/50 py-8 border-t border-white/10 text-center font-sans text-sm">
        <p>&copy; {new Date().getFullYear()} Niloofar Couture. All rights reserved.</p>
      </footer>
    </div>
  );
}