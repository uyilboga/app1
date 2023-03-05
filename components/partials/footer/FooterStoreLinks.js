import { useState } from 'react';

function FooterStoreLinks() {
  const [storeLinks] = useState([
    { name: 'App Store', url: 'https://appstore.com/nediyo', imagePath: '/images/shapes/app-store.png' },
    { name: 'Google Play', url: 'https://googleplay.com/nediyo', imagePath: '/images/shapes/google-play.png' },
  ]);

  return (
    <div className="footer-store">
      {/* eslint-disable-next-line react/no-unescaped-entities */}
      <h3>Let's Try Out</h3>
      <ul>
        {storeLinks.map((item, index) => (
          <li key={index}>
            <a href={item.url}>
              <img src={item.imagePath} alt={item.name} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FooterStoreLinks;
