import React, { useEffect, useRef } from 'react';
import './_group.css';
import { Button } from '@/components/ui/button';
import { MapPin, Phone, Clock, Star, Award, Scissors, Ruler } from 'lucide-react';

export default function MensClothing() {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in-up');
          entry.target.classList.remove('opacity-0');
          observerRef.current?.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.observe-me');
    elements.forEach((el) => observerRef.current?.observe(el));

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-dmsans text-[#1A1A1A]">
      {/* Header */}
      <header className="fixed w-full top-0 z-50 bg-tailor-navy/95 backdrop-blur-sm text-white border-b border-white/10">
        <div className="container mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scissors className="w-6 h-6 text-tailor-gold" />
            <span className="font-playfair text-xl tracking-widest font-semibold uppercase">Khan Brothers</span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm tracking-widest uppercase">
            <a href="#origin" className="hover:text-tailor-gold transition-colors">Heritage</a>
            <a href="#milestones" className="hover:text-tailor-gold transition-colors">Archive</a>
            <a href="#people" className="hover:text-tailor-gold transition-colors">Master Tailors</a>
            <a href="#contact" className="hover:text-tailor-gold transition-colors">Consultation</a>
          </nav>
          <Button variant="outline" className="hidden md:inline-flex border-tailor-gold text-tailor-gold hover:bg-tailor-gold hover:text-tailor-navy rounded-none uppercase tracking-widest text-xs h-10 px-6">
            Book Fitting
          </Button>
        </div>
      </header>

      {/* Hero */}
      <section className="relative h-[90vh] md:h-screen flex items-center bg-tailor-navy overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/__mockup/images/mens-clothing-hero.png" 
            alt="Master tailor at work" 
            className="w-full h-full object-cover opacity-40 mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-tailor-navy via-tailor-navy/80 to-transparent" />
        </div>
        
        <div className="container relative z-10 px-6 pt-20">
          <div className="max-w-3xl observe-me opacity-0">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-tailor-gold"></div>
              <span className="text-tailor-gold tracking-[0.3em] uppercase text-sm font-medium">Est. 1969</span>
            </div>
            <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-white font-bold leading-tight mb-8">
              The Measure <br/>
              <span className="text-tailor-gold italic font-light">of a Man.</span>
            </h1>
            <p className="text-gray-300 text-lg md:text-xl max-w-xl leading-relaxed mb-10 font-light border-l-2 border-tailor-gold pl-6">
              "True style is not about being noticed, but about being remembered. Since 1969, we have dressed generations of men for their most defining moments."
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-tailor-gold text-tailor-navy hover:bg-white rounded-none uppercase tracking-widest h-14 px-8 text-sm font-semibold transition-colors">
                Discover Our Craft
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-tailor-navy rounded-none uppercase tracking-widest h-14 px-8 text-sm transition-colors">
                The Heritage
              </Button>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/50 text-xs tracking-[0.2em] uppercase origin-left rotate-90 mb-8">Scroll</span>
          <div className="w-[1px] h-16 bg-white/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-tailor-gold animate-draw-line" style={{animationIterationCount: 'infinite'}}></div>
          </div>
        </div>
      </section>

      {/* Origin */}
      <section id="origin" className="py-24 md:py-32 bg-[#FDFBF7]">
        <div className="container px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative observe-me opacity-0">
              <div className="aspect-[3/4] bg-tailor-navy p-2">
                <div className="w-full h-full border border-white/20 p-2">
                  <div className="w-full h-full bg-gray-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-tailor-charcoal/10 mix-blend-multiply"></div>
                    <img src="https://images.unsplash.com/photo-1594938298596-033784f11b41?q=80&w=1000&auto=format&fit=crop" alt="Vintage tailor shop" className="w-full h-full object-cover grayscale" />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-tailor-navy hidden md:flex items-center justify-center p-8 rounded-full">
                <p className="text-white text-center font-playfair italic text-lg leading-tight">
                  "Measure twice, <br/>cut once."
                </p>
                <div className="absolute inset-2 border border-white/20 rounded-full"></div>
              </div>
            </div>
            
            <div className="observe-me opacity-0">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-8 bg-tailor-gold"></div>
                <span className="text-tailor-navy tracking-[0.2em] uppercase text-sm font-semibold">Our Origin</span>
              </div>
              <h2 className="font-playfair text-4xl md:text-5xl text-tailor-navy font-bold mb-8">Where It All Began</h2>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                In 1969, Haji Zubair Khan opened a modest tailoring shop with a single sewing machine and an uncompromising vision: to craft garments that command respect. 
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                What started as a humble establishment quickly became the cornerstone of gentlemen's dressing in the city. Haji Zubair's meticulous attention to the drape of a shoulder and the break of a trouser leg earned him a reputation that spread by word of mouth alone. He believed that a well-tailored suit or sherwani wasn't just clothing—it was armor for life's most important occasions.
              </p>
              <div className="border-l-4 border-tailor-gold pl-6 py-2">
                <p className="font-playfair text-xl text-tailor-navy italic">
                  "A man's character is built over a lifetime. His suit should be built to match."
                </p>
                <p className="text-sm text-gray-500 mt-2 uppercase tracking-wider">— Haji Zubair Khan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Journey */}
      <section className="py-24 bg-tailor-navy text-white tailor-pattern">
        <div className="container px-6 mx-auto max-w-4xl text-center observe-me opacity-0">
          <Scissors className="w-8 h-8 text-tailor-gold mx-auto mb-6" />
          <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-8">A Legacy Woven in Time</h2>
          <p className="text-gray-300 text-lg leading-relaxed mb-6 font-light">
            Through decades of changing fashions, our foundational philosophy has remained unshaken. We have witnessed the evolution from wide lapels to slim cuts, but the essence of a perfectly fitted garment never goes out of style.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed font-light">
            Today, Khan Brothers stands as a testament to enduring craftsmanship. We don't just sell suits and sherwanis; we preserve an art form. Every stitch is a nod to our heritage, every fitting a continuation of a story that began over fifty years ago. Fathers who came to us for their wedding attire now bring their sons for theirs. That is the true measure of our success.
          </p>
        </div>
      </section>

      {/* Milestones */}
      <section id="milestones" className="py-24 md:py-32 bg-[#FDFBF7]">
        <div className="container px-6 mx-auto max-w-5xl">
          <div className="text-center mb-20 observe-me opacity-0">
            <div className="flex items-center justify-center gap-4 mb-4">
              <div className="h-[1px] w-8 bg-tailor-gold"></div>
              <span className="text-tailor-navy tracking-[0.2em] uppercase text-sm font-semibold">The Archive</span>
              <div className="h-[1px] w-8 bg-tailor-gold"></div>
            </div>
            <h2 className="font-playfair text-4xl md:text-5xl text-tailor-navy font-bold">Key Measurements in Time</h2>
          </div>

          <div className="relative border-l border-tailor-gold/30 ml-4 md:ml-1/2 md:translate-x-[-1px]">
            {[
              { year: "1969", title: "The First Stitch", desc: "Haji Zubair Khan opens the original shop, completing his first bespoke commission." },
              { year: "1984", title: "The Royal Commission", desc: "Selected to tailor the official attire for the visiting diplomatic delegation." },
              { year: "1998", title: "New Premises", desc: "Expansion to our current flagship location, allowing for an in-house cutting room." },
              { year: "2010", title: "Generational Handover", desc: "The shears are passed to the second generation, preserving the old ways while embracing the new." },
              { year: "2024", title: "Fifty-Five Years", desc: "Celebrating over half a century of dressing gentlemen for excellence." }
            ].map((milestone, idx) => (
              <div key={idx} className={`mb-16 relative pl-10 md:pl-0 observe-me opacity-0 ${idx % 2 === 0 ? 'md:pr-16 md:text-right md:mr-[50%]' : 'md:pl-16 md:ml-[50%]'}`}>
                <div className={`absolute top-0 w-3 h-3 bg-tailor-gold rounded-full -left-[6px] md:left-auto ${idx % 2 === 0 ? 'md:-right-[6px]' : 'md:-left-[6px]'}`}></div>
                <div className="font-playfair text-3xl text-tailor-gold font-bold mb-2">{milestone.year}</div>
                <h3 className="text-xl font-bold text-tailor-navy mb-3 uppercase tracking-wide">{milestone.title}</h3>
                <p className="text-gray-600 leading-relaxed">{milestone.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The People */}
      <section id="people" className="py-24 bg-tailor-charcoal text-white">
        <div className="container px-6 mx-auto">
          <div className="text-center mb-16 observe-me opacity-0">
            <h2 className="font-playfair text-4xl md:text-5xl font-bold mb-6">The Masters at Work</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Behind every immaculate garment is a pair of seasoned hands. Meet the artisans who uphold the Khan Brothers standard.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {[
              {
                name: "Tariq Khan",
                role: "Master Tailor & Proprietor",
                note: "Son of the founder, Tariq oversees every final fitting with an uncompromising eye for drape and silhouette.",
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop"
              },
              {
                name: "Master Rafiq",
                role: "Head Cutter",
                note: "With 40 years at the cutting table, his shears move with the precision of a surgeon. He turns flat fabric into architecture.",
                img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop"
              },
              {
                name: "Bilal Ahmed",
                role: "Finishing Specialist",
                note: "The perfectionist responsible for the hand-stitched buttonholes and pick-stitching that define true bespoke.",
                img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
              }
            ].map((person, idx) => (
              <div key={idx} className="group observe-me opacity-0">
                <div className="aspect-[3/4] mb-6 overflow-hidden bg-tailor-navy relative">
                  <div className="absolute inset-0 bg-tailor-gold/10 mix-blend-overlay z-10 group-hover:opacity-0 transition-opacity duration-500"></div>
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" />
                </div>
                <h3 className="font-playfair text-2xl font-bold mb-1">{person.name}</h3>
                <p className="text-tailor-gold text-sm uppercase tracking-widest mb-4 font-medium">{person.role}</p>
                <p className="text-gray-400 text-sm leading-relaxed">{person.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-tailor-navy border-y border-white/10">
        <div className="container px-6 mx-auto observe-me opacity-0">
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60">
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-tailor-gold" />
              <span className="text-white font-playfair text-xl italic">Master Tailors Guild</span>
            </div>
            <div className="flex items-center gap-3">
              <Star className="w-8 h-8 text-tailor-gold" />
              <span className="text-white font-playfair text-xl italic">Heritage Excellence 2023</span>
            </div>
            <div className="flex items-center gap-3">
              <Award className="w-8 h-8 text-tailor-gold" />
              <span className="text-white font-playfair text-xl italic">Bespoke Association</span>
            </div>
          </div>
        </div>
      </section>

      {/* Location & Contact */}
      <section id="contact" className="py-24 bg-[#FDFBF7]">
        <div className="container px-6 mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="observe-me opacity-0">
              <h2 className="font-playfair text-4xl md:text-5xl text-tailor-navy font-bold mb-8">Visit the Atelier</h2>
              <p className="text-gray-600 mb-10 leading-relaxed text-lg">
                True bespoke tailoring requires an in-person consultation. We invite you to our shop to discuss your needs, browse our fabric books, and experience the Khan Brothers standard.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-tailor-navy text-white flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-tailor-navy uppercase tracking-wider mb-2">Location</h4>
                    <p className="text-gray-600">42 Heritage Row<br/>Tailors District<br/>City Center</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-tailor-navy text-white flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-tailor-navy uppercase tracking-wider mb-2">Hours</h4>
                    <p className="text-gray-600">Mon - Sat: 10:00 AM - 7:00 PM<br/>Sun: By Appointment Only</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-tailor-navy text-white flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-tailor-navy uppercase tracking-wider mb-2">Contact</h4>
                    <p className="text-gray-600">+1 (555) 019-1969<br/>fittings@khanbrothers.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-tailor-navy p-10 text-white observe-me opacity-0 flex flex-col justify-center relative">
              <div className="absolute inset-2 border border-white/10 pointer-events-none"></div>
              <h3 className="font-playfair text-3xl font-bold mb-6">Request a Fitting</h3>
              <p className="text-gray-400 mb-8 font-light">Leave your details, and our master tailor will contact you to schedule a private consultation.</p>
              
              <form className="space-y-6 relative z-10" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-tailor-gold transition-colors text-white" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Phone</label>
                  <input type="tel" className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-tailor-gold transition-colors text-white" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-gray-400 mb-2">Garment Type</label>
                  <select className="w-full bg-transparent border-b border-white/20 pb-2 focus:outline-none focus:border-tailor-gold transition-colors text-white [&>option]:text-black">
                    <option>Bespoke Suit</option>
                    <option>Wedding Sherwani</option>
                    <option>Shalwar Kameez</option>
                    <option>Alterations</option>
                  </select>
                </div>
                <Button className="w-full bg-tailor-gold text-tailor-navy hover:bg-white rounded-none uppercase tracking-widest h-14 mt-4 font-semibold transition-colors">
                  Submit Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12 text-center border-t border-white/10">
        <div className="container px-6 mx-auto flex flex-col items-center">
          <Scissors className="w-6 h-6 text-tailor-gold mb-6" />
          <p className="font-playfair text-2xl text-white font-bold tracking-widest uppercase mb-4">Khan Brothers</p>
          <p className="text-gray-500 text-sm uppercase tracking-widest mb-8">Master Tailors Since 1969</p>
          <div className="flex gap-6 mb-8 text-sm text-gray-400 uppercase tracking-wider">
            <a href="#" className="hover:text-tailor-gold transition-colors">Instagram</a>
            <a href="#" className="hover:text-tailor-gold transition-colors">Facebook</a>
            <a href="#" className="hover:text-tailor-gold transition-colors">Journal</a>
          </div>
          <p className="text-gray-600 text-xs">&copy; {new Date().getFullYear()} Khan Brothers Tailors. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}