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
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-heading font-bold mb-6">Explore Destinations</h1>
        <p className="text-lg text-muted-foreground">
          From sacred shrines to thrilling peaks, find your next adventure in Uttarakhand.
        </p>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col md:flex-row gap-6 mb-12">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search destinations..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-card focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
          />
        </div>
        
        <div className="flex items-center gap-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          <Filter className="w-5 h-5 text-muted-foreground shrink-0 mr-2" />
          <button
            onClick={() => handleCategoryChange('All')}
            className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategory === 'All' 
                ? 'bg-primary text-white' 
                : 'bg-muted text-muted-foreground hover:bg-muted/80'
            }`}
          >
            All
          </button>
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => handleCategoryChange(cat)}
              className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === cat 
                  ? 'bg-primary text-white' 
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
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
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
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
