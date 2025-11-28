// CEO.jsx
import React from 'react';
import './About.css';

function CEO() {
  const logos = [
    { name: 'TSX', image: '/task.png' },
    { name: 'KPMG', image: '/task2.png' },
    { name: 'Metro', image: '/task3.png' },
    { name: 'Stradigia', image: '/task4.png' },
    { name: 'Salesforce', image: '/task5.png' },
    { name: 'YUM', image: '/task7.png' },
  ];

  return (
    <div className="ceo-section">
      <div className="ceo-container">
        <div className="ceo-row">
          {/* Left Column - Image */}
          <div className="ceo-col ceo-left">
            <div className="ceo-image-wrapper">
              <img
                src="/CEO.png"
                alt="Steven Tshakatumba"
                className="ceo-image"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="ceo-col ceo-right">
            <div className="ceo-content-wrapper">
              <h1 className="ceo-main-title">
                About <span className="ceo-highlight">Steven Tshakatumba</span>
              </h1>

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
                  Steven's <span className="ceo-highlight">WHY:</span>
                </h2>
                <p className="ceo-why-text">
                  Steven believes that businesses can be used as a force for
                  good to help more people live inspiring lives. He's made it
                  his mission to empower people to do what inspires them.
                </p>
              </div>

              {/* Logo Section */}
              <div className="logos-container">
                {logos.map((logo, index) => (
                  <div className="logo-item" key={index}>
                    <img
                      src={logo.image}
                      alt={logo.name}
                      className="logo-img"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CEO;
