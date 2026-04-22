import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { LazyImage } from '@/components/ui/LazyImage';
import { destinations, categories } from '@/data/destinations';
import { YatraSection } from '@/components/YatraSection';
import { ArrowRight, Map, Mountain, Sunrise, Tent } from 'lucide-react';

import { SEO } from '@/components/SEO';

export function Home() {
  const categoryIcons: Record<string, React.ReactNode> = {
    "Hill Stations": <Mountain className="w-6 h-6" />,
    "Spiritual / Pilgrimage": <Sunrise className="w-6 h-6" />,
    "Adventure Destinations": <Tent className="w-6 h-6" />,
    "Lakes and Scenic Retreats": <Map className="w-6 h-6" />,
  };

  const pilgrimIds = ['badrinath', 'kedarnath', 'gangotri', 'yamunotri', 'haridwar', 'rishikesh'];
  const featuredDestinations = destinations.filter(d => pilgrimIds.includes(d.id));

  const yatraStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Char Dham & Do Dham Yatra Planner | RideWithChinu",
    "description": "Explore interactive itineraries and plan your perfect Char Dham or Do Dham yatra in Uttarakhand.",
    "mainEntity": [
      {
        "@type": "TouristTrip",
        "name": "Char Dham Yatra",
        "description": "Traditional Himalayan pilgrimage covering Yamunotri, Gangotri, Kedarnath, and Badrinath.",
        "itinerary": {
          "@type": "ItemList",
          "itemListElement": [
            { "@type": "TouristDestination", "name": "Yamunotri" },
            { "@type": "TouristDestination", "name": "Gangotri" },
            { "@type": "TouristDestination", "name": "Kedarnath" },
            { "@type": "TouristDestination", "name": "Badrinath" }
          ]
        }
      },
      {
        "@type": "TouristTrip",
        "name": "Do Dham Yatra",
        "description": "Pilgrimage covering the two most sacred shrines: Kedarnath and Badrinath.",
        "itinerary": {
          "@type": "ItemList",
          "itemListElement": [
            { "@type": "TouristDestination", "name": "Kedarnath" },
            { "@type": "TouristDestination", "name": "Badrinath" }
          ]
        }
      }
    ]
  };

  return (
    <div className="flex flex-col gap-16 pb-16">
      <SEO 
        title="Char Dham & Do Dham Yatra | Uttarakhand Travel Guide"
        description="Experience the divine journey of Char Dham and Do Dham. Plan your pilgrimage with expert-led itineraries, local insights, and reliable transport in Uttarakhand."
        structuredData={yatraStructuredData}
      />
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <LazyImage 
            src="/images/destinations/naukuchiatal.jpg" 
            alt="Uttarakhand Mountains" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container relative z-10 px-4 text-center text-white">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/20 backdrop-blur-md border border-white/20 text-xs md:text-sm font-semibold tracking-widest uppercase"
          >
            Welcome to Devbhoomi
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-6xl md:text-8xl font-heading font-extrabold mb-6 leading-tight tracking-tighter"
          >
            Explore <span className="text-secondary drop-shadow-lg">Uttarakhand</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-3xl max-w-3xl mx-auto mb-10 text-white/90 font-light leading-relaxed text-balance"
          >
            Experience the divine serenity and majestic grandeur of the <span className="font-semibold italic text-secondary">Land of Gods</span>.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link 
              to="/destinations" 
              className="group relative inline-flex items-center gap-3 bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-full font-bold text-lg transition-all hover:shadow-[0_0_30px_rgba(13,148,136,0.5)] active:scale-95 overflow-hidden"
            >
              <span className="relative z-10">Start Your Adventure</span>
              <ArrowRight className="w-6 h-6 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Yatra Section */}
      <YatraSection />

      {/* Browse by Category */}
      <section className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-heading font-bold mb-4">Browse by Interest</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Find the perfect destination based on what you love doing.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.slice(0, 8).map((category, index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.1, 0.4) }}
            >
              <Link 
                to={`/destinations?category=${encodeURIComponent(category)}`}
                className="flex flex-col items-center justify-center gap-4 p-8 rounded-[2rem] bg-card border border-border hover:border-primary/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center h-full group relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                <div className="p-5 rounded-3xl bg-primary/5 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 transform group-hover:rotate-12">
                  {categoryIcons[category] || <Map className="w-7 h-7 md:w-8 md:h-8" />}
                </div>
                <span className="font-bold text-base md:text-lg tracking-tight group-hover:text-primary transition-colors">{category}</span>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl font-heading font-bold mb-2">Popular Destinations</h2>
            <p className="text-muted-foreground">Must-visit places in Devbhoomi</p>
          </div>
          <Link to="/destinations" className="hidden md:flex items-center gap-1 text-primary hover:underline font-medium">
            View All <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredDestinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, delay: Math.min(index * 0.1, 0.3) }}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-xl transition-all flex flex-col"
            >
              <Link to={`/destinations/${dest.id}`} className="block relative h-64 overflow-hidden">
                <LazyImage 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-white/10 shadow-lg">
                    {dest.district} District
                  </span>
                </div>
              </Link>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-heading font-bold mb-2 group-hover:text-primary transition-colors">
                  <Link to={`/destinations/${dest.id}`}>{dest.name}</Link>
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {dest.description}
                </p>
                <div className="mt-auto flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{dest.altitude}</span>
                  <span className="font-medium text-primary">{dest.best_time[0]}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Link to="/destinations" className="inline-flex items-center gap-2 text-primary font-medium">
            View All Destinations <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Responsible Travel */}
      <section className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          className="bg-primary/5 border border-primary/20 rounded-3xl p-8 md:p-12 text-center max-w-4xl mx-auto"
        >
          <h2 className="text-2xl md:text-3xl font-heading font-bold mb-4 text-primary-dark dark:text-primary">Travel Responsibly</h2>
          <p className="text-muted-foreground md:text-lg mb-6">
            The Himalayas are fragile. Help us preserve their beauty by avoiding single-use plastics, respecting local customs, and leaving no trace behind.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="bg-background px-4 py-2 rounded-full text-sm font-medium border border-border">No Plastic</span>
            <span className="bg-background px-4 py-2 rounded-full text-sm font-medium border border-border">Respect Locals</span>
            <span className="bg-background px-4 py-2 rounded-full text-sm font-medium border border-border">Stay on Trails</span>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
