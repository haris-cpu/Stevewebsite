// Strategy.jsx
import React from 'react';
import {
  Target,
  MessageSquare,
  Package,
  TrendingUp,
  Calendar,
  Users,
} from 'lucide-react';
import './Strategy.css';

const Strategy = () => {
  const steps = [
    {
      icon: <Target size={28} />, // Back to smaller size
      title: 'Your WHY, vision & purpose architecture',
    },
    {
      icon: <MessageSquare size={28} />,
      title: 'Your category message & strategic narrative',
    },
    {
      icon: <Package size={28} />,
      title: 'A polished product ecosystem',
    },
    {
      icon: <TrendingUp size={28} />,
      title: 'A demand-creation roadmap',
    },
    {
      icon: <Calendar size={28} />,
      title: 'A customized 90-day execution plan',
    },
    {
      icon: <Users size={28} />,
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
            <span className="highlight">Accelerator™</span>
          </h1>
          <p className="strategy-subtitle">
            A 6-week sprint designed to reignite clarity, purpose, and strategic
            momentum. You get:
          </p>
        </div>

        {/* Steps Section */}
        <div className="steps-container">
          {steps.map((step, index) => (
            <React.Fragment key={index}>
              {/* Step Card */}
              <div className="step-card">
                {/* Icon Circle */}
                <div className="step-icon">{step.icon}</div>

                {/* Title */}
                <p className="step-title">{step.title}</p>
              </div>

              {/* Dashed Line Connector */}
              {index < steps.length - 1 && <div className="connector-line" />}
            </React.Fragment>
          ))}
        </div>

        {/* Subtitle */}
        <p className="strategy-description">
          A business that grows with purpose, clarity, and predictable momentum.
        </p>

        {/* CTA Buttons */}
        <div className="cta-buttons">
          <button className="btn btn-primary">
            Apply for the Accelerator
            <span>→</span>
          </button>

          <button className="btn btn-secondary">
            Take the 3-Minute Momentum Score™
            <span>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Strategy;
