import PropTypes from 'prop-types';
import { Col, Container, Row } from 'react-bootstrap';
import AboutImg from './AboutImg';
import AboutContent from './AboutContent';

function SectionItem({ item, index }) {
  return (
    <div className="section-item" key={index}>
      <Container>
        <Row className={`align-items-center ${index % 2 !== 0 ? 'flex-row-reverse reverse' : ''}`}>
          <Col lg={6}>
            <AboutImg item={item} />
          </Col>
          <Col lg={6}>
            <AboutContent item={item} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

SectionItem.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    img1: PropTypes.string,
    img2: PropTypes.string,
    desc: PropTypes.string,
  }),
  index: PropTypes.number,
};

export default SectionItem;
