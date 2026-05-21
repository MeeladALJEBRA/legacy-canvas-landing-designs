import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Heritage = () => {
  return (
    <div className="min-h-screen bg-[#F9F6F0] text-[#2C241B] selection:bg-[#8B5A2B] selection:text-[#F9F6F0] font-sans antialiased overflow-x-hidden">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500&display=swap');
        
        .font-serif {
          font-family: 'Cormorant Garamond', serif;
        }
        .font-sans {
          font-family: 'Inter', sans-serif;
        }
        
        .bg-grain {
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.04'/%3E%3C/svg%3E");
        }
      `}</style>
      
      <div className="fixed inset-0 pointer-events-none bg-grain z-50 opacity-50 mix-blend-multiply"></div>

      {/* 1. Hero */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center text-center px-6 py-20 border-b border-[#2C241B]/10">
        <div className="absolute inset-0 z-0">
          <img 
            src="/__mockup/images/alden-bindery-hero.png" 
            alt="Alden & Sons Bindery workshop" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#F9F6F0]/80 via-[#F9F6F0]/95 to-[#F9F6F0]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto space-y-8">
          <div className="w-16 h-px bg-[#8B5A2B] mx-auto mb-12"></div>
          <h1 className="font-serif text-6xl md:text-8xl tracking-tight text-[#1A1510] font-medium">
            Alden & Sons
          </h1>
          <p className="font-sans tracking-[0.2em] text-sm md:text-base uppercase text-[#8B5A2B] font-medium">
            Master Bookbinders &bull; Est. 1924
          </p>
          <div className="pt-12 max-w-2xl mx-auto">
            <p className="font-serif italic text-2xl md:text-3xl leading-relaxed text-[#4A3C2B]">
              "A book is a life preserved. We merely craft the vessel that holds it through the centuries."
            </p>
          </div>
        </div>
      </section>

      {/* 2. Origin */}
      <section className="py-24 md:py-32 px-6 bg-[#Fdfbf7]">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-12 text-[#1A1510] text-center">The Genesis</h2>
          <div className="prose prose-lg md:prose-xl text-[#4A3C2B] font-serif leading-relaxed mx-auto">
            <p className="first-letter:text-6xl first-letter:font-bold first-letter:text-[#8B5A2B] first-letter:mr-3 first-letter:float-left">
              It began in a drafty workshop off cobblestoned Mercer Street, with nothing but a bone folder, a pot of animal glue, and an unwavering belief in the permanence of the written word. Thomas Alden arrived in the city in the winter of 1923, a third-generation binder who had learned the craft in the quiet monasteries of Europe.
            </p>
            <p className="mt-6">
              When he opened the doors to Alden & Sons (though the "sons" were merely an aspiration at the time), he made a quiet vow: no book leaving his bench would last less than a hundred years. That stubborn commitment to endurance became the foundation of everything that followed.
            </p>
          </div>
        </div>
      </section>

      {/* 3. Journey */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="aspect-[3/4] bg-[#2C241B] relative p-4 transform -rotate-2 shadow-2xl">
              <div className="absolute inset-0 border border-[#F9F6F0]/20 m-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1544644558-7c82eb5c23d5?q=80&w=1000&auto=format&fit=crop" 
                alt="Vintage tools" 
                className="w-full h-full object-cover filter sepia-[0.3] grayscale-[0.2]"
              />
            </div>
            <div className="space-y-8">
              <h2 className="font-serif text-4xl md:text-5xl text-[#1A1510]">A Century of Craft</h2>
              <div className="space-y-6 text-[#4A3C2B] font-serif text-lg leading-relaxed">
                <p>
                  Through the Great Depression, while others compromised on materials, Thomas continued sourcing the finest Moroccan leathers and archival papers. It nearly cost him the business, but it won him the loyalty of the city's most discerning institutions.
                </p>
                <p>
                  When his sons, Arthur and Henry, took the helm in the 1960s, they navigated the rise of mass-market paperbacks by leaning deeper into bespoke craftsmanship. They introduced specialized restoration services that would eventually be trusted with some of the nation's most precious historical documents.
                </p>
                <p>
                  Today, the tools have barely changed. The presses are still cast iron, the gold leaf is still applied by hand, and the smell of leather and adhesive still pervades the air.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Milestones */}
      <section className="py-24 md:py-32 px-6 bg-[#2C241B] text-[#F9F6F0]">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl mb-16 text-center text-[#E5D3B3]">Ledger of Years</h2>
          
          <div className="space-y-12 border-l-px border-[#E5D3B3]/20 ml-4 md:ml-0 md:border-none">
            {[
              { year: '1924', title: 'The Doors Open', desc: 'Thomas Alden signs the lease on the Mercer Street workshop.' },
              { year: '1938', title: 'The Library Commission', desc: 'Awarded the contract to rebind the city\'s municipal archives, saving the shop from ruin.' },
              { year: '1962', title: 'Generational Shift', desc: 'Arthur and Henry Alden officially take over operations.' },
              { year: '1985', title: 'The Great Restoration', desc: 'Entrusted with the restoration of the state\'s founding charter.' },
              { year: '2010', title: 'A New Chapter', desc: 'Eleanor Alden becomes the first female master binder to lead the family business.' }
            ].map((item, i) => (
              <div key={i} className="relative md:grid md:grid-cols-[1fr_auto_1fr] md:gap-8 items-center pl-8 md:pl-0 group">
                {/* Mobile line indicator */}
                <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-[#8B5A2B] md:hidden"></div>
                
                <div className="md:text-right pb-2 md:pb-0">
                  <span className="font-serif text-3xl text-[#E5D3B3]">{item.year}</span>
                </div>
                
                <div className="hidden md:flex flex-col items-center justify-center relative">
                  <div className="h-full w-px bg-[#E5D3B3]/20 absolute inset-y-0 group-first:top-1/2 group-last:bottom-1/2"></div>
                  <div className="w-3 h-3 rounded-full bg-[#8B5A2B] relative z-10 shadow-[0_0_10px_rgba(139,90,43,0.5)]"></div>
                </div>
                
                <div className="space-y-2 pb-8 md:pb-0">
                  <h3 className="font-serif text-xl md:text-2xl font-medium tracking-wide">{item.title}</h3>
                  <p className="font-sans text-sm text-[#F9F6F0]/70 font-light leading-relaxed max-w-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The People */}
      <section className="py-24 md:py-32 px-6 bg-[#Fdfbf7]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl text-[#1A1510] mb-4">The Hands at Work</h2>
            <p className="font-serif italic text-xl text-[#8B5A2B]">Four generations of dedication.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: 'Thomas Alden', role: 'Founder (1889-1972)', note: 'Known for his uncompromising standards and silent demeanor.' },
              { name: 'Arthur Alden', role: 'Second Generation', note: 'Expanded the restoration department, a master of gold tooling.' },
              { name: 'Eleanor Alden', role: 'Current Master Binder', note: 'Preserving the old ways while training the next generation.' }
            ].map((person, i) => (
              <div key={i} className="text-center space-y-4 group">
                <div className="w-32 h-32 mx-auto rounded-full bg-[#E5D3B3] mb-6 flex items-center justify-center border-4 border-[#F9F6F0] shadow-xl overflow-hidden relative">
                  <div className="absolute inset-0 bg-[#2C241B] opacity-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                  <span className="font-serif text-4xl text-[#8B5A2B]">{person.name.charAt(0)}</span>
                </div>
                <h3 className="font-serif text-2xl text-[#1A1510]">{person.name}</h3>
                <p className="font-sans uppercase tracking-widest text-xs font-semibold text-[#8B5A2B]">{person.role}</p>
                <div className="w-8 h-px bg-[#2C241B]/20 mx-auto"></div>
                <p className="font-serif italic text-[#4A3C2B] text-sm px-4">{person.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Awards / Press */}
      <section className="py-20 px-6 border-y border-[#2C241B]/10">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="font-sans uppercase tracking-[0.3em] text-sm font-semibold text-[#8B5A2B]">Recognized By</h2>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-700">
            {['The Chronicle', 'Heritage Trust', 'Guild of Book Workers'].map((name, i) => (
              <div key={i} className="font-serif text-2xl md:text-3xl text-[#2C241B]">{name}</div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Where We Are */}
      <section className="py-24 md:py-32 px-6">
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <h2 className="font-serif text-4xl md:text-5xl text-[#1A1510]">Visit the Shop</h2>
            <p className="font-serif text-lg text-[#4A3C2B] leading-relaxed">
              We welcome visitors, though we ask for patience if our hands are full when you arrive. The smell of hide glue and old paper is complimentary.
            </p>
            
            <div className="space-y-6 font-sans text-sm text-[#4A3C2B]">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#8B5A2B] shrink-0 mt-0.5" />
                <div>
                  <p className="font-medium text-[#1A1510]">42 Mercer Street</p>
                  <p>Old Town District</p>
                  <p>Open Mon-Fri, 9am - 4pm</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-[#8B5A2B] shrink-0" />
                <p>Appointments: (555) 019-1924</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-[#8B5A2B] shrink-0" />
                <p>inquiries@aldenbindery.com</p>
              </div>
            </div>
          </div>
          
          <div className="aspect-square bg-[#E5D3B3] p-2 shadow-2xl relative">
             <div className="absolute inset-0 border border-[#8B5A2B]/30 m-4 pointer-events-none"></div>
             <div className="w-full h-full bg-[#2C241B] flex items-center justify-center flex-col text-center p-8 space-y-4">
               <span className="font-serif text-6xl text-[#E5D3B3] opacity-50">&amp;</span>
               <p className="font-serif italic text-xl text-[#F9F6F0]">"Endurance is the truest form of beauty."</p>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 text-center border-t border-[#2C241B]/10 bg-[#1A1510] text-[#F9F6F0]/60">
        <p className="font-serif text-sm">&copy; {new Date().getFullYear()} Alden & Sons Bindery. Preserving history since 1924.</p>
      </footer>
    </div>
  );
};

export default Heritage;