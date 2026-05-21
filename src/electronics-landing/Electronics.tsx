import React, { useEffect } from "react";
import { ArrowRight, MapPin, Phone, Mail, ChevronRight, Award, Zap, ShieldCheck, Smartphone } from "lucide-react";
import "./_group.css";

export function Electronics() {
  return (
    <div className="electronics-landing min-h-screen selection:bg-cyan-500/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
            <Zap className="w-5 h-5 text-cyan-400" />
            <span>AL-NOOR <span className="text-cyan-400">TECH</span></span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
            <a href="#origin" className="hover:text-cyan-400 transition-colors">Origin</a>
            <a href="#journey" className="hover:text-cyan-400 transition-colors">Journey</a>
            <a href="#milestones" className="hover:text-cyan-400 transition-colors">Milestones</a>
            <a href="#people" className="hover:text-cyan-400 transition-colors">The Team</a>
            <a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a>
          </div>
          <button className="bg-white/10 hover:bg-white/20 text-white px-5 py-2 rounded-full text-sm font-medium transition-colors border border-white/10">
            Visit Store
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-[#0a0a0a] z-10"></div>
          <img 
            src="/__mockup/images/electronics-hero.png" 
            alt="Electronics Showroom" 
            className="w-full h-full object-cover object-center opacity-40"
          />
        </div>
        <div className="container relative z-20 mx-auto px-6">
          <div className="max-w-4xl">
            <div className="inline-block px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-sm font-medium mb-6 backdrop-blur-sm">
              Established 1999
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.1]">
              Connecting the <br />
              <span className="text-gradient-cyan">Future</span> Today.
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mb-12 border-l-2 border-cyan-500 pl-6">
              "Technology isn't just about the device. It's about empowering people to do more, be more, and reach further."
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-cyan-500 hover:bg-cyan-400 text-black px-8 py-4 rounded-full font-bold transition-all glow-effect flex items-center gap-2">
                Discover Our Story
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-full font-medium transition-all backdrop-blur-sm">
                View Locations
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Origin Section */}
      <section id="origin" className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
              <div className="absolute inset-0 bg-cyan-500/20 blur-[100px] rounded-full"></div>
              <div className="relative border border-white/10 rounded-2xl p-2 bg-black/50 backdrop-blur-sm border-glow">
                <img 
                  src="https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="Vintage Phone Store" 
                  className="rounded-xl w-full h-[500px] object-cover grayscale opacity-80 mix-blend-luminosity hover:grayscale-0 hover:opacity-100 transition-all duration-700"
                />
                <div className="absolute bottom-6 right-6 bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-xl">
                  <div className="text-cyan-400 font-mono text-sm mb-1">CIRCA</div>
                  <div className="text-3xl font-bold text-white">1999</div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-[1px] bg-cyan-500"></div>
                <span className="text-cyan-400 font-medium uppercase tracking-wider text-sm">The Origin</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">From a single stall.</h2>
              <div className="space-y-6 text-gray-400 text-lg">
                <p>
                  It started with a glass display case and a handful of brick phones. In 1999, Faisal Al-Noor saw beyond the bulky antennas and monochromatic screens—he saw connection.
                </p>
                <p>
                  Before smartphones were smart, before the internet lived in our pockets, Al-Noor Electronics was the neighbourhood's gateway to the digital world. We didn't just sell phones; we taught people how to use them, programmed their contacts, and fixed them when they dropped.
                </p>
                <div className="pt-6 border-t border-white/10">
                  <blockquote className="italic text-white">
                    "We were selling the idea of being connected anywhere. It was magic back then."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Journey */}
      <section id="journey" className="py-24 bg-white/[0.02] border-y border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-cyan-900/10 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-3xl mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Navigating the <span className="text-cyan-400">waves of change.</span></h2>
            <p className="text-xl text-gray-400">
              Technology moves fast. Those who don't adapt, disappear. We've weathered every major paradigm shift in consumer electronics by staying intensely curious.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                era: "The Analog Era",
                title: "Cassettes to CDs",
                desc: "We started when physical media ruled. Upgrading home stereos and outfitting the first portable CD players."
              },
              {
                era: "The Mobile Boom",
                title: "Polyphonic to Color",
                desc: "Riding the wave of the first feature phones. We were the first in the city to stock camera phones."
              },
              {
                era: "The Smart Revolution",
                title: "Touchscreens & Apps",
                desc: "When phones became computers, we transformed our stores into experiential hubs for the modern digital life."
              }
            ].map((item, i) => (
              <div key={i} className="bg-black/40 border border-white/10 p-8 rounded-2xl hover:border-cyan-500/50 transition-colors group">
                <div className="text-cyan-400 font-mono text-sm mb-4 border border-cyan-500/30 inline-block px-3 py-1 rounded-full">{item.era}</div>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-cyan-300 transition-colors">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section id="milestones" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Blueprint</h2>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">Key moments that defined our trajectory in the electronics landscape.</p>
          </div>

          <div className="max-w-4xl mx-auto relative">
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-cyan-500 via-cyan-500/50 to-transparent"></div>
            
            {[
              { year: "1999", title: "The First Store", desc: "Opened a 200 sq ft stall selling basic mobile phones and accessories." },
              { year: "2005", title: "Authorised Dealership", desc: "Secured our first major brand partnership, becoming an official regional distributor." },
              { year: "2010", title: "Flagship Showroom", desc: "Launched a 5,000 sq ft experiential store focusing on the new wave of smartphones." },
              { year: "2018", title: "Digital Expansion", desc: "Went online, serving customers nationwide with the same local-store trust." },
              { year: "2024", title: "Smart Home Hub", desc: "Evolved into a comprehensive smart-life solutions provider." }
            ].map((milestone, i) => (
              <div key={i} className={`relative flex items-center mb-12 md:mb-24 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="absolute left-[18px] md:left-1/2 w-5 h-5 rounded-full bg-black border-4 border-cyan-500 transform md:-translate-x-1/2 z-10 glow-effect"></div>
                <div className={`ml-16 md:ml-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                  <div className="text-cyan-400 font-bold text-5xl md:text-7xl opacity-20 mb-[-20px] md:mb-[-30px] font-mono">{milestone.year}</div>
                  <div className="bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm relative z-20 hover:bg-white/10 transition-colors">
                    <h3 className="text-2xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-400">{milestone.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The People */}
      <section id="people" className="py-24 bg-[#050505]">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">The Hardware & The Heart</h2>
              <p className="text-xl text-gray-400">
                Behind every screen is a person. Our team combines deep technical knowledge with genuine care for the customer's needs.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Faisal Al-Noor",
                role: "Founder & Visionary",
                note: "Saw the mobile revolution coming before most people had pagers.",
                img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Tariq Al-Noor",
                role: "Director of Operations",
                note: "Modernised the supply chain and launched our smart-home division.",
                img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              },
              {
                name: "Sarah Chen",
                role: "Lead Tech Specialist",
                note: "Can diagnose a logic board issue by looking at it. Certified across 8 major brands.",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              }
            ].map((person, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[3/4]">
                  <div className="absolute inset-0 bg-cyan-900/20 mix-blend-multiply z-10 group-hover:bg-transparent transition-colors duration-500"></div>
                  <img src={person.img} alt={person.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{person.name}</h3>
                <div className="text-cyan-400 font-medium mb-3">{person.role}</div>
                <p className="text-gray-400">{person.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trusted By / Certifications */}
      <section className="py-16 border-y border-white/5 bg-black">
        <div className="container mx-auto px-6">
          <p className="text-center text-sm font-medium text-gray-500 uppercase tracking-widest mb-10">Authorised Partners & Certifications</p>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24 opacity-50 grayscale">
            <div className="flex items-center gap-2"><Smartphone className="w-8 h-8"/> <span className="text-xl font-bold">Apple</span></div>
            <div className="flex items-center gap-2"><Zap className="w-8 h-8"/> <span className="text-xl font-bold">Samsung</span></div>
            <div className="flex items-center gap-2"><ShieldCheck className="w-8 h-8"/> <span className="text-xl font-bold">Sony</span></div>
            <div className="flex items-center gap-2"><Award className="w-8 h-8"/> <span className="text-xl font-bold">ISO Certified</span></div>
          </div>
        </div>
      </section>

      {/* Where We Are / Footer */}
      <section id="contact" className="py-24 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-cyan-900/20 to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">Ready to <span className="text-cyan-400">upgrade?</span></h2>
              <p className="text-xl text-gray-400 mb-12 max-w-md">
                Visit our flagship store to experience the latest in consumer technology, guided by experts who care.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-500/10 p-3 rounded-lg border border-cyan-500/30 text-cyan-400">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Flagship Showroom</h4>
                    <p className="text-gray-400">100 Tech Boulevard<br />Innovation District, 45001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-cyan-500/10 p-3 rounded-lg border border-cyan-500/30 text-cyan-400">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">Contact</h4>
                    <p className="text-gray-400">+1 (800) 555-TECH<br />support@alnoortech.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl backdrop-blur-sm">
              <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="First Name" className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors text-white" />
                  <input type="text" placeholder="Last Name" className="bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors text-white" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors text-white" />
                <textarea placeholder="How can we help?" rows={4} className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-500 transition-colors text-white resize-none"></textarea>
                <button type="button" className="w-full bg-cyan-500 hover:bg-cyan-400 text-black font-bold py-4 rounded-xl transition-colors">
                  Submit Request
                </button>
              </form>
            </div>
          </div>
          
          <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-xl font-bold tracking-tighter flex items-center gap-2">
              <Zap className="w-5 h-5 text-cyan-500" />
              <span>AL-NOOR <span className="text-cyan-500">TECH</span></span>
            </div>
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Al-Noor Electronics. All rights reserved.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Electronics;