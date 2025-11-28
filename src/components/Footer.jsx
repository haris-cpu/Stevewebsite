import React from 'react';
import { useState } from 'react';
import './Footer.css';
const Footer = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="footer-section">
      {/* CTA Section */}
      <div className="cta-container">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8 col-lg-8 mb-4 mb-md-0">
              <h2 className="cta-title">
                Ready to Build{' '}
                <span className="highlight-orange">Momentum</span>?
              </h2>
              <p className="cta-subtitle">
                Start with the 3-Minute Momentum Score™
              </p>
              <p className="cta-description">
                Get your personalized report showing where your business is
                stuck
                <br className="d-none d-md-block" />— and how to unlock momentum
                fast.
              </p>
            </div>
            <div className="col-md-4 col-lg-4 text-center text-md-end">
              <button
                className="btn mt-4 px-4 py-2"
                onMouseEnter={() => setIsHover(true)}
                onMouseLeave={() => setIsHover(false)}
                style={{
                  borderRadius: '3px',
                  maxWidth: '402px',
                  width: '100%',
                  minHeight: '54px',
                  opacity: '1',
                  color: isHover ? '#000' : '#ffffff', // text change on hover
                  fontSize: '16px',
                  fontFamily: 'Montserrat, sans-serif',
                  backgroundColor: isHover ? '#ffffff' : '#DA7A32', // 🎉 hover bg white
                  fontWeight: '600',
                  border: '1px solid #DA7A32',
                }}
              >
                Take the 3-Minute Momentum Score™ →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-md-6 text-center text-md-start mb-3 mb-md-0">
              <h2 className="logo m-0">
                RE<span className="orange-dot">i</span>GN
                <span className="orange-dot">i</span>TE
              </h2>
            </div>
            <div className="col-12 col-md-6 text-center text-md-end">
              <a href="#" className="social-icon" aria-label="LinkedIn">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
