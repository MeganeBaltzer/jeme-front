import { Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFilter } from '../../../actions/products';
import Loading from '../../Loading/loading';
import Filter from '../Filter/filter';
import Cards from '../Cards/cards';
import bagsFilter from '../../../datas/bagsFilter';
import NavbarFilter from '../NavbarFilter/navbarFilter';

function Bags() {
  const dispatch = useDispatch();

  const bagsList = useSelector((state) => state.products.list.filter((item) => item.category.name === 'Sacs'));

  return (
    <><NavbarFilter />
      <Row style={{ marginTop: '3em' }}>
        <Col xs={1} md={1} lg={1} style={{ marginTop: '2em', marginBottom: '3em' }}>
          <Button
            variant="primary"
            style={{
              position: 'fixed', top: '2em', left: '0', backgroundColor: '#c79f23', marginTop: '12em',
            }}
            onClick={() => {
              dispatch(toggleFilter());
            }}
          >
            Filtrer
          </Button>
          <Filter
            bagsFilter={bagsFilter}
          />
        </Col>
        <Col>
          {bagsList ? (
            <Cards
              bagsList={bagsList}
            />
          )
            : (
              <Loading />
            )}
        </Col>
      </Row>
    </>
  );
}

export default Bags;
