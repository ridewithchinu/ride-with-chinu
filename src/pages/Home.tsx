import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { LazyImage } from '@/components/ui/LazyImage';
import { destinations, categories } from '@/data/destinations';
import { ArrowRight, Map, Mountain, Sunrise, Tent } from 'lucide-react';

export function Home() {
  const pilgrimIds = ['badrinath', 'kedarnath', 'gangotri', 'yamunotri', 'haridwar', 'rishikesh'];
  const featuredDestinations = destinations.filter(d => pilgrimIds.includes(d.id));
  
  const categoryIcons: Record<string, React.ReactNode> = {
    "Hill Stations": <Mountain className="w-6 h-6" />,
    "Spiritual / Pilgrimage": <Sunrise className="w-6 h-6" />,
    "Adventure Destinations": <Tent className="w-6 h-6" />,
    "Lakes and Scenic Retreats": <Map className="w-6 h-6" />,
  };

  return (
    <div className="flex flex-col gap-16 pb-16">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <LazyImage 
            src="/images/destinations/nainital_user.png" 
            alt="Uttarakhand Mountains" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        
        <div className="container relative z-10 px-4 text-center text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-7xl font-heading font-bold mb-6"
          >
            Explore Uttarakhand
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl max-w-2xl mx-auto mb-8 text-gray-200"
          >
            Discover the Land of Gods. From sacred temples to majestic peaks, your adventure begins here.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link 
              to="/destinations" 
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-medium transition-colors"
            >
              Start Exploring <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>
      </section>

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
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <Link 
                to={`/destinations?category=${encodeURIComponent(category)}`}
                className="flex flex-col items-center justify-center gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary hover:shadow-lg transition-all text-center h-full group"
              >
                <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  {categoryIcons[category] || <Map className="w-6 h-6" />}
                </div>
                <span className="font-medium text-sm md:text-base">{category}</span>
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
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl overflow-hidden bg-card border border-border hover:shadow-xl transition-all flex flex-col"
            >
              <Link to={`/destinations/${dest.id}`} className="block relative h-64 overflow-hidden">
                <LazyImage 
                  src={dest.image} 
                  alt={dest.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                  <span className="bg-background/90 backdrop-blur text-foreground text-xs font-medium px-2.5 py-1 rounded-full">
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
          viewport={{ once: true }}
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
