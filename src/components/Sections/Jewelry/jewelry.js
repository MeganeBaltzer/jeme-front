import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Button } from 'react-bootstrap';
import { toggleFilter } from '../../../actions/products';
import Filter from '../Filter/filter';
import Loading from '../../Loading/loading';
import Cards from '../Cards/cards';
import jewelryFilter from '../../../datas/jewelryFilter';

function Jewerly() {
  const dispatch = useDispatch();
  // const [filterVisible, setFilterVisible] = useState(false);
  const jewelryList = useSelector((state) => state.products.list.filter((item) => item.category.name === 'Bijoux'));
  // console.log(jewelryList);
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
            position: 'fixed', top: '2em', left: '0', backgroundColor: '#c79f23', marginTop: '12em',
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
          jewelryFilter={jewelryFilter}
        />
      </Col>
      <Col>
        {
          jewelryList ? (
            <Cards
              jewelryList={jewelryList}
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

export default Jewerly;
