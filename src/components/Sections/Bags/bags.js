import { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFilter } from '../../../actions/products';
import Loading from '../../Loading/loading';
import Filter from '../Filter/filter';
import Cards from '../Cards/cards';
import bagsFilter from '../../../datas/bagsFilter';

function Bags() {
  const dispatch = useDispatch();
  // const [filterVisible, setFilterVisible] = useState(false);
  const bagsList = useSelector((state) => state.products.list.filter((item) => item.category.name === 'Sacs'));
  // const filterVisible = useSelector((state) => state.products.filterVisible);
  // const toggleFilter = () => {
  //   setFilterVisible(!filterVisible);
  // };

  return (
    <Row style={{ marginTop: '14em' }}>
      <Col xs={1} md={1} lg={1} style={{ marginTop: '2em', marginBottom: '3em' }}>
        <Button
          variant="primary"
          style={{
            position: 'fixed', top: '4.5em', left: '0', backgroundColor: '#c79f23', marginTop: '12em',
          }}
          onClick={() => {
            dispatch(toggleFilter());
          }}
        >
          Filtrer
        </Button>
        <Filter
          // filterVisible={filterVisible}
          // toggleFilter={toggleFilter}
          bagsFilter={bagsFilter}
        />
      </Col>
      <Col>
        {
          bagsList ? (
            <Cards
              bagsList={bagsList}
            />
          )
            : (
              <Loading />
            )
        }
      </Col>
    </Row>
  );
}

export default Bags;
