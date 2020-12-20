import React from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {icons} from '../../../assets';
import ProductItem from '../../../components/product-item/product-item';
import {ProductDataType} from '../../add-product/components/add-product-field-types';
import {useProductList} from './product-list.hooks';
import styles from './product.style';

export interface ProductListProps {
  productsList?: any[];
  onIncreasePress: (index: any) => void;
  onDecreasePress: (index: any) => void;
  addToCart: (index: any) => void;
}
export function ProductListView(props: ProductListProps) {
  const {productsList, onIncreasePress, onDecreasePress, addToCart} = props;
  const {onAddProductPress, onCartListPress} = useProductList();

  const renderItem = ({item, index}: {item: ProductDataType; index: any}) => (
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
  );
  return (
    <View style={styles.root}>
      <FlatList
        data={productsList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />

      <TouchableOpacity
        onPress={onCartListPress}
        style={styles.floatCartButtonView}>
        <View style={styles.floatButton}>
          <Image style={styles.plus} source={icons.cart} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={onAddProductPress}
        style={styles.floatButtonView}>
        <View style={styles.floatButton}>
          <Image style={styles.plus} source={icons.plus} />
        </View>
      </TouchableOpacity>
    </View>
  );
}
