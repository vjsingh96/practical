import React from 'react';
import {FlatList, Text, View} from 'react-native';
import ProductItem from '../../../components/product-item/product-item';
import {ProductDataType} from '../../add-product/components/add-product-field-types';
import styles from './cart.style';

export interface CartListListProps {
  productsList?: any[];
  onIncreasePress: (index: any) => void;
  onDecreasePress: (index: any) => void;
  addToCart: (index: any) => void;
}
export function CartListListView(props: CartListListProps) {
  const {productsList, onIncreasePress, onDecreasePress, addToCart} = props;

  const renderItem = ({item, index}: {item: ProductDataType; index: any}) => (
    <View>
      {item.cartAdded && (
        <ProductItem
          item={item}
          index={index}
          onIncreasePress={() => {
            onIncreasePress(index);
          }}
          onDecreasePress={() => {
            onDecreasePress(index);
          }}
          addToCart={() => {
            addToCart(index);
          }}
        />
      )}
    </View>
  );
  return (
    <View style={styles.root}>
      <FlatList
        data={productsList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={styles.cartCountView}>
        <Text style={styles.cartCount}>
          {'Total cart items: ' +
            productsList?.filter((item) => item.cartAdded).length}
        </Text>
      </View>
    </View>
  );
}
