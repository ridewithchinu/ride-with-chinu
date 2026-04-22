import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, MessageSquare, Clock, Globe } from 'lucide-react';
import { LazyImage } from '@/components/ui/LazyImage';
import { SEO } from '@/components/SEO';

export function Contact() {
  return (
    <div className="flex flex-col gap-16 pb-16">
      <SEO 
        title="Contact Us"
        description="Get in touch with RideWithChinu for bookings, inquiries, or custom Uttarakhand travel plans. We are available 24/7 via WhatsApp and Email."
      />
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <LazyImage 
            src="https://images.unsplash.com/photo-1626715238066-c73950275815?auto=format&fit=crop&q=80&w=2000" 
            alt="Contact Uttarakhand" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]" />
        </div>
        
        <div className="container relative z-10 px-4 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-heading font-black mb-4 tracking-tighter"
          >
            Get in <span className="text-secondary">Touch</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl md:text-2xl text-white/80 font-light max-w-2xl mx-auto text-balance"
          >
            Planning your Himalayan escape? We are here to guide you every step of the way.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-3xl font-heading font-bold mb-6">Contact Information</h2>
              <p className="text-muted-foreground text-lg mb-8">
                Whether you have a specific destination in mind or need help crafting a custom itinerary, our local experts are ready to help.
              </p>
            </div>

            <div className="grid gap-6">
              <div className="flex items-start gap-5 p-6 rounded-3xl bg-card border border-border hover:border-primary/50 transition-colors group">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Call or WhatsApp</h3>
                  <p className="text-muted-foreground mb-3">Available for instant support and trip planning.</p>
                  <a href="https://wa.me/917818841169" target="_blank" rel="noreferrer" className="text-primary font-bold hover:underline text-lg">
                    +91 78188 41169
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 rounded-3xl bg-card border border-border hover:border-primary/50 transition-colors group">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Email Us</h3>
                  <p className="text-muted-foreground mb-3">Send us your requirements for a detailed quote.</p>
                  <a href="mailto:ridewithchinu@gmail.com" className="text-primary font-bold hover:underline text-lg">
                    ridewithchinu@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-5 p-6 rounded-3xl bg-card border border-border hover:border-primary/50 transition-colors group">
                <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-1">Location</h3>
                  <p className="text-muted-foreground">Uttarakhand, India</p>
                  <span className="text-sm text-primary font-semibold">Available for meetups in Dehradun & Rishikesh</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Quick Connect & Presence */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="relative rounded-[2.5rem] overflow-hidden aspect-video shadow-2xl">
              <LazyImage 
                src="https://images.unsplash.com/photo-1596394511225-72886f6a7d79?auto=format&fit=crop&q=80&w=1200" 
                alt="Support" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h3 className="text-2xl font-bold mb-2">24/7 Support</h3>
                  <p className="text-white/80">We are always available to assist our travelers during their journey.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-6 rounded-3xl bg-muted/50 border border-border text-center">
                <Clock className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h4 className="font-bold mb-1">Quick Response</h4>
                <p className="text-xs text-muted-foreground text-balance">We usually reply within 2 hours</p>
              </div>
              <div className="p-6 rounded-3xl bg-muted/50 border border-border text-center">
                <Globe className="w-8 h-8 mx-auto mb-3 text-primary" />
                <h4 className="font-bold mb-1">Local Network</h4>
                <p className="text-xs text-muted-foreground text-balance">Deep reach across all districts</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

