import React, { useEffect } from "react";
import { MapPin, Phone, Mail, Instagram, ArrowRight, Quote } from "lucide-react";
import "./_group.css";

export function LadiesFootwear() {
  useEffect(() => {
    // Add any necessary observer logic here if we wanted scroll animations
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('lf-fade-in-up');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.lf-animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="theme-ladies-footwear min-h-screen selection:bg-[rgb(var(--lf-wine))] selection:text-[rgb(var(--lf-cream))]">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-[rgb(var(--lf-cream))]/90 backdrop-blur-md border-b border-[rgb(var(--lf-gold))]/20">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-serif text-2xl text-[rgb(var(--lf-wine))] tracking-wide font-medium">
            Zahra's
          </div>
          <div className="hidden md:flex space-x-8 text-sm uppercase tracking-widest text-[rgb(var(--lf-wine-light))]">
            <a href="#origin" className="hover:text-[rgb(var(--lf-gold))] transition-colors">Our Story</a>
            <a href="#collections" className="hover:text-[rgb(var(--lf-gold))] transition-colors">Collections</a>
            <a href="#visit" className="hover:text-[rgb(var(--lf-gold))] transition-colors">Visit Us</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/__mockup/images/ladies-footwear-hero.png" 
            alt="Elegant shoes in Zahra's boutique" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[rgb(var(--lf-cream))]/90 via-[rgb(var(--lf-cream))]/70 to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="flex flex-col justify-center space-y-8 max-w-xl">
            <div className="space-y-4 lf-fade-in-up">
              <p className="uppercase tracking-[0.3em] text-[rgb(var(--lf-gold))] text-sm font-medium">Est. 2007</p>
              <h1 className="font-serif text-6xl md:text-7xl leading-tight text-[rgb(var(--lf-wine))]">
                Elegance in <br/><span className="italic">Every Step.</span>
              </h1>
            </div>
            
            <div className="pl-6 border-l-2 border-[rgb(var(--lf-gold))] lf-fade-in-up lf-delay-100">
              <p className="font-serif text-xl md:text-2xl text-[rgb(var(--lf-charcoal))]/80 italic">
                "The perfect pair of shoes doesn't just complete an outfit; it transforms how a woman carries herself through the world."
              </p>
            </div>
            
            <div className="pt-4 lf-fade-in-up lf-delay-200">
              <a href="#origin" className="inline-flex items-center gap-2 border-b border-[rgb(var(--lf-wine))] pb-1 text-[rgb(var(--lf-wine))] uppercase tracking-widest text-sm hover:text-[rgb(var(--lf-gold))] hover:border-[rgb(var(--lf-gold))] transition-all">
                Discover Our Story <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Section */}
      <section id="origin" className="py-24 md:py-32 bg-[rgb(var(--lf-wine))] text-[rgb(var(--lf-cream))] relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-[rgb(var(--lf-gold))]/10 rounded-full blur-3xl mix-blend-screen pointer-events-none"></div>
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative lf-animate-on-scroll">
            <div className="aspect-[3/4] relative z-10 p-2 bg-[rgb(var(--lf-cream))]/10 backdrop-blur-sm">
              <img 
                src="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=1000&auto=format&fit=crop" 
                alt="Vintage sketch of a shoe" 
                className="w-full h-full object-cover grayscale opacity-80 mix-blend-overlay"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 border border-[rgb(var(--lf-gold))]/30 z-0"></div>
          </div>
          
          <div className="order-1 md:order-2 space-y-8 lf-animate-on-scroll">
            <h2 className="font-serif text-5xl italic text-[rgb(var(--lf-gold))]">How It Began</h2>
            <div className="space-y-6 text-[rgb(var(--lf-cream))]/80 font-light leading-relaxed">
              <p>
                It started not with a business plan, but with an obsession. Zahra Baig, a young woman with a sketchbook full of heels and an uncompromising eye for detail, began curating small collections of bridal footwear from a tiny studio in the city center.
              </p>
              <p>
                She believed that the most important day of a woman's life demanded shoes that were as comfortable as they were breathtaking. Word spread not through marketing, but through the whispers of brides who danced until dawn without a single blister.
              </p>
              <p>
                What began as a passion project soon outgrew its humble origins, blossoming into a sanctuary for women seeking that elusive blend of artisanal craftsmanship and modern elegance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Journey */}
      <section className="py-24 bg-[rgb(var(--lf-cream))] relative overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 top-0 w-px h-full bg-gradient-to-b from-transparent via-[rgb(var(--lf-gold))]/30 to-transparent hidden md:block"></div>
        
        <div className="max-w-4xl mx-auto px-6 text-center mb-16 lf-animate-on-scroll">
          <p className="uppercase tracking-[0.2em] text-[rgb(var(--lf-gold))] text-sm font-medium mb-4">The Evolution</p>
          <h2 className="font-serif text-4xl md:text-5xl text-[rgb(var(--lf-wine))]">A Journey of Passion</h2>
        </div>

        <div className="max-w-6xl mx-auto px-6 space-y-24">
          <div className="grid md:grid-cols-2 gap-12 items-center lf-animate-on-scroll">
            <div className="text-right md:pr-12">
              <h3 className="font-serif text-2xl text-[rgb(var(--lf-wine-light))] mb-4">Beyond the Aisle</h3>
              <p className="text-[rgb(var(--lf-charcoal))]/70">As our bridal clientele returned seeking footwear for their everyday lives, our vision expanded. We began traveling globally, forging relationships with generational shoemakers in Italy and Spain to bring unmatched quality to our shelves.</p>
            </div>
            <div className="relative aspect-video md:aspect-square bg-[rgb(var(--lf-wine))]/5 overflow-hidden p-8 flex items-center justify-center">
               <img src="https://images.unsplash.com/photo-1595341888016-a392ef81b7de?q=80&w=800&auto=format&fit=crop" alt="Craftsmanship" className="w-full h-full object-cover mix-blend-multiply opacity-80" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center lf-animate-on-scroll">
            <div className="order-2 md:order-1 relative aspect-video md:aspect-square bg-[rgb(var(--lf-gold))]/10 overflow-hidden flex items-center justify-center p-8">
              <img src="https://images.unsplash.com/photo-1560343090-f0409e92791a?q=80&w=800&auto=format&fit=crop" alt="The Boutique Experience" className="w-full h-full object-cover mix-blend-multiply opacity-80" />
            </div>
            <div className="order-1 md:order-2 md:pl-12">
              <h3 className="font-serif text-2xl text-[rgb(var(--lf-wine-light))] mb-4">The Boutique Experience</h3>
              <p className="text-[rgb(var(--lf-charcoal))]/70">We moved into our flagship space with a singular goal: to create a feeling of coming home. A place where trying on shoes feels less like shopping and more like catching up with an old friend over coffee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones Timeline */}
      <section className="py-24 bg-[#F2EFE9]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16 lf-animate-on-scroll">
            <h2 className="font-serif text-4xl md:text-5xl text-[rgb(var(--lf-wine))]">Key Chapters</h2>
          </div>

          <div className="relative border-l border-[rgb(var(--lf-gold))]/30 ml-4 md:ml-1/2 md:translate-x-[-1px] space-y-12 pb-8">
            
            {[
              { year: "2007", title: "The First Pair", desc: "Zahra opens a modest showroom focused exclusively on custom bridal footwear." },
              { year: "2012", title: "The European Connection", desc: "Launch of our first imported collection featuring handcrafted leather goods from Milan." },
              { year: "2018", title: "Flagship Opening", desc: "Moving to our current beautiful, sunlit space with its signature wine-velvet seating." },
              { year: "2023", title: "The Khussa Revival", desc: "A celebrated collection reviving traditional craftsmanship with modern comfort padding." }
            ].map((milestone, idx) => (
              <div key={idx} className="relative pl-8 md:pl-0 lf-animate-on-scroll">
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-[rgb(var(--lf-gold))] md:left-1/2 md:-ml-[5px]"></div>
                
                <div className={`md:w-1/2 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                  <span className="font-serif text-5xl text-[rgb(var(--lf-gold))]/20 block absolute top-[-15px] -z-10">{milestone.year}</span>
                  <div className="font-serif text-2xl text-[rgb(var(--lf-wine))] mb-2 pt-2">{milestone.title}</div>
                  <p className="text-[rgb(var(--lf-charcoal))]/70 text-sm">{milestone.desc}</p>
                </div>
              </div>
            ))}
            
          </div>
        </div>
      </section>

      {/* The People */}
      <section className="py-24 bg-[rgb(var(--lf-cream))]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20 lf-animate-on-scroll">
            <h2 className="font-serif text-4xl md:text-5xl text-[rgb(var(--lf-wine))]">The Heart of Zahra's</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            
            {/* Founder */}
            <div className="md:col-span-3 grid md:grid-cols-2 gap-12 items-center mb-12 lf-animate-on-scroll">
              <div className="aspect-[4/5] relative bg-[rgb(var(--lf-wine))]/5 p-4">
                 <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center mix-blend-luminosity opacity-90"></div>
                 <div className="absolute inset-0 border border-[rgb(var(--lf-gold))]/40 m-8 pointer-events-none"></div>
              </div>
              <div>
                <h3 className="font-serif text-4xl text-[rgb(var(--lf-wine))] mb-2">Zahra Baig</h3>
                <p className="uppercase tracking-widest text-[rgb(var(--lf-gold))] text-sm mb-6">Founder & Curator</p>
                <div className="relative">
                  <Quote className="absolute -top-4 -left-6 w-12 h-12 text-[rgb(var(--lf-gold))]/20" />
                  <p className="text-[rgb(var(--lf-charcoal))]/80 leading-relaxed font-serif text-xl italic relative z-10">
                    "I don't just sell shoes. I help women find the foundation upon which they will build their memories. From walking down the aisle to conquering a boardroom, what you wear on your feet changes how you stand in the world."
                  </p>
                </div>
              </div>
            </div>

            {/* Staff */}
            {[
              { name: "Aisha", role: "Bridal Consultant", desc: "With us for 10 years, Aisha has a seemingly magical ability to match a bride with her perfect shoe before the second fitting." },
              { name: "Elena", role: "Fit Specialist", desc: "Elena believes no woman should suffer for beauty. Her expertise in arches and insteps has saved countless evenings." },
              { name: "Sarah", role: "Store Manager", desc: "The warm smile that greets you. Sarah ensures the boutique always smells faintly of roses and fresh coffee." }
            ].map((staff, idx) => (
              <div key={idx} className="text-center lf-animate-on-scroll" style={{ transitionDelay: `${idx * 100}ms` }}>
                <div className="w-32 h-32 mx-auto rounded-full bg-[rgb(var(--lf-wine))]/5 mb-6 border border-[rgb(var(--lf-gold))]/20 flex items-center justify-center overflow-hidden">
                   <img src={`https://images.unsplash.com/photo-${1500000000000 + idx}?q=80&w=400&auto=format&fit=crop`} alt={staff.name} className="w-full h-full object-cover grayscale opacity-70" />
                </div>
                <h4 className="font-serif text-2xl text-[rgb(var(--lf-wine))]">{staff.name}</h4>
                <p className="uppercase tracking-wider text-[rgb(var(--lf-gold))] text-xs mb-4 mt-1">{staff.role}</p>
                <p className="text-[rgb(var(--lf-charcoal))]/60 text-sm leading-relaxed">{staff.desc}</p>
              </div>
            ))}
            
          </div>
        </div>
      </section>

      {/* Press & Accolades (Optional) */}
      <section className="py-20 border-y border-[rgb(var(--lf-gold))]/20 bg-[rgb(var(--lf-cream))]">
        <div className="max-w-6xl mx-auto px-6 text-center lf-animate-on-scroll">
          <p className="uppercase tracking-[0.2em] text-[rgb(var(--lf-charcoal))]/40 text-sm font-medium mb-12">As Featured In</p>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale">
            <span className="font-serif text-2xl md:text-3xl font-bold">VOGUE</span>
            <span className="font-serif text-2xl md:text-3xl italic">Bridal Asia</span>
            <span className="font-serif text-2xl md:text-3xl tracking-widest">ELLE</span>
            <span className="font-serif text-2xl md:text-3xl font-light">The Daily</span>
          </div>
        </div>
      </section>

      {/* Where We Are & Footer */}
      <footer id="visit" className="bg-[rgb(var(--lf-wine))] text-[rgb(var(--lf-cream))] pt-24 pb-12">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 mb-24">
          <div className="space-y-8 lf-animate-on-scroll">
            <h2 className="font-serif text-5xl text-[rgb(var(--lf-gold))]">Visit the Boutique</h2>
            <p className="text-[rgb(var(--lf-cream))]/70 font-light max-w-sm">
              Step into our serene space. Let us pour you a cup of tea while we find the perfect pair for your next occasion.
            </p>
            
            <div className="space-y-6 pt-4">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[rgb(var(--lf-gold))] mt-1" />
                <div>
                  <p className="font-medium">Zahra's Footwear Boutique</p>
                  <p className="text-[rgb(var(--lf-cream))]/60 text-sm mt-1">142 Heritage Boulevard<br/>Fashion District<br/>City, 10001</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 text-[rgb(var(--lf-gold))]" />
                <p className="text-[rgb(var(--lf-cream))]/60 text-sm">+1 (555) 123-4567</p>
              </div>
              
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-[rgb(var(--lf-gold))]" />
                <p className="text-[rgb(var(--lf-cream))]/60 text-sm">hello@zahrasboutique.com</p>
              </div>
            </div>
          </div>
          
          <div className="bg-[rgb(var(--lf-wine-light))]/30 p-8 md:p-12 lf-animate-on-scroll">
            <h3 className="font-serif text-3xl mb-6">Store Hours</h3>
            <div className="space-y-4 text-sm text-[rgb(var(--lf-cream))]/80 border-b border-[rgb(var(--lf-gold))]/20 pb-8 mb-8">
              <div className="flex justify-between">
                <span>Monday - Friday</span>
                <span>10:00 AM - 7:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span>Saturday</span>
                <span>10:00 AM - 8:00 PM</span>
              </div>
              <div className="flex justify-between text-[rgb(var(--lf-gold))]">
                <span>Sunday</span>
                <span>By Appointment Only</span>
              </div>
            </div>
            
            <p className="text-sm italic text-[rgb(var(--lf-cream))]/60 mb-6">
              For bridal consultations, we recommend booking a private appointment to ensure dedicated time with our specialists.
            </p>
            <button className="w-full py-4 border border-[rgb(var(--lf-gold))] text-[rgb(var(--lf-gold))] uppercase tracking-widest text-sm hover:bg-[rgb(var(--lf-gold))] hover:text-[rgb(var(--lf-wine))] transition-colors">
              Request Appointment
            </button>
          </div>
        </div>
        
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center border-t border-[rgb(var(--lf-cream))]/10 pt-8 text-[rgb(var(--lf-cream))]/40 text-xs">
          <p>&copy; {new Date().getFullYear()} Zahra's Footwear Boutique. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-[rgb(var(--lf-gold))] transition-colors"><Instagram className="w-4 h-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
}
