import { Container } from 'react-bootstrap';
import Link from 'next/link';
import logo from '@/assets/images/main/logo.png';
import { useState } from 'react';
import Button from '@/components/shared/button';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMobileMenu } from '@/store/slices/appSlice';

function Navbar() {
  const [menu] = useState([
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'How it works', path: '/how-it-works' },
    { name: 'Pages', path: '/pages' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ]);

  const dispatch = useDispatch();
  const { mobileMenu } = useSelector((state) => state.app);

  const openMobileMenu = (event) => {
    event.preventDefault();
    dispatch(toggleMobileMenu());
    document.body.classList.toggle('overflow-hidden');
  };

  return (
    <div className="header">
      <Container>
        <div className="header-wrapper">
          <div className="logo">
            <Link href="/">
              <img src={logo.src} alt="" />
            </Link>
          </div>
          <div className="header-menu">
            <ul>
              {menu.map((item, index) => (
                <li key={index}>
                  <Link href={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="header-right">
            <Button variant="primary-button" type="link" path="/get-started">
              Get Started
            </Button>

            <div className="hamburger">
              <a href="#" onClick={openMobileMenu} className={`${mobileMenu ? 'active' : null}`}>
                <span />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
