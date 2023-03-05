import { Container, Row, Col } from 'react-bootstrap';
import FooterLogo from '@/components/partials/footer/FooterLogo';
import FooterMenu from '@/components/partials/footer/FooterMenu';
import FooterStoreLinks from '@/components/partials/footer/FooterStoreLinks';
import { useState } from 'react';

function Footer() {
  const [sectionLinks] = useState([
    { name: 'Home', url: '#' },
    { name: 'About Us', url: '#about' },
    { name: 'Services', url: '#services' },
    { name: 'Blog', url: '#blog' },
    { name: 'Contact Us', url: '#contact-us' },
  ]);

  const [pageLinks] = useState([
    { name: 'Faqs', url: '/faq' },
    { name: 'Support', url: '/support' },
    { name: 'How it works', url: '/how-it-works' },
    { name: 'Terms & Conditions', url: '/terms-conditions' },
    { name: 'Privacy Policy', url: '/privacy-policy' },
  ]);

  return (
    <div className="footer">
      <div className="footer-top">
        <Container>
          <Row>
            <Col lg={3} md={6}>
              <FooterLogo />
            </Col>
            <Col lg={3} md={6}>
              <FooterMenu menu={sectionLinks} title="Useful Links" store="anchor" />
            </Col>
            <Col lg={3} md={6}>
              <FooterMenu menu={pageLinks} title="Help & Support" type="pages" />
            </Col>
            <Col lg={3} md={6}>
              <FooterStoreLinks />
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Footer;
