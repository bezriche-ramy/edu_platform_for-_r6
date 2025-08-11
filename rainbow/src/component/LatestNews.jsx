import React from 'react';
import './LatestNews.css';

const newsItems = [
  {
    title: 'Siege X and Operation Daybreak Launch Today!',
    date: 'June 10, 2025',
    description: 'Rainbow Six Siege X launches with major visual overhaul, new 6v6 mode, Clash rework, and more.',
    image: 'https://images.1v9.gg/Clash%20r6-23782de71339.webp' // Siege X official key art
  },
  {
    title: 'New Attacker: Rauora Unveiled',
    date: 'February 16, 2025',
    description: 'Rauora joins as the new Operator with the deployable D.O.M. Launcher for tactical map control.',
    image: 'https://tse2.mm.bing.net/th/id/OIP.lfnl4Pa3fjlW7lv_-kMAzAHaEK?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3' // Rauora reveal image
  },
  {
    title: 'New Defender Skopós Revealed',
    date: 'September 3, 2024',
    description: 'Skopós, a wheelchair-using Defender, enters with remote-controlled robots in Operation Twin Shells.',
    image: 'https://tse4.mm.bing.net/th/id/OIP.uTKFuMMHDJUUZulHFhFFUAHaEK?cb=thfvnext&rs=1&pid=ImgDetMain&o=7&rm=3' // Skopós reveal art
  }
];

const LatestNews = () => (
  <section className="latest-news">
    <h2 className="latest-news__title">Latest News</h2>
    <div className="latest-news__grid">
      {newsItems.map((item, index) => (
        <div key={index} className="news-card">
          <div
            className="news-card__image"
            style={{ backgroundImage: `url(${item.image})` }}
          />
          <div className="news-card__content">
            <span className="news-card__date">{item.date}</span>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default LatestNews;
