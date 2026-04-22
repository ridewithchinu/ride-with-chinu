import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Moon, Sun, Menu, X, MapPin, Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';

export function Layout() {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    setIsMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Packing List', path: '/packing' },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="sticky top-0 z-50 w-full glass shadow-sm">
        <div className="container mx-auto px-4 h-16 md:h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-primary font-artistic text-2xl md:text-3xl tracking-wide group transition-transform hover:scale-105 active:scale-95">
            <div className="p-1.5 rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
              <MapPin className="w-6 h-6 md:w-7 md:h-7" />
            </div>
            <span>RideWithChinu</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={cn(
                  "relative text-sm font-semibold transition-colors hover:text-primary py-2",
                  location.pathname === link.path ? "text-primary" : "text-muted-foreground"
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </Link>
            ))}
            <a
              href="https://g.page/r/CUZNZh28S96XEBI/review"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 rounded-full bg-secondary/10 text-secondary-foreground hover:bg-secondary/20 transition-all font-semibold text-xs flex items-center gap-1.5 shadow-sm active:scale-95 border border-secondary/20"
            >
              <Star className="w-3.5 h-3.5 fill-current" />
              Write Review
            </a>
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </nav>

          {/* Mobile Menu Toggle */}
          <div className="flex items-center gap-4 md:hidden">
            <button
              onClick={() => setIsDark(!isDark)}
              className="p-2 rounded-full hover:bg-muted transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md hover:bg-muted transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Nav */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="md:hidden border-t border-border bg-background overflow-hidden"
            >
              <div className="flex flex-col px-4 py-4 gap-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={cn(
                      "text-base font-medium transition-colors hover:text-primary",
                      location.pathname === link.path ? "text-primary" : "text-muted-foreground"
                    )}
                  >
                    {link.name}
                  </Link>
                ))}
                <a
                  href="https://g.page/r/CUZNZh28S96XEBI/review"
                  target="_blank"
                  rel="noreferrer"
                  className="text-base font-medium transition-colors text-muted-foreground hover:text-primary flex items-center gap-2"
                >
                  <Star className="w-5 h-5" />
                  Reviews
                </a>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="bg-card border-t border-border py-12 mt-auto">
        <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 text-primary font-artistic text-2xl tracking-wide mb-4">
              <MapPin className="w-6 h-6" />
              <span>RideWithChinu</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Explore the majestic beauty of Uttarakhand. From spiritual retreats to thrilling adventures, find your perfect journey.
            </p>
          </div>
          <div>
            <h3 className="font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/destinations" className="hover:text-primary transition-colors">All Destinations</Link></li>
              <li><Link to="/packing" className="hover:text-primary transition-colors">Packing Guide</Link></li>
              <li><Link to="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div id="contact">
            <h3 className="font-heading font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Rider with chinu</li>
              <li><a href="mailto:ridewithchinu@gmail.com" className="hover:text-primary transition-colors">ridewithchinu@gmail.com</a></li>
              <li><a href="https://wa.me/917818841169" target="_blank" rel="noreferrer" className="hover:text-primary transition-colors">+91 7818841169</a></li>
              <li>Uttarakhand, India</li>
            </ul>
            <div className="mt-6">
              <a 
                href="https://g.page/r/CUZNZh28S96XEBI/review" 
                target="_blank" 
                rel="noreferrer" 
                className="group relative inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-full hover:shadow-xl transition-all font-bold text-sm overflow-hidden active:scale-95"
              >
                <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <Star className="w-5 h-5 fill-current relative z-10" />
                <span className="relative z-10">Review Us on Google</span>
              </a>
            </div>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} RideWithChinu. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
