import React from 'react';
import {Header} from '../../components/header/header';
import {Screen} from '../../components/screen/screen';
import {ProductDataType} from '../add-product/components/add-product-field-types';
import {useCartListList} from './components/cart-list.hooks';
import {CartListListView} from './components/cart-list.view';

export function CartListScreen() {
  const {
    productsList,
    updateProductList,
    updateProductCartList,
  } = useCartListList();

  const onIncreasePress = (index: any) => {
    let list: any = {...productsList};
    let newList: ProductDataType[] = [...list.productsList];
    let cartNumber = newList[index].cartNumber;
    updateProductList(index, cartNumber + 1);
  };
  const onDecreasePress = (index: any) => {
    let list: any = {...productsList};
    let newList: ProductDataType[] = [...list.productsList];
    let cartNumber = newList[index].cartNumber;
    if (cartNumber != 0) {
      updateProductList(index, cartNumber - 1);
    }
  };

  const onAddCart = (index: any) => {
    let list: any = {...productsList};
    let newList: ProductDataType[] = [...list.productsList];
    let cartAdded = newList[index].cartAdded;
    updateProductCartList(index, !cartAdded);
  };
  return (
    <Screen>
      <Header headerTitle={'Carts'} />
      <CartListListView
        productsList={productsList.productsList}
        onIncreasePress={(index) => {
          onIncreasePress(index);
        }}
        onDecreasePress={(index) => {
          onDecreasePress(index);
        }}
        addToCart={(index) => {
          onAddCart(index);
        }}
      />
    </Screen>
  );
}
