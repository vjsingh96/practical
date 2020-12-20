import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {ProductDataType} from '../../add-product/components/add-product-field-types';
import {store} from '../../../store/store';
import {addNewProduct} from '../../../store/screens/products-list';

const onAddProduct = (navigation: any) => {
  navigation.navigate('addProduct');
};

const onCartList = (navigation: any) => {
  navigation.navigate('cartList');
};

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

export function useProductList() {
  const productsList = useSelector((state: any) =>
    Object.assign(state.productsList),
  );
  const navigation = useNavigation();
  const onAddProductPress = () => onAddProduct(navigation);
  const onCartListPress = () => onCartList(navigation);
  const updateProductList = (index: any, cartNumber: any) =>
    updateProduct(index, cartNumber, productsList);
  const updateProductCartList = (index: any, cartAdded: any) =>
    updateProductCart(index, cartAdded, productsList);

  return {
    productsList,
    onAddProductPress,
    onCartListPress,
    updateProductList,
    updateProductCartList,
  };
}
