import React, { useState, useRef, useCallback, useEffect } from 'react';
import { motion, AnimatePresence, useMotionValue, animate } from 'motion/react';
import { X, ChevronLeft, ChevronRight, MapPin, Clock, Route, Bed, Calendar, ArrowRight, Mountain, Star, Navigation } from 'lucide-react';
import { yatraData, Yatra, YatraNode, DayStop } from '@/data/yatra';
import { LazyImage } from '@/components/ui/LazyImage';
import { cn } from '@/lib/utils';

// ─── Toggle ──────────────────────────────────────────────────────────────────

function YatraToggle({
  active,
  onChange,
}: {
  active: 'char-dham' | 'do-dham';
  onChange: (v: 'char-dham' | 'do-dham') => void;
}) {
  return (
    <div className="relative flex items-center gap-1 p-1 rounded-full bg-muted/80 backdrop-blur-sm border border-border">
      {(['char-dham', 'do-dham'] as const).map((type) => {
        const label = type === 'char-dham' ? 'Char Dham' : 'Do Dham';
        const isActive = active === type;
        return (
          <button
            key={type}
            onClick={() => onChange(type)}
            className={cn(
              'relative z-10 px-5 py-2 rounded-full text-sm font-bold transition-all duration-300',
              isActive ? 'text-primary-foreground' : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {isActive && (
              <motion.div
                layoutId="yatra-toggle-bg"
                className="absolute inset-0 bg-primary rounded-full"
                transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{label}</span>
          </button>
        );
      })}
    </div>
  );
}

// ─── Sub-place Badge ─────────────────────────────────────────────────────────

function SubPlaceBadge({ label }: { label: string }) {
  return (
    <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary text-xs font-medium border border-primary/20">
      <MapPin className="w-3 h-3 shrink-0" />
      {label}
    </span>
  );
}

// ─── Route Breadcrumb ─────────────────────────────────────────────────────────

function RouteBreadcrumb({ stops }: { stops: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-1.5">
      {stops.map((stop, i) => (
        <React.Fragment key={i}>
          <span className="text-xs font-medium text-foreground/80 bg-muted px-2.5 py-1 rounded-full">
            {stop}
          </span>
          {i < stops.length - 1 && (
            <ArrowRight className="w-3 h-3 text-muted-foreground shrink-0" />
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

// ─── Day Timeline (Do Dham) ──────────────────────────────────────────────────

function DayTimeline({ days }: { days: DayStop[] }) {
  const [openDay, setOpenDay] = useState<number | null>(null);
  return (
    <div className="space-y-3">
      {days.map((d) => {
        const isOpen = openDay === d.day;
        return (
          <div key={d.day} className="border border-border rounded-xl overflow-hidden">
            <button
              onClick={() => setOpenDay(isOpen ? null : d.day)}
              className="w-full flex items-center gap-4 p-4 bg-muted/40 hover:bg-muted/70 transition-colors text-left"
            >
              {/* Day number badge */}
              <span className="flex-shrink-0 w-9 h-9 rounded-full bg-primary text-white font-bold text-sm flex items-center justify-center">
                {d.day}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm leading-tight truncate">{d.title}</p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  {d.start} → {d.end} · ~{d.distanceKmApprox} km
                </p>
              </div>
              <motion.div animate={{ rotate: isOpen ? 90 : 0 }} className="text-muted-foreground">
                <ChevronRight className="w-4 h-4" />
              </motion.div>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-4 space-y-4 border-t border-border bg-card">
                    {/* Stops */}
                    <div>
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
                        Stops
                      </p>
                      <div className="space-y-1.5">
                        {d.stops.map((s, i) => (
                          <div key={i} className="flex items-start gap-2 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                            {s}
                          </div>
                        ))}
                      </div>
                    </div>
                    {/* Night Stay */}
                    <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-secondary/10 border border-secondary/20">
                      <Bed className="w-4 h-4 text-secondary-foreground" />
                      <span className="text-xs font-medium">
                        <span className="text-muted-foreground">Night Stay: </span>
                        {d.nightStay}
                      </span>
                    </div>
                    {/* Notes */}
                    {d.notes.length > 0 && (
                      <div className="space-y-1">
                        {d.notes.map((n, i) => (
                          <p key={i} className="text-xs text-muted-foreground flex gap-1.5">
                            <Star className="w-3 h-3 text-secondary shrink-0 mt-0.5" />
                            {n}
                          </p>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}

// ─── Detail Modal ─────────────────────────────────────────────────────────────

function YatraDetailModal({
  node,
  yatra,
  onClose,
}: {
  node: YatraNode;
  yatra: Yatra;
  onClose: () => void;
}) {
  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = ''; };
  }, []);

  const isCharDham = yatra.type === 'char-dham';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[200] flex items-end md:items-center justify-center p-0 md:p-6"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Panel */}
      <motion.div
        initial={{ y: 80, scale: 0.96, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 80, scale: 0.96, opacity: 0 }}
        transition={{ type: 'spring', damping: 26, stiffness: 300 }}
        onClick={(e) => e.stopPropagation()}
        className="relative z-10 w-full md:max-w-2xl max-h-[92vh] overflow-hidden rounded-t-3xl md:rounded-3xl bg-background shadow-2xl flex flex-col"
      >
        {/* Hero image */}
        <div className="relative h-52 md:h-64 shrink-0 overflow-hidden">
          <LazyImage
            src={node.image}
            alt={node.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-black/30 to-transparent" />
          {/* Close */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 backdrop-blur text-white hover:bg-black/70 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          {/* Title overlay */}
          <div className="absolute bottom-4 left-5">
            <p className="text-white/70 text-xs font-semibold uppercase tracking-widest mb-1">
              {yatra.type === 'char-dham' ? 'Char Dham Yatra' : 'Do Dham Yatra'}
            </p>
            <h2 className="text-white text-3xl font-heading font-extrabold leading-tight">
              {node.name}
            </h2>
            {node.district && (
              <p className="text-white/80 text-sm mt-0.5 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5" /> {node.district} District
              </p>
            )}
          </div>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto flex-1 p-5 space-y-6">
          {/* Summary */}
          <p className="text-muted-foreground text-sm leading-relaxed">{node.summary}</p>

          {/* Best Time */}
          {node.approach?.bestTime && (
            <div className="flex items-center gap-2 flex-wrap">
              <Clock className="w-4 h-4 text-primary shrink-0 transition-colors" />
              <span className="text-xs text-foreground font-bold uppercase tracking-wider">Best Time:</span>
              <div className="flex flex-wrap gap-1.5">
                {node.approach.bestTime.map((t) => (
                  <span key={t} className="text-[11px] px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-bold">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Base Town */}
          {node.baseTown && (
            <div className="flex items-center gap-2">
              <Navigation className="w-4 h-4 text-primary shrink-0" />
              <span className="text-xs text-foreground font-bold uppercase tracking-wider">Base Town:</span>
              <span className="text-sm font-bold text-primary">{node.baseTown}</span>
            </div>
          )}

          {isCharDham && node.approach && (
            <>
              {/* Trek info */}
              {node.approach.trekDistanceKm && (
                <div className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20 shadow-sm">
                  <div className="p-2 rounded-lg bg-primary text-white">
                    <Mountain className="w-4 h-4 shrink-0" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-black text-primary uppercase tracking-tight">
                      {node.approach.trekDistanceKm} km trek
                    </span>
                    {node.approach.trekNotes && (
                      <span className="text-xs text-muted-foreground font-medium">{node.approach.trekNotes}</span>
                    )}
                  </div>
                </div>
              )}
              {/* Trek modes */}
              {node.approach.trekModes && (
                <div>
                  <p className="text-[10px] font-black text-foreground/50 uppercase tracking-[0.2em] mb-2 leading-none">
                    Trek Options
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {node.approach.trekModes.map((m) => (
                      <span key={m} className="text-[11px] px-3 py-1.5 rounded-lg bg-muted text-muted-foreground font-bold shadow-sm border border-border/50">{m}</span>
                    ))}
                  </div>
                </div>
              )}
              {/* Route */}
              <div>
                <p className="text-[10px] font-black text-foreground/50 uppercase tracking-[0.2em] mb-4 flex items-center gap-2 leading-none">
                  <Route className="w-3 h-3" /> Pilgrimage Route
                </p>
                <RouteBreadcrumb stops={node.approach.route} />
              </div>
            </>
          )}

          {/* Sub-places */}
          {node.subPlaces && node.subPlaces.length > 0 && (
            <div>
              <p className="text-[10px] font-black text-foreground/50 uppercase tracking-[0.2em] mb-4 leading-none">
                Sacred Landmarks
              </p>
              <div className="flex flex-wrap gap-2">
                {node.subPlaces.map((p) => (
                  <SubPlaceBadge key={p} label={p} />
                ))}
              </div>
            </div>
          )}

          {/* Stay Options */}
          {node.stayOptions && node.stayOptions.length > 0 && (
            <div>
              <p className="text-[10px] font-black text-foreground/50 uppercase tracking-[0.2em] mb-4 leading-none">
                Accommodation
              </p>
              <div className="grid grid-cols-1 gap-2">
                {node.stayOptions.map((s) => (
                  <div key={s} className="flex items-start gap-3 p-3 rounded-lg bg-muted/30 border border-border/50 text-sm font-medium text-foreground/90">
                    <Bed className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                    {s}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Do Dham — Day Timeline */}
          {!isCharDham && yatra.days && (
            <div>
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> {yatra.idealDurationDays}-Day Itinerary
              </p>
              <DayTimeline days={yatra.days} />
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Carousel Slide ───────────────────────────────────────────────────────────

function CarouselSlide({
  node,
  index,
  current,
  onClick,
}: {
  node: YatraNode;
  index: number;
  current: number;
  onClick: () => void;
}) {
  const isActive = index === current;
  const isPrev = index === current - 1;
  const isNext = index === current + 1;

  let xOffset = 0;
  let scale = 0.85;
  let zIndex = 0;
  let opacity = 0.5;

  if (isActive) { xOffset = 0; scale = 1; zIndex = 10; opacity = 1; }
  else if (isPrev) { xOffset = -55; scale = 0.88; zIndex = 5; opacity = 0.75; }
  else if (isNext) { xOffset = 55; scale = 0.88; zIndex = 5; opacity = 0.75; }

  return (
    <motion.div
      animate={{ x: `${xOffset}%`, scale, opacity, zIndex }}
      transition={{ type: 'spring', stiffness: 280, damping: 28 }}
      className="absolute inset-0 w-full cursor-pointer"
      onClick={isActive ? onClick : undefined}
      style={{ pointerEvents: isActive ? 'auto' : 'none' }}
    >
      <div className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-2xl">
        <LazyImage
          src={node.image}
          alt={node.name}
          className="w-full h-full object-cover"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Content */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          {/* Tag */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 10 }}
            className="flex flex-wrap gap-2 mb-3"
          >
            {node.type?.slice(0, 2).map((t) => (
              <span
                key={t}
                className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-white/15 backdrop-blur border border-white/25 text-white"
              >
                {t}
              </span>
            ))}
          </motion.div>

          <h3 className="text-white font-heading font-extrabold text-3xl md:text-4xl mb-2 leading-tight">
            {node.name}
          </h3>

          <motion.p
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 8 }}
            className="text-white/80 text-sm md:text-base max-w-lg mb-4 line-clamp-2"
          >
            {node.summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: isActive ? 1 : 0, y: isActive ? 0 : 8 }}
          >
            <button
              onClick={onClick}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary hover:bg-primary/90 text-white font-bold text-sm transition-all hover:shadow-[0_0_20px_rgba(13,148,136,0.5)] active:scale-95"
            >
              Explore <ArrowRight className="w-4 h-4" />
            </button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

// ─── Carousel ─────────────────────────────────────────────────────────────────

function YatraCarousel({
  yatra,
  onNodeClick,
}: {
  yatra: Yatra;
  onNodeClick: (node: YatraNode) => void;
}) {
  const [current, setCurrent] = useState(0);
  const nodes = yatra.mainNodes;

  const goTo = useCallback(
    (idx: number) => setCurrent(Math.max(0, Math.min(idx, nodes.length - 1))),
    [nodes.length]
  );

  // Reset when yatra changes
  useEffect(() => setCurrent(0), [yatra.id]);

  // Touch/drag support
  const dragStart = useRef<number | null>(null);

  return (
    <div className="relative">
      {/* Slide area */}
      <div
        className="relative h-[420px] md:h-[500px] select-none"
        onPointerDown={(e) => { dragStart.current = e.clientX; }}
        onPointerUp={(e) => {
          if (dragStart.current !== null) {
            const delta = dragStart.current - e.clientX;
            if (delta > 50) goTo(current + 1);
            else if (delta < -50) goTo(current - 1);
            dragStart.current = null;
          }
        }}
      >
        {nodes.map((node, i) => (
          <CarouselSlide
            key={node.id}
            node={node}
            index={i}
            current={current}
            onClick={() => onNodeClick(node)}
          />
        ))}
      </div>

      {/* Dots + arrows */}
      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={() => goTo(current - 1)}
          disabled={current === 0}
          className="p-2.5 rounded-full border border-border hover:bg-muted disabled:opacity-30 transition-all"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-2">
          {nodes.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={cn(
                'rounded-full transition-all duration-300',
                i === current
                  ? 'w-6 h-2.5 bg-primary'
                  : 'w-2.5 h-2.5 bg-muted-foreground/30 hover:bg-muted-foreground/60'
              )}
            />
          ))}
        </div>

        <button
          onClick={() => goTo(current + 1)}
          disabled={current === nodes.length - 1}
          className="p-2.5 rounded-full border border-border hover:bg-muted disabled:opacity-30 transition-all"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

// ─── Meta bar ────────────────────────────────────────────────────────────────

function YatraMeta({ yatra }: { yatra: Yatra }) {
  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
      <div className="flex items-center gap-2 text-sm">
        <Clock className="w-4 h-4 text-primary" />
        <span>
          <span className="font-bold">{yatra.idealDurationDays} days</span>{' '}
          <span className="text-muted-foreground">ideal duration</span>
        </span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <Navigation className="w-4 h-4 text-primary" />
        <span>
          <span className="font-bold">{yatra.startCity}</span>
        </span>
      </div>
      <div className="flex items-center gap-2 text-sm">
        <Mountain className="w-4 h-4 text-primary" />
        <span className="text-muted-foreground">{yatra.mainNodes.length} sacred dhams</span>
      </div>
    </div>
  );
}

// ─── Main YatraSection ────────────────────────────────────────────────────────

export function YatraSection() {
  const [activeType, setActiveType] = useState<'char-dham' | 'do-dham'>('char-dham');
  const [selectedNode, setSelectedNode] = useState<YatraNode | null>(null);

  const activeYatra = yatraData.find((y) => y.type === activeType)!;

  return (
    <>
      {/* Section */}
      <section className="relative overflow-hidden">
        {/* Ambient gradient background */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-10"
          >
            {/* Pill badge */}
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-widest mb-5">
              <Star className="w-3.5 h-3.5 fill-current" /> Sacred Yatras
            </span>

            <h2 className="text-3xl md:text-4xl font-heading font-extrabold mb-3 tracking-tight">
              Himalayan Pilgrimage Circuits
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto text-sm md:text-base mb-8">
              Embark on a divine journey through the sacred shrines of Uttarakhand — choose your path.
            </p>

            {/* Toggle */}
            <div className="flex justify-center">
              <YatraToggle active={activeType} onChange={setActiveType} />
            </div>
          </motion.div>

          {/* Animated yatra switcher */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeYatra.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Yatra description */}
              <p className="text-center text-sm text-muted-foreground mb-6 max-w-2xl mx-auto">
                {activeYatra.description}
              </p>

              {/* Meta bar */}
              <div className="mb-8">
                <YatraMeta yatra={activeYatra} />
              </div>

              {/* Carousel */}
              <YatraCarousel yatra={activeYatra} onNodeClick={(node) => setSelectedNode(node)} />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedNode && (
          <YatraDetailModal
            node={selectedNode}
            yatra={activeYatra}
            onClose={() => setSelectedNode(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
