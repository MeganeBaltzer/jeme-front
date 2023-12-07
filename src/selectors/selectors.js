/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

const selectProductList = (state) => state.products.list;

export const selectAccessoriesList = createSelector(
  [selectProductList],
  (productList) => productList.filter((item) => item.category.name === 'Accessoire'),
);
