import LogoWhite from '@/assets/images/main/logo-white.png';
import { useState } from 'react';
import { FiLinkedin, FiFacebook, FiTwitter } from 'react-icons/fi';

function FooterLogo() {
  const [social] = useState([
    { name: 'facebook', url: 'https://facebook.com', component: <FiFacebook /> },
    { name: 'twitter', url: 'https://twitter.com', component: <FiTwitter /> },
    { name: 'linkedin', url: 'https://linkedin.com', component: <FiLinkedin /> },
  ]);
  return (
    <div className="footer-logo">
      <div className="logo">
        <img src={LogoWhite.src} alt="Logo white" />
      </div>

      <div className="mail">
        <a href="mailto:info@nediyo.app">info@nediyo.app</a>
      </div>

      <div className="social">
        <ul>
          {social.map((item, index) => (
            <li key={index}>
              <a href={item.url}>{item.component}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default FooterLogo;
