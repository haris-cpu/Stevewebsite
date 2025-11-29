import './Navbar.css';
import { useState } from 'react';

export default function Reignite() {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="reignite-section d-flex  justify-content-center text-white">
      <a href="#target-section" className="decorative-arrow-link">
        <img
          src="/HeroS.png"
          alt="Decorative Arrow"
          className="decorative-arrow"
        />
      </a>

      <div className="overlay"></div>
      <div className="container position-relative text-center">
        <nav className="d-flex justify-content-between align-items-center py-3">
          <img
            src="/hero logo.png"
            alt="Reignite Logo"
            className="nav-logo m-0 mt-3"
            style={{
              width: '191.84px',
              height: 'auto',
              objectFit: 'contain',
            }}
          />

          <button
            className="btn btn-light btn-sm px-3 mt-3 request-btn-mobile request-btn-top col-12 col-md-4 col-lg-3"
            style={{
              borderRadius: '3px',
              maxWidth: '288px',
              width: '100%',
              minHeight: '54px',
              opacity: '1',
              fontWeight: '500',
              fontSize: '16px',
              fontFamily: 'Montserrat, sans-serif',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '8px', // space between text and image
            }}
          >
            Request to Work With Us
            <img
              src="/errow2.png" // image path
              alt="arrow"
              style={{ width: '15.53px', height: '10px', objectFit: 'contain' }}
            />
          </button>
        </nav>

        <div className="row justify-content-center mt-5 pt-5">
          <div className="col-lg-8 col-md-10 text-center">
            <h1 className="fw-bold main-heading">
              We <span className="highlight">Help</span> Purpose-Driven Founders
              Build Momentum, Stand Out, and Scale with Confidence.
            </h1>
            <p className="mt-3 sub-text">
              If your business is stable but stuck, we give you the clarity,
              message, and strategy to break through.
            </p>
            <div className="d-flex justify-content-center mt-4">
              <button
                className="btn px-4 py-2 primary-cta"
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

            {/* Duplicate request button moved to its own row so it'll always appear below CTA on small devices */}
            <div className="d-flex justify-content-center mt-3 mobile-request-row">
              <button
                className="btn btn-light request-btn-mobile request-btn-duplicate"
                style={{
                  borderRadius: '3px',
                  maxWidth: '402px',
                  width: '100%',
                  minHeight: '54px',
                  opacity: '1',
                  fontWeight: '500',
                  fontSize: '16px',
                  fontFamily: 'Montserrat, sans-serif',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                }}
              >
                Request to Work With Us
                <img
                  src="/errow2.png"
                  alt="arrow"
                  style={{
                    width: '15.53px',
                    height: '10px',
                    objectFit: 'contain',
                  }}
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
