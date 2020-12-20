import {createSlice, PayloadAction} from '@reduxjs/toolkit';

interface RepoResultState {
  productsList: any;
}

const initialState: RepoResultState = {
  productsList: [],
};

const productsList = createSlice({
  name: 'productsList',
  initialState,
  reducers: {
    addProduct(state, action: PayloadAction<RepoResultState>) {
      state.productsList = action.payload;
    },
  },
});

const {addProduct} = productsList.actions;

export const addNewProduct = (product: any): any => async (dispatch: any) => {
  try {
    dispatch(addProduct(product));
  } catch (err) {
    // dispatch(addProduct(product));
  }
};

export default productsList.reducer;
