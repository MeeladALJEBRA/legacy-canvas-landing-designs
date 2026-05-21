import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { MapPin, Phone, Mail, Heart, Star, Sparkles, Smile, Clock } from "lucide-react";
import "./_group.css";

export function ChildrensClothing() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-800 selection:bg-yellow-200" style={{ fontFamily: "'Nunito', sans-serif" }}>
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap" rel="stylesheet" />
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b-2 border-yellow-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-2xl font-black text-amber-500 animate-wiggle">
            <Star className="fill-amber-400 text-amber-400" />
            Little Stars
          </div>
          <div className="hidden md:flex items-center gap-6 font-semibold text-slate-600">
            <a href="#story" className="hover:text-amber-500 transition-colors">Our Story</a>
            <a href="#milestones" className="hover:text-amber-500 transition-colors">Journey</a>
            <a href="#family" className="hover:text-amber-500 transition-colors">The Family</a>
            <a href="#visit" className="hover:text-amber-500 transition-colors">Visit Us</a>
          </div>
          <Button className="bg-sky-400 hover:bg-sky-500 text-white rounded-full font-bold px-6 shadow-sm shadow-sky-200">
            Say Hello <Smile className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-yellow-50 pt-20 pb-32">
        <div className="absolute top-10 left-10 text-yellow-200 animate-float-gentle"><Sparkles size={64} /></div>
        <div className="absolute bottom-20 right-20 text-sky-200 animate-float-gentle stagger-2"><Heart size={48} /></div>
        
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm text-sky-500 font-bold text-sm border-2 border-sky-100">
              <Star className="w-4 h-4 fill-sky-400" /> Since 2010
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-slate-800 leading-tight">
              Dressing <span className="text-amber-500">Little</span> <br/>
              <span className="text-sky-400">Stars</span> With Joy
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-semibold italic">
              "Because childhood is a story, and every outfit is a colorful new page."
            </p>
            <p className="text-lg text-slate-600 max-w-md">
              Specialising in traditional Eid wear, occasion outfits, and everyday magic for children aged 0–12.
            </p>
            <div className="flex gap-4">
              <Button size="lg" className="bg-amber-400 hover:bg-amber-500 text-slate-900 rounded-full font-bold text-lg h-14 px-8 shadow-lg shadow-amber-200">
                Our Collections
              </Button>
            </div>
          </div>
          <div className="relative animate-fade-in-up stagger-1">
            <div className="absolute -inset-4 bg-sky-100 rounded-[3rem] rotate-3 -z-10"></div>
            <div className="absolute -inset-4 bg-yellow-100 rounded-[3rem] -rotate-3 -z-20"></div>
            <div className="rounded-[2.5rem] overflow-hidden border-8 border-white shadow-xl bg-white">
              <AspectRatio ratio={4/3}>
                <img 
                  src="/__mockup/images/childrens-clothing-hero.png" 
                  alt="Joyful children's clothing" 
                  className="w-full h-full object-cover"
                />
              </AspectRatio>
            </div>
          </div>
        </div>
      </section>
      
      <div className="cloud-divider -mt-1 relative z-20"></div>

      {/* Origin Story */}
      <section id="story" className="py-24 bg-white relative">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
          <Heart className="w-12 h-12 text-coral-400 mx-auto fill-red-100 text-red-400 animate-wiggle" />
          <h2 className="text-4xl font-black text-slate-800">How The Magic Began</h2>
          <div className="prose prose-lg mx-auto text-slate-600 font-medium text-left md:text-center space-y-6">
            <p>
              It started in 2010 with a simple realization: finding beautiful, high-quality Eid outfits for children shouldn't be so hard. Amna Farooq, a mother of three, found herself constantly modifying adult clothes or ordering from overseas just to dress her little ones for special occasions.
            </p>
            <p>
              What began as a small stall at the weekend market, selling hand-picked festive wear, quickly blossomed. Parents didn't just want outfits; they wanted the warmth, the advice, and the joy of dressing their children beautifully. Little Stars was born from that shared community joy.
            </p>
          </div>
        </div>
      </section>

      {/* Business Journey & Milestones */}
      <section id="milestones" className="py-24 bg-sky-50 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-sky-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-800">Our Growth Chart</h2>
            <p className="text-xl text-slate-600 mt-4 font-medium">Watching our little store grow, step by step.</p>
          </div>

          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-[27px] md:left-1/2 top-0 bottom-0 w-2 bg-sky-200 md:-translate-x-1/2 rounded-full"></div>

            <div className="space-y-12">
              {[
                { year: "2010", title: "The First Market Stall", desc: "Started with just 50 dresses for Eid.", color: "bg-amber-400" },
                { year: "2013", title: "Our First Real Store", desc: "Opened the doors to our high street shop.", color: "bg-sky-400" },
                { year: "2016", title: "School Uniform Partner", desc: "Began supplying uniforms for 5 local schools.", color: "bg-emerald-400" },
                { year: "2020", title: "Going Digital", desc: "Launched our online store to reach families everywhere.", color: "bg-red-400" }
              ].map((milestone, idx) => (
                <div key={idx} className={`relative flex items-center md:justify-between flex-col md:flex-row ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline Dot */}
                  <div className={`absolute left-0 md:left-1/2 w-16 h-16 rounded-full border-4 border-white ${milestone.color} text-white font-black flex items-center justify-center shadow-lg z-10 transform md:-translate-x-1/2 shadow-${milestone.color}/30`}>
                    {milestone.year}
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-[45%] pl-24 md:pl-0 ${idx % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                    <Card className="border-0 shadow-xl rounded-[2rem] hover:-translate-y-1 transition-transform duration-300">
                      <CardContent className="p-6 md:p-8">
                        <h3 className="text-2xl font-bold text-slate-800 mb-2">{milestone.title}</h3>
                        <p className="text-slate-600 font-medium">{milestone.desc}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* The People */}
      <section id="family" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black text-slate-800">The Faces Behind The Fits</h2>
            <p className="text-xl text-slate-600 mt-4 font-medium">Our family serving yours.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Amna Farooq", role: "Founder & Chief Stylist", note: "\"I still remember the first Eid dress we sold. Seeing that little girl twirl made every late night worth it.\"", bg: "bg-amber-100", text: "text-amber-800" },
              { name: "Sarah Ahmed", role: "Store Manager", note: "\"I know half our customers by their first names. Watching these kids grow up year after year is a privilege.\"", bg: "bg-sky-100", text: "text-sky-800" },
              { name: "David Chen", role: "Tailoring & Alterations", note: "\"Kids run, jump, and play. I make sure their clothes are tough enough to handle the adventure!\"", bg: "bg-emerald-100", text: "text-emerald-800" }
            ].map((person, idx) => (
              <Card key={idx} className={`${person.bg} border-0 rounded-[2rem] text-center p-8 shadow-sm hover:shadow-md transition-shadow`}>
                <div className="w-24 h-24 mx-auto bg-white rounded-full mb-6 flex items-center justify-center shadow-inner">
                  <Smile className={`w-12 h-12 ${person.text}`} />
                </div>
                <h3 className={`text-2xl font-bold mb-1 ${person.text}`}>{person.name}</h3>
                <p className="font-bold opacity-75 mb-6 text-slate-700">{person.role}</p>
                <p className="italic text-slate-600 font-medium">
                  {person.note}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community & Recognition (Optional Section) */}
      <section className="py-16 bg-yellow-400 text-slate-900 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-black mb-8">Trusted by our community</h2>
          <div className="flex flex-wrap justify-center gap-8 items-center font-bold text-xl opacity-80">
            <div className="flex items-center gap-2"><Star className="fill-slate-900" /> Best Local Business 2022</div>
            <div className="flex items-center gap-2"><Heart className="fill-slate-900" /> 5 Local Schools Partner</div>
            <div className="flex items-center gap-2"><Sparkles className="fill-slate-900" /> 10,000+ Happy Kids</div>
          </div>
        </div>
      </section>

      {/* Where We Are */}
      <section id="visit" className="py-24 bg-slate-50">
        <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-12 bg-white rounded-[3rem] shadow-xl overflow-hidden border-4 border-white ring-1 ring-slate-100">
          <div className="p-12 space-y-8">
            <h2 className="text-4xl font-black text-slate-800">Come Say Hello!</h2>
            <p className="text-lg text-slate-600 font-medium">
              We'd love to help you find the perfect outfit for your little star. Pop in for a browse and a chat!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-sky-100 flex items-center justify-center flex-shrink-0">
                  <MapPin className="text-sky-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Our Store</h4>
                  <p className="text-slate-600">123 Sunny High Street<br/>Springfield, SP1 2AA</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
                  <Clock className="text-amber-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Opening Hours</h4>
                  <p className="text-slate-600">Mon-Sat: 9:00 AM - 6:00 PM<br/>Sun: 10:00 AM - 4:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                  <Phone className="text-emerald-600" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-800">Contact Us</h4>
                  <p className="text-slate-600">01234 567890<br/>hello@littlestars.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-slate-200 relative min-h-[300px]">
             {/* Map Placeholder */}
             <div className="absolute inset-0 flex items-center justify-center flex-col text-slate-400 bg-sky-50">
               <MapPin className="w-16 h-16 text-sky-200 mb-4" />
               <p className="font-bold text-sky-300">Interactive Map View</p>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 text-center">
        <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-6">
          <div className="flex items-center gap-2 text-2xl font-black text-amber-500">
            <Star className="fill-amber-400" />
            Little Stars
          </div>
          <p className="font-medium text-slate-500 max-w-md">
            Dressing generations with love, care, and a little bit of magic.
          </p>
          <div className="flex gap-4 mt-4">
            {/* Social placeholders */}
            <div className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 cursor-pointer flex items-center justify-center transition-colors"></div>
            <div className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 cursor-pointer flex items-center justify-center transition-colors"></div>
            <div className="w-10 h-10 rounded-full bg-slate-800 hover:bg-slate-700 cursor-pointer flex items-center justify-center transition-colors"></div>
          </div>
          <p className="text-sm mt-8 opacity-50">&copy; {new Date().getFullYear()} Little Stars Clothing. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
