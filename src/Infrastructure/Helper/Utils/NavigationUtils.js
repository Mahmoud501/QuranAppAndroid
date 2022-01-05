/**
 * @flow
 */
import {DrawerActions} from '@react-navigation/native';

export function navigateFromParent(
  navigation: any,
  destination: string,
  params?: ?Object = null,
): void {
  if (
    navigation &&
    navigation.dangerouslyGetParent() &&
    navigation.dangerouslyGetParent() !== undefined
  ) {
    navigation.dangerouslyGetParent().navigate(destination, params);
  }
}

export function replaceFromParent(
  navigation: any,
  destination: string,
  params?: ?Object = null,
): void {
  if (
    navigation &&
    navigation.dangerouslyGetParent() &&
    navigation.dangerouslyGetParent() !== undefined
  ) {
    navigation.dangerouslyGetParent().replace(destination, params);
  }
}

export function goBackFromParent(navigation: any): void {
  if (
    navigation &&
    navigation.dangerouslyGetParent() &&
    navigation.dangerouslyGetParent() !== undefined
  ) {
    navigation.dangerouslyGetParent().goBack();
  }
}

export function toggleMenu(navigation: any, open: Boolean): void {
  if (open) {
    navigation.dispatch(DrawerActions.openDrawer());
  } else {
    navigation.dispatch(DrawerActions.closeDrawer());
  }
}
