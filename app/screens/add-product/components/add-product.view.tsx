import React from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  PermissionsAndroid,
  Alert,
} from 'react-native';
import {FieldTypes, ProductDataType} from './add-product-field-types';
import styles from './add-product.style';
import DocumentPicker from 'react-native-document-picker';
import {useAddProduct} from './add-product.hooks';

export interface AddProductProps {
  productList?: any[];
  productData?: ProductDataType;
  onTextChange: (value: any, type: FieldTypes) => any;
  onAddProduct: () => any;
}

export function AddProductView(props: AddProductProps) {
  const {productData, onTextChange, onAddProduct} = props;
  const {onPreviewProductImagePress} = useAddProduct();

  const addProductImage = async () => {
    const granted = await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
    );
    if (granted === PermissionsAndroid.RESULTS.GRANTED) {
      try {
        const res = await DocumentPicker.pick({
          type: [DocumentPicker.types.images],
        });
        if (res.uri) {
          onTextChange(res.uri, 'productImage');
        }
      } catch (err) {
        if (DocumentPicker.isCancel(err)) {
        } else {
          throw err;
        }
      }
    } else {
      Alert.alert('', 'Permission is required to add product image');
    }
  };
  return (
    <ScrollView keyboardShouldPersistTaps={'handled'}>
      <View style={styles.root}>
        <TextInput
          value={productData?.productName}
          onChangeText={(value) => {
            onTextChange(value, 'productName');
          }}
          style={styles.productName}
          placeholder={'Product Name'}
        />

        <TextInput
          value={productData?.productDesc}
          onChangeText={(value) => {
            onTextChange(value, 'productDesc');
          }}
          multiline
          style={styles.productDesc}
          placeholder={'Product Description'}
        />

        <TextInput
          value={productData?.originalPrice}
          onChangeText={(value) => {
            onTextChange(value, 'originalPrice');
          }}
          multiline
          keyboardType={'number-pad'}
          style={styles.originalPrice}
          placeholder={'Original Price'}
        />

        <TextInput
          value={productData?.discountedPrice}
          onChangeText={(value) => {
            onTextChange(value, 'discountedPrice');
          }}
          multiline
          keyboardType={'number-pad'}
          style={styles.originalPrice}
          placeholder={'Discounted Price'}
        />

        <TouchableOpacity onPress={addProductImage}>
          <View style={styles.addProductImageView}>
            <Text style={styles.addProductImage}>{'Add product image'}</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            onPreviewProductImagePress(productData?.productImage);
          }}>
          <Text style={styles.productImage}>
            {productData?.productImage && 'Preview product image'}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onAddProduct}>
          <View style={styles.addProductView}>
            <Text style={styles.addProduct}>{'ADD PRODUCT'}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
