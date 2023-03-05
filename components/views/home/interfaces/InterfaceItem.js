import PropTypes from 'prop-types';

function InterfaceItem({ item }) {
  return (
    <div className="interface-item">
      <img src={item.imagePath} alt={item.name} />
    </div>
  );
}

InterfaceItem.propTypes = {
  item: PropTypes.shape({
    name: PropTypes.string,
    imagePath: PropTypes.string,
  }),
};

export default InterfaceItem;
