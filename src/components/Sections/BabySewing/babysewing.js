import { Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFilter } from '../../../actions/products';
import Loading from '../../Loading/loading';
import Filter from '../Filter/filter';
import Cards from '../Cards/cards';
import NavbarFilter from '../NavbarFilter/navbarFilter';
import babySewingFilter from '../../../datas/babySewingFilter';

function BabySewing() {
  const dispatch = useDispatch();
  const babySewingList = useSelector((state) => state.products.list.filter((item) => item.category.name === 'Coutures-bébé'));
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
            babySewingFilter={babySewingFilter}

          />
        </Col>
        <Col>
          {babySewingList ? (
            <Cards
              babySewingList={babySewingList}

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

export default BabySewing;
