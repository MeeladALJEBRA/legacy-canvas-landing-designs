import React from 'react';
import { MapPin, Phone, Mail, Award, Clock, Leaf, Feather, Heart } from 'lucide-react';

export function Organic() {
  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#4A4238] selection:bg-[#E8DCCB] selection:text-[#4A4238] overflow-x-hidden">
      <style dangerouslySetInnerHTML={{__html: `
        @import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Outfit:wght@300;400;500&display=swap');
        .font-serif { font-family: 'Libre Baskerville', serif; }
        .font-sans { font-family: 'Outfit', sans-serif; }
        
        .blob-shape {
          border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%;
        }
        
        .soft-shadow {
          box-shadow: 0 10px 40px -10px rgba(138, 115, 99, 0.15);
        }
      `}} />

      {/* Navigation (subtle) */}
      <nav className="absolute top-0 left-0 right-0 z-10 p-6 flex justify-center opacity-80 hover:opacity-100 transition-opacity">
        <ul className="flex space-x-8 text-sm tracking-widest uppercase text-[#5A5248]">
          <li><a href="#origin" className="hover:text-[#8B7355] transition-colors">Our Story</a></li>
          <li><a href="#people" className="hover:text-[#8B7355] transition-colors">The Team</a></li>
          <li><a href="#visit" className="hover:text-[#8B7355] transition-colors">Visit</a></li>
        </ul>
      </nav>

      {/* 1. Hero */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-24 pb-16 px-6 text-center">
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
           <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-[#E8DCCB] rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
           <div className="absolute bottom-[-10%] right-[-10%] w-[40vw] h-[40vw] bg-[#D4C3B3] rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-12 z-10">
          <div className="space-y-6 animate-fade-in-up">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-[#3A3228] leading-tight tracking-tight">
              Aurelia's <br/><span className="italic text-[#8B7355]">Botanicals</span>
            </h1>
            <p className="font-serif text-xl md:text-2xl text-[#6B5A4B] italic max-w-2xl mx-auto leading-relaxed">
              "Nature's quiet remedies, crafted by hand, steeped in time."
            </p>
          </div>

          <div className="relative w-full max-w-3xl mx-auto mt-16 group">
            <div className="absolute -inset-4 bg-[#F5EFE6] blob-shape -z-10 scale-95 group-hover:scale-100 transition-transform duration-700 ease-out"></div>
            <img 
              src="/__mockup/images/aurelia-hero.png" 
              alt="Inside Aurelia's Botanicals" 
              className="w-full aspect-[4/3] md:aspect-[16/9] object-cover blob-shape soft-shadow"
            />
          </div>
        </div>
      </section>

      {/* 2. Origin */}
      <section id="origin" className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 order-2 md:order-1">
            <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#E8DCCB] text-[#8B7355] mb-4">
              <Leaf size={24} strokeWidth={1.5} />
            </div>
            <h2 className="font-serif text-4xl text-[#3A3228]">How it all began</h2>
            <div className="space-y-6 text-[#5A5248] text-lg leading-relaxed font-sans font-light">
              <p>
                It started with a single, sun-dried bundle of lavender in a small kitchen. Aurelia didn't set out to build a business; she was simply looking for a way to capture the peace she felt in her grandmother's garden.
              </p>
              <p>
                Neighbors began asking for her hand-mixed teas and soothing salves. What was once a quiet weekend ritual slowly blossomed into a life's calling, rooted deeply in the soil of our community.
              </p>
            </div>
          </div>
          <div className="order-1 md:order-2 relative">
             <div className="aspect-[3/4] rounded-t-full rounded-b-md overflow-hidden soft-shadow bg-[#E8DCCB] flex items-center justify-center p-8">
               <div className="w-full h-full border border-[#D4C3B3] rounded-t-full rounded-b-sm flex items-center justify-center relative p-6">
                 {/* Decorative element placeholder instead of another image */}
                 <div className="text-center space-y-4">
                   <Feather size={48} className="mx-auto text-[#8B7355] opacity-50" strokeWidth={1} />
                   <p className="font-serif italic text-[#8B7355] text-sm tracking-widest uppercase">Est. 2012</p>
                 </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* 3. Journey */}
      <section className="py-24 px-6 bg-[#F5EFE6]">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <Heart size={32} strokeWidth={1} className="mx-auto text-[#D4C3B3]" />
          <h2 className="font-serif text-4xl text-[#3A3228]">Our Journey</h2>
          <p className="text-[#5A5248] text-lg leading-relaxed font-sans font-light">
            We've grown from that small kitchen counter to the corner shop on Elm Street, but our hands still touch every jar. We've weathered quiet winters and bustling springs, always returning to the simple truth that good things take time. Our story isn't about scaling up—it's about digging deeper roots.
          </p>
        </div>
      </section>

      {/* 4. Milestones */}
      <section className="py-24 px-6 relative">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-4xl text-center text-[#3A3228] mb-16">The Chapters</h2>
          
          <div className="relative border-l border-[#D4C3B3] ml-4 md:ml-1/2 space-y-16 py-8">
            {[
              { year: "2012", title: "The First Batch", desc: "Crafting our signature chamomile blend in a tiny apartment." },
              { year: "2015", title: "A Place of Our Own", desc: "Opening the doors to our Elm Street sanctuary." },
              { year: "2018", title: "The Greenhouse", desc: "Partnering with local farms to grow our own heirloom herbs." },
              { year: "Today", title: "A Community Rooted", desc: "Hosting workshops and sharing the quiet craft of botanical care." }
            ].map((milestone, i) => (
              <div key={i} className="relative pl-12 md:pl-0">
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-[#8B7355] ring-4 ring-[#FDFBF7]"></div>
                
                <div className="md:w-1/2 md:-ml-8 md:pr-16 md:text-right">
                  <span className="font-serif italic text-[#8B7355] text-xl block mb-2">{milestone.year}</span>
                  <h3 className="text-xl font-medium text-[#3A3228] mb-3">{milestone.title}</h3>
                  <p className="text-[#5A5248] font-light leading-relaxed">{milestone.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The People */}
      <section id="people" className="py-24 px-6 bg-[#F8F6F0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-serif text-4xl text-[#3A3228]">The Hands Behind the Work</h2>
            <p className="text-[#8B7355] italic font-serif text-lg">We are a small family of makers.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { name: "Aurelia Vance", role: "Founder & Herbalist", note: "Finds peace in the smell of damp earth.", color: "bg-[#E8DCCB]" },
              { name: "Julian Thorne", role: "Apothecary Manager", note: "Knows the exact steeping time for everything.", color: "bg-[#E0E5DF]" },
              { name: "Clara Lin", role: "Grower", note: "Talks to the seedlings every morning.", color: "bg-[#EAE4DF]" }
            ].map((person, i) => (
              <div key={i} className="flex flex-col items-center text-center space-y-6">
                <div className={"w-40 h-40 " + person.color + " blob-shape flex items-center justify-center soft-shadow"}>
                   <span className="font-serif text-4xl text-[#3A3228] opacity-30">{person.name.charAt(0)}</span>
                </div>
                <div>
                  <h3 className="font-serif text-2xl text-[#3A3228] mb-1">{person.name}</h3>
                  <p className="text-sm tracking-wider uppercase text-[#8B7355] mb-4">{person.role}</p>
                  <p className="text-[#5A5248] font-light italic max-w-xs">"{person.note}"</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Awards / Press (Optional) */}
      <section className="py-20 px-6 border-y border-[#E8DCCB] border-opacity-50">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <Award size={28} strokeWidth={1} className="mx-auto text-[#8B7355]" />
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16">
            <div className="space-y-2">
               <p className="font-serif italic text-lg text-[#3A3228]">"A true hidden gem."</p>
               <p className="text-xs uppercase tracking-widest text-[#8B7355]">— The Local Standard</p>
            </div>
            <div className="hidden md:block w-px h-12 bg-[#D4C3B3]"></div>
            <div className="space-y-2">
               <p className="font-serif italic text-lg text-[#3A3228]">"Best Artisan Shop 2023"</p>
               <p className="text-xs uppercase tracking-widest text-[#8B7355]">— Valley Heritage Trust</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Where We Are */}
      <section id="visit" className="py-24 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16">
          <div className="space-y-10">
            <h2 className="font-serif text-4xl text-[#3A3228]">Come Sit With Us</h2>
            <p className="text-[#5A5248] font-light leading-relaxed">
              Our doors are open. Whether you need a soothing remedy or just a quiet corner to breathe, you are welcome here.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="text-[#8B7355] mt-1" size={20} strokeWidth={1.5} />
                <div>
                  <h4 className="text-[#3A3228] font-medium mb-1">Our Store</h4>
                  <p className="text-[#5A5248] font-light">42 Elm Street, Willow Creek<br/>CA 90210</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Clock className="text-[#8B7355] mt-1" size={20} strokeWidth={1.5} />
                <div>
                  <h4 className="text-[#3A3228] font-medium mb-1">Hours</h4>
                  <p className="text-[#5A5248] font-light">Wednesday – Sunday<br/>10am – 5pm</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="text-[#8B7355] mt-1" size={20} strokeWidth={1.5} />
                <p className="text-[#5A5248] font-light mt-1">(555) 123-4567</p>
              </div>
            </div>
          </div>
          
          <div className="h-full min-h-[300px] bg-[#E8DCCB] rounded-2xl soft-shadow overflow-hidden relative flex items-center justify-center p-8">
             <div className="absolute inset-4 border border-[#D4C3B3] rounded-xl pointer-events-none"></div>
             <div className="text-center space-y-3 relative z-10">
               <Leaf className="mx-auto text-[#8B7355]" size={32} strokeWidth={1} />
               <p className="font-serif italic text-[#6B5A4B]">Look for the green door.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#3A3228] text-[#D4C3B3] py-12 text-center px-6">
        <p className="font-serif italic mb-4">"Rooted in nature, crafted with care."</p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="hover:text-white transition-colors">Instagram</a>
          <a href="#" className="hover:text-white transition-colors">Journal</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
        <p className="text-xs uppercase tracking-widest opacity-60">© {new Date().getFullYear()} Aurelia's Botanicals. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Organic;
