import {useNavigation} from '@react-navigation/native';

const onBack = (navigation: any) => {
  navigation.goBack();
};

export function useHeader() {
  const navigation = useNavigation();
  const onBackPress = () => onBack(navigation);

  return {
    onBackPress,
  };
}
