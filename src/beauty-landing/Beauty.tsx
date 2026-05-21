import React from "react";
import { Link } from "wouter";
import { MapPin, Phone, Mail, Instagram, Star, Heart } from "lucide-react";
import "./_group.css";

export function Beauty() {
  return (
    <div
      className="min-h-screen text-[#4A3B3C] font-sans selection:bg-[#F2D7D5] selection:text-[#4A3B3C]"
      style={{
        backgroundColor: "#FCF9F9",
        "--tw-colors-rose-gold": "#E8C3C4",
        "--tw-colors-blush": "#F2D7D5",
        "--tw-colors-champagne": "#F9F3EE",
        "--tw-colors-ivory": "#FCF9F9",
        "--tw-colors-mauve": "#7B5B60",
        "--tw-colors-burgundy": "#4A3B3C",
      } as React.CSSProperties}
    >
      <style dangerouslySetInnerHTML={{ __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Outfit:wght@300;400;500&display=swap');
        .font-serif { font-family: 'Cormorant Garamond', serif; }
        .font-sans { font-family: 'Outfit', sans-serif; }
      `}} />

      {/* Navigation */}
      <nav className="absolute top-0 w-full z-50 px-6 py-6 md:px-12 flex justify-between items-center text-[#FCF9F9]">
        <div className="font-serif text-2xl tracking-widest uppercase">Nadia's</div>
        <div className="hidden md:flex gap-8 text-sm tracking-widest uppercase">
          <a href="#origin" className="hover:text-[#F2D7D5] transition-colors">Our Story</a>
          <a href="#milestones" className="hover:text-[#F2D7D5] transition-colors">Journey</a>
          <a href="#team" className="hover:text-[#F2D7D5] transition-colors">The Team</a>
          <a href="#contact" className="hover:text-[#F2D7D5] transition-colors">Visit</a>
        </div>
      </nav>

      {/* 1. Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/__mockup/images/beauty-hero.png"
            alt="Nadia's Beauty Lounge Interior"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#4A3B3C]/40 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#FCF9F9] via-transparent to-transparent opacity-80"></div>
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center">
          <span className="text-[#F2D7D5] tracking-[0.3em] uppercase text-sm md:text-base mb-6 animate-fade-in-up">Established 2004</span>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#FCF9F9] mb-8 leading-tight animate-fade-in-up delay-100">
            Nadia's Beauty Lounge
          </h1>
          <p className="font-serif italic text-2xl md:text-3xl text-[#F9F3EE] mb-12 animate-fade-in-up delay-200">
            "Every woman who walks through these doors deserves to feel like art."
          </p>
          <div className="h-24 w-[1px] bg-gradient-to-b from-[#F2D7D5] to-transparent animate-fade-in-up delay-300"></div>
        </div>
      </section>

      {/* 2. Origin */}
      <section id="origin" className="py-24 md:py-32 px-6 md:px-12 bg-[#FCF9F9]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-[#F9F3EE] rounded-t-full -z-10 transform -rotate-3"></div>
            <img
              src="/__mockup/images/beauty-origin.jpg"
              alt="Vintage beauty tools"
              className="w-full h-auto rounded-t-full shadow-xl"
            />
          </div>
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#7B5B60] mb-6">How It Began</h2>
            <div className="space-y-6 text-lg leading-relaxed text-[#4A3B3C]/80">
              <p>
                In the summer of 2004, Nadia Malik transformed a small, sunlit room in her home into a sanctuary. With just two chairs, a mirror gifted by her mother, and an undeniable gift for understanding what makes each woman uniquely beautiful, Nadia's Beauty Lounge was born.
              </p>
              <p>
                It wasn't just about makeup or hair; it was about creating a space where women could exhale. A place where the heavy mantles of daily life could be briefly set aside, replaced by the soft hum of conversation, the scent of rosewater, and the gentle touch of care.
              </p>
            </div>
            <div className="mt-12">
              <img src="/__mockup/images/beautician_1.jpg" alt="Nadia Malik" className="w-16 h-16 rounded-full object-cover shadow-md mb-4" />
              <p className="font-serif italic text-xl text-[#7B5B60]">— Nadia Malik, Founder</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Business Journey & 4. Milestones */}
      <section id="milestones" className="py-24 md:py-32 bg-[#F9F3EE] relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl text-[#7B5B60] mb-6">Our Journey</h2>
            <p className="text-lg text-[#4A3B3C]/70 max-w-2xl mx-auto">
              From that single room to the sanctuary we are today, every milestone is a testament to the community of women who have trusted us with their most precious moments.
            </p>
          </div>

          <div className="space-y-16">
            {[
              { year: "2004", title: "The First Thread", desc: "Opened the doors to our first three clients, setting the foundation of trust and artistry." },
              { year: "2008", title: "The First Bridal Season", desc: "Prepared our first 50 brides for their wedding days, becoming a trusted name for South Asian bridal makeovers." },
              { year: "2015", title: "A New Sanctuary", desc: "Moved to our current flagship location, expanding into a full-scale lounge with a dedicated bridal suite." },
              { year: "2023", title: "Two Decades of Beauty", desc: "Celebrated 20 years of empowering women, welcoming the daughters of our very first clients." }
            ].map((milestone, idx) => (
              <div key={idx} className="relative pl-8 md:pl-0 flex flex-col md:flex-row items-start md:items-center justify-between group">
                <div className="hidden md:block w-5/12 text-right pr-8">
                  {idx % 2 === 0 && (
                    <div>
                      <h3 className="font-serif text-2xl text-[#7B5B60] mb-2">{milestone.title}</h3>
                      <p className="text-[#4A3B3C]/70">{milestone.desc}</p>
                    </div>
                  )}
                </div>
                
                <div className="absolute left-0 md:left-1/2 w-[2px] h-full bg-[#E8C3C4] transform md:-translate-x-1/2 top-8 md:top-0 -z-10 group-last:h-0"></div>
                
                <div className="absolute left-[-5px] md:left-1/2 md:-translate-x-1/2 w-3 h-3 rounded-full bg-[#7B5B60] shadow-[0_0_0_4px_#F9F3EE]"></div>
                
                <div className="w-full md:w-5/12 pl-8 md:pl-8">
                  <div className="font-serif text-3xl md:text-4xl text-[#E8C3C4] mb-2">{milestone.year}</div>
                  {idx % 2 !== 0 && (
                    <div className="hidden md:block">
                      <h3 className="font-serif text-2xl text-[#7B5B60] mb-2">{milestone.title}</h3>
                      <p className="text-[#4A3B3C]/70">{milestone.desc}</p>
                    </div>
                  )}
                  <div className="block md:hidden">
                    <h3 className="font-serif text-2xl text-[#7B5B60] mb-2">{milestone.title}</h3>
                    <p className="text-[#4A3B3C]/70">{milestone.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The People */}
      <section id="team" className="py-24 md:py-32 bg-[#FCF9F9]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="font-serif text-4xl md:text-5xl text-[#7B5B60] mb-6">The Hands Behind the Art</h2>
            <p className="text-lg text-[#4A3B3C]/70 max-w-2xl mx-auto">
              Our parlour is brought to life by a collective of talented women who share a singular vision: to reveal the innate elegance in every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                name: "Nadia Malik",
                role: "Founder & Master Stylist",
                img: "/__mockup/images/beautician_1.jpg",
                note: "With over two decades of artistry, Nadia believes beauty is not applied, but revealed."
              },
              {
                name: "Aisha Rahman",
                role: "Senior Bridal Specialist",
                img: "/__mockup/images/beautician_2.jpg",
                note: "Aisha's delicate touch and calming presence have anchored hundreds of brides on their big day."
              },
              {
                name: "Zara Khan",
                role: "Skin Care Expert",
                img: "/__mockup/images/beautician_3.jpg",
                note: "Zara approaches skincare as a therapeutic ritual, ensuring every glow is rooted in true wellness."
              }
            ].map((person, idx) => (
              <div key={idx} className="group text-center">
                <div className="relative mb-8 overflow-hidden rounded-t-full aspect-[3/4] max-w-xs mx-auto">
                  <div className="absolute inset-0 bg-[#E8C3C4]/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                  <img
                    src={person.img}
                    alt={person.name}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-serif text-2xl text-[#7B5B60] mb-1">{person.name}</h3>
                <p className="text-sm uppercase tracking-widest text-[#E8C3C4] mb-4">{person.role}</p>
                <p className="text-[#4A3B3C]/80 text-sm leading-relaxed max-w-xs mx-auto">
                  {person.note}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Client Love (Optional included) */}
      <section className="py-24 md:py-32 bg-[#7B5B60] text-[#FCF9F9]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <Heart className="w-8 h-8 mx-auto mb-10 text-[#E8C3C4]" />
          <div className="relative">
            <span className="absolute -top-10 -left-10 text-8xl font-serif text-[#4A3B3C]/20">"</span>
            <p className="font-serif text-3xl md:text-4xl leading-relaxed italic mb-10 relative z-10">
              I’ve been coming to Nadia's for ten years. They did my Eid makeup when I was a teenager, and last month, they prepared me for my wedding. It feels less like a salon and more like a second home.
            </p>
            <span className="absolute -bottom-20 -right-10 text-8xl font-serif text-[#4A3B3C]/20">"</span>
          </div>
          <p className="text-[#E8C3C4] tracking-widest uppercase text-sm">— Samira A.</p>
        </div>
      </section>

      {/* 6. Where We Are */}
      <section id="contact" className="py-24 md:py-32 bg-[#F9F3EE]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl text-[#7B5B60] mb-10">Visit Our Sanctuary</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 text-[#4A3B3C]">
                <MapPin className="w-6 h-6 text-[#7B5B60] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-xl mb-1">Location</h4>
                  <p className="text-[#4A3B3C]/70">124 Rosewood Avenue<br />Elegance District, CA 90210</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 text-[#4A3B3C]">
                <Phone className="w-6 h-6 text-[#7B5B60] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-xl mb-1">Contact</h4>
                  <p className="text-[#4A3B3C]/70">(555) 123-4567<br />hello@nadiaslounge.com</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4 text-[#4A3B3C]">
                <Star className="w-6 h-6 text-[#7B5B60] flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-serif text-xl mb-1">Hours</h4>
                  <p className="text-[#4A3B3C]/70">
                    Tuesday – Saturday: 10am – 7pm<br />
                    Sunday: Bridal Appointments Only<br />
                    Monday: Rest
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="h-[400px] bg-[#E8C3C4]/30 rounded-lg overflow-hidden relative flex items-center justify-center">
            {/* Placeholder for map */}
            <div className="text-center p-8">
              <MapPin className="w-12 h-12 text-[#7B5B60] mx-auto mb-4 opacity-50" />
              <p className="font-serif text-2xl text-[#7B5B60]">Nadia's Beauty Lounge</p>
              <p className="text-[#4A3B3C]/60 text-sm mt-2">Map View</p>
            </div>
            <div className="absolute inset-0 border border-[#7B5B60]/20 m-4 rounded"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4A3B3C] text-[#F9F3EE] py-12 px-6 text-center">
        <div className="font-serif text-3xl mb-6">Nadia's</div>
        <div className="flex justify-center gap-6 mb-8">
          <a href="#" className="hover:text-[#E8C3C4] transition-colors"><Instagram className="w-5 h-5" /></a>
          <a href="#" className="hover:text-[#E8C3C4] transition-colors"><Mail className="w-5 h-5" /></a>
        </div>
        <p className="text-sm text-[#F9F3EE]/50">
          © {new Date().getFullYear()} Nadia's Beauty Lounge. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
