import React from 'react';
import {Header} from '../../components/header/header';
import {Screen} from '../../components/screen/screen';
import {FieldTypes} from './components/add-product-field-types';
import {useAddProduct} from './components/add-product.hooks';
import {AddProductView} from './components/add-product.view';

export function AddProductScreen() {
  const {
    productsList,
    productData,
    setProductData,
    onAddProductPress,
  } = useAddProduct();

  const onTextChange = (value: any, type: FieldTypes) => {
    let product = {...productData};
    if (type === 'productName') {
      product.productName = value;
    } else if (type === 'productDesc') {
      product.productDesc = value;
    } else if (type === 'originalPrice') {
      product.originalPrice = value;
    } else if (type === 'discountedPrice') {
      product.discountedPrice = value;
    } else if (type === 'productImage') {
      product.productImage = value;
    }
    setProductData(product);
  };

  const onAddProduct = () => {
    onAddProductPress();
  };

  return (
    <Screen>
      <Header headerTitle={'Products'} />
      <AddProductView
        productList={productsList}
        onTextChange={(value, type) => {
          onTextChange(value, type);
        }}
        productData={productData}
        onAddProduct={() => {
          onAddProduct();
        }}
      />
    </Screen>
  );
}
