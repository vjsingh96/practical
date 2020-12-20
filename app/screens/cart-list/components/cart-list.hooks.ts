import {useSelector} from 'react-redux';
import {ProductDataType} from '../../add-product/components/add-product-field-types';
import {store} from '../../../store/store';
import {addNewProduct} from '../../../store/screens/products-list';

const updateProduct = (
  index: any,
  cartNumber: any,
  productsList: ProductDataType[],
) => {
  let list: any = {...productsList};
  let newList: ProductDataType[] = [...list.productsList];
  let productData = {...newList[index]};
  productData.cartNumber = cartNumber;
  newList[index] = productData;
  store.dispatch(addNewProduct(newList));
};

const updateProductCart = (
  index: any,
  cartAdded: any,
  productsList: ProductDataType[],
) => {
  let list: any = {...productsList};
  let newList: ProductDataType[] = [...list.productsList];
  let productData = {...newList[index]};
  productData.cartAdded = cartAdded;
  newList[index] = productData;
  store.dispatch(addNewProduct(newList));
};

export function useCartListList() {
  const productsList = useSelector((state: any) =>
    Object.assign(state.productsList),
  );
  const updateProductList = (index: any, cartNumber: any) =>
    updateProduct(index, cartNumber, productsList);
  const updateProductCartList = (index: any, cartAdded: any) =>
    updateProductCart(index, cartAdded, productsList);

  return {
    productsList,
    updateProductList,
    updateProductCartList,
  };
}
