import React from 'react';
import { Link } from 'react-router-dom'; // ✅ import Link
import './Category.css';

const categories = [
  {
    title: 'Deployment',
    image: 'https://th.bing.com/th/id/R.dbc95dbd671122c72efffb939fa6617d?rik=uLKh6DRIPA%2bCMA&pid=ImgRaw&r=0',
    link: '/deployment', // ✅ now a route, not an anchor
  },
  {
    title: 'Best Weapons',
    image: 'https://th.bing.com/th/id/R.ebec7ca7c2f68bdcf7d3cde88d8419fb?rik=y2noBny%2bO7dgBw&riu=http%3a%2f%2fvignette3.wikia.nocookie.net%2frainbowsix%2fimages%2fe%2fe3%2fR6S-HeavyBarrel.jpg%2frevision%2flatest%3fcb%3d20160912183613&ehk=X4B9yMS5UM1mrPYx9X2WdpAzmxsINaeFKXL59o70DfY%3d&risl=&pid=ImgRaw&r=0',
    link: '#weapons',
  },
  {
    title: 'Best Team for Each Map',
    image: 'https://th.bing.com/th/id/R.7b7cba473efaa7a2b4cc2e0ab9b71cd0?rik=OYXM5piqThd2Ow&pid=ImgRaw&r=0',
    link: '#teams',
  },
];

const Category = () => {
  return (
    <section className="category-section">
      <h2>Category</h2>
      <div className="category-grid">
        {categories.map((cat, index) => (
          cat.link.startsWith('/') ? (
            // ✅ Internal route navigation
            <Link
              key={cat.title}
              to={cat.link}
              className="category-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className="category-card__image"
                style={{ backgroundImage: `url(${cat.image})` }}
                aria-label={cat.title}
              >
                <div className="shine"></div>
              </div>
              <div className="category-card__title">{cat.title}</div>
            </Link>
          ) : (
            // ✅ Keep normal anchor for in-page scroll
            <a
              key={cat.title}
              href={cat.link}
              className="category-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div
                className="category-card__image"
                style={{ backgroundImage: `url(${cat.image})` }}
                aria-label={cat.title}
              >
                <div className="shine"></div>
              </div>
              <div className="category-card__title">{cat.title}</div>
            </a>
          )
        ))}
      </div>
    </section>
  );
};

export default Category;
