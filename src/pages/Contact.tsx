import React from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin } from 'lucide-react';

export function Contact() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Contact Us</h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          We are here to help you plan your perfect trip to Devbhoomi Uttarakhand. Reach out to us anytime!
        </p>
      </motion.div>

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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
          <a 
            href="https://wa.me/917818841169" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-4 rounded-full font-medium transition-colors text-lg"
          >
            <Phone className="w-6 h-6" /> Chat on WhatsApp
          </a>
          <a 
            href="mailto:ridewithchinu@gmail.com" 
            className="flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-medium transition-colors text-lg"
          >
            <Mail className="w-6 h-6" /> Email Us
          </a>
        </div>
        
        <div className="grid sm:grid-cols-3 gap-6 mt-12 pt-12 border-t border-primary/10">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-4 shadow-sm">
              <Phone className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold mb-1">Phone / WhatsApp</h3>
            <p className="text-muted-foreground">+91 78188 41169</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-4 shadow-sm">
              <Mail className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold mb-1">Email</h3>
            <p className="text-muted-foreground">ridewithchinu@gmail.com</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center mb-4 shadow-sm">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <h3 className="font-semibold mb-1">Location</h3>
            <p className="text-muted-foreground">Uttarakhand, India</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
