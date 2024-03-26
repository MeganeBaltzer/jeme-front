import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Row, Col, Button } from 'react-bootstrap';
import { toggleFilter } from '../../../actions/products';
import Filter from '../Filter/filter';
import Loading from '../../Loading/loading';
import Cards from '../Cards/cards';
import jewelryFilter from '../../../datas/jewelryFilter';
import NavbarFilter from '../NavbarFilter/navbarFilter';

function Jewerly() {
  const dispatch = useDispatch();
  const jewelryList = useSelector((state) => state.products.list.filter((item) => item.category.name === 'Bijoux'));

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
            jewelryFilter={jewelryFilter}
          />
        </Col>
        <Col>
          {jewelryList ? (
            <Cards
              jewelryList={jewelryList}
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

export default Jewerly;
