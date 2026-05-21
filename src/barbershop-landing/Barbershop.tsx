import React from "react";
import "./_group.css";

export function Barbershop() {
  return (
    <div className="barbershop-theme barbershop-container w-full">
      {/* 1. Hero */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/__mockup/images/barbershop-hero.png" 
            alt="Sultan's Barbershop Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 barbershop-hero-overlay"></div>
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <div className="w-16 h-1 bg-[hsl(var(--color-barber-red))] mb-8 opacity-80"></div>
          <h1 className="barbershop-heading text-6xl md:text-8xl text-[hsl(var(--color-cream))] font-bold tracking-tight mb-6 drop-shadow-lg">
            Sultan's
            <span className="block text-3xl md:text-5xl font-normal italic mt-4 text-[hsl(var(--color-cream))/80]">Barbershop</span>
          </h1>
          <p className="text-xl md:text-2xl text-[hsl(var(--color-cream))/90] max-w-2xl font-light tracking-wide italic mt-6">
            "A haircut is temporary. The respect is permanent."
          </p>
          <div className="mt-12 flex gap-4 items-center opacity-70">
            <div className="w-8 h-8 rounded-full border-2 border-[hsl(var(--color-barber-blue))] flex items-center justify-center">
               <div className="w-3 h-3 bg-[hsl(var(--color-barber-red))] rounded-full"></div>
            </div>
            <span className="text-[hsl(var(--color-cream))] text-sm uppercase tracking-[0.2em]">Est. 1978</span>
          </div>
        </div>
      </section>

      {/* 2. Origin */}
      <section className="py-24 px-6 md:px-12 bg-[hsl(var(--color-cream))] text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="barbershop-heading text-4xl md:text-5xl mb-8 text-[hsl(var(--color-mahogany))]">The First Chair</h2>
          <div className="w-12 h-[2px] bg-[hsl(var(--color-barber-red))] mx-auto mb-8"></div>
          <p className="text-lg leading-relaxed text-[hsl(var(--text-muted))]">
            In 1978, Master Anwar Sultan opened a single-chair room on the corner of Elm and 4th. He had two pairs of scissors, a straight razor inherited from his father, and a belief that every man deserved an hour of dignity, no matter what he did for a living. Word spread not through advertisements, but through the sharp silhouettes of men walking out his door.
          </p>
        </div>
      </section>

      {/* 3. Business Journey */}
      <section className="py-24 px-6 md:px-12 bg-[hsl(var(--color-walnut))] text-[hsl(var(--color-cream))]">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="barbershop-heading text-4xl mb-6">Decades of Craft</h2>
            <p className="text-lg leading-relaxed mb-6 text-white/80 font-light">
              Through changing fashions, economic downturns, and the shifting landscape of our city, Sultan's remained a constant. We didn't chase trends; we perfected the classics.
            </p>
            <p className="text-lg leading-relaxed text-white/80 font-light">
              Today, that single chair has grown into six, but the philosophy remains unchanged. We still use hot towels. We still mix our shaving lather by hand. And we still know how you like your sides faded before you even sit down.
            </p>
          </div>
          <div className="relative h-[400px] border-l-4 border-b-4 border-[hsl(var(--color-barber-red))] p-4">
             <div className="w-full h-full bg-[hsl(var(--color-mahogany))] opacity-50 absolute inset-0 mix-blend-multiply"></div>
             <img src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?w=800&q=80" alt="Vintage barber tools" className="w-full h-full object-cover grayscale contrast-125" />
          </div>
        </div>
      </section>

      {/* 4. Milestones */}
      <section className="py-24 px-6 md:px-12 bg-[hsl(var(--color-cream))] relative">
        <div className="max-w-4xl mx-auto relative">
           <h2 className="barbershop-heading text-4xl text-center mb-16 text-[hsl(var(--color-mahogany))]">The Ledger</h2>
           
           <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 md:before:mx-auto md:before:translate-x-0 before:h-full before:w-[1px] before:bg-[hsl(var(--color-mahogany))] before:opacity-20">
             {[
               { year: "1978", title: "The Foundation", desc: "Anwar Sultan opens the doors with a single Koken barber chair." },
               { year: "1985", title: "The First Apprentice", desc: "David takes the second chair, beginning the tradition of mentorship." },
               { year: "1999", title: "Expansion", desc: "Taking over the adjacent storefront, expanding to six chairs." },
               { year: "2015", title: "The Next Generation", desc: "Anwar's son, Tariq, assumes the role of Head Barber." }
             ].map((item, i) => (
               <div key={i} className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}>
                 <div className="flex items-center justify-center w-10 h-10 rounded-full border-2 border-[hsl(var(--color-mahogany))] bg-[hsl(var(--color-cream))] text-[hsl(var(--color-mahogany))] z-10 shrink-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                   <div className="w-2 h-2 bg-[hsl(var(--color-barber-red))] rounded-full"></div>
                 </div>
                 <div className="w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] p-6 border border-[hsl(var(--color-mahogany))/20] bg-white shadow-sm transition-transform hover:-translate-y-1">
                   <span className="font-bold text-[hsl(var(--color-barber-blue))] text-xl mb-2 block barbershop-heading">{item.year}</span>
                   <h3 className="text-xl font-semibold mb-2 text-[hsl(var(--color-mahogany))]">{item.title}</h3>
                   <p className="text-[hsl(var(--text-muted))]">{item.desc}</p>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </section>

      {/* 5. The People */}
      <section className="py-24 px-6 md:px-12 bg-[#1a1514] text-[hsl(var(--color-cream))]">
        <div className="max-w-6xl mx-auto">
          <h2 className="barbershop-heading text-4xl text-center mb-16">The Hands That Craft</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Master Anwar", role: "Founder", note: "Still trims the regulars on Sunday mornings. 45 years of unmatched precision." },
              { name: "Tariq Sultan", role: "Head Barber", note: "Brought the modern fade into the shop without losing the classic touch." },
              { name: "Elias", role: "Senior Barber", note: "The straight-razor specialist. The quietest man in the room, until you ask about baseball." }
            ].map((staff, i) => (
              <div key={i} className="text-center group">
                <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-[hsl(var(--color-mahogany))] grayscale group-hover:grayscale-0 transition-all duration-500">
                  <img src={`https://i.pravatar.cc/300?img=${i + 11}`} alt={staff.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="barbershop-heading text-2xl mb-1">{staff.name}</h3>
                <span className="block text-[hsl(var(--color-barber-red))] text-sm uppercase tracking-widest mb-4">{staff.role}</span>
                <p className="text-white/60 text-sm leading-relaxed px-4 italic">"{staff.note}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Where We Are */}
      <section className="py-24 px-6 md:px-12 bg-[hsl(var(--color-cream))]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <div className="border border-[hsl(var(--color-mahogany))/30] p-8 md:p-12 bg-white relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-[hsl(var(--color-barber-blue))]"></div>
              <h2 className="barbershop-heading text-3xl mb-8 text-[hsl(var(--color-mahogany))]">Find the Pole</h2>
              
              <div className="space-y-6 text-[hsl(var(--text-primary))]">
                <div>
                  <h4 className="font-semibold uppercase tracking-wider text-xs text-[hsl(var(--text-muted))] mb-2">Location</h4>
                  <p className="text-lg">424 Elm Street, Historic District<br/>Est. 1978</p>
                </div>
                <div>
                  <h4 className="font-semibold uppercase tracking-wider text-xs text-[hsl(var(--text-muted))] mb-2">Hours</h4>
                  <ul className="space-y-1">
                    <li className="flex justify-between border-b border-[hsl(var(--text-muted))/20] pb-1"><span>Mon - Fri</span> <span>9am - 7pm</span></li>
                    <li className="flex justify-between border-b border-[hsl(var(--text-muted))/20] pb-1"><span>Saturday</span> <span>8am - 5pm</span></li>
                    <li className="flex justify-between text-[hsl(var(--color-barber-red))] pt-1"><span>Sunday</span> <span>Closed</span></li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold uppercase tracking-wider text-xs text-[hsl(var(--text-muted))] mb-2">Contact</h4>
                  <p className="text-lg font-mono">555-0192</p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 aspect-square bg-gray-200 grayscale contrast-125 relative">
            <img src="https://images.unsplash.com/photo-1521590832167-7bfcfaa6362f?w=800&q=80" alt="Barbershop exterior" className="w-full h-full object-cover" />
            <div className="absolute inset-0 border-[16px] border-[hsl(var(--color-cream))] pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* 7. Footer/Optional */}
      <footer className="py-12 bg-[hsl(var(--color-walnut))] text-center border-t border-white/10">
        <p className="text-white/40 text-sm mb-4">"The best stories are told in the barber's chair."</p>
        <p className="text-white/20 text-xs uppercase tracking-[0.2em]">© {new Date().getFullYear()} Sultan's Barbershop</p>
      </footer>
    </div>
  );
}

export default Barbershop;