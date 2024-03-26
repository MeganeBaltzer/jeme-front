/* eslint-disable react/require-default-props */
/* eslint-disable max-len */
import { useEffect, useCallback } from 'react';
import { NavLink, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFilter, setFilters, setCheckboxStates } from '../../../actions/products';
import './styles.scss';

function Filter({
  accessoriesFilter, jewelryFilter, babySewingFilter, bagsFilter, cookingFilter, pouchesFilter,
}) {
  const dispatch = useDispatch();
  const filterVisible = useSelector((state) => state.products.filterVisible);
  const selectedFilters = useSelector((state) => state.products.selectedFilters);
  const checkboxStates = useSelector((state) => state.products.checkboxStates);

  useEffect(() => () => {
    dispatch(setCheckboxStates([]));
    dispatch(setFilters([]));
  }, []);

  // const [checkboxStates, setCheckboxStates] = useState([]);

  const mergedFilters = [
    ...accessoriesFilter || [],
    ...jewelryFilter || [],
    ...babySewingFilter || [],
    ...bagsFilter || [],
    ...cookingFilter || [],
    ...pouchesFilter || [],
  ];

  const handleCheckboxChange = (index) => {
    let newCheckboxStates = [...checkboxStates];
    const filterName = mergedFilters[index].name; // Récupère le nom du filtre

    // Inverse la valeur du nom du filtre
    if (newCheckboxStates.includes(filterName)) {
      newCheckboxStates = newCheckboxStates.filter((name) => name !== filterName);
    }
    else {
      newCheckboxStates.push(filterName);
    }

    dispatch(setCheckboxStates(newCheckboxStates));

    // Met à jour les filtres sélectionnés dans le Redux store
    const updatedFilters = newCheckboxStates.reduce((acc, filter) => {
      const filterNameBis = mergedFilters.find((f) => f.name === filter)?.name;
      if (filterNameBis) {
        acc.push(filterNameBis);
      }
      return acc;
    }, []);

    dispatch(setFilters(updatedFilters));
  };

  const handleReset = () => {
    dispatch(setCheckboxStates([]));
    dispatch(setFilters([]));
  };

  const handleClick = useCallback(() => {
    dispatch(toggleFilter());
    handleReset();
  }, [dispatch, handleReset]);

  return (
    <div style={{
      position: 'fixed', top: 0, left: filterVisible ? 0 : '-300px', width: '300px', height: '100vh', backgroundColor: '#435747', transition: 'left 0.3s ease', color: 'white', zIndex: '1000', marginTop: '8em',
    }}
    >
      <NavLink onClick={() => dispatch(toggleFilter())} style={{ margin: '2em' }} className="anim4">
        <strong>FERMER LE FILTRE</strong>
      </NavLink>
      <div>
        <div style={{ borderTop: '0.2px solid white', marginBottom: '2em' }} />
        <Button
          onClick={handleClick}
          type="reset"
          className="anim3"
          style={{
            marginBottom: '2em', backgroundColor: 'transparent', border: 'none', boxShadow: 'none',
          }}
        >
          Voir tout
        </Button>
        {mergedFilters.map((filter, index) => (
          <label htmlFor={`checkbox-${index}`} key={filter.id} style={{ cursor: 'pointer', marginBottom: '1em' }}>
            <input
              type="checkbox"
              style={{ marginLeft: '1em', marginRight: '1em' }}
              checked={checkboxStates.includes(filter.name) || selectedFilters.includes(filter.id)}
              onChange={() => handleCheckboxChange(index, filter.id)}
              id={`checkbox-${index}`}
            />
            {filter.name}
          </label>
        ))}
      </div>
    </div>
  );
}

Filter.propTypes = {
  accessoriesFilter: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }).isRequired,
  ),
  jewelryFilter: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }).isRequired,
  ),
  babySewingFilter: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }).isRequired,
  ),
  bagsFilter: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }).isRequired,
  ),
  cookingFilter: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }).isRequired,
  ),
  pouchesFilter: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }).isRequired,
  ),
};

export default Filter;
