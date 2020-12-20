import {useState} from 'react';
import {useSelector} from 'react-redux';
import {ProductDataType} from './add-product-field-types';
import {useRoute, useNavigation} from '@react-navigation/native';
import {store} from '../../../store/store';
import {addNewProduct} from '../../../store/screens/products-list';
import Toast from 'react-native-simple-toast';
import {getUniqueID} from '../../../utils/utils';
import {strings} from '../../../utils/strings';

const onPreviewProductImage = (navigation: any, imageUri: any) => {
  navigation.navigate('previewProductImage', {imageUri: imageUri});
};

function showToast(message: any) {
  Toast.show(message, Toast.LONG);
}

const addProduct = (
  productData: ProductDataType,
  productsList: any,
  navigation: any,
) => {
  if (!productData.productName) {
    showToast(strings.enterProductName);
  } else if (!productData.productDesc) {
    showToast(strings.enterProductDesc);
  } else if (!productData.originalPrice) {
    showToast(strings.enterProductOriginalPrice);
  } else if (!productData.discountedPrice) {
    showToast(strings.enterProductDiscountedPrice);
  } else if (!productData.productImage) {
    showToast(strings.addProductImage);
  } else {
    let product = {...productData};
    product.id = getUniqueID();
    let list: any = {...productsList};
    let newList = [...list.productsList];
    newList.push(product);
    store.dispatch(addNewProduct(newList));
    navigation.goBack();
  }
};

export function useAddProduct() {
  const productsList = useSelector((state: any) =>
    Object.assign(state.productsList),
  );
  const productDataType: ProductDataType = {
    id: '',
    productName: '',
    productDesc: '',
    originalPrice: '',
    discountedPrice: '',
    productImage: '',
    cartNumber: 0,
    cartAdded: false,
  };
  const [productData, setProductData] = useState(productDataType);
  const {params} = useRoute();
  const navigation = useNavigation();
  const onPreviewProductImagePress = (imageUri: any) =>
    onPreviewProductImage(navigation, imageUri);
  const onAddProductPress = () =>
    addProduct(productData, productsList, navigation);
  return {
    productsList,
    productData,
    setProductData,
    params,
    onPreviewProductImagePress,
    onAddProductPress,
  };
}
