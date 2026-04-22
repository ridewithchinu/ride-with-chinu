import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Heart, Shield, Phone, Sparkles, Award, Users, Mail } from 'lucide-react';
import { LazyImage } from '@/components/ui/LazyImage';

export function About() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <LazyImage 
            src="https://images.unsplash.com/photo-1596394511225-72886f6a7d79?auto=format&fit=crop&q=80&w=2000" 
            alt="About Uttarakhand" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]" />
        </div>
        
        <div className="container relative z-10 px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-bold uppercase tracking-widest mb-6"
          >
            <Sparkles className="w-3.5 h-3.5 text-secondary" /> Our Story
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-heading font-black mb-6 tracking-tighter"
          >
            RideWith<span className="text-secondary">Chinu</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-3xl text-white/90 font-light max-w-3xl mx-auto text-balance"
          >
            Crafting soul-stirring journeys in the Land of Gods since 2018.
          </motion.p>
        </div>
      </section>

      {/* Mission & Vision */}
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-square">
              <LazyImage 
                src="https://images.unsplash.com/photo-1626715238066-c73950275815?auto=format&fit=crop&q=80&w=1200" 
                alt="Our Mission" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-card border border-border p-8 rounded-3xl shadow-xl hidden lg:block">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary/10 text-primary rounded-2xl">
                  <Award className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-2xl font-black font-heading leading-none">500+</p>
                  <p className="text-sm text-muted-foreground uppercase tracking-wider font-bold">Trips Completed</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-heading font-black tracking-tight">Our Mission & Values</h2>
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                At <span className="text-primary font-bold">RideWithChinu</span>, we believe that traveling through Uttarakhand should be more than just a commute; it should be an experience that stays with you forever. 
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-light">
                Our team consists of lifelong locals who know every winding road and hidden shrine between the Garhwal and Kumaon regions. We don't just provide transport; we offer stewardship of this sacred land.
              </p>
            </div>
            <div className="pt-4 border-t border-border">
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h4 className="font-bold text-lg mb-2">Authenticity</h4>
                  <p className="text-sm text-muted-foreground">True local experiences beyond the usual tourist traps.</p>
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-2">Reliability</h4>
                  <p className="text-sm text-muted-foreground">Modern fleet and experienced drivers you can trust.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Core Expertise Card Grid */}
      <div className="bg-primary/5 py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-heading font-black mb-4 tracking-tight">Why Choose Us?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">Different by design, rooted in local tradition.</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              className="bg-card p-10 rounded-[2.5rem] border border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500 text-center flex flex-col items-center gap-6 group"
            >
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-3xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                <MapPin className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-heading font-black text-2xl mb-3">Local Expertise</h3>
                <p className="text-muted-foreground leading-relaxed">Deep ancestral knowledge of Uttarakhand's terrain, weather, and hidden mystical spots.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.1 }}
              className="bg-card p-10 rounded-[2.5rem] border border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500 text-center flex flex-col items-center gap-6 group"
            >
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-3xl flex items-center justify-center transform group-hover:-rotate-12 transition-transform duration-500">
                <Shield className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-heading font-black text-2xl mb-3">Safe Travel</h3>
                <p className="text-muted-foreground leading-relaxed">Your safety is our absolute priority. We ensure reliable transport and secure, verified stays.</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ delay: 0.2 }}
              className="bg-card p-10 rounded-[2.5rem] border border-border hover:border-primary/50 hover:shadow-2xl transition-all duration-500 text-center flex flex-col items-center gap-6 group"
            >
              <div className="w-16 h-16 bg-primary/10 text-primary rounded-3xl flex items-center justify-center transform group-hover:rotate-12 transition-transform duration-500">
                <Heart className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-heading font-black text-2xl mb-3">Personalized</h3>
                <p className="text-muted-foreground leading-relaxed">Custom itineraries designed around your unique spiritual interests and physical comfort.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          className="relative rounded-[3rem] overflow-hidden bg-primary p-12 md:p-20 text-center text-white"
        >
          {/* Background Decorative Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_white_1px,_transparent_1px)] [background-size:40px_40px]" />
          </div>

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-heading font-black mb-6">Ready to Experience Uttarakhand?</h2>
            <p className="text-white/80 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
              Join hundreds of happy travelers who have discovered the soul of the mountains with us.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <a 
                href="https://wa.me/917818841169" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center gap-3 bg-white text-primary px-10 py-5 rounded-full font-black transition-all hover:scale-105 active:scale-95 shadow-xl hover:shadow-2xl"
              >
                <Phone className="w-6 h-6 group-hover:rotate-12 transition-transform" /> Chat on WhatsApp
              </a>
              <a 
                href="mailto:ridewithchinu@gmail.com" 
                className="group flex items-center gap-3 bg-primary-dark/30 backdrop-blur-md border border-white/20 text-white px-10 py-5 rounded-full font-black transition-all hover:bg-primary-dark/40"
              >
                <Mail className="w-6 h-6" /> Email Your Query
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

