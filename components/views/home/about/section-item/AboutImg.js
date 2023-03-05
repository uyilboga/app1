import PropTypes from 'prop-types';

function AboutImg({ item }) {
  return (
    <div className="about-img">
      <div className="frame-img">
        <img src={item.img1} className="moving-position-animation" alt={item.title} />
      </div>
      <div className="screen-img">
        <img src={item.img2} className="moving-animation" alt={item.title} />
      </div>
    </div>
  );
}

AboutImg.propTypes = {
  item: PropTypes.shape({
    title: PropTypes.string,
    img1: PropTypes.string,
    img2: PropTypes.string,
    desc: PropTypes.string,
  }),
};

export default AboutImg;
