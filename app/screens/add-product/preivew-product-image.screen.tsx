import React from 'react';
import {Image} from 'react-native';
import {Header} from '../../components/header/header';
import {Screen} from '../../components/screen/screen';
import {useAddProduct} from './components/add-product.hooks';
import styles from './components/add-product.style';

export function PreviewProductImageScreen() {
  const {params} = useAddProduct();
  const {imageUri}: any = params;
  return (
    <Screen>
      <Header headerTitle={'Products'} />
      <Image
        resizeMode={'contain'}
        source={{uri: imageUri}}
        style={styles.previewProductImage}
      />
    </Screen>
  );
}
