import {StyleSheet} from 'react-native';
import {color} from '../../../theme/color';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: color.white,
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  productName: {
    height: 45,
    color: color.black,
    width: '100%',
    borderColor: color.grey,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  productDesc: {
    color: color.black,
    width: '100%',
    borderColor: color.grey,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginTop: 20,
    minHeight: 100,
  },
  originalPrice: {
    height: 45,
    color: color.black,
    width: '100%',
    borderColor: color.grey,
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 15,
    marginTop: 20,
  },
  addProductImage: {
    fontSize: 14,
    color: color.primary,
    textAlign: 'center',
  },
  addProductImageView: {
    height: 40,
    width: '100%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: color.primary,
    justifyContent: 'center',
    marginTop: 20,
  },
  productImage: {
    fontSize: 14,
    color: color.primary,
    textAlign: 'center',
    marginTop: 15,
  },
  previewProductImage: {
    height: undefined,
    aspectRatio: 1,
    margin: 15,
  },
  addProduct: {
    fontSize: 14,
    color: color.white,
    textAlign: 'center',
  },
  addProductView: {
    height: 40,
    width: '100%',
    borderRadius: 5,
    backgroundColor: color.primary,
    justifyContent: 'center',
    marginTop: 40,
  },
});

export default styles;
