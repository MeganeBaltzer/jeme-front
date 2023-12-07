import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Button } from 'react-bootstrap';
import { toggleFilter } from '../../../actions/products';
import Filter from '../Filter/filter';
import Cards from '../Cards/cards';
import Loading from '../../Loading/loading';
import accessoriesFilter from '../../../datas/accessoriesFilter';

function Accessories() {
  const dispatch = useDispatch();
  // const [filterVisible, setFilterVisible] = useState(false);
  const accessoriesList = useSelector((state) => state.products.list.filter((item) => item.category.name === 'Accessoires'));
  console.log(accessoriesList);
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
          accessoriesFilter={accessoriesFilter}
        />
      </Col>
      <Col>
        {
          accessoriesList ? (
            <Cards
              accessoriesList={accessoriesList}
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

export default Accessories;
