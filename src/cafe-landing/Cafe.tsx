import React from 'react';
import { Coffee, MapPin, Clock, Quote, Heart, Users, Star, Instagram } from 'lucide-react';
import './_group.css';

export function Cafe() {
  return (
    <div className="cafe-landing min-h-screen bg-[#F9F6F0] text-[#3B2818] font-sans selection:bg-[#C05C3B] selection:text-white overflow-x-hidden">
      <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&display=swap" rel="stylesheet" />
      
      {/* Navigation */}
      <nav className="absolute top-0 w-full z-50 px-6 py-8 flex justify-between items-center text-[#F9F6F0]">
        <div className="text-2xl font-serif font-bold tracking-wider">Saba's</div>
        <div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide uppercase">
          <a href="#story" className="hover:text-[#C05C3B] transition-colors">Our Story</a>
          <a href="#journey" className="hover:text-[#C05C3B] transition-colors">Journey</a>
          <a href="#family" className="hover:text-[#C05C3B] transition-colors">Family</a>
          <a href="#visit" className="hover:text-[#C05C3B] transition-colors">Visit Us</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/__mockup/images/cafe-hero.png" 
            alt="Saba's Café morning light" 
            className="w-full h-full object-cover object-center animate-slow-pan"
          />
          <div className="absolute inset-0 bg-[#3B2818]/50 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#F9F6F0] via-transparent to-black/40"></div>
        </div>
        
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto flex flex-col items-center animate-fade-in-up mt-20">
          <Coffee className="w-12 h-12 text-[#F9F6F0] mb-8 opacity-90 stroke-[1.5]" />
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif text-[#F9F6F0] mb-6 tracking-tight drop-shadow-sm">Saba's Café</h1>
          <div className="w-24 h-px bg-[#C05C3B] mb-8"></div>
          <p className="text-xl md:text-3xl text-[#F9F6F0]/95 font-serif italic max-w-2xl mx-auto font-light leading-relaxed drop-shadow-sm">
            "More than a cup of coffee. A corner of the world where time slows down and neighbours become friends."
          </p>
        </div>
      </section>

      {/* Origin Section */}
      <section id="story" className="py-24 md:py-32 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
          <div className="relative order-2 lg:order-1">
             <div className="absolute -inset-6 bg-[#8A9A86]/20 rounded-t-full rounded-b-lg transform -rotate-6 z-0"></div>
             <img 
                src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80" 
                alt="Cafe founder pouring coffee" 
                className="relative z-10 rounded-t-full rounded-b-lg shadow-2xl w-full aspect-[4/5] object-cover grayscale-[20%] sepia-[10%]" 
             />
             <div className="absolute -bottom-10 -right-10 bg-[#F9F6F0] p-6 shadow-xl rounded-lg z-20 hidden md:block max-w-xs border border-[#3B2818]/10">
               <Quote className="w-8 h-8 text-[#C05C3B] mb-4 opacity-50" />
               <p className="font-serif italic text-[#3B2818] leading-relaxed">
                 "I just wanted a place that felt like my grandmother's kitchen on a Sunday morning."
               </p>
             </div>
          </div>
          <div className="space-y-8 order-1 lg:order-2">
            <div className="inline-flex items-center space-x-4 text-[#C05C3B] font-medium tracking-widest uppercase text-sm">
              <span className="w-12 h-px bg-[#C05C3B]"></span>
              <span>The Origin</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-serif leading-tight text-[#3B2818]">The day we decided to open our doors.</h2>
            <div className="space-y-6 text-lg text-[#3B2818]/80 leading-relaxed font-light">
              <p>
                It was a rainy Tuesday in November 2015. Saba was sitting at her kitchen table, brewing her third pour-over of the morning, watching the neighbourhood rush by under umbrellas.
              </p>
              <p>
                She realized that this street—this beautiful, bustling, slightly chaotic street—didn't have a place to simply <em>pause</em>. No place that smelled like roasting beans and warm cinnamon. No place where the barista knew you were having a bad day before you even ordered.
              </p>
              <p>
                Six months later, an old haberdashery on the corner went up for lease. Saba took her savings, a borrowed espresso machine, and a profound belief in the power of good hospitality, and Saba's Café was born.
              </p>
            </div>
            <div className="pt-4">
              <img src="https://upload.wikimedia.org/wikipedia/commons/f/f4/Signature_Placeholder.svg" alt="Saba's signature" className="h-12 opacity-60" style={{ filter: 'brightness(0) sepia(1) hue-rotate(350deg) saturate(3) opacity(0.6)' }} />
            </div>
          </div>
        </div>
      </section>

      {/* Business Journey & Philosophy */}
      <section id="journey" className="py-24 md:py-32 bg-[#3B2818] text-[#F9F6F0] px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="coffee-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
                <path d="M30 15c-8.284 0-15 6.716-15 15s6.716 15 15 15 15-6.716 15-15-6.716-15-15-15zm0 28c-7.18 0-13-5.82-13-13s5.82-13 13-13 13 5.82 13 13-5.82 13-13 13z" fill="currentColor" fillOpacity="0.4"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#coffee-pattern)"/>
          </svg>
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10 space-y-12">
          <Coffee className="w-10 h-10 mx-auto text-[#C05C3B]" />
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif leading-tight">We believe in the slow craft of making things right.</h2>
          <div className="w-px h-24 bg-gradient-to-b from-[#C05C3B] to-transparent mx-auto"></div>
          <p className="text-xl md:text-2xl font-light leading-relaxed text-[#F9F6F0]/80">
            Over the years, we've grown from a one-woman show to a bustling team of passionate coffee nerds and pastry artists. But our philosophy hasn't changed a bit. We still source our beans from small-lot farmers. We still bake our pastries fresh every single morning before the sun comes up. And we still believe that a genuinely warm greeting is just as important as a perfectly extracted espresso.
          </p>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 md:py-32 px-6 max-w-5xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-serif text-[#3B2818] mb-6">Our Journey in Cups</h2>
          <p className="text-lg text-[#3B2818]/60 font-light max-w-2xl mx-auto">The moments that made us who we are today.</p>
        </div>

        <div className="relative border-l border-[#3B2818]/20 md:border-l-0 md:border-t mt-12 md:mt-24 space-y-16 md:space-y-0 md:flex md:justify-between md:pt-12 ml-4 md:ml-0">
          
          {[
            { year: "2015", title: "The First Pour", desc: "We opened our doors with just three tables, a temperamental espresso machine, and a lot of hope." },
            { year: "2017", title: "The Bakery Begins", desc: "Saba's mother joined the team to bake the now-famous cardamom buns that sell out by 10 AM." },
            { year: "2020", title: "The Window Walk-up", desc: "When the world shut down, we built a walk-up window to keep the neighbourhood caffeinated safely." },
            { year: "2023", title: "The Expansion", desc: "We knocked down the wall next door, doubling our space and adding the cozy reading corner." }
          ].map((milestone, idx) => (
            <div key={idx} className="relative pl-8 md:pl-0 md:w-1/4 md:px-4 group">
              <div className="absolute left-[-5px] md:left-1/2 top-0 md:-top-[53px] md:-translate-x-1/2 w-2 h-2 bg-[#C05C3B] rounded-full timeline-dot transition-transform duration-300 group-hover:scale-150"></div>
              <div className="text-[#C05C3B] font-serif font-bold text-2xl mb-3 md:text-center mt-[-8px] md:mt-0">{milestone.year}</div>
              <h3 className="text-xl font-serif font-medium text-[#3B2818] mb-3 md:text-center">{milestone.title}</h3>
              <p className="text-[#3B2818]/70 font-light text-sm md:text-center leading-relaxed">{milestone.desc}</p>
            </div>
          ))}
          
        </div>
      </section>

      {/* The People */}
      <section id="family" className="py-24 md:py-32 bg-[#E9E4DB] px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center space-x-4 text-[#8A9A86] font-medium tracking-widest uppercase text-sm">
                <span className="w-12 h-px bg-[#8A9A86]"></span>
                <span>The Family</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-[#3B2818]">Faces behind the counter.</h2>
            </div>
            <p className="text-lg text-[#3B2818]/70 font-light max-w-md">
              A café is only as good as the people who run it. Meet the folks who remember your order and how you take your tea.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { 
                name: "Saba Rashid", 
                role: "Founder & Head Roaster", 
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
                note: "Still drinks the same pour-over every morning. Believes coffee is a hug in a mug."
              },
              { 
                name: "Marcus Chen", 
                role: "Lead Barista", 
                img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
                note: "Latte art champion. Can talk to you about extraction times for hours if you let him."
              },
              { 
                name: "Elena Rossi", 
                role: "Head Baker", 
                img: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=800",
                note: "The mastermind behind the cardamom buns. Usually covered in flour by 6 AM."
              }
            ].map((person, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="overflow-hidden rounded-2xl mb-6 aspect-[3/4]">
                  <img 
                    src={person.img} 
                    alt={person.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter sepia-[20%]"
                  />
                </div>
                <h3 className="text-2xl font-serif text-[#3B2818] mb-1">{person.name}</h3>
                <div className="text-[#C05C3B] font-medium text-sm tracking-wide uppercase mb-3">{person.role}</div>
                <p className="text-[#3B2818]/70 font-light text-sm leading-relaxed">{person.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials / Community Love */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto flex flex-col items-center">
          <Heart className="w-8 h-8 text-[#C05C3B] mb-8" />
          <div className="flex gap-8 overflow-x-auto pb-8 w-full snap-x snap-mandatory hide-scrollbar">
            {[
              { text: "It's the only place in the city where the coffee is unpretentious but absolutely flawless. Saba's feels like a second living room.", author: "The Daily Post" },
              { text: "I've been coming here every morning since 2016. Marcus knows my order before I even reach the counter. It's home.", author: "Sarah T., Regular" },
              { text: "The cardamom buns are genuinely life-changing. But the warmth of the staff is what keeps me coming back every weekend.", author: "David M., Local Guide" }
            ].map((quote, idx) => (
              <div key={idx} className="min-w-[85vw] md:min-w-[400px] bg-white p-10 rounded-2xl shadow-sm border border-[#3B2818]/5 snap-center shrink-0">
                <div className="flex text-[#C05C3B] mb-6">
                  {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-xl font-serif text-[#3B2818] mb-6 italic leading-relaxed">"{quote.text}"</p>
                <div className="text-sm font-bold tracking-wide uppercase text-[#8A9A86]">— {quote.author}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where We Are & Footer */}
      <section id="visit" className="bg-[#3B2818] text-[#F9F6F0] pt-24 pb-12 px-6 border-t-[12px] border-[#C05C3B]">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          
          <div className="lg:col-span-2 space-y-6">
            <h2 className="text-4xl font-serif mb-6">Saba's Café</h2>
            <p className="text-[#F9F6F0]/70 font-light max-w-sm leading-relaxed">
              A neighbourhood café dedicated to good coffee, fresh pastries, and the simple joy of community.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="w-10 h-10 rounded-full bg-[#F9F6F0]/10 flex items-center justify-center hover:bg-[#C05C3B] transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-[#F9F6F0]/10 flex items-center justify-center hover:bg-[#C05C3B] transition-colors">
                <Users className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[#8A9A86] font-medium tracking-widest uppercase text-sm mb-6 flex items-center gap-2">
              <MapPin className="w-4 h-4" /> Visit Us
            </h3>
            <p className="text-[#F9F6F0]/80 font-light leading-relaxed mb-4">
              142 Artisan Avenue<br />
              The Creative Quarter<br />
              London, E1 4CC
            </p>
            <a href="#" className="inline-block border-b border-[#C05C3B] text-[#C05C3B] pb-1 hover:text-[#F9F6F0] hover:border-[#F9F6F0] transition-colors">Get Directions</a>
          </div>

          <div>
            <h3 className="text-[#8A9A86] font-medium tracking-widest uppercase text-sm mb-6 flex items-center gap-2">
              <Clock className="w-4 h-4" /> Hours
            </h3>
            <ul className="text-[#F9F6F0]/80 font-light space-y-3">
              <li className="flex justify-between"><span>Mon - Fri</span> <span>7am - 4pm</span></li>
              <li className="flex justify-between"><span>Saturday</span> <span>8am - 5pm</span></li>
              <li className="flex justify-between text-[#F9F6F0]/50"><span>Sunday</span> <span>Closed</span></li>
            </ul>
          </div>

        </div>

        <div className="max-w-6xl mx-auto pt-8 border-t border-[#F9F6F0]/10 flex flex-col md:flex-row justify-between items-center text-sm text-[#F9F6F0]/40 font-light">
          <p>© {new Date().getFullYear()} Saba's Café. All rights reserved.</p>
          <p className="mt-2 md:mt-0">Designed with warmth.</p>
        </div>
      </section>

    </div>
  );
}

export default Cafe;
