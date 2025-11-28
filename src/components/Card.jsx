import React from 'react';
import './Card.css';

const Card = () => {
  const cards = [
    {
      icon: '/Frame1.png',
      title: 'Clarity That Cuts Through Noise',
      description:
        'Define your purpose, message, and positioning so customers instantly understand why you matter.',
    },
    {
      icon: '/Frame2.png',
      title: 'A Product Ecosystem That Feels Bought, Not Sold',
      description:
        'Turn your expertise into a scalable suite of offerings clients are excited to buy.',
    },
    {
      icon: '/Frame3.png',
      title: 'A Strategic Roadmap to Build Demand',
      description:
        'Stop chasing clients. Start becoming the business people line up for.',
    },
  ];

  return (
    <div className="advantage-section">
      <div className="container py-5">
        <h2 className="advantage-title text-center">
          The <span className="highlight-orange">Reignite</span> Advantage
        </h2>

        <div className="row mt-5 g-4">
          {cards.map((card, index) => (
            <div className="col-md-4" key={index}>
              <div className="advantage-card">
                <img
                  src={card.icon}
                  alt={card.title}
                  className="card-icon-img"
                />
                <h3 className="card-title">{card.title}</h3>
                <p className="card-description">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
