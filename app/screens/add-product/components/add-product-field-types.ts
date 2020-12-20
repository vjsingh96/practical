const types = {
  productName: 'productName',
  productDesc: 'productDesc',
  originalPrice: 'originalPrice',
  discountedPrice: 'discountedPrice',
  productImage: 'productImage',
};

export type FieldTypes = keyof typeof types;

export interface ProductDataType {
  id: any;
  productName: any;
  productDesc: any;
  originalPrice: any;
  discountedPrice: any;
  productImage: any;
  cartNumber: any;
  cartAdded: boolean;
}
