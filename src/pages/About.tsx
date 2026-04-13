import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Heart, Shield, Phone } from 'lucide-react';

export function About() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">About RideWithChinu</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Your trusted companion for exploring the majestic landscapes, sacred temples, and hidden gems of Devbhoomi Uttarakhand.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <img 
            src="/images/best/nainital.jpg" 
            alt="Uttarakhand Landscape" 
            className="rounded-2xl shadow-xl object-cover aspect-[4/3] w-full"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-heading font-bold">Our Mission</h2>
          <p className="text-muted-foreground leading-relaxed">
            At RideWithChinu, we believe that traveling through Uttarakhand should be more than just a trip; it should be a soul-stirring journey. Our mission is to provide authentic, safe, and unforgettable travel experiences across the Garhwal and Kumaon regions.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Whether you are seeking the spiritual solace of the Char Dham, the thrill of a Himalayan trek, or a peaceful retreat by a pristine lake, we are here to guide you every step of the way.
          </p>
        </motion.div>
      </div>

      <div className="grid sm:grid-cols-3 gap-8 mb-20">
        <div className="bg-card p-6 rounded-2xl border border-border text-center">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <MapPin className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-lg mb-2">Local Expertise</h3>
          <p className="text-sm text-muted-foreground">Deep knowledge of Uttarakhand's terrain, weather, and hidden spots.</p>
        </div>
        <div className="bg-card p-6 rounded-2xl border border-border text-center">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-lg mb-2">Safe Travel</h3>
          <p className="text-sm text-muted-foreground">Your safety is our priority. We ensure reliable transport and secure stays.</p>
        </div>
        <div className="bg-card p-6 rounded-2xl border border-border text-center">
          <div className="w-12 h-12 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
            <Heart className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-lg mb-2">Personalized</h3>
          <p className="text-sm text-muted-foreground">Custom itineraries designed around your interests and comfort.</p>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 text-center"
      >
        <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4">Ready to start your journey?</h2>
        <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
          Get in touch with us today to plan your perfect Uttarakhand getaway. We are just a message away!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a 
            href="https://wa.me/917818841169" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            <Phone className="w-5 h-5" /> Chat on WhatsApp
          </a>
          <a 
            href="mailto:ridewithchinu@gmail.com" 
            className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-full font-medium transition-colors"
          >
            Email Us
          </a>
        </div>
      </motion.div>
    </div>
  );
}
