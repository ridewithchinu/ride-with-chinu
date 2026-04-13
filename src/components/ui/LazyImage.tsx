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
    return (
      <div className={cn("flex items-center justify-center bg-muted text-muted-foreground", className)}>
        <div className="flex flex-col items-center gap-2">
          <ImageIcon className="w-8 h-8 opacity-50" />
          <span className="text-xs text-center px-2">Failed to load image</span>
        </div>
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
