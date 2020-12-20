import {StyleSheet} from 'react-native';
import {color} from '../../theme/color';

const styles = StyleSheet.create({
  renderItem: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginVertical: 10,
  },
  productImage: {
    height: 100,
    width: 100,
  },
  contentView: {
    marginStart: 15,
  },
  productName: {
    fontSize: 16,
    color: color.black,
  },
  productDesc: {
    fontSize: 14,
    color: color.text,
  },
  priceView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  originalPrice: {
    fontSize: 15,
    color: color.price,
  },
  discountedPrice: {
    fontSize: 12,
    color: color.text,
    marginStart: 5,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
  },
  minusView: {
    height: 20,
    width: 20,
    borderRadius: 2,
    backgroundColor: color.primary,
    justifyContent: 'center',
  },
  cartActionView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  minus: {
    height: 10,
    width: 10,
    tintColor: color.white,
    alignSelf: 'center',
  },
  cartNumber: {
    fontSize: 15,
    color: color.black,
    marginHorizontal: 10,
  },
  addToCart: {
    fontSize: 15,
    color: color.primary,
    marginTop: 10,
  },
});

export default styles;
