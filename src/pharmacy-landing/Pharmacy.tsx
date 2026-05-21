import React from 'react';
import './_group.css';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { MapPin, Phone, Mail, Clock, Award, CheckCircle2, Heart } from 'lucide-react';

export function Pharmacy() {
  return (
    <div className="min-h-screen bg-[#FDFDF9] text-[#0A2540] pharmacy-font-sans selection:bg-[#E8F3EE] selection:text-[#0A2540]">
      {/* 1. Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden px-4 py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="/__mockup/images/pharmacy-hero.png" 
            alt="Al-Shifa Pharmacy Interior" 
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#FDFDF9]/80 via-[#FDFDF9]/95 to-[#FDFDF9]"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <Badge className="bg-[#E8F3EE] text-[#1E5642] hover:bg-[#D1E8DF] border-none px-4 py-1.5 text-sm font-medium rounded-full mb-4 inline-flex items-center gap-2">
            <Heart className="w-4 h-4" /> Serving the Community Since 1987
          </Badge>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#0A2540]">
            Al-Shifa Pharmacy <br className="hidden md:block"/> & Health Centre
          </h1>
          <div className="max-w-2xl mx-auto space-y-6">
            <p className="text-xl md:text-2xl text-[#2D4A66] pharmacy-font-serif italic leading-relaxed">
              "We don't just dispense medicine; we dispense care. Every family that walks through our doors is treated like our own."
            </p>
            <p className="text-[#4A6782] font-medium uppercase tracking-widest text-sm">
              — Dr. Farhan Siddiqui, Founder
            </p>
          </div>
        </div>
      </section>

      {/* 2. Origin */}
      <section className="py-24 px-4 bg-white relative">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 space-y-6 animate-fade-in-up delay-100 opacity-0">
            <h2 className="text-sm font-bold tracking-[0.2em] text-[#1E5642] uppercase">Our Origin</h2>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight">A corner shop that became a sanctuary of health.</h3>
            <div className="space-y-4 text-lg text-[#4A6782] leading-relaxed">
              <p>
                In the summer of 1987, a small dispensary opened its doors on the corner of Elm and Main. Dr. Farhan Siddiqui, a young pharmacist with a vision for accessible community healthcare, started Al-Shifa with a single wooden counter and a handful of trusted remedies.
              </p>
              <p>
                Back then, prescriptions were written on paper pads, and patience was the primary currency. Dr. Siddiqui made it a point to know every customer's name, their ailments, and their family history. It wasn't just about handing over a bottle of pills; it was about ensuring well-being.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 relative animate-fade-in-up delay-200 opacity-0">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-[#E8F3EE] p-4 relative">
              <div className="absolute inset-0 border-2 border-[#1E5642]/10 rounded-2xl m-4"></div>
              {/* Fallback pattern since we don't have historical photos */}
              <div className="w-full h-full rounded-xl bg-[#1E5642]/5 flex items-center justify-center">
                <span className="pharmacy-font-serif text-6xl text-[#1E5642]/20">1987</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Business Journey */}
      <section className="py-24 px-4 bg-[#0A2540] text-white">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-sm font-bold tracking-[0.2em] text-[#A3C7B6] uppercase">Our Journey</h2>
          <p className="text-2xl md:text-3xl pharmacy-font-serif leading-relaxed font-light">
            Over three decades, we have witnessed generations grow. The children who once came in for cough syrup are now bringing in their own children. Through changing times and modern medicine, our core philosophy remains untouched: <span className="text-[#A3C7B6] font-medium">compassion first.</span>
          </p>
        </div>
      </section>

      {/* 4. Milestones */}
      <section className="py-24 px-4 bg-[#FDFDF9]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-sm font-bold tracking-[0.2em] text-[#1E5642] uppercase">Milestones</h2>
            <h3 className="text-3xl md:text-4xl font-bold">A Legacy of Care</h3>
          </div>

          <div className="relative border-l border-[#E8F3EE] ml-4 md:ml-1/2 md:-translate-x-1/2 space-y-12 md:space-y-0 pb-8">
            {[
              { year: "1987", title: "Doors Open", desc: "Al-Shifa is founded with a commitment to neighborhood health." },
              { year: "1995", title: "Expansion", desc: "We expand our premises to include a dedicated health counseling room." },
              { year: "2008", title: "Community Health Award", desc: "Recognized by the City Council for our free weekend health check-up camps." },
              { year: "2020", title: "Pandemic Response", desc: "Remained open 24/7 during the critical months to ensure medication supply." },
              { year: "Today", title: "A Modern Centre", desc: "Integrating modern health tech while keeping our traditional warmth." }
            ].map((item, i) => (
              <div key={i} className={`relative flex flex-col md:flex-row gap-8 items-start md:items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''} md:pb-16`}>
                <div className="absolute left-[-5px] md:left-1/2 md:-ml-[5px] w-2.5 h-2.5 rounded-full bg-[#1E5642] ring-4 ring-[#E8F3EE]"></div>
                <div className={`pl-8 md:pl-0 md:w-1/2 ${i % 2 === 0 ? 'md:pl-16' : 'md:pr-16 md:text-right'}`}>
                  <span className="text-xl font-bold text-[#1E5642] mb-2 block">{item.year}</span>
                  <h4 className="text-xl font-bold mb-2 text-[#0A2540]">{item.title}</h4>
                  <p className="text-[#4A6782] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The People */}
      <section className="py-24 px-4 bg-white border-y border-[#E8F3EE]">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-sm font-bold tracking-[0.2em] text-[#1E5642] uppercase">The People</h2>
            <h3 className="text-3xl md:text-4xl font-bold">Faces You Know & Trust</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Dr. Farhan Siddiqui", role: "Founder & Chief Pharmacist", quote: "Every patient is family." },
              { name: "Ayesha Rahman", role: "Senior Pharmacist", quote: "Listening is the first step to healing." },
              { name: "Tariq Mahmood", role: "Community Health Coordinator", quote: "Care goes beyond the counter." }
            ].map((person, i) => (
              <Card key={i} className="border-none shadow-sm bg-[#FDFDF9] hover:shadow-md transition-shadow">
                <CardContent className="p-8 text-center space-y-6">
                  <div className="w-24 h-24 mx-auto rounded-full bg-[#E8F3EE] flex items-center justify-center text-[#1E5642] font-bold text-2xl">
                    {person.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-[#0A2540]">{person.name}</h4>
                    <p className="text-sm text-[#1E5642] font-medium mt-1">{person.role}</p>
                  </div>
                  <Separator className="bg-[#E8F3EE] w-12 mx-auto" />
                  <p className="pharmacy-font-serif italic text-[#4A6782]">"{person.quote}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Optional - Awards */}
      <section className="py-20 px-4 bg-[#FDFDF9]">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2"><Award className="w-8 h-8 text-[#1E5642]"/> <span className="font-bold text-lg">Excellence in Care 2022</span></div>
            <div className="flex items-center gap-2"><CheckCircle2 className="w-8 h-8 text-[#1E5642]"/> <span className="font-bold text-lg">Certified Health Hub</span></div>
            <div className="flex items-center gap-2"><Award className="w-8 h-8 text-[#1E5642]"/> <span className="font-bold text-lg">Community Choice</span></div>
          </div>
        </div>
      </section>

      {/* 6. Where We Are */}
      <section className="py-24 px-4 bg-[#0A2540] text-white">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-8">
            <div>
              <h2 className="text-sm font-bold tracking-[0.2em] text-[#A3C7B6] uppercase mb-4">Visit Us</h2>
              <h3 className="text-3xl md:text-4xl font-bold">Always here for you.</h3>
            </div>
            
            <div className="space-y-6 text-[#A3C7B6]">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 shrink-0 mt-1 text-white" />
                <div>
                  <p className="font-medium text-white text-lg">Al-Shifa Pharmacy & Health Centre</p>
                  <p>124 Main Street, Elm Corner</p>
                  <p>City Center District, 10001</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 shrink-0 text-white" />
                <p className="text-lg">+1 (555) 123-4567</p>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 shrink-0 text-white" />
                <p className="text-lg">care@alshifapharmacy.com</p>
              </div>
            </div>
          </div>

          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
            <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-[#A3C7B6]" /> Opening Hours
            </h4>
            <ul className="space-y-4 text-[#A3C7B6]">
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Monday - Friday</span>
                <span className="text-white font-medium">8:00 AM - 10:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2">
                <span>Saturday</span>
                <span className="text-white font-medium">9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between pb-2">
                <span>Sunday</span>
                <span className="text-white font-medium">10:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-sm text-[#A3C7B6] bg-[#0A2540] border-t border-white/10">
        <p>© {new Date().getFullYear()} Al-Shifa Pharmacy. Serving the community with care.</p>
      </footer>
    </div>
  );
}
