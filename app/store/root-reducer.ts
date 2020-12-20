import {combineReducers} from '@reduxjs/toolkit';

import productsListReducer from './screens/products-list';

const rootReducer = combineReducers({
  productsList: productsListReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
