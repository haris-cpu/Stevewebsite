import React, { useEffect, useRef, useState } from 'react';
import './Quote.css';

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        'In 30 days, we rebuilt our message and unlocked a new revenue stream.',
    },
    {
      quote:
        'Steven helped articulate our purpose and turn it into a commercially powerful ',
    },
    {
      quote:
        'Our team finally aligned around a clear vision — and the energy changed instantly.',
    },
  ];

  const logos = [
    { name: 'TSX', image: '/task.png' },
    { name: 'KPMG', image: '/task2.png' },
    { name: 'Metro', image: '/task3.png' },
    { name: 'Stradigia', image: '/task4.png' },
    { name: 'Salesforce', image: '/task5.png' },
    { name: 'YUM', image: '/task7.png' },
  ];

  // carousel refs/state for small devices
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    let raf = 0;
    const updateActive = () => {
      const cards = el.querySelectorAll('.testimonial-card');
      if (!cards.length) return;
      const scrollLeft = el.scrollLeft;
      let closest = 0;
      let minDist = Infinity;
      cards.forEach((card, i) => {
        const dist = Math.abs(card.offsetLeft - scrollLeft);
        if (dist < minDist) {
          minDist = dist;
          closest = i;
        }
      });
      setActiveIndex(closest);
    };

    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(updateActive);
    };

    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', updateActive);
    updateActive();

    return () => {
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', updateActive);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const scrollToIndex = (i) => {
    const el = trackRef.current;
    if (!el) return;
    const cards = el.querySelectorAll('.testimonial-card');
    const card = cards[i];
    if (!card) return;
    el.scrollTo({ left: card.offsetLeft, behavior: 'smooth' });
  };

  return (
    <div className="testimonials-section">
      <div className="container py-5">
        <h2 className="testimonials-title text-center">
          What Others Are <span className="highlight-orange">Saying</span>
        </h2>

        {/* Testimonials Cards - trackRef used for mobile carousel */}
        <div className="row mt-5 g-4 testimonials-track" ref={trackRef}>
          {testimonials.map((item, index) => (
            <div className="col-md-4" key={index}>
              <div className="testimonial-card">
                <div className="quote-icon">
                  <img src="/arro1.png" alt="Quote Icon" />
                </div>

                <p className="testimonial-text">{item.quote}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Dots - visible only on small devices via CSS */}
        <div className="carousel-dots" aria-hidden={testimonials.length <= 1}>
          {testimonials.map((_, i) => (
            <button
              key={i}
              type="button"
              className={`dot ${activeIndex === i ? 'active' : ''}`}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        {/* Client Logos */}
        <div className="logos-container mt-5">
          {logos.map((logo, index) => (
            <div className="logo-item" key={index}>
              <img
                src={logo.image}
                alt={logo.name}
                className={`logo-img logo-img--${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
