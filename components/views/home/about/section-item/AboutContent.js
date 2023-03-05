import PropTypes from 'prop-types';
import Button from '@/components/shared/button';

function AboutContent({ item }) {
  return (
    <div className="about-content">
      <div className="title">
        <h2 dangerouslySetInnerHTML={{ __html: item.title }} />
        <p>{item.desc}</p>
        <Button path="/" type="link" variant="primary-button">
          GET STARTED
        </Button>
      </div>
    </div>
  );
}

AboutContent.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    img1: PropTypes.string,
    img2: PropTypes.string,
    desc: PropTypes.string,
  }),
};

export default AboutContent;
