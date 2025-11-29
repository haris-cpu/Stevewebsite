// CEO.jsx
import React from 'react';
import './About.css';

function CEO() {
  const logos = [
    { name: 'TSX', image: '/n1.png' },
    { name: 'KPMG', image: '/n2.png' },
    { name: 'Metro', image: '/n4.png' },
    { name: 'Stradigia', image: '/n3.png' },
    { name: 'Salesforce', image: '/task5.png' },
    { name: 'YUM', image: '/task7.png' },
  ];

  return (
    <div className="ceo-section">
      <div className="ceo-container">
        <div className="ceo-row row">
          {/* Left Column - Image */}
          <div className="ceo-col ceo-left col-md-6 col-sm-12">
            <div className="ceo-image-wrapper">
              <img
                src="/CEO.png"
                alt="Steven Tshakatumba"
                className="ceo-image"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="ceo-col ceo-right col-md-6 col-sm-12">
            <div className="ceo-content-wrapper">
              <h1 className="ceo-main-title">
                About <span className="ceo-highlight">Steven Tshakatumba</span>
              </h1>

              {/* Decorative image below the title */}
              <div className="ceo-title-image-wrapper">
                <img
                  src="/eee.png"
                  alt="decorative"
                  className="ceo-title-image"
                />
              </div>

              <p className="ceo-description">
                Steven helps purpose-driven founders reignite clarity, purpose,
                and strategic momentum.
              </p>

              <p className="ceo-description">
                With more than 15 years in leadership, client experience, and
                AI-enabled strategy (VC/PE, Toronto Stock Exchange, financial
                services), Steven blends client strategies methodology with
                commercially powerful business design.
              </p>

              <p className="ceo-description">
                He simplifies complexity, unlocks founder confidence, and helps
                leaders build product ecosystems clients naturally want to buy.
              </p>

              <p className="ceo-description">
                He has supported founders, financial leaders, and
                high-performing teams across North America.
              </p>

              {/* Why Section */}
              <div className="ceo-why-box">
                <h2 className="ceo-why-title">
                  Steven's{' '}
                  <span className="ceo-highlight" style={{ fontSize: '23px' }}>
                    WHY:
                  </span>
                </h2>
                <p className="ceo-why-text">
                  Steven believes that businesses can be used as a force for
                  good to help more people live inspiring lives. He's made it
                  his mission to empower people to do what inspires them.
                </p>
              </div>

              {/* Logo section is moved below into its own centered row */}
            </div>
          </div>
        </div>

        {/* Logos placed in their own centered row */}
        <div className="ceo-logos-row">
          <div className="logos-container">
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
}

export default CEO;
