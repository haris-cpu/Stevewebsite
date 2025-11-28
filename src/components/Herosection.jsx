import React from 'react';
import './Herosection.css';

const Herosection = () => {
  return (
    <div className="container py-5 why-section">
      <h2 className="text-center fw-bold section-title">
        Why This <span className="highlight">Matters</span>
      </h2>

      <div className="row mt-5 align-items-center">
        {/* LEFT SIDE TEXT LIST */}
        <div className="col-md-6">
          <div className="left-items">
            <div className="item-box">Most founders don't fail they stall.</div>
            <div className="item-box">Messaging gets diluted.</div>
            <div className="item-box">
              The product ecosystem becomes unclear.
            </div>
            <div className="item-box">Growth slows.</div>
            <div className="item-box">The founder loses momentum.</div>
            <div className="item-box">Momentum isn't luck.</div>
            <div className="item-box">
              It's built through clarity, purpose, and a strategy people
              instantly respond to.
            </div>

            <p className="mt-3 final-text">
              We help founders unlock that momentum – fast
            </p>
          </div>
        </div>

        {/* RIGHT SIDE TRIANGLE GRAPHIC */}
        <div className="col-md-6">
          <div className="triangle-container">
            {/* Top Label - CLARITY */}
            <div className="top-label">
              <img src="/Icon1.png" alt="Clarity" className="icon-image" />
              <div className="label-title">CLARITY</div>
              <div className="label-subtitle">
                Your WHY, Story,
                <br />
                And Message.
              </div>
            </div>

            {/* Triangle Shape */}
            <svg
              className="triangle-svg"
              viewBox="0 0 400 350"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon
                points="200,30 50,320 350,320"
                fill="none"
                stroke="#333"
                strokeWidth="2"
              />
            </svg>

            {/* Center Box - MOMENTUM */}
            <div className="momentum-box">
              <div className="momentum-title">MOMENTUM</div>
              <div className="momentum-subtitle">
                Predictable Growth,
                <br />
                Clarity, And Calm.
              </div>
            </div>

            {/* Bottom Left Label - DEMAND */}
            <div className="bottom-left-label">
              <img src="/icon2.png" alt="Demand" className="icon-image" />
              <div className="label-title">DEMAND</div>
              <div className="label-subtitle">
                Your Narrative &<br />
                The Category You
                <br />
                Own.
              </div>
            </div>

            {/* Bottom Right Label - PRODUCT */}
            <div className="bottom-right-label">
              <img src="/Icon3.png" alt="Product" className="icon-image " />
              <div className="label-title">PRODUCT</div>
              <div className="label-subtitle">
                Your Scalable
                <br />
                Ecosystem Of
                <br />
                Offers.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herosection;
