import React, { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Clock, Star, Quote, Award } from "lucide-react";
import "./_group.css";

export function Restaurant() {
  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="restaurant-theme min-h-screen bg-[var(--theme-cream)] text-[var(--theme-charcoal)] font-['Lora',serif] selection:bg-[var(--theme-gold)] selection:text-white">
      {/* 1. Hero */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/__mockup/images/restaurant-hero.png" 
            alt="Dastarkhwan Restaurant" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--theme-burgundy)]/90 via-black/40 to-transparent"></div>
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto text-white">
          <p className="text-[var(--theme-gold)] font-medium tracking-[0.2em] uppercase text-sm mb-6 animate-fade-in-up opacity-0">Est. 1988</p>
          <h1 className="font-['Playfair_Display',serif] text-6xl md:text-8xl font-bold mb-8 leading-tight animate-fade-in-up delay-100 opacity-0">
            Dastarkhwan
          </h1>
          <div className="flex items-center justify-center gap-4 mb-8 animate-fade-in-up delay-200 opacity-0">
            <div className="h-px w-16 bg-[var(--theme-gold)]"></div>
            <Star className="w-5 h-5 text-[var(--theme-gold)] fill-[var(--theme-gold)]" />
            <div className="h-px w-16 bg-[var(--theme-gold)]"></div>
          </div>
          <p className="text-xl md:text-3xl font-light italic mb-10 text-[var(--theme-cream)] animate-fade-in-up delay-300 opacity-0">
            "Food is our love language, and every guest is family."
          </p>
        </div>
      </section>

      {/* 2. Origin */}
      <section className="py-24 px-6 md:px-12 bg-[var(--theme-cream)]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-bold mb-8 text-[var(--theme-burgundy)]">
            How It Began
          </h2>
          <p className="text-lg md:text-xl leading-relaxed mb-8 text-[var(--theme-charcoal)]/80">
            It started with a single pot of biryani in a small kitchen, and a belief that good food brings people together. In 1988, Chef Raza Mahmood opened a humble dhaba with a handful of family recipes passed down from his grandmother. The tables were mismatched, but the flavors were unmistakable.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-[var(--theme-charcoal)]/80">
            Word spread not through advertisements, but through the aroma of slow-cooked meats and fresh spices wafting through the streets. Dastarkhwan was born out of a simple desire to share the warmth of our family's dining table with the world.
          </p>
        </div>
      </section>

      {/* 3. Business Journey */}
      <section className="py-24 px-6 md:px-12 bg-[var(--theme-burgundy)] text-[var(--theme-cream)]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-bold mb-8 text-[var(--theme-gold)]">
              A Journey of Flavor
            </h2>
            <div className="space-y-6 text-lg leading-relaxed text-white/90">
              <p>
                From those modest beginnings, Dastarkhwan grew alongside the community it served. As our guests celebrated their milestones—weddings, anniversaries, graduations—within our walls, we realized we weren't just serving meals; we were witnessing lives unfold.
              </p>
              <p>
                Over three decades, we expanded from a 20-seat eatery to a landmark dining destination. Yet, amidst the growth, our core philosophy remained untouched. The spice blends are still ground fresh daily, the curries are still simmered low and slow, and the hospitality remains genuinely warm.
              </p>
              <p className="font-['Playfair_Display',serif] text-2xl italic text-[var(--theme-gold)] mt-8 border-l-4 border-[var(--theme-gold)] pl-6">
                "We didn't just build a restaurant; we built a home for the community to gather, feast, and create memories."
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] bg-[var(--theme-charcoal)] rounded-t-full border-4 border-[var(--theme-gold)]/30 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[var(--theme-burgundy)]/80 to-transparent z-10"></div>
              {/* Decorative inner border */}
              <div className="absolute inset-4 border border-[var(--theme-gold)]/50 rounded-t-full z-20 pointer-events-none"></div>
              {/* Visual placeholder for journey image */}
              <div className="absolute inset-0 flex items-center justify-center text-[var(--theme-gold)]/20 z-0">
                <Star className="w-48 h-48" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Milestones */}
      <section className="py-24 px-6 md:px-12 bg-[var(--theme-cream-dark)]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-bold mb-4 text-[var(--theme-burgundy)]">
              Our Legacy
            </h2>
            <p className="text-[var(--theme-charcoal)]/70 uppercase tracking-widest text-sm font-semibold">Key Chapters in Our History</p>
          </div>
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-[var(--theme-gold)]/30">
            {/* Milestone 1 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--theme-cream-dark)] bg-[var(--theme-gold)] text-[var(--theme-burgundy)] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Star className="w-4 h-4 fill-current" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-lg bg-white shadow-sm border border-[var(--theme-burgundy)]/10 hover:shadow-md transition-shadow">
                <span className="font-['Playfair_Display',serif] text-2xl font-bold text-[var(--theme-burgundy)]">1988</span>
                <h3 className="text-xl font-semibold mb-2 mt-1">The First Spark</h3>
                <p className="text-[var(--theme-charcoal)]/80">Chef Raza opens the doors to the original 20-seat Dastarkhwan dhaba.</p>
              </div>
            </div>
            
            {/* Milestone 2 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--theme-cream-dark)] bg-[var(--theme-gold)] text-[var(--theme-burgundy)] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Star className="w-4 h-4 fill-current" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-lg bg-white shadow-sm border border-[var(--theme-burgundy)]/10 hover:shadow-md transition-shadow">
                <span className="font-['Playfair_Display',serif] text-2xl font-bold text-[var(--theme-burgundy)]">1995</span>
                <h3 className="text-xl font-semibold mb-2 mt-1">A Royal Dish is Born</h3>
                <p className="text-[var(--theme-charcoal)]/80">Creation of the Signature Shahi Raan, cementing our culinary reputation.</p>
              </div>
            </div>

            {/* Milestone 3 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--theme-cream-dark)] bg-[var(--theme-gold)] text-[var(--theme-burgundy)] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Star className="w-4 h-4 fill-current" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-lg bg-white shadow-sm border border-[var(--theme-burgundy)]/10 hover:shadow-md transition-shadow">
                <span className="font-['Playfair_Display',serif] text-2xl font-bold text-[var(--theme-burgundy)]">2005</span>
                <h3 className="text-xl font-semibold mb-2 mt-1">The Grand Expansion</h3>
                <p className="text-[var(--theme-charcoal)]/80">Relocation to our current heritage building, expanding capacity to 200 guests.</p>
              </div>
            </div>

            {/* Milestone 4 */}
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--theme-cream-dark)] bg-[var(--theme-gold)] text-[var(--theme-burgundy)] shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <Star className="w-4 h-4 fill-current" />
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-lg bg-white shadow-sm border border-[var(--theme-burgundy)]/10 hover:shadow-md transition-shadow">
                <span className="font-['Playfair_Display',serif] text-2xl font-bold text-[var(--theme-burgundy)]">2023</span>
                <h3 className="text-xl font-semibold mb-2 mt-1">Culinary Heritage Award</h3>
                <p className="text-[var(--theme-charcoal)]/80">Recognized nationally for preserving traditional cooking techniques and authentic flavors.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. The People */}
      <section className="py-24 px-6 md:px-12 bg-[var(--theme-cream)]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-bold mb-4 text-[var(--theme-burgundy)]">
              The Hands Behind the Feast
            </h2>
            <p className="text-[var(--theme-charcoal)]/70 uppercase tracking-widest text-sm font-semibold">Generations of Dedication</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <Card className="bg-[var(--theme-cream-dark)] border-none shadow-sm rounded-t-full pt-12 pb-6 px-6 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-32 h-32 mx-auto rounded-full bg-[var(--theme-burgundy)] flex items-center justify-center mb-6 border-4 border-[var(--theme-gold)]">
                <span className="font-['Playfair_Display',serif] text-4xl text-[var(--theme-gold)]">R</span>
              </div>
              <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-[var(--theme-charcoal)] mb-1">Raza Mahmood</h3>
              <p className="text-[var(--theme-gold)] font-medium mb-4 uppercase tracking-wider text-sm">Founder & Patriarch</p>
              <p className="text-[var(--theme-charcoal)]/80 italic">"Recipes are just guidelines; the real secret ingredient is generosity."</p>
            </Card>

            <Card className="bg-[var(--theme-burgundy)] text-white border-none shadow-md rounded-t-full pt-12 pb-6 px-6 text-center hover:-translate-y-2 transition-transform duration-300 transform md:-translate-y-4">
              <div className="w-32 h-32 mx-auto rounded-full bg-[var(--theme-cream)] flex items-center justify-center mb-6 border-4 border-[var(--theme-gold)]">
                <span className="font-['Playfair_Display',serif] text-4xl text-[var(--theme-burgundy)]">Z</span>
              </div>
              <h3 className="font-['Playfair_Display',serif] text-2xl font-bold mb-1">Zainab Mahmood</h3>
              <p className="text-[var(--theme-gold)] font-medium mb-4 uppercase tracking-wider text-sm">Executive Chef</p>
              <p className="text-white/80 italic">"Carrying forward my grandfather's legacy, one spice blend at a time."</p>
            </Card>

            <Card className="bg-[var(--theme-cream-dark)] border-none shadow-sm rounded-t-full pt-12 pb-6 px-6 text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="w-32 h-32 mx-auto rounded-full bg-[var(--theme-burgundy)] flex items-center justify-center mb-6 border-4 border-[var(--theme-gold)]">
                <span className="font-['Playfair_Display',serif] text-4xl text-[var(--theme-gold)]">T</span>
              </div>
              <h3 className="font-['Playfair_Display',serif] text-2xl font-bold text-[var(--theme-charcoal)] mb-1">Tariq Ali</h3>
              <p className="text-[var(--theme-gold)] font-medium mb-4 uppercase tracking-wider text-sm">Maitre D'</p>
              <p className="text-[var(--theme-charcoal)]/80 italic">"Ensuring every guest feels like they've returned to their own dining room."</p>
            </Card>
          </div>
        </div>
      </section>

      {/* 7. Optional - Reviews/Press */}
      <section className="py-20 px-6 md:px-12 bg-[var(--theme-burgundy)] text-[var(--theme-cream)]">
        <div className="max-w-4xl mx-auto text-center">
          <Quote className="w-12 h-12 mx-auto text-[var(--theme-gold)] mb-8 opacity-50" />
          <h2 className="font-['Playfair_Display',serif] text-3xl md:text-4xl font-bold mb-8 leading-snug">
            "A masterclass in traditional hospitality. Dining here isn't just a meal; it's an embrace."
          </h2>
          <div className="flex items-center justify-center gap-4 mb-4">
            <Award className="w-6 h-6 text-[var(--theme-gold)]" />
            <span className="uppercase tracking-widest text-sm font-semibold text-[var(--theme-gold)]">The Culinary Times</span>
          </div>
        </div>
      </section>

      {/* 6. Where We Are */}
      <section className="py-24 px-6 md:px-12 bg-[var(--theme-charcoal)] text-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="font-['Playfair_Display',serif] text-4xl md:text-5xl font-bold mb-8 text-[var(--theme-gold)]">
              Join Our Table
            </h2>
            <p className="text-[var(--theme-cream)]/70 mb-10 text-lg">
              We look forward to welcoming you to Dastarkhwan. Whether for an intimate dinner or a grand celebration, our doors are open.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[var(--theme-gold)] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-xl font-['Playfair_Display',serif] mb-1">Location</h4>
                  <p className="text-[var(--theme-cream)]/80">123 Heritage Lane<br />Cultural District, Old City 45000</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="w-6 h-6 text-[var(--theme-gold)] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-xl font-['Playfair_Display',serif] mb-1">Opening Hours</h4>
                  <p className="text-[var(--theme-cream)]/80">Tuesday - Sunday: 5:00 PM - 11:30 PM<br />Monday: Closed for family</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <Phone className="w-6 h-6 text-[var(--theme-gold)] shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-xl font-['Playfair_Display',serif] mb-1">Reservations</h4>
                  <p className="text-[var(--theme-cream)]/80">+1 (555) 123-4567<br />feast@dastarkhwan.example</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[var(--theme-cream-dark)] p-8 rounded-lg flex flex-col justify-center text-center text-[var(--theme-charcoal)] border-t-8 border-[var(--theme-burgundy)]">
            <h3 className="font-['Playfair_Display',serif] text-3xl font-bold mb-4 text-[var(--theme-burgundy)]">Plan Your Visit</h3>
            <p className="mb-8 text-[var(--theme-charcoal)]/80">While we honor walk-ins, reservations are highly recommended for weekend evenings to ensure we can accommodate your party.</p>
            <Button className="bg-[var(--theme-burgundy)] hover:bg-[var(--theme-burgundy)]/90 text-[var(--theme-cream)] text-lg py-6 rounded-none w-full border border-transparent hover:border-[var(--theme-gold)] transition-colors">
              Request a Table
            </Button>
            <p className="mt-4 text-sm text-[var(--theme-charcoal)]/60 italic">For parties of 8 or more, please call us directly.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 text-center border-t border-white/10">
        <p className="text-white/50 text-sm">© {new Date().getFullYear()} Dastarkhwan Restaurant. All rights reserved.</p>
      </footer>
    </div>
  );
}
