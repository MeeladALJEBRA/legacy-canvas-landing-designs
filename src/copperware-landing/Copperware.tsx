import React from "react";
import { Hammer, Flame, Award, MapPin, Phone, CheckCircle, ShieldCheck, Clock, Medal } from "lucide-react";
import "./_group.css";

export function Copperware() {
  return (
    <div className="min-h-screen bg-[#111111] text-[#FDFBF7] font-sans overflow-x-hidden selection:bg-[#B87333] selection:text-[#111]">
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Outfit:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
      <style dangerouslySetInnerHTML={{__html: `
        :root {
          --copper: #B87333;
          --bronze: #8C6B3E;
          --charcoal: #1A1A1A;
          --cream: #FDFBF7;
        }
        .font-serif-ornate {
          font-family: 'Cormorant Garamond', serif;
        }
        .font-sans-clean {
          font-family: 'Outfit', sans-serif;
        }
        .copper-gradient-text {
          background: linear-gradient(to right, #8C6B3E, #B87333, #E6A87C, #B87333, #8C6B3E);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .copper-gradient-bg {
          background: linear-gradient(135deg, #8C6B3E, #B87333);
        }
      `}} />

      {/* Global Noise Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 bg-noise opacity-30 mix-blend-overlay"></div>

      {/* 1. Hero Section */}
      <header className="relative min-h-[90vh] flex items-center justify-center border-b border-[#B87333]/20 pt-20 pb-24 lg:pt-0 lg:pb-0">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-[#111111]/80 via-[#111111]/60 to-[#111111] z-10"></div>
          <img 
            src="/__mockup/images/copperware-hero.png" 
            alt="Hand-engraved Kashmiri copperware" 
            className="w-full h-full object-cover object-center scale-105 opacity-60"
          />
        </div>
        
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <div className="mb-6 inline-flex items-center gap-3">
            <span className="w-12 h-[1px] bg-[#B87333]"></span>
            <span className="uppercase tracking-[0.3em] text-xs font-sans-clean text-[#B87333] font-medium">Est. 1948 • Srinagar</span>
            <span className="w-12 h-[1px] bg-[#B87333]"></span>
          </div>
          
          <h1 className="font-serif-ornate text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.9] tracking-tight">
            Kashmir <br/>
            <span className="italic font-light">Copper House</span>
          </h1>
          
          <p className="text-xl md:text-2xl font-serif-ornate italic text-[#FDFBF7]/80 max-w-2xl leading-relaxed mb-12">
            "In every strike of the hammer, a century of heritage breathes. We do not just shape metal; we forge the soul of Kashmir."
          </p>

          <a href="#origin" className="group flex flex-col items-center gap-4 text-sm font-sans-clean tracking-widest text-[#B87333] hover:text-[#E6A87C] transition-colors duration-300">
            DISCOVER THE CRAFT
            <span className="w-[1px] h-12 bg-[#B87333] group-hover:h-16 transition-all duration-500"></span>
          </a>
        </div>
      </header>

      {/* 2. Origin */}
      <section id="origin" className="py-24 md:py-32 px-6 relative bg-[#1A1A1A]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 space-y-8 relative z-10">
            <div className="inline-flex items-center gap-3">
              <Flame className="text-[#B87333] w-5 h-5" />
              <span className="uppercase tracking-[0.2em] text-xs font-sans-clean text-[#8C6B3E]">The Origin</span>
            </div>
            
            <h2 className="font-serif-ornate text-4xl md:text-6xl text-[#FDFBF7] leading-tight">
              Born from the Fire of <span className="text-[#B87333] italic">Zaina Kadal</span>
            </h2>
            
            <div className="space-y-6 text-[#FDFBF7]/70 font-sans-clean font-light leading-relaxed text-lg">
              <p>
                In the labyrinthine alleys of Downtown Srinagar, where the rhythmic tapping of metal has echoed for over seven centuries, Kashmir Copper House was founded by Ustad Ghulam Nabi Dar in 1948.
              </p>
              <p>
                What began as a modest workshop with a single furnace and a handful of specialized tools has evolved into a sanctuary for the traditional art of Tram (copper) working. The craft, brought to the valley by saints and artisans from Persia, found its most intricate expression in the hands of Kashmiri craftsmen.
              </p>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative aspect-[4/5] w-full max-w-md mx-auto">
            <div className="absolute inset-0 border border-[#B87333]/30 translate-x-4 -translate-y-4 rounded-t-full"></div>
            <div className="absolute inset-0 bg-[#111111] overflow-hidden rounded-t-full z-10 border border-[#B87333]/10">
              <div className="w-full h-full bg-gradient-to-tr from-[#111] via-[#1A1A1A] to-[#222] flex items-center justify-center p-8">
                <div className="w-48 h-48 border border-[#B87333]/20 rounded-full flex items-center justify-center animate-float-slow">
                  <div className="w-32 h-32 border border-[#8C6B3E]/40 rounded-full flex items-center justify-center">
                    <Hammer className="text-[#B87333] w-12 h-12 opacity-50" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Business Journey */}
      <section className="py-24 px-6 bg-[#111111] border-y border-[#B87333]/10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="font-serif-ornate text-4xl md:text-5xl">A Legacy <span className="copper-gradient-text animate-copper-shimmer">Forged in Fire</span></h2>
          <p className="text-xl md:text-2xl font-serif-ornate text-[#FDFBF7]/80 leading-relaxed italic">
            For three generations, our family has safeguarded the techniques of 'Naqash' (engraving) and 'Kanda Kari' (embossing). We resist mass production, choosing instead to honor the time-intensive methods of our ancestors. Every samovar, every tray, and every bowl that leaves our workshop carries the fingerprints of at least four specialized masters.
          </p>
        </div>
      </section>

      {/* 4. Milestones */}
      <section className="py-24 md:py-32 px-6 bg-[#1A1A1A] relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif-ornate text-4xl md:text-6xl mb-4">The Craftsman's <span className="text-[#B87333] italic">Log</span></h2>
            <p className="font-sans-clean text-[#FDFBF7]/60 tracking-widest text-sm uppercase">Defining moments in our history</p>
          </div>

          <div className="relative space-y-16 before:absolute before:inset-0 before:ml-5 md:before:mx-auto before:-translate-x-px md:before:translate-x-0 before:h-full before:w-[1px] before:bg-gradient-to-b before:from-transparent before:via-[#B87333]/30 before:to-transparent">
            
            {[
              { year: "1948", title: "The First Anvil", desc: "Ustad Ghulam Nabi Dar opens a small 100-sq-ft workshop in Zaina Kadal, hand-beating raw copper into daily household utensils." },
              { year: "1972", title: "Master of Naqash", desc: "Recognized with the State Award for Excellence in Metal Engraving for a meticulously carved 4-foot traditional Samovar." },
              { year: "1998", title: "Generational Handover", desc: "The workshop expands as the second generation introduces Kashmiri copperware to international exhibitions across Europe." },
              { year: "2015", title: "UNESCO & GI Recognition", desc: "Our craft receives geographical indication (GI) tagging, validating the authenticity and regional heritage of our pieces." }
            ].map((milestone, idx) => (
              <div key={idx} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${idx % 2 === 0 ? '' : ''}`}>
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-[#1A1A1A] border-2 border-[#B87333] shrink-0 md:order-1 md:group-odd:-ml-5 md:group-even:-mr-5 z-10 shadow-[0_0_15px_rgba(184,115,51,0.2)]">
                  <div className="w-2 h-2 bg-[#FDFBF7] rounded-full" />
                </div>
                
                <div className="w-[calc(100%-3rem)] md:w-[calc(50%-3rem)] pl-6 md:pl-0 md:group-odd:text-right md:group-even:text-left md:group-odd:pr-12 md:group-even:pl-12">
                  <span className="font-serif-ornate text-5xl text-[#B87333]/20 font-bold block mb-2">{milestone.year}</span>
                  <h3 className="font-serif-ornate text-2xl mb-3 text-[#FDFBF7]">{milestone.title}</h3>
                  <p className="font-sans-clean text-[#FDFBF7]/60 font-light leading-relaxed">{milestone.desc}</p>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </section>

      {/* 5. The People */}
      <section className="py-24 md:py-32 px-6 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8 border-b border-[#B87333]/20 pb-8">
            <div>
              <h2 className="font-serif-ornate text-4xl md:text-6xl mb-4">Guardians of <span className="text-[#8C6B3E] italic">the Hammer</span></h2>
              <p className="font-sans-clean text-[#FDFBF7]/60 max-w-lg">The soul of our business is not metal, but the masters who shape it.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Ustad G.N. Dar", role: "The Founder & Master Smith", detail: "Specialized in seamless jointing and foundational vessel shaping." },
              { name: "Tariq Ahmad", role: "Chief Naqash (Engraver)", detail: "Executes the delicate Chinar leaf and Badam (paisley) motifs." },
              { name: "Fayaz Din", role: "Kanda-Kar (Embosser)", detail: "Brings three-dimensional depth to flat engraved surfaces." }
            ].map((person, idx) => (
              <div key={idx} className="group relative p-8 border border-[#B87333]/10 bg-[#1A1A1A]/50 hover:bg-[#1A1A1A] transition-all duration-500 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#B87333]/5 rounded-bl-full -mr-16 -mt-16 transition-transform group-hover:scale-150 duration-700"></div>
                <div className="mb-8 w-16 h-16 rounded-full border border-[#8C6B3E]/30 flex items-center justify-center text-[#B87333]">
                  <Hammer className="w-6 h-6 opacity-60" />
                </div>
                <h3 className="font-serif-ornate text-2xl text-[#FDFBF7] mb-2">{person.name}</h3>
                <p className="font-sans-clean text-xs uppercase tracking-widest text-[#B87333] mb-4">{person.role}</p>
                <p className="font-sans-clean text-[#FDFBF7]/60 text-sm leading-relaxed">{person.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Optional - Certifications & Heritage */}
      <section className="py-20 px-6 bg-[#1A1A1A] border-y border-[#B87333]/10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <h3 className="font-serif-ornate text-3xl">Certified Craft Heritage</h3>
            <p className="font-sans-clean text-[#FDFBF7]/60 font-light">
              Our workshop is proud to produce GI (Geographical Indication) tagged Kashmiri Copperware. This guarantees that every piece is entirely hand-crafted in Kashmir using traditional methods, protecting the authenticity of the craft from machine-made imitations.
            </p>
          </div>
          <div className="flex gap-6">
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="w-20 h-20 rounded-full border border-[#B87333] flex items-center justify-center bg-[#111]">
                <Award className="w-8 h-8 text-[#B87333]" />
              </div>
              <span className="text-xs uppercase tracking-widest font-sans-clean text-[#FDFBF7]/50">GI Tagged</span>
            </div>
            <div className="flex flex-col items-center gap-3 text-center">
              <div className="w-20 h-20 rounded-full border border-[#8C6B3E] flex items-center justify-center bg-[#111]">
                <ShieldCheck className="w-8 h-8 text-[#8C6B3E]" />
              </div>
              <span className="text-xs uppercase tracking-widest font-sans-clean text-[#FDFBF7]/50">Pure Metal</span>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Where We Are */}
      <section className="py-24 md:py-32 px-6 bg-[#111111] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#B87333]/5 rounded-full blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="font-serif-ornate text-5xl md:text-7xl mb-6">Visit the <span className="italic text-[#8C6B3E]">Workshop</span></h2>
          <p className="font-sans-clean text-[#FDFBF7]/60 mb-16 max-w-xl mx-auto font-light text-lg">
            Experience the heat of the furnace and the rhythm of the hammers. We welcome patrons and art lovers to witness the creation process firsthand.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div className="p-8 border border-[#B87333]/20 bg-[#1A1A1A]/80 backdrop-blur-sm">
              <div className="w-12 h-12 bg-[#111] border border-[#B87333]/30 flex items-center justify-center mb-6">
                <MapPin className="text-[#B87333] w-5 h-5" />
              </div>
              <h4 className="font-serif-ornate text-2xl mb-4">The Copper Street</h4>
              <p className="font-sans-clean text-[#FDFBF7]/60 font-light leading-relaxed mb-4">
                Shop No. 42, Tram Goji,<br/>
                Zaina Kadal, Downtown,<br/>
                Srinagar, Jammu & Kashmir 190002
              </p>
            </div>
            
            <div className="p-8 border border-[#8C6B3E]/20 bg-[#1A1A1A]/80 backdrop-blur-sm">
              <div className="w-12 h-12 bg-[#111] border border-[#8C6B3E]/30 flex items-center justify-center mb-6">
                <Clock className="text-[#8C6B3E] w-5 h-5" />
              </div>
              <h4 className="font-serif-ornate text-2xl mb-4">Working Hours</h4>
              <ul className="font-sans-clean text-[#FDFBF7]/60 font-light space-y-2">
                <li className="flex justify-between border-b border-[#FDFBF7]/10 pb-2">
                  <span>Mon - Sat</span>
                  <span>10:00 AM - 6:00 PM</span>
                </li>
                <li className="flex justify-between pt-2">
                  <span>Sunday</span>
                  <span className="text-[#B87333]">Closed for Rest</span>
                </li>
              </ul>
              <div className="mt-8 pt-6 border-t border-[#FDFBF7]/10 flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#8C6B3E]" />
                <span className="font-sans-clean font-light text-[#FDFBF7]/80">+91 94190 00000</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 px-6 border-t border-[#B87333]/20 bg-[#0A0A0A] text-center">
        <div className="mb-6 inline-flex items-center justify-center w-12 h-12 border border-[#B87333]/30 rounded-full">
          <Flame className="w-5 h-5 text-[#B87333]/60" />
        </div>
        <p className="font-serif-ornate text-xl text-[#FDFBF7]/40 mb-2">Kashmir Copper House</p>
        <p className="font-sans-clean text-xs tracking-widest text-[#FDFBF7]/30 uppercase">Preserving the Art of Tram since 1948</p>
      </footer>
    </div>
  );
}
