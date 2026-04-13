import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { LazyImage } from '@/components/ui/LazyImage';
import { destinations } from '@/data/destinations';
import { BookingForm } from '@/components/BookingForm';
import { 
  MapPin, Calendar, Mountain, Plane, Train, Car, 
  CheckCircle2, AlertTriangle, Utensils, Bed, Info, ArrowLeft
} from 'lucide-react';

export function DestinationDetail() {
  const { id } = useParams<{ id: string }>();
  const destination = destinations.find(d => d.id === id);

  if (!destination) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-3xl font-heading font-bold mb-4">Destination Not Found</h1>
        <Link to="/destinations" className="text-primary hover:underline flex items-center justify-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Destinations
        </Link>
      </div>
    );
  }

  return (
    <div className="pb-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[400px] flex items-end pb-12">
        <div className="absolute inset-0 z-0">
          <LazyImage 
            src={destination.image} 
            alt={destination.name} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        </div>
        
        <div className="container relative z-10 px-4 text-white">
          <Link to="/destinations" className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-primary/80 backdrop-blur text-white text-xs font-medium px-3 py-1 rounded-full">
                {destination.district} District
              </span>
              {destination.category.slice(0, 2).map(cat => (
                <span key={cat} className="bg-white/20 backdrop-blur text-white text-xs font-medium px-3 py-1 rounded-full">
                  {cat}
                </span>
              ))}
            </div>
            <h1 className="text-4xl md:text-6xl font-heading font-bold mb-4">{destination.name}</h1>
            <div className="flex items-center gap-4 text-sm md:text-base text-gray-200">
              <span className="flex items-center gap-1"><MapPin className="w-4 h-4" /> {destination.district}</span>
              <span className="flex items-center gap-1"><Mountain className="w-4 h-4" /> {destination.altitude}</span>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <section>
              <h2 className="text-2xl font-heading font-bold mb-4">About {destination.name}</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {destination.description}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold mb-6">Top Attractions</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destination.top_attractions.map((attraction, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
                  >
                    <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                    <span className="font-medium">{attraction}</span>
                  </motion.div>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-heading font-bold mb-6">Things to Do</h2>
              <div className="flex flex-wrap gap-3">
                {destination.activities.map((activity, idx) => (
                  <span key={idx} className="px-4 py-2 rounded-full bg-muted text-foreground text-sm font-medium">
                    {activity}
                  </span>
                ))}
              </div>
            </section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 flex items-center gap-2">
                  <Utensils className="w-6 h-6 text-primary" /> Local Cuisine
                </h2>
                <ul className="space-y-2">
                  {destination.cuisine.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-heading font-bold mb-4 flex items-center gap-2">
                  <Bed className="w-6 h-6 text-primary" /> Stay Options
                </h2>
                <ul className="space-y-2">
                  {destination.stay_types.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" /> {item}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {destination.nearby_places.length > 0 && (
              <section>
                <h2 className="text-2xl font-heading font-bold mb-6">Explore Nearby</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {destination.nearby_places.map((place) => (
                    <Link 
                      key={place.id} 
                      to={`/destinations/${place.id}`}
                      className="p-4 rounded-xl border border-border bg-card hover:border-primary hover:shadow-md transition-all text-center font-medium"
                    >
                      {place.name}
                    </Link>
                  ))}
                </div>
              </section>
            )}

            <section className="pt-8 border-t border-border">
              <BookingForm destinationName={destination.name} />
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="p-6 rounded-2xl bg-card border border-border shadow-sm">
              <h3 className="text-xl font-heading font-bold mb-6">Quick Facts</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Calendar className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Best Time to Visit</p>
                    <p className="text-muted-foreground text-sm">{destination.best_time.join(', ')}</p>
                  </div>
                </div>
                
                {destination.avoid_time.length > 0 && (
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                    <div>
                      <p className="font-medium text-sm">Avoid Visiting</p>
                      <p className="text-muted-foreground text-sm">{destination.avoid_time.join(', ')}</p>
                    </div>
                  </div>
                )}

                <div className="flex items-start gap-3">
                  <Plane className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Nearest Airport</p>
                    <p className="text-muted-foreground text-sm">{destination.nearest_airport}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Train className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Nearest Railway</p>
                    <p className="text-muted-foreground text-sm">{destination.nearest_railway}</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Car className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <div>
                    <p className="font-medium text-sm">Road Access</p>
                    <p className="text-muted-foreground text-sm">{destination.road_access}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-primary/5 border border-primary/20">
              <h3 className="text-xl font-heading font-bold mb-4 text-primary-dark dark:text-primary">Travel Tips</h3>
              <ul className="space-y-3">
                {destination.travel_tips.map((tip, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Info className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>

            {destination.permits_required.length > 0 && (
              <div className="p-6 rounded-2xl bg-secondary/10 border border-secondary/20">
                <h3 className="text-xl font-heading font-bold mb-4 text-secondary">Permits Required</h3>
                <ul className="space-y-2">
                  {destination.permits_required.map((permit, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 text-secondary" />
                      {permit}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
