import * as React from 'react';
import {StatusBar, View, SafeAreaView} from 'react-native';
import {ScreenProps} from './screen.props';
import {color} from '../../theme/color';
import styles from './screen.styles';

function MyScreen(props: ScreenProps) {
  const {headerTextStyle, headerTitle, leftText} = props;
  const style = props.style || {};
  return (
    <SafeAreaView style={[styles.content]}>
      <StatusBar
        backgroundColor={color.primary}
        barStyle={props.statusBar || 'light-content'}
      />
      <View style={[styles.content, style]}>{props.children}</View>
    </SafeAreaView>
  );
}

export function Screen(props: ScreenProps) {
  return <MyScreen {...props} />;
}
