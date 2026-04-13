import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Send, MessageCircle, Mail, ArrowLeft } from 'lucide-react';

interface BookingFormProps {
  destinationName: string;
}

export function BookingForm({ destinationName }: BookingFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showContactOptions, setShowContactOptions] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    guests: '1',
    message: ''
  });

  const CONTACT_PHONE = "917818841169";
  const CONTACT_EMAIL = "ridewithchinu@gmail.com";
  const CONTACT_NAME = "Rider with chinu";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate processing before showing contact options
    setTimeout(() => {
      setIsSubmitting(false);
      setShowContactOptions(true);
    }, 800);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const generateMessage = () => {
    return `Hi ${CONTACT_NAME}, I would like to inquire about a trip to ${destinationName}.
    
Details:
- Name: ${formData.name}
- Phone: ${formData.phone}
- Email: ${formData.email}
- Travel Date: ${formData.date}
- Number of Guests: ${formData.guests}
${formData.message ? `- Special Requirements: ${formData.message}` : ''}

Please let me know the next steps!`;
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(generateMessage());
    window.open(`https://wa.me/${CONTACT_PHONE}?text=${text}`, '_blank');
  };

  const handleEmail = () => {
    const subject = encodeURIComponent(`Trip Inquiry: ${destinationName}`);
    const body = encodeURIComponent(generateMessage());
    window.open(`mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`, '_blank');
  };

  return (
    <div className="bg-card border border-border rounded-2xl p-6 shadow-sm">
      <h3 className="text-2xl font-heading font-bold mb-2">Book Your Trip</h3>
      <p className="text-muted-foreground text-sm mb-6">
        Inquire about a trip to {destinationName}. We'll connect you directly with {CONTACT_NAME}.
      </p>

      {showContactOptions ? (
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center py-4 text-center"
        >
          <h4 className="text-xl font-bold mb-2">Almost there, {formData.name}!</h4>
          <p className="text-muted-foreground mb-8">
            Choose how you'd like to send your inquiry to {CONTACT_NAME}. We've prepared the message for you.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-md">
            <button
              onClick={handleWhatsApp}
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-6 py-4 rounded-xl font-medium transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Send via WhatsApp
            </button>
            
            <button
              onClick={handleEmail}
              className="flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-4 rounded-xl font-medium transition-colors"
            >
              <Mail className="w-5 h-5" />
              Send via Email
            </button>
          </div>
          
          <button 
            onClick={() => setShowContactOptions(false)}
            className="mt-8 text-sm text-muted-foreground hover:text-primary flex items-center gap-1 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" /> Back to edit details
          </button>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="John Doe"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="john@example.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
                placeholder="+91 98765 43210"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="date" className="text-sm font-medium">Travel Date</label>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="guests" className="text-sm font-medium">Guests</label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, '9+'].map(num => (
                  <option key={num} value={num}>{num}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">Special Requirements (Optional)</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              placeholder="Any specific dietary requirements, accessibility needs, or preferences?"
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-6 py-3 rounded-xl font-medium transition-colors disabled:opacity-70"
          >
            {isSubmitting ? (
              <span className="animate-pulse">Preparing Inquiry...</span>
            ) : (
              <>
                Proceed to Contact <Send className="w-4 h-4" />
              </>
            )}
          </button>
        </form>
      )}
    </div>
  );
}
