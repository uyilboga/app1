import { useState } from 'react';
import SectionItem from './section-item';

function About() {
  const [section] = useState([
    {
      img1: '/images/home/about-frame.png',
      img2: '/images/home/about-screen.png',
      title: 'Some Awesome Words <span>About App.</span>',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum has been the industrys standard dummy text ever since the when an unknown printer took a galley of type and. Lorem ipsum dolor sit amet.',
    },
  ]);

  return (
    <div className="about">
      <div className="about-sections">
        {section.map((item, index) => (
          <SectionItem item={item} index={index} key={index} />
        ))}
      </div>
    </div>
  );
}

export default About;
