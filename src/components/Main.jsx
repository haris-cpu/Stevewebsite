import React from 'react';
import './Main.css';

const Main = () => {
  return (
    <>
      <div className="reignite-monthly-section">
        <h2 className="reignite-heading">
          This Month at <span className="reignite-highlight">Reignite</span>
        </h2>

        {/* Top 2 large cards */}
        <div className="reignite-grid">
          <div className="reignite-card reignite-card-large">
            <div
              className="reignite-card-image"
              style={{
                backgroundImage: "url('/Main1.png')",
              }}
            >
              <div className="reignite-card-overlay">
                <h3 className="reignite-card-title1">
                  WHY Discoveries delivered
                </h3>
              </div>
            </div>
          </div>

          <div className="reignite-card reignite-card-large">
            <div
              className="reignite-card-image"
              style={{
                backgroundImage: "url('/Main2.png')",
              }}
            >
              <div className="reignite-card-overlay">
                <h3 className="reignite-card-title1">
                  Strategy workshops for founders
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 3 small cards */}
        <div className="reignite-grid-bottom">
          <div className="reignite-card reignite-card-small">
            <div
              className="reignite-card-image"
              style={{
                backgroundImage: "url('/Main3.png')",
              }}
            >
              <div className="reignite-card-overlay">
                <h3 className="reignite-card-title">
                  Product ecosystem designed for a client
                </h3>
              </div>
            </div>
          </div>

          <div className="reignite-card reignite-card-small">
            <div
              className="reignite-card-image"
              style={{
                backgroundImage: "url('/Main4.png')",
              }}
            >
              <div className="reignite-card-overlay">
                <h3 className="reignite-card-title">
                  Speaking session in Toronto
                </h3>
              </div>
            </div>
          </div>

          <div className="reignite-card reignite-card-small">
            <div
              className="reignite-card-image"
              style={{
                backgroundImage: "url('/Main5.png')",
              }}
            >
              <div className="reignite-card-overlay">
                <h3
                  className="ai-heading"
                  style={{
                    fontFamily: 'Montserrat, sans-serif',
                    fontWeight: 600,
                    fontSize: '26px',
                    lineHeight: '33px',
                    letterSpacing: 0,
                    color: '#ffffff',
                    margin: 0,
                    verticalAlign: 'middle',
                    width: '100%',
                    maxWidth: '231px',
                    height: 'auto',
                    opacity: 1,
                    position: 'relative',
                  }}
                >
                  AI strategy & investing
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
