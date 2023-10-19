import React, { useEffect, useRef } from 'react';

interface LazyLoadYoutubeProps {
  videoId: string;
}

const LazyLoadYoutube: React.FC<LazyLoadYoutubeProps> = ({ videoId }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const iframe = document.createElement('iframe');
          iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
          iframe.title="narmdeshwar shivling video";
          iframe.allow =
            'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
          iframe.allowFullscreen = true;

          if (containerRef.current) {
            containerRef.current.appendChild(iframe);
          }
          observer.disconnect();
        }
      });
    });

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [videoId]);

  return <div ref={containerRef} ></div>;
};

export default LazyLoadYoutube;
