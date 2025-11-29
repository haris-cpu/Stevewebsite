import React from 'react';
import { useState } from 'react';
import './Strategy.css';

const Strategy = () => {
  const [isHover, setIsHover] = useState(false);
  const steps = [
    {
      image: '/O11.png',
      title: 'Your WHY, vision & purpose architecture',
    },
    {
      image: '/message.png',
      title: 'Your category message & strategic narrative',
    },
    {
      image: '/o33.png',
      title: 'A polished product ecosystem',
    },
    {
      image: '/o44.png',
      title: 'A demand-creation roadmap',
    },
    {
      image: '/o66.png',
      title: 'A customized 90-day execution plan',
    },
    {
      image: '/o77.png',
      title: 'Leadership alignment and confidence',
    },
  ];

  return (
    <div className="strategy-container">
      <div className="strategy-wrapper">
        {/* Header Section */}
        <div className="strategy-header">
          <h1 className="strategy-title">
            The Reignite Strategy{' '}
            <span className="highlight">
              Accelerator<span className="tm">™</span>
            </span>
          </h1>
          <p className="strategy-subtitle">
            A 6-week sprint designed to reignite clarity, purpose, and strategic
            momentum. You get:
          </p>
        </div>

        {/* Steps Section */}
        <div className="strategy-wrapper">
          <div className="steps-container">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                {/* Step Card */}
                <div className="step-card">
                  {/* Image Circle */}
                  <div className="step-icon">
                    <img
                      src={step.image}
                      alt={step.title}
                      className="step-image"
                    />
                  </div>

                  {/* Title */}
                  <p className="step-title">{step.title}</p>
                </div>

                {/* Dashed Line Connector */}
                {index < steps.length - 1 && <div className="connector-line" />}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Subtitle */}
        <p className="strategy-description mt-5">
          A business that grows with purpose, clarity, and predictable momentum.
        </p>

        {/* CTA Buttons */}
        <div className="cta-buttons mt-5">
          <button className="btn btn-primary arrow-btn">
            Apply for the Accelerator
            <img
              src="/errow2.png"
              alt="arrow"
              className="arrow-move"
              style={{ width: '15.53px', height: '10px', objectFit: 'contain' }} // no transform here
            />
          </button>

          <button
            className="btn px-4 py-2"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
            style={{
              borderRadius: '3px',
              maxWidth: '402px',
              minHeight: '54px',
              opacity: '1',
              color: isHover ? '#000' : '#ffffff',
              fontSize: '16px',
              fontFamily: 'Montserrat, sans-serif',
              backgroundColor: isHover ? '#ffffff' : '#DA7A32',
              fontWeight: '600',

              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              justifyContent: 'center',
            }}
          >
            Take the 3-Minute Momentum Score™
            <img
              src="/errow1.png"
              alt="arrow"
              style={{
                width: '18.53px',
                height: '10px',
                objectFit: 'contain',

                // ⭐ This makes the image BLACK on hover
                filter: isHover ? 'brightness(0)' : 'brightness(100)',
              }}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Strategy;
