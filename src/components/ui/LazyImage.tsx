import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Image as ImageIcon } from 'lucide-react';

interface LazyImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  className?: string;
}

export function LazyImage({ src, alt, className, ...props }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  
  // Only append WebP query param for picsum.photos
  const isPicsum = src.includes('picsum.photos');
  const optimizedSrc = isPicsum 
    ? (src.includes('?') ? `${src}&fm=webp` : `${src}?fm=webp`)
    : src;

  useEffect(() => {
    const img = new Image();
    img.src = optimizedSrc;
    img.onload = () => setIsLoaded(true);
    img.onerror = () => setHasError(true);
  }, [optimizedSrc]);

  if (hasError) {
    // Generate a diverse but beautiful fallback based on simple hash of alt text or src
    const fallbacks = [
      '/images/destinations/archetype_nature.jpg',
      '/images/destinations/archetype_village.jpg', 
      '/images/destinations/archetype_spiritual.jpg',
      '/images/destinations/naukuchiatal.jpg'
    ];
    // Hash string to pick deterministic fallback
    const hash = src.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
    const fallbackSrc = fallbacks[hash % fallbacks.length];

    return (
      <div className={cn("relative overflow-hidden bg-muted", className)}>
        <img
          src={fallbackSrc}
          alt={`Fallback for ${alt}`}
          className={cn("w-full h-full object-cover transition-opacity duration-500 opacity-100", className)}
          {...props}
        />
      </div>
    );
  }

  return (
    <div className={cn("relative overflow-hidden bg-muted", className)}>
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-muted-foreground/20" />
      )}
      <img
        src={optimizedSrc}
        alt={alt}
        className={cn(
          "w-full h-full object-cover transition-opacity duration-500",
          isLoaded ? "opacity-100" : "opacity-0",
          className
        )}
        loading="lazy"
        {...props}
      />
    </div>
  );
}
