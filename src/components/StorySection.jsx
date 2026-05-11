import React, { useEffect, useRef, useState } from 'react';

const StorySection = ({ data, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const panelRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          // Optional: hide when scrolled past, but usually scrollytelling keeps it once seen
          // setIsVisible(false);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.3,
      }
    );

    if (panelRef.current) {
      observer.observe(panelRef.current);
    }

    return () => {
      if (panelRef.current) {
        observer.unobserve(panelRef.current);
      }
    };
  }, []);

  return (
    <section className="story-section">
      <div className="story-background">
        <img src={data.image} alt={data.imageAlt} />
      </div>
      <div className="story-content">
        <div 
          ref={panelRef} 
          className={`story-panel ${isVisible ? 'visible' : ''}`}
        >
          <h2>{data.title}</h2>
          <p>{data.content}</p>
          {data.subContent && <p>{data.subContent}</p>}
        </div>
      </div>
    </section>
  );
};

export default StorySection;
