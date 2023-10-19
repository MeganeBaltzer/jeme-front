import { useState } from 'react';
import { NavLink } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './styles.scss';

function Filter({ toggleFilter, filterVisible }) {
  const [checkboxStates, setCheckboxStates] = useState([false]);

  const handleCheckboxChange = (index) => {
    const newCheckboxStates = [...checkboxStates];
    newCheckboxStates[index] = !newCheckboxStates[index];
    setCheckboxStates(newCheckboxStates);
  };

  return (
    <div style={{
      position: 'fixed', top: 0, left: filterVisible ? 0 : '-300px', width: '300px', height: '100vh', backgroundColor: '#435747', transition: 'left 0.3s ease', color: 'white', zIndex: '1000', marginTop: '8em',
    }}
    >
      <NavLink onClick={toggleFilter} style={{ margin: '2em' }}>
        <strong>{filterVisible ? 'Fermer le filtre' : 'Filtrer ma recherche'}</strong>
      </NavLink>
      <div>
        <div style={{ borderTop: '0.2px solid white', marginBottom: '2em' }} />
        <label htmlFor="1" className={checkboxStates[0] ? 'checked' : ''} style={{ cursor: 'pointer' }}>
          <input
            type="checkbox"
            style={{ marginLeft: '1em', marginRight: '1em' }}
            onChange={handleCheckboxChange}
            value="english"
            id="english"
          />
          <span style={{ color: 'white' }}>Bavoirs pression</span>
        </label>
      </div>
    </div>
  );
}

Filter.propTypes = {
  toggleFilter: PropTypes.func.isRequired,
  filterVisible: PropTypes.bool.isRequired,
};

export default Filter;
