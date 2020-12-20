import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {ProductListScreen} from '../screens/product-list/product-list.screen';
import {PrimaryParamList} from './types';
import {AddProductScreen} from '../screens/add-product/add-product.screen';
import {PreviewProductImageScreen} from '../screens/add-product/preivew-product-image.screen';
import {CartListScreen} from '../screens/cart-list/cart-list.screen';

const Stack = createStackNavigator<PrimaryParamList>();

export function PrimaryNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        gestureEnabled: true,
      }}>
      <Stack.Screen name="productList" component={ProductListScreen} />
      <Stack.Screen name="addProduct" component={AddProductScreen} />
      <Stack.Screen name="cartList" component={CartListScreen} />
      <Stack.Screen
        name="previewProductImage"
        component={PreviewProductImageScreen}
      />
    </Stack.Navigator>
  );
}

export const exitRoutes: string[] = ['home'];
