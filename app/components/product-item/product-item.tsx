import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {icons} from '../../assets';
import {ProductDataType} from '../../screens/add-product/components/add-product-field-types';
import {strings} from '../../utils/strings';
import styles from './product-item.style';

interface ProductListProps {
  item: ProductDataType;
  index?: any;
  cartNumber?: any;
  onIncreasePress?: () => void;
  onDecreasePress?: () => void;
  addToCart?: () => void;
}

interface CartACtionViewProps {
  type: any;
  onActionPress?: () => void;
}

export default function ProductItem(props: ProductListProps) {
  const {item, index, onIncreasePress, onDecreasePress, addToCart} = props;

  function CartActionView(props: CartACtionViewProps) {
    const {type, onActionPress} = props;
    return (
      <TouchableOpacity onPress={onActionPress}>
        <View style={styles.minusView}>
          <Image source={type} style={styles.minus} />
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View key={index} style={styles.renderItem}>
      <Image style={styles.productImage} source={{uri: item.productImage}} />
      <View style={styles.contentView}>
        <Text numberOfLines={1} style={styles.productName}>
          {item.productName}
        </Text>
        <Text numberOfLines={1} style={styles.productDesc}>
          {item.productDesc}
        </Text>
        <View style={styles.priceView}>
          <Text numberOfLines={1} style={styles.originalPrice}>
            {'$' + item.originalPrice}
          </Text>
          <Text numberOfLines={1} style={styles.discountedPrice}>
            {'$' + item.discountedPrice}
          </Text>
        </View>
        <View style={styles.cartActionView}>
          <CartActionView type={icons.minus} onActionPress={onDecreasePress} />
          <Text style={styles.cartNumber}>{item.cartNumber}</Text>
          <CartActionView type={icons.plus} onActionPress={onIncreasePress} />
        </View>

        <TouchableOpacity onPress={addToCart}>
          <Text style={styles.addToCart}>
            {item.cartAdded ? strings.removeCart : strings.addCart}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
