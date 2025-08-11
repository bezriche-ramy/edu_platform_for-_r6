import React from 'react';
import './OperatorSpotlight.css';

const operators = [
  {
    name: 'Rauora',
    role: 'Attacker',
    image: 'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/17NnCKm86wr8XUEajrYiOz/c971adfefc7e0910a99b3da91a2573e8/r6s-operators-list-striker.png',
    stats: {
      speed: 2,
      armor: 2,
      gadget: 'Deployable Omnilink Mesh (D.O.M.)',
    },
    tips: 'Use D.O.M. to deny doorways and funnel defenders. Great mid-range with M249 or 417.',
  },
  {
    name: 'Striker',
    role: 'Defender',
    image: 'https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/hZZ9mtg5oIImOA141Kjbx/3c572164319e7ef0552446d21f191c27/r6s-operators-list-rauora.png',
    stats: {
      speed: 1,
      armor: 3,
      gadget: 'Default Recruit loadout (no unique gadget)',
    },
    tips: 'Use versatile loadouts, adapt to team needs. Default tools make for flexible defending.',
  },
];

const StatBar = ({ label, value }) => {
  const max = 3;
  return (
    <div className="stat-bar">
      <span className="stat-label">{label}:</span>
      <div className="stat-bar-fill">
        {[...Array(max)].map((_, i) => (
          <span
            key={i}
            className={`bar-segment ${i < value ? 'filled' : ''}`}
          ></span>
        ))}
      </div>
    </div>
  );
};

const OperatorSpotlight = () => (
  <section className="operator-spotlight">
    <h2 className="spotlight-title">Operator Spotlight</h2>
    <div className="spotlight-grid">
      {operators.map((op, idx) => (
        <div key={idx} className="spotlight-card">
          <div className="card-inner">
            <div className="card-front" style={{ backgroundImage: `url(${op.image})` }}>
              <div className="card-role">{op.role}</div>
            </div>
            <div className="card-back">
              <h3>{op.name}</h3>
              <StatBar label="Speed" value={op.stats.speed} />
              <StatBar label="Armor" value={op.stats.armor} />
              <p className="gadget"><strong>Gadget:</strong> {op.stats.gadget}</p>
              <p className="op-tips">{op.tips}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default OperatorSpotlight;
