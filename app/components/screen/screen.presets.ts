import {ViewStyle} from 'react-native';
import {color} from '../../theme/color';

/**
 * All screen keyboard offsets.
 */
export const offsets = {
  none: 0,
};

/**
 * The variations of keyboard offsets.
 */
export type KeyboardOffsets = keyof typeof offsets;

/**
 * All the variations of screens.
 */
export const presets = {
  /**
   * No scrolling. Suitable for full-screen carousels and components
   * which have built-in scrolling like FlatList.
   */
  fixed: {
    outer: {
      backgroundColor: color.white,
      flex: 1,
    } as ViewStyle,
    inner: {
      backgroundColor: color.white,
      flex: 1,
    } as ViewStyle,
  },

  /**
   * Scrolls. Suitable for forms or other things requiring a keyboard.
   *
   * Pick this one if you don't know which one you want yet.
   */
};

/**
 * The variations of screens.
 */
export type ScreenPresets = keyof typeof presets;
