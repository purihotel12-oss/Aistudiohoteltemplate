import React, { useEffect } from 'react';
import { PageSEOMetadata, buildPageSEO } from '../lib/seo';

interface SEOHeadProps {
  metadata?: PageSEOMetadata;
  jsonLd?: object | object[];
}

export const SEOHead: React.FC<SEOHeadProps> = ({ metadata = {}, jsonLd }) => {
  const seo = buildPageSEO(metadata);

  useEffect(() => {
    // Update document title
    document.title = seo.title;

    // Update meta tags dynamically
    const updateMeta = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (isProperty) {
          el.setAttribute('property', name);
        } else {
          el.setAttribute('name', name);
        }
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    updateMeta('description', seo.description);
    updateMeta('robots', seo.robots);
    updateMeta('og:title', seo.title, true);
    updateMeta('og:description', seo.description, true);
    updateMeta('og:url', seo.canonicalUrl, true);
    updateMeta('og:image', seo.ogImage, true);
    updateMeta('og:type', seo.ogType, true);
    updateMeta('og:site_name', seo.siteName, true);
    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', seo.title);
    updateMeta('twitter:description', seo.description);
    updateMeta('twitter:image', seo.ogImage);

    // Update canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', seo.canonicalUrl);

    // Update JSON-LD
    const oldScript = document.getElementById('json-ld-data');
    if (oldScript) {
      oldScript.remove();
    }

    if (jsonLd) {
      const script = document.createElement('script');
      script.id = 'json-ld-data';
      script.type = 'application/ld+json';
      script.innerHTML = JSON.stringify(jsonLd);
      document.head.appendChild(script);
    }
  }, [seo.title, seo.description, seo.canonicalUrl, seo.ogImage, seo.ogType, seo.robots, seo.siteName, jsonLd]);

  return null;
};
