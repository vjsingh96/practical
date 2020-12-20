import React from 'react';
import {Header} from '../../components/header/header';
import {Screen} from '../../components/screen/screen';
import {ProductDataType} from '../add-product/components/add-product-field-types';
import {useProductList} from './components/product-list.hooks';
import {ProductListView} from './components/product-list.view';

export function ProductListScreen() {
  const {
    productsList,
    updateProductList,
    updateProductCartList,
  } = useProductList();

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
      <Header back={false} headerTitle={'Products'} />
      <ProductListView
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
