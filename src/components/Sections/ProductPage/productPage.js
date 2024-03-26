/* eslint-disable max-len */
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { findProduct } from '../../../selectors/selectors';
import Loading from '../../Loading/loading';
import MainPage from './mainPage';
import FooterPage from './footerPage';

function productPage() {
  const param = useParams();
  const productList = useSelector((state) => state.products.list);
  const product = findProduct(productList, param.slug);

  return (
    <div style={{ marginTop: '10em' }}>
      {
        product ? (
          <><MainPage title={product.name} poster={product.poster} description={product.description} /><FooterPage price={product.price} material={product.matiere} /></>
        )
          : (
            <Loading />
          )
      }
    </div>
  );
}

export default productPage;
