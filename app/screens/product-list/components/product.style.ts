import {StyleSheet} from 'react-native';
import {color} from '../../../theme/color';

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: color.white,
    paddingHorizontal: 5,
    paddingVertical: 5,
  },
  plus: {
    height: 16,
    width: 16,
    tintColor: color.white,
    alignSelf: 'center',
  },
  floatButton: {
    height: 50,
    width: 50,
    borderRadius: 25,
    backgroundColor: color.primary,
    justifyContent: 'center',
    elevation: 10,
  },
  floatButtonView: {
    position: 'absolute',
    right: 40,
    bottom: 40,
  },
  floatCartButtonView: {
    position: 'absolute',
    right: 40,
    bottom: 100,
  },
});

export default styles;
