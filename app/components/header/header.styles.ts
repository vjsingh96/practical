import {StyleSheet} from 'react-native';
import {color} from '../../theme/color';

const styles = StyleSheet.create({
  content: {
    backgroundColor: color.primary,
    height: 45,
    width: '100%',
    elevation: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  back: {
    height: 25,
    width: 25,
    tintColor: color.white,
  },
  backView: {
    height: 45,
    paddingStart: 20,
    paddingEnd: 25,
    justifyContent: 'center',
  },
  headerTextStyle: {
    fontSize: 17,
    color: color.white,
    flex: 1,
    marginStart: 15,
  },
});

export default styles;
