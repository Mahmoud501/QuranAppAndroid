/**
 * @flow
 */

import ReactNative, {Platform, NativeModules} from 'react-native';
// import RNRestart from 'react-native-restart';
import userDefaults from 'react-native-user-defaults';
import I18n from 'i18n-js';
import * as Localization from 'react-native-localization';
import {LANGUAGE_KEY} from './AppConstants';
import {getData} from '../../Repos/CacheRepo/AsyncStorageUtils';

// Import all locales.
import ar from '../../../Configuration/locales/ar.json';
import en from '../../../Configuration/locales/en.json';

// Get device language.
const deviceLanguage =
  Platform.OS === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale ||
      NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
    : NativeModules.I18nManager.localeIdentifier;

export const defaultLocale =
  deviceLanguage.toLowerCase().indexOf('en') > -1 ? 'en' : 'ar';

I18n.locale = Localization.locale;

// If an English translation is not available in en.js, it will look inside ar.js
I18n.fallbacks = true;

// It will convert HOME_noteTitle to "HOME note title"
// if the value of HOME_noteTitle doesn't exist in any of the translation files.
I18n.missingBehaviour = 'guess';

// If the current locale in device is not en or ar.
I18n.defaultLocale = defaultLocale;

// Set the locale.
I18n.locale = defaultLocale;

// Define the supported translations.
I18n.translations = {
  ar,
  en,
};

// Get user language.
// Set the user language if available.
getData(LANGUAGE_KEY).then(userLanguage => {
  if (userLanguage) {
    I18n.locale = userLanguage;
    ReactNative.I18nManager.allowRTL(userLanguage === 'ar');
    ReactNative.I18nManager.forceRTL(userLanguage === 'ar');
  } else {
    setLocale('en');
  }
});

export const setLocale = locale => {
  I18n.locale = locale;
  userDefaults.set(LANGUAGE_KEY, locale).then(data => console.log(data)); // Save success
  ReactNative.I18nManager.forceRTL(locale === 'ar');
  ReactNative.I18nManager.allowRTL(locale === 'ar');
  // if (!ReactNative.I18nManager.isRTL) {
  //   RNRestart.Restart();
  // }
};

export const getCurrentLocale = (): string => {
  return I18n.locale;
};

// The method we'll use instead of a regular string.
export const strings = (name: string, params: Object = {}): string => {
  return I18n.t(name, params);
};

export default I18n;
