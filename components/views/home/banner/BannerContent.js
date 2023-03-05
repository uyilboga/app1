import { useState } from 'react';
import Button from '@/components/shared/button';

function BannerContent() {
  const [sectionContent] = useState({
    title: 'Best way to <span>manage your customers.</span>',
    desc: 'Lorem Ipsum is simply dummy text of the printing and setting indus orem Ipsum has been the industrys.',
  });

  const [links] = useState([
    { name: 'Play Store', imagePath: '/images/shapes/google-play.png', url: '' },
    { name: 'Apple Store', imagePath: '/images/shapes/app-store.png', url: '' },
  ]);

  return (
    <div className="banner-content">
      <div className="banner-text">
        <h2 dangerouslySetInnerHTML={{ __html: sectionContent.title }} />
        <p>{sectionContent.desc}</p>
      </div>
      <div className="banner-download">
        <ul>
          {links.map((item, index) => (
            <li key={index}>
              <Button path={item.url} type="link" variant="outline-button" target="_blank">
                <img src={item.imagePath} alt={item.name} />
              </Button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default BannerContent;
