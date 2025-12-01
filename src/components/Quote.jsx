import React, { useRef, useState, useEffect } from 'react';
import './Quote.css';

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        'In 30 days, we rebuilt our message and unlocked a new revenue stream.',
    },
    {
      quote:
        'Steven helped articulate our purpose turn commercially powerful strategy.',
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

  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const logosRef = useRef(null);

  // Handle scroll to update active dot
  const handleScroll = () => {
    if (!trackRef.current) return;
    const scrollLeft = trackRef.current.scrollLeft;
    const cardWidth = trackRef.current.offsetWidth;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(index);
  };

  // Scroll to specific card when dot is clicked
  const scrollToCard = (index) => {
    if (!trackRef.current) return;
    const cardWidth = trackRef.current.offsetWidth;
    trackRef.current.scrollTo({
      left: cardWidth * index,
      behavior: 'smooth',
    });
    setActiveIndex(index);
  };

  // Auto-scroll logos on small devices
  useEffect(() => {
    const container = logosRef.current;
    if (!container) return;

    let scrollAmount = 0;

    const scrollLogos = () => {
      if (window.innerWidth <= 786) {
        scrollAmount += 1; // pixels per frame, adjust speed
        if (scrollAmount >= container.scrollWidth - container.clientWidth) {
          scrollAmount = 0;
        }
        container.scrollLeft = scrollAmount;
      }
      requestAnimationFrame(scrollLogos);
    };

    requestAnimationFrame(scrollLogos);
  }, []);

  return (
    <div className="testimonials-section">
      <div className="container">
        <h2 className="testimonials-title text-center mb-5">
          What Others Are <span className="highlight-orange">Saying</span>
        </h2>

        {/* TESTIMONIAL CARDS */}
        <div
          className="row testimonials-track"
          ref={trackRef}
          onScroll={handleScroll}
        >
          {testimonials.map((testimonial, index) => (
            <div className="col-md-4" key={index}>
              <div className="testimonial-card">
                <div className="quote-icon">
                  <img src="/arro1.png" alt="quote" />
                </div>
                <p className="testimonial-text">{testimonial.quote}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CAROUSEL DOTS */}
        <div className="carousel-dots">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`dot ${activeIndex === index ? 'active' : ''}`}
              onClick={() => scrollToCard(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>

        {/* LOGO ROW */}
        <div className="logos-wrapper">
          <div className="logos-container" ref={logosRef}>
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
    </div>
  );
};

export default Testimonials;
