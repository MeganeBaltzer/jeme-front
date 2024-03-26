import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Button } from 'react-bootstrap';
import { toggleFilter } from '../../../actions/products';
import Filter from '../Filter/filter';
import Cards from '../Cards/cards';
import Loading from '../../Loading/loading';
import accessoriesFilter from '../../../datas/accessoriesFilter';
import NavbarFilter from '../NavbarFilter/navbarFilter';

function Accessories() {
  const dispatch = useDispatch();
  const accessoriesList = useSelector((state) => state.products.list.filter((item) => item.category.name === 'Accessoires'));

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
            accessoriesFilter={accessoriesFilter}
          />
        </Col>
        <Col>
          {accessoriesList ? (
            <Cards
              accessoriesList={accessoriesList}
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

export default Accessories;
