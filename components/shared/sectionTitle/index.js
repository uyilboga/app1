import PropTypes from 'prop-types';

function SectionTitle({ title, desc }) {
  return (
    <div className="section-title">
      <h2 dangerouslySetInnerHTML={{ __html: title }} />
      <p dangerouslySetInnerHTML={{ __html: desc }} />
    </div>
  );
}

SectionTitle.propTypes = {
  title: PropTypes.string,
  desc: PropTypes.string,
};

export default SectionTitle;
