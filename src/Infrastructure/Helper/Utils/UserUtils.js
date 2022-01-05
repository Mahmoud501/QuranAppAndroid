/**
 * @format
 * @flow
 */

// import {Platform} from 'react-native';
// import messaging from '@react-native-firebase/messaging';
// import PushNotification from 'react-native-push-notification';
// import PushNotificationIOS from '@react-native-community/push-notification-ios';
import {EventRegister} from 'react-native-event-listeners';

import {EVENT_USER_DATA_CHANGED} from './EventUtils';

// import {navigate} from '../../../Presentation/navigation/RootNavigation';

import User from '../../../Domain/Entity/Model/UserModel';
import AppConstants from './AppConstants';
import {getData, setData} from '../../Repos/CacheRepo/AsyncStorageUtils';

const getLogMessage: (message: string) => string = (message: string) => {
  return `#_UserUtils_#: ${message}`;
};

export default class UserUtils {
  static myInstance: ?UserUtils = null;

  user: ?User = null;

  static getInstance: () => ?UserUtils = (): ?UserUtils => {
    if (UserUtils.myInstance == null) {
      UserUtils.myInstance = new UserUtils();
    }

    return this.myInstance;
  };

  getUser: () => ?User = (): ?User => {
    return this.user;
  };

  getToken: () => ?string = (): ?string => {
    if (this.user) {
      return this.user?.token_type + ' ' + this.user?.access_token;
    } else {
      return null;
    }
  };

  setUser = user => {
    console.info('setUser', user);
    setData(AppConstants.USERAPI_KEY, user);
    this.user = user;
    EventRegister.emit(EVENT_USER_DATA_CHANGED);
  };

  removeUser: () => void = (): void => {
    console.info(getLogMessage('removeUser'));
    this.user = null;
    EventRegister.emit(EVENT_USER_DATA_CHANGED);
  };

  removeUserDataAndLogout: () => void = (): void => {
    console.info(getLogMessage('removeUserDataAndLogout'));

    try {
      // Unregister notifications.
      this.unregisterNotifications();

      // Remove user data saved locally and open home.
      this.removeDataAndLogout();
    } catch (error) {
      console.error(getLogMessage('removeUserDataAndLogout'), error);

      // Remove user data saved locally and open home.
      this.removeDataAndLogout();
    }
  };

  // unregisterNotifications: () => void = (): void => {
  //   console.info(getLogMessage('unregisterNotifications'));

  //   try {
  //     // Clear notifications and badge.
  //     PushNotification.cancelAllLocalNotifications();

  //     if (Platform.OS === 'ios') {
  //       PushNotificationIOS.removeAllDeliveredNotifications();
  //     }

  //     PushNotification.setApplicationIconBadgeNumber(0);

  //     // Delete FCM token.
  //     // messaging().deleteToken();
  //   } catch (error) {
  //     console.error(getLogMessage('unregisterNotifications'), error);
  //   }
  // };

  removeDataAndLogout: () => void = (): void => {
    console.info(getLogMessage('removeDataAndLogout'));
    //remove current user from local storage
    setData(AppConstants.USERAPI_KEY, null);
    // Remove current user instance.
    this.removeUser();

    // Navigate to home.
  };

  getCacheUser = (): void => {
    return getData(AppConstants.USERAPI_KEY);
  };
}
