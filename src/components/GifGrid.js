import PropTypes from 'prop-types';
import useFetchGifs from "../hooks/useFetchGifs";
import GifGridItem from './GifGridItem';

const GifGrid = ({ category }) => {
  const { loanding, data: images } = useFetchGifs(category);

  return (
    <>
      <h3 className="animate__animated animate__fadeIn">{category}</h3>

      { loanding && <p className="animate__animated animate__flash">Cargando...</p> }

      <div className="card-grid">
        {images.map(img => (
          <GifGridItem
            key={img.id}
            {...img}
          />
        ))}
      </div>
    </>
  );
}

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};

export default GifGrid;