import React, { useEffect } from 'react';
import { ArrowRight, MapPin, Mail, Phone, Instagram, Linkedin, ArrowUpRight } from "lucide-react";
import './_group.css';

export function Modern() {
  return (
    <div className="modern-theme min-h-screen bg-[#0a0a0a] text-white selection:bg-white selection:text-black overflow-hidden font-sans">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500&display=swap');
        .font-display { font-family: 'Space Grotesk', sans-serif; }
        .font-body { font-family: 'Inter', sans-serif; }
      `}} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 p-6 md:p-10 flex justify-between items-center z-50 mix-blend-difference text-white">
        <div className="font-display font-bold text-xl tracking-tighter uppercase">RAZA</div>
        <div className="text-sm font-body tracking-widest uppercase opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
          Est. 2014
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex flex-col justify-end p-6 md:p-12 lg:p-24 pb-24 md:pb-32">
        <div className="absolute inset-0 z-0">
          <img 
            src="/__mockup/images/modern-hero.png" 
            alt="Raza Design Studio Interior" 
            className="w-full h-full object-cover opacity-40 modern-image-reveal"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl">
          <h1 className="font-display text-5xl md:text-8xl lg:text-[10rem] leading-[0.9] font-bold tracking-tighter uppercase modern-reveal">
            Design<br/>
            <span className="text-transparent" style={{ WebkitTextStroke: '2px white' }}>Unbound.</span>
          </h1>
          <p className="mt-8 md:mt-12 text-lg md:text-2xl font-body max-w-2xl text-[#a3a3a3] font-light leading-relaxed modern-reveal modern-delay-1 border-l border-white/20 pl-6">
            "We build spaces that refuse to be ignored. Architecture and interior design for the bold, the driven, and the visionary."
          </p>
        </div>
      </section>

      {/* Origin Section */}
      <section className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-[#171717]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          <div className="lg:col-span-5">
            <h2 className="font-display text-4xl md:text-6xl font-bold tracking-tighter uppercase mb-6">The Genesis</h2>
            <p className="font-body text-[#a3a3a3] text-lg leading-relaxed font-light mb-8">
              It started in a cramped warehouse in East London with nothing but a drafting table and an obsession with light. We saw a world cluttered with safe choices and decided to build something different. 
            </p>
            <p className="font-body text-[#a3a3a3] text-lg leading-relaxed font-light">
              Raza was founded on a singular belief: space dictates feeling. If you want to change how people work, live, or think, you have to change the geometry around them.
            </p>
          </div>
          <div className="lg:col-span-7 aspect-square md:aspect-[4/3] bg-[#222] relative overflow-hidden group">
             {/* Placeholder for origin image */}
             <div className="absolute inset-0 bg-gradient-to-tr from-black/80 to-transparent z-10"></div>
             <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" alt="Drafting table" className="w-full h-full object-cover grayscale transition-transform duration-1000 group-hover:scale-105" />
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="py-24 md:py-40 px-6 md:px-12 lg:px-24 border-y border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-sm tracking-[0.3em] uppercase text-[#a3a3a3] mb-8">Our Trajectory</h2>
          <p className="font-display text-3xl md:text-5xl lg:text-6xl leading-tight font-medium tracking-tight">
            FROM A SINGLE ROOM TO REDEFINING THE CITY'S SKYLINE. WE DIDN'T JUST GROW; WE EVOLVED, SHATTERING EXPECTATIONS AT EVERY TURN.
          </p>
        </div>
      </section>

      {/* Milestones Section */}
      <section className="py-24 md:py-40 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 md:mb-32">
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter uppercase">The Eras</h2>
            <p className="font-body text-[#a3a3a3] text-lg max-w-sm mt-6 md:mt-0">Defining moments that shaped our philosophy and our practice.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {[
              { year: "2014", title: "Inception", desc: "Founded in a 200sqft studio with our first experimental installation." },
              { year: "2017", title: "The Breakthrough", desc: "Awarded the Central Pavilion project, putting our brutalist-minimalist style on the map." },
              { year: "2021", title: "Expansion", desc: "Opened our second studio in Tokyo, blending eastern restraint with our stark aesthetic." },
              { year: "2024", title: "Apex", desc: "Completion of the Nexus Tower, our largest architectural undertaking to date." }
            ].map((milestone, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="font-display text-6xl md:text-8xl font-bold text-white/20 group-hover:text-white transition-colors duration-500 tracking-tighter mb-6">{milestone.year}</div>
                <div className="h-[1px] w-full bg-white/20 group-hover:bg-white transition-colors duration-500 mb-6"></div>
                <h3 className="font-display text-2xl font-bold uppercase mb-4">{milestone.title}</h3>
                <p className="font-body text-[#a3a3a3] font-light leading-relaxed">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The People Section */}
      <section className="py-24 md:py-40 px-6 md:px-12 lg:px-24 bg-white text-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-20">The Architects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            {[
              { name: "Julian Raza", role: "Founder & Principal", desc: "Obsessed with geometry and light. The vision behind the madness.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80" },
              { name: "Elena Rostova", role: "Head of Interiors", desc: "Brings warmth to brutalism. Material expert and spatial psychologist.", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=800&q=80" },
              { name: "Marcus Chen", role: "Lead Architect", desc: "Structural genius. Translates impossible ideas into concrete reality.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80" }
            ].map((person, i) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] overflow-hidden mb-6 bg-gray-100">
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
                </div>
                <h3 className="font-display text-2xl font-bold uppercase">{person.name}</h3>
                <div className="font-body text-sm tracking-widest uppercase text-gray-500 mt-2 mb-4">{person.role}</div>
                <p className="font-body text-gray-800 leading-relaxed font-light">{person.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Press Section */}
      <section className="py-24 px-6 md:px-12 lg:px-24 bg-[#0a0a0a] border-b border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center gap-12 justify-between">
          <div className="font-display text-xl font-medium tracking-tight w-full md:w-1/3">
            "Raza Studio's work is a masterclass in aggressive minimalism. They don't decorate; they define."
            <div className="text-[#a3a3a3] text-sm mt-4 font-body tracking-wider uppercase">— Architecture Digest</div>
          </div>
          <div className="font-display text-xl font-medium tracking-tight w-full md:w-1/3">
            "The Nexus Tower proves that stark geometric forms can possess an undeniable, visceral soul."
            <div className="text-[#a3a3a3] text-sm mt-4 font-body tracking-wider uppercase">— Dezeen</div>
          </div>
        </div>
      </section>

      {/* Where We Are / Contact */}
      <section className="py-24 md:py-40 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24">
          <div>
            <h2 className="font-display text-5xl md:text-7xl font-bold tracking-tighter uppercase mb-12">Engage</h2>
            <div className="space-y-8 font-body text-xl font-light">
              <a href="#" className="flex items-center gap-4 hover:text-white text-[#a3a3a3] transition-colors group">
                <MapPin className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                <span>142 Brick Lane, London E1 6RU</span>
              </a>
              <a href="mailto:hello@raza.studio" className="flex items-center gap-4 hover:text-white text-[#a3a3a3] transition-colors group">
                <Mail className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                <span>hello@raza.studio</span>
              </a>
              <a href="tel:+442071234567" className="flex items-center gap-4 hover:text-white text-[#a3a3a3] transition-colors group">
                <Phone className="w-6 h-6 text-white group-hover:scale-110 transition-transform" />
                <span>+44 20 7123 4567</span>
              </a>
            </div>

            <div className="mt-16 flex gap-6">
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div className="relative group cursor-pointer">
            <div className="absolute inset-0 bg-white/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none"></div>
            <img src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80" alt="Studio Exterior" className="w-full h-full min-h-[400px] object-cover grayscale" />
            <div className="absolute top-6 right-6 z-20 w-16 h-16 bg-white text-black rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform">
              <ArrowUpRight className="w-8 h-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 md:px-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[#a3a3a3] font-body text-sm">
        <div>© {new Date().getFullYear()} Raza Design Studio. All rights reserved.</div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
}

export default Modern;