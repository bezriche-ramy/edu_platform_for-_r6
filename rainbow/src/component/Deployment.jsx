// Deployment.jsx
import React from 'react';
import './Deployment.css';

const defenders = [
  {
    name: 'Smoke',
    image: 'https://img.redbull.com/images/c_crop,x_425,y_0,h_2814,w_4221/c_fill,w_1500,h_1000/q_auto,f_auto/redbullcom/2018/11/21/5bdbcae7-56b3-472c-ba41-bbd2f74ca3fd/rainbow-six-siege-smoke',
  },
  {
    name: 'Mute',
    image: 'https://th.bing.com/th/id/R.f0d9ecc7af28e7bb5639664c7e4825fa?rik=%2fuiwruTPgjdaVg&riu=http%3a%2f%2fwww.hdwallpapers.in%2fdownload%2frainbow_six_siege_sas_mute_5k-3840x2160.jpg&ehk=4BoS8OeCYFOWLMferUwUFt3OoZ2zYLVVA7CBeWBmWKI%3d&risl=&pid=ImgRaw&r=0',
  },
  {
    name: 'Castle',
    image: 'https://www.hdwallpapers.in/download/rainbow_six_siege_fbi_swat_castle_5k-3840x2160.jpg',
  },
  {
    name: 'Rook',
    image: 'https://th.bing.com/th/id/OIP.zl9q_aZnU0qxVhPp_3a8tgHaGV?w=215&h=184&c=7&r=0&o=7&pid=1.7&rm=3',
  },
  {
    name: 'Kapkan',
    image: 'https://th.bing.com/th/id/OIP.6G_dDu4GMlT9h3SANa0Y8gHaFR?w=241&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
  },
  {
    name: 'Tachanka',
    image: 'https://th.bing.com/th/id/OIP.VuE6NXmCNN8oMtyPqPFnAgHaEK?w=284&h=180&c=7&r=0&o=7&pid=1.7&rm=3',
  },
];

export default function Deployment() {
  return (
    <div className="deployment-page">
      {/* Hero */}
      <div
        className="deployment-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(10,15,28,0.4), rgba(10,15,28,0.4)), url(https://www.strafe.com/esports-betting/strafe-news/wp-content/uploads/sites/29/Elite_Still_-_Sledge2C_Thermite_and_Kapkan.webp)`,
        }}
      >
        <div className="hero-overlay">
          <h1>Defender Deployment</h1>
          <p>Choose your tactical advantage - Select a defender to dominate the battlefield</p>
        </div>
      </div>

      {/* Cards */}
      <div className="defender-grid">
        {defenders.map((op, index) => (
          <div key={op.name} className="defender-card" style={{animationDelay: `${index * 0.1}s`}}>
            <div
              className="defender-image"
              style={{ backgroundImage: `url(${op.image})` }}
            />
            <h3>{op.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
