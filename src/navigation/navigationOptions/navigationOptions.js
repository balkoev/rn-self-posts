import { THEME } from '../../theme';
import { Platform } from 'react-native';

export const screenDefaultOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? THEME.MAIN_COLOR : '#fff',
  },
  headerTintColor: Platform.OS === 'android' ? '#fff' : THEME.MAIN_COLOR,
};
