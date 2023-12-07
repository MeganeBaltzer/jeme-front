/* eslint-disable max-len */
import { useState } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Loading from '../../Loading/loading';
import Filter from '../Filter/filter';
import Cards from '../Cards/cards';

function Promotions() {
  const [filterVisible, setFilterVisible] = useState(false);
  const promosList = useSelector((state) => state.products.list.filter((item) => item.promotion === true));
  // console.log(promosList);

  const toggleFilter = () => {
    setFilterVisible(!filterVisible);
  };

  return (
    <Row style={{ marginTop: '14em' }}>
      <Col xs={1} md={1} lg={1} style={{ marginTop: '2em', marginBottom: '3em' }}>
        <Button
          variant="primary"
          style={{
            position: 'fixed', top: '4.5em', left: '0', backgroundColor: '#c79f23', marginTop: '12em',
          }}
          onClick={toggleFilter}
        >
          Filtrer
        </Button>
        <Filter filterVisible={filterVisible} toggleFilter={toggleFilter} />
      </Col>
      <Col>
        {
          promosList ? (
            <Cards
              promosList={promosList}
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

export default Promotions;
