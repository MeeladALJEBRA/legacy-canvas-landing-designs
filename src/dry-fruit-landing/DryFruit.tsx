import React from "react";
import "./_group.css";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Phone, Mail, Clock, ShieldCheck, Leaf, Award } from "lucide-react";

export function DryFruit() {
  return (
    <div
      className="min-h-screen font-sans text-[#3A2A1A]"
      style={{
        backgroundColor: "#FDFBF7",
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {/* Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400&display=swap"
        rel="stylesheet"
      />
      <style dangerouslySetInnerHTML={{ __html: `
        .font-serif { font-family: 'Cormorant Garamond', serif; }
      `}} />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#2C1810]">
          <img
            src="/__mockup/images/dry-fruit-hero.png"
            alt="Premium dry fruits, nuts, and saffron"
            className="w-full h-full object-cover opacity-60"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#2C1810] via-transparent to-transparent" />
        </div>
        
        <div className="relative z-10 container mx-auto px-6 text-center text-[#FDFBF7] animate-fade-in">
          <Badge className="bg-[#D4AF37] text-[#2C1810] hover:bg-[#C5A028] mb-6 font-serif uppercase tracking-widest px-4 py-1 text-sm border-none">
            Established 1972
          </Badge>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight drop-shadow-lg">
            Al-Baraka <br />
            <span className="text-[#D4AF37] italic font-normal text-4xl md:text-6xl lg:text-7xl">Dry Fruits & Nuts</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl font-light tracking-wide text-[#E8DCC4] mb-10 leading-relaxed stagger-1 animate-fade-in opacity-0">
            "A legacy of abundance. Sourcing the finest treasures of the ancient spice routes, from our family to yours."
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 stagger-2 animate-fade-in opacity-0">
            <Button className="bg-[#D4AF37] text-[#2C1810] hover:bg-[#C5A028] text-lg px-8 py-6 rounded-none font-serif tracking-wide border border-[#D4AF37]">
              Visit Our Shop
            </Button>
            <Button variant="outline" className="text-[#FDFBF7] border-[#D4AF37] hover:bg-[#D4AF37] hover:text-[#2C1810] text-lg px-8 py-6 rounded-none font-serif tracking-wide bg-transparent">
              Our Story
            </Button>
          </div>
        </div>
      </section>

      {/* Origin Section */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2C1810]">
                The Roots of <br/> <span className="text-[#D4AF37]">Our Trade</span>
              </h2>
              <Separator className="w-24 bg-[#D4AF37] h-1" />
              <p className="text-lg leading-relaxed text-[#5A4A3A]">
                In 1972, Haji Bashir Ahmed laid the first sacks of Afghan almonds and Iranian dates on a modest stall in the bustling bazaar. What began as a small family endeavour quickly became a trusted name.
              </p>
              <p className="text-lg leading-relaxed text-[#5A4A3A]">
                Driven by an uncompromising commitment to quality and a deep respect for the ancient spice routes, he sought out farmers in the hidden valleys of Central Asia, ensuring only the finest harvest reached his customers.
              </p>
            </div>
            <div className="relative h-[500px] border-8 border-[#E8DCC4] p-4 bg-white shadow-xl rotate-2">
              <div className="w-full h-full bg-[#2C1810] overflow-hidden flex items-center justify-center">
                <span className="font-serif text-[#D4AF37] text-2xl opacity-50">Historic Photo Placeholder</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Business Journey */}
      <section className="py-24 bg-[#2C1810] text-[#FDFBF7]">
        <div className="container mx-auto px-6 max-w-4xl text-center space-y-8">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#D4AF37]">A Generational Promise</h2>
          <p className="text-xl md:text-2xl font-serif italic text-[#E8DCC4] leading-relaxed">
            "We do not just sell nuts and fruits; we share the earth's richest bounties. From the saffron fields of Herat to the pistachio orchards of Kerman, our hands select what your hands will serve."
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
            <div className="p-6 border border-[#3A2A1A] bg-[#23120B]">
              <ShieldCheck className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-2">Unwavering Trust</h3>
              <p className="text-[#B8A894]">Three generations of families have chosen us for their Eid and wedding gifts.</p>
            </div>
            <div className="p-6 border border-[#3A2A1A] bg-[#23120B]">
              <Leaf className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-2">Direct Sourcing</h3>
              <p className="text-[#B8A894]">We deal directly with growers, preserving the heritage of the spice route.</p>
            </div>
            <div className="p-6 border border-[#3A2A1A] bg-[#23120B]">
              <Award className="w-12 h-12 text-[#D4AF37] mx-auto mb-4" />
              <h3 className="font-serif text-2xl font-bold mb-2">Premium Quality</h3>
              <p className="text-[#B8A894]">Hand-sorted, perfectly graded. Only the largest, most flavourful pieces make the cut.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-24 bg-[#E8DCC4]">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2C1810]">Merchant Ledger</h2>
            <p className="text-[#5A4A3A] mt-4 font-serif text-xl">Key moments in our history</p>
          </div>
          
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-[#C5B095]">
            {[
              { year: "1972", title: "The First Stall", desc: "Haji Bashir opens the first Al-Baraka stall in the old market." },
              { year: "1985", title: "The Hajj Season", desc: "First major contract supplying premium dates and nuts for Hajj pilgrims." },
              { year: "1998", title: "Direct Sourcing", desc: "Establishing direct trade routes with saffron farmers in Iran and Afghanistan." },
              { year: "2010", title: "The Flagship Store", desc: "Opening our expansive main showroom, a true sensory experience." },
              { year: "2024", title: "Generational Shift", desc: "The third generation takes the helm, preserving tradition while modernising." }
            ].map((milestone, idx) => (
              <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[#E8DCC4] bg-[#D4AF37] text-[#2C1810] font-bold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-md z-10"></div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-[#FDFBF7] border-l-4 border-[#D4AF37] shadow-sm">
                  <span className="font-serif text-[#D4AF37] text-2xl font-bold mb-1 block">{milestone.year}</span>
                  <h3 className="font-serif text-xl font-bold text-[#2C1810] mb-2">{milestone.title}</h3>
                  <p className="text-[#5A4A3A]">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The People */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="container mx-auto px-6 max-w-5xl">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-center text-[#2C1810] mb-16">The Faces Behind the Harvest</h2>
          
          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Haji Bashir Ahmed", role: "Founder", note: "The visionary who built a legacy on a handshake and uncompromising quality.", img: "Founder" },
              { name: "Tariq Ahmed", role: "Master Sorter", note: "With 30 years of experience, he can tell the grade of a walnut blindfolded.", img: "Master Sorter" },
              { name: "Zayd & Bilal", role: "Third Generation", note: "Bringing the ancient spice routes into the modern age while honouring tradition.", img: "Third Gen" }
            ].map((person, idx) => (
              <div key={idx} className="text-center group">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-[#D4AF37] bg-[#E8DCC4] flex items-center justify-center transition-transform group-hover:scale-105 duration-300 shadow-lg">
                   <span className="font-serif text-[#8B7355]">{person.img}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-[#2C1810] mb-1">{person.name}</h3>
                <p className="text-[#D4AF37] font-serif italic text-lg mb-3">{person.role}</p>
                <p className="text-[#5A4A3A] text-sm leading-relaxed">{person.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Supplier Heritage & Certifications (Optional merged) */}
      <section className="py-16 bg-[#2C1810] border-y-8 border-[#D4AF37]">
         <div className="container mx-auto px-6 text-center">
            <h3 className="font-serif text-3xl font-bold text-[#FDFBF7] mb-8">Recognised for Excellence</h3>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="text-xl font-serif text-[#D4AF37] font-bold">Premium Saffron Guild</span>
              <span className="text-xl font-serif text-[#D4AF37] font-bold">Heritage Merchant Assoc.</span>
              <span className="text-xl font-serif text-[#D4AF37] font-bold">Organic Certifiers</span>
              <span className="text-xl font-serif text-[#D4AF37] font-bold">Local Choice 2023</span>
            </div>
         </div>
      </section>

      {/* Where We Are */}
      <section className="py-24 bg-[#FDFBF7]">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="bg-[#E8DCC4] p-8 md:p-12 shadow-xl border border-[#C5B095] grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-[#2C1810] mb-6">Visit Our Bazaar</h2>
              <p className="text-[#5A4A3A] mb-8 text-lg">
                Step into a world of aroma and abundance. Let us help you select the perfect blend for your needs.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#2C1810]">Main Showroom</h4>
                    <p className="text-[#5A4A3A]">123 Spice Route Market,<br/>Historic District, City 45000</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Clock className="w-6 h-6 text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#2C1810]">Opening Hours</h4>
                    <p className="text-[#5A4A3A]">Monday - Saturday: 9:00 AM - 9:00 PM<br/>Sunday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Phone className="w-6 h-6 text-[#D4AF37] shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-[#2C1810]">Contact</h4>
                    <p className="text-[#5A4A3A]">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-[#2C1810] h-[400px] flex items-center justify-center p-4 shadow-inner">
               <div className="border border-[#D4AF37] w-full h-full flex items-center justify-center">
                  <span className="font-serif text-[#D4AF37] text-2xl">Map Illustration</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1A0F0A] text-[#8B7355] py-12 text-center border-t border-[#3A2A1A]">
        <div className="container mx-auto px-6">
          <h2 className="font-serif text-3xl font-bold text-[#D4AF37] mb-4">Al-Baraka</h2>
          <p className="mb-8">Purveyors of fine dry fruits, nuts & saffron since 1972.</p>
          <p className="text-sm">© {new Date().getFullYear()} Al-Baraka Dry Fruits. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default DryFruit;
