import React from 'react';
import './_group.css';
import { Card } from '@/components/ui/card';

export function Crockery() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] text-[#2C2C2C] font-sans selection:bg-[#B3C5B5] selection:text-white">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-[#FAFAFA]/90 backdrop-blur-md border-b border-[#EAEAEA]">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="font-serif text-2xl tracking-wide font-medium text-[#1A1A1A]">
            House of China
          </div>
          <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest text-[#5A5A5A] font-light">
            <a href="#origin" className="hover:text-[#8D9B8E] transition-colors">Our Story</a>
            <a href="#milestones" className="hover:text-[#8D9B8E] transition-colors">Heritage</a>
            <a href="#visit" className="hover:text-[#8D9B8E] transition-colors">Visit Us</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative min-h-[90vh] flex items-center justify-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/__mockup/images/crockery-hero.png" 
            alt="Fine porcelain table setting" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAFAFA] via-[#FAFAFA]/40 to-transparent" />
          <div className="absolute inset-0 bg-[#FAFAFA]/20 backdrop-blur-[2px]" />
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
          <div className="animate-fade-in-up opacity-0">
            <h2 className="text-[#8D9B8E] text-sm uppercase tracking-[0.3em] font-light mb-6">Established 1985</h2>
            <h1 className="font-serif text-6xl md:text-8xl font-light leading-tight mb-8 text-[#1A1A1A]">
              The Art of <br />
              <span className="italic text-[#8D9B8E]">the Table</span>
            </h1>
            <div className="w-px h-24 bg-gradient-to-b from-[#D4AF37]/50 to-transparent mx-auto mb-8" />
            <p className="text-xl md:text-2xl font-serif text-[#4A4A4A] max-w-2xl mx-auto italic leading-relaxed">
              "A beautifully set table is not merely a place to dine; it is a canvas where families gather, memories are made, and beauty is shared."
            </p>
          </div>
        </div>
      </header>

      {/* Origin Section */}
      <section id="origin" className="py-32 px-6 bg-white relative">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 animate-fade-in-up opacity-0 delay-200">
              <div className="flex items-center gap-4">
                <span className="w-12 h-px bg-[#D4AF37]/50" />
                <span className="text-xs uppercase tracking-[0.2em] text-[#8D9B8E]">Our Origin</span>
              </div>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1A1A1A] leading-tight">
                An Eye for <br />Beautiful Things
              </h2>
              <p className="text-[#5A5A5A] font-light leading-loose">
                It began with a single teacup. Tariq Mehmood, a man of quiet observation, found himself captivated by the translucence of a bone china piece during a trip to Europe in the early 1980s. That fascination blossomed into a lifelong pursuit.
              </p>
              <p className="text-[#5A5A5A] font-light leading-loose">
                House of China was founded on a simple premise: that everyday moments deserve elegance. What started as a modest import business sourcing select European and Asian porcelain has grown into a sanctuary for those who appreciate the delicate craftsmanship of fine tableware.
              </p>
            </div>
            <div className="relative animate-fade-in-up opacity-0 delay-300">
              <div className="aspect-[3/4] bg-[#F0F2F0] relative z-10 overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center p-12 text-center text-[#8D9B8E]">
                  <div className="border border-[#8D9B8E]/30 p-8 w-full h-full flex flex-col justify-center items-center">
                    <span className="font-serif italic text-2xl mb-4">"Beauty in restraint"</span>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-full h-full border border-[#EAEAEA] z-0" />
            </div>
          </div>
        </div>
      </section>

      {/* Business Journey */}
      <section className="py-32 px-6 bg-[#F8F9F8] border-y border-[#EAEAEA]">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-serif text-4xl text-[#1A1A1A]">A Legacy of Trust</h2>
          <div className="w-12 h-px bg-[#D4AF37]/50 mx-auto" />
          <p className="text-[#5A5A5A] font-light leading-loose text-lg">
            For nearly four decades, House of China has been a quiet presence in the most significant moments of our patrons' lives. We have supplied the dinner sets for countless weddings, curated pieces for collectors, and provided the everyday elegance that elevates a simple family meal. We do not merely sell crockery; we offer the instruments of hospitality.
          </p>
        </div>
      </section>

      {/* Milestones */}
      <section id="milestones" className="py-32 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="font-serif text-4xl text-[#1A1A1A]">Provenance</h2>
            <p className="text-[#8D9B8E] uppercase tracking-widest text-xs mt-4">Key Moments in Our History</p>
          </div>
          
          <div className="relative border-l border-[#EAEAEA] ml-4 md:ml-0 md:border-l-0 md:flex md:flex-col md:items-center">
            {/* Timeline Line for Desktop */}
            <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-[#EAEAEA] -translate-x-1/2" />
            
            {[
              { year: "1985", title: "The Foundation", desc: "Tariq Mehmood opens the first showroom, focusing on imported bone china." },
              { year: "1992", title: "The Wedding Collection", desc: "Introduction of curated bridal trousseau sets, establishing our reputation for wedding registry excellence." },
              { year: "2005", title: "European Partnerships", desc: "Securing exclusive import rights for several heritage porcelain houses." },
              { year: "2018", title: "The Next Generation", desc: "Expansion of the showroom to include a dedicated fine crystal gallery, guided by the founder's daughter." }
            ].map((milestone, idx) => (
              <div key={idx} className={`relative pl-8 md:pl-0 mb-16 md:w-1/2 ${idx % 2 === 0 ? 'md:pr-16 md:text-right md:self-start' : 'md:pl-16 md:self-end'}`}>
                {/* Timeline Dot */}
                <div className={`absolute top-1.5 -left-[5px] w-[10px] h-[10px] rounded-full bg-[#8D9B8E] shadow-[0_0_0_4px_white] md:left-auto ${idx % 2 === 0 ? 'md:-right-[5px]' : 'md:-left-[5px]'}`} />
                
                <span className="font-serif text-[#D4AF37] text-2xl italic">{milestone.year}</span>
                <h3 className="font-serif text-xl text-[#1A1A1A] mt-2 mb-3">{milestone.title}</h3>
                <p className="text-[#5A5A5A] font-light text-sm leading-relaxed">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The People */}
      <section className="py-32 px-6 bg-[#FAFAFA]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center mb-16">
            <span className="w-12 h-px bg-[#D4AF37]/50 mb-6" />
            <h2 className="font-serif text-4xl text-[#1A1A1A]">The Family</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: "Tariq Mehmood",
                role: "Founder & Patriarch",
                note: "Still oversees the selection of every major collection, guided by an intuition refined over forty years."
              },
              {
                name: "Zara Tariq",
                role: "Director of Curation",
                note: "Bringing a modern sensibility to classic table settings, ensuring our heritage pieces resonate with new generations."
              },
              {
                name: "Omar Tariq",
                role: "Head of Client Relations",
                note: "The custodian of our bespoke services, personally guiding couples through their wedding registry."
              }
            ].map((person, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-[#EAEAEA] flex items-center justify-center border border-[#D4AF37]/20 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent z-10" />
                  <span className="font-serif text-3xl text-[#8D9B8E] italic z-0">{person.name[0]}</span>
                </div>
                <h3 className="font-serif text-xl text-[#1A1A1A] mb-1">{person.name}</h3>
                <p className="text-xs uppercase tracking-widest text-[#8D9B8E] mb-4">{person.role}</p>
                <p className="text-[#5A5A5A] font-light text-sm leading-relaxed">
                  {person.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supplier Heritage */}
      <section className="py-24 px-6 bg-[#1A1A1A] text-white text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="font-serif text-3xl italic text-[#D4AF37]">Curators of the World's Finest</h2>
          <p className="text-white/70 font-light leading-relaxed">
            We hold direct relationships with heritage kilns and master potters across Europe and Asia. Each piece in our showroom is selected not merely for its brand, but for the integrity of its clay, the precision of its glaze, and the timelessness of its silhouette.
          </p>
        </div>
      </section>

      {/* Where We Are */}
      <section id="visit" className="py-32 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="border border-[#EAEAEA] p-12 md:p-24 relative">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-6">
              <span className="font-serif text-2xl italic text-[#8D9B8E]">Visit the Showroom</span>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 text-center md:text-left">
              <div>
                <h3 className="font-serif text-2xl mb-6 text-[#1A1A1A]">Location</h3>
                <p className="text-[#5A5A5A] font-light leading-loose mb-6">
                  14 Heritage Boulevard<br />
                  The Old City District<br />
                  Open Monday to Saturday<br />
                  10:00 AM – 7:00 PM
                </p>
                <p className="text-xs uppercase tracking-widest text-[#8D9B8E]">By Appointment for Bridal Registries</p>
              </div>
              <div>
                <h3 className="font-serif text-2xl mb-6 text-[#1A1A1A]">Contact</h3>
                <p className="text-[#5A5A5A] font-light leading-loose mb-8">
                  Telephone: (555) 123-4567<br />
                  Email: inquiries@houseofchina.com
                </p>
                <button className="border border-[#1A1A1A] text-[#1A1A1A] px-8 py-3 text-sm uppercase tracking-widest hover:bg-[#1A1A1A] hover:text-white transition-colors duration-300">
                  Request Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-[#FAFAFA] border-t border-[#EAEAEA] text-center">
        <p className="font-serif text-2xl mb-4 text-[#1A1A1A]">House of China</p>
        <p className="text-[#8D9B8E] text-xs uppercase tracking-widest">Fine Crockery & Tableware</p>
      </footer>
    </div>
  );
}
