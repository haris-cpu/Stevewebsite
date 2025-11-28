import './Navbar.css';
import { useState } from 'react';

export default function Reignite() {
  const [isHover, setIsHover] = useState(false);
  return (
    <div className="reignite-section d-flex align-items-center justify-content-center text-white">
      <div className="overlay"></div>
      <div className="container position-relative text-center">
        <nav className="d-flex justify-content-between align-items-center py-3">
          <h2 className="logo m-0">
            RE<span className="orange-dot">i</span>GN
            <span className="orange-dot">i</span>TE
          </h2>

          <button
            className="btn btn-light btn-sm px-3  request-btn-mobile col-12 col-md-4 col-lg-3"
            style={{
              borderRadius: '3px',
              maxWidth: '288px',
              width: '100%',
              minHeight: '54px',
              opacity: '1',
              fontWeight: '500',
              fontSize: '16px',
              fontFamily: 'Montserrat, sans-serif',
            }}
          >
            Request to Work With Us →
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
                  border: '1px solid #DA7A32',
                }}
              >
                Take the 3-Minute Momentum Score™ →
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
