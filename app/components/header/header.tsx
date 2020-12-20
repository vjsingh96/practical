import * as React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import {icons} from '../../assets';
import {useHeader} from './header.hooks';
import {HeaderProps} from './header.props';
import styles from './header.styles';

export function Header(props: HeaderProps) {
  const {headerTitle, back = true} = props;
  const {onBackPress} = useHeader();
  return (
    <View style={styles.content}>
      {back && (
        <TouchableOpacity onPress={onBackPress} style={styles.backView}>
          <Image style={styles.back} source={icons.back} />
        </TouchableOpacity>
      )}
      <Text style={styles.headerTextStyle}>{headerTitle}</Text>
    </View>
  );
}
