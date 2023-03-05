import { Container, Row, Col } from 'react-bootstrap';
import line from '@/assets/images/bg/line.png';
import BannerContent from './BannerContent';
import BannerSlider from './BannerSlider';

const n = 9;
function Banner() {
  return (
    <div className="home-banner">
      <Container>
        <div className="anim-line">
          {[...Array(n)].map((e, i) => (
            <span key={i}>
              <img src={line.src} alt="Line" />
            </span>
          ))}
        </div>
        <Row className="align-items-center">
          <Col lg={6} md={12}>
            <BannerContent />
          </Col>

          <Col lg={6} md={12}>
            <BannerSlider />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Banner;
