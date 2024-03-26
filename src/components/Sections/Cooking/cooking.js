import { Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toggleFilter } from '../../../actions/products';
import Filter from '../Filter/filter';
import Loading from '../../Loading/loading';
import Cards from '../Cards/cards';
import cookingFilter from '../../../datas/cookingFilter';
import NavbarFilter from '../NavbarFilter/navbarFilter';

function Cooking() {
  const dispatch = useDispatch();
  const cookingList = useSelector((state) => state.products.list.filter((item) => item.category.name === 'Cuisine'));

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
            cookingFilter={cookingFilter}
          />
        </Col>
        <Col>
          {cookingList ? (
            <Cards
              cookingList={cookingList}
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

export default Cooking;
