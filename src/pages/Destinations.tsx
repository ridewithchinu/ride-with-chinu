import { useState, useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'motion/react';
import { LazyImage } from '@/components/ui/LazyImage';
import { destinations, categories } from '@/data/destinations';
import { Search, Filter, MapPin } from 'lucide-react';

export function Destinations() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');
  
  const activeCategory = searchParams.get('category') || 'All';

  const filteredDestinations = useMemo(() => {
    return destinations.filter(dest => {
      const matchesSearch = dest.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            dest.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || dest.category.includes(activeCategory);
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const handleCategoryChange = (category: string) => {
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-16 text-center max-w-4xl mx-auto">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-5xl md:text-7xl font-heading font-black mb-8 tracking-tighter"
        >
          Explore <span className="gradient-text">Destinations</span>
        </motion.h1>
        <p className="text-xl md:text-2xl text-muted-foreground font-light text-balance">
          From sacred shrines hidden in deodar forests to thrilling peaks that touch the sky, discover your next soul-searching adventure in Uttarakhand.
        </p>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <div className="relative flex-1 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
          <input
            type="text"
            placeholder="Search by name, district, or description..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 rounded-2xl border border-border bg-card/50 backdrop-blur-sm focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary/50 transition-all shadow-sm group-hover:shadow-md"
          />
        </div>
        
        <div className="flex items-center gap-3 overflow-x-auto pb-4 md:pb-0 scrollbar-hide no-scrollbar">
          <div className="p-2 rounded-xl bg-muted/50 text-muted-foreground shrink-0 select-none">
            <Filter className="w-5 h-5" />
          </div>
          <button
            onClick={() => handleCategoryChange('All')}
            className={`shrink-0 px-6 py-2.5 rounded-xl text-sm font-bold transition-all active:scale-95 ${
              activeCategory === 'All' 
                ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105' 
                : 'bg-card border border-border text-muted-foreground hover:bg-muted hover:text-foreground'
            }`}
          >
            All Destinations
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`shrink-0 px-6 py-2.5 rounded-xl text-sm font-bold transition-all active:scale-95 ${
                activeCategory === cat 
                  ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105' 
                  : 'bg-card border border-border text-muted-foreground hover:bg-muted hover:text-foreground'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filteredDestinations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDestinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.3) }}
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
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-heading font-bold group-hover:text-primary transition-colors">
                    <Link to={`/destinations/${dest.id}`}>{dest.name}</Link>
                  </h3>
                </div>
                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" />
                  <span>{dest.district}</span>
                </div>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-3">
                  {dest.description}
                </p>
                <div className="mt-auto flex flex-wrap gap-2">
                  {dest.specialty.slice(0, 3).map(spec => (
                    <span key={spec} className="text-xs bg-muted text-muted-foreground px-2 py-1 rounded-md">
                      {spec}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20">
          <h3 className="text-xl font-heading font-medium mb-2">No destinations found</h3>
          <p className="text-muted-foreground">Try adjusting your search or filters.</p>
          <button 
            onClick={() => { setSearchQuery(''); handleCategoryChange('All'); }}
            className="mt-4 text-primary hover:underline"
          >
            Clear all filters
          </button>
        </div>
      )}
    </div>
  );
}
