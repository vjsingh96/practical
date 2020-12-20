import {StyleSheet, Platform, StatusBar} from 'react-native';
import {color} from '../../theme/color';

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 40 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 0 : 0;

const styles = StyleSheet.create({
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: color.white,
    height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: color.white,
  },
});

export default styles;
