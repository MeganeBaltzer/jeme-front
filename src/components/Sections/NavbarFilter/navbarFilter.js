import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { setInputValue } from '../../../actions/products';

function NavbarFilter() {
  const dispatch = useDispatch();
  const inputValue = useSelector((state) => state.products.inputFilter);
  return (
    <Navbar className="bg-body-tertiary justify-content-between" style={{ marginTop: '9em' }}>
      <Form.Control
        type="text"
        style={{ textAlign: 'center' }}
        className="inputFilter"
        placeholder="Rechercher un produit"
        value={inputValue}
        onChange={(event) => {
          event.preventDefault();
          console.log(event.target.value);
          dispatch(setInputValue(event.target.value));
        }}
        aria-label="Recherche"
      />
    </Navbar>
  );
}

export default NavbarFilter;
