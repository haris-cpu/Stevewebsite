import React from 'react';
import './Quote.css';

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        'In 30 days, we rebuilt our message and unlocked a new revenue stream.',
    },
    {
      quote:
        'Steven helped articulate our purpose and turn it into a commercially powerful strategy',
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

  return (
    <div className="testimonials-section">
      <div className="container py-5">
        <h2 className="testimonials-title text-center">
          What Others Are <span className="highlight-orange">Saying</span>
        </h2>

        {/* Testimonials Cards */}
        <div className="row mt-5 g-4">
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

        {/* Client Logos */}
        <div className="logos-container mt-5">
          {logos.map((logo, index) => (
            <div className="logo-item" key={index}>
              <img src={logo.image} alt={logo.name} className="logo-img" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
