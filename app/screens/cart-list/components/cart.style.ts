import {StyleSheet} from 'react-native';
import {color} from '../../../theme/color';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: color.white,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  flatList: {
    flex: 1,
  },
  cartCountView: {
    height: 40,
    width: '100%',
    backgroundColor: color.primary,
    justifyContent: 'center',
  },
  cartCount: {
    fontSize: 16,
    color: color.white,
    alignSelf: 'center',
  },
});

export default styles;
