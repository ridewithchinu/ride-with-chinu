import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogType?: string;
  ogImage?: string;
  structuredData?: object;
}

export function SEO({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = 'https://ride-with-chinu.vercel.app/og-image.jpg',
  structuredData
}: SEOProps) {
  const location = useLocation();
  const baseTitle = "RideWithChinu";
  const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle;
  const fullCanonical = canonical || `https://ride-with-chinu.vercel.app${location.pathname}`;

  useEffect(() => {
    // Update Title
    document.title = fullTitle;

    // Update Meta Description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || "Explore the divine beauty of Uttarakhand with RideWithChinu. Expert-led Char Dham, Do Dham, and adventure yatras.");
    }

    // Update Canonical
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', fullCanonical);
    }

    // Update OG Tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', fullTitle);

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) ogDesc.setAttribute('content', description || "");

    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) ogUrl.setAttribute('content', fullCanonical);

    const ogTypeTag = document.querySelector('meta[property="og:type"]');
    if (ogTypeTag) ogTypeTag.setAttribute('content', ogType);

    const ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) ogImg.setAttribute('content', ogImage);

    // Structured Data (JSON-LD)
    const existingScript = document.getElementById('json-ld-seo');
    if (existingScript) {
      existingScript.remove();
    }

    if (structuredData) {
      const script = document.createElement('script');
      script.id = 'json-ld-seo';
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    return () => {
      // Cleanup script on unmount if needed, though usually handled by next page SEO
    };
  }, [fullTitle, description, fullCanonical, ogType, ogImage, structuredData]);

  return null;
}
