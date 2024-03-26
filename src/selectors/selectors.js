/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

const selectProductList = (state) => state.products.list;

export const selectAccessoriesList = createSelector(
  [selectProductList],
  (productList) => productList.filter((item) => item.category.name === 'Accessoire'),
);

/* eslint-disable import/prefer-default-export */
/* eslint-disable arrow-body-style */

/**
 *  on trouve la recette voulue dans la liste des recettes
 * @param {Array} products
 * @param {string} searchedSlug
 * @return {Object}
 */
export function findProduct(products, searchedSlug) {
  const product = products.find((testedProduct) => {
    return testedProduct.slug === searchedSlug;
  });
  return product;
}
