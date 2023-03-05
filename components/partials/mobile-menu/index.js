import Link from 'next/link';
import logo from '@/assets/images/main/logo.png';
import { useState } from 'react';
import Button from '@/components/shared/button';
import { useSelector } from 'react-redux';

function MobileMenu() {
  const [menu] = useState([
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'How it works', path: '/how-it-works' },
    { name: 'Pages', path: '/pages' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]);

  const { mobileMenu } = useSelector((state) => state.app);

  return (
    <div className={`mobile-menu ${mobileMenu ? 'active' : ''}`}>
      <div className="mobile-overlay" />
      <div className="mobile-main">
        <div className="mobile-header">
          <div className="logo">
            <Link href="/">
              <img src={logo.src} alt="" />
            </Link>
          </div>
          <div className="close">
            <span />
          </div>
        </div>
        <div className="mobile-menu-main">
          <ul>
            {menu.map((item, index) => (
              <li key={index}>
                <Link href={item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="mobile-footer">
          <Button variant="primary-button" type="link" path="/get-started">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
}

export default MobileMenu;
