// /**
//  * @flow
//  */

// import {Platform} from 'react-native';
// import PushNotification from 'react-native-push-notification';
// import PushNotificationIOS from '@react-native-community/push-notification-ios';
// import {EventRegister} from 'react-native-event-listeners';

// import type {FirebaseMessagingTypes} from '@react-native-firebase/messaging';

// import Colors from '../utils/Colors';

// import {strings} from '../../locales/i18n';

// import {getCurrentRouteName, navigate} from '../navigation/RootNavigation';

// import Notification from '../model/Entities/Notification';

// function getLogMessage(message: string): string {
//   return `NotificationsUtils::${message}`;
// }

// export const defaultChannelName: string =
//   'easy_buy_default_notification_channel';

// export const localChannelName: string = 'easy_buy_local_notification_channel';

// export const notificationScreenName: string = 'FAQPage';

// /**
//  * Check notification type and open screen based on that type.
//  *
//  * @param {Notification} notification
//  */
// export function openNotificationRelatedScreen(
//   notification: Notification,
// ): void {
//   let screenName: ?string = null;
//   let params: ?Object = null;
//   // if (notification.model_type == 1) {
//   //   if (notification.type == 'live_auction_start') {
//   //     screenName = 'LiveAuctionDetailPage';
//   //     params = {auction: {id: notification.itemId}};
//   //   } else {
//   //     screenName = 'ProductDetailPage';
//   //     params = {id: notification.itemId};
//   //   }
//   // }
//   // screenName = 'FAQPage';

//   if (screenName && getCurrentRouteName() !== screenName) {
//     navigate(screenName, params);
//   }
// }

// export async function processNotification(
//   notification: Notification,
// ): Promise<void> {
//   console.info(getLogMessage('processNotification'), notification);

//   // Clear notifications and badge.
//   PushNotification.cancelAllLocalNotifications();

//   if (Platform.OS === 'ios') {
//     PushNotificationIOS.removeAllDeliveredNotifications();
//   }

//   PushNotification.setApplicationIconBadgeNumber(0);

//   // Get user.
//   console.info(getLogMessage('User Available'));

//   // Send event to hide notifications dot.
//   EventRegister.emit('messageOpened');

//   // Open notification related screen.
//   openNotificationRelatedScreen(notification);
// }

// export function displayLocalNotification(
//   //$FlowIssue[value-as-type]
//   remoteMessage: FirebaseMessagingTypes.RemoteMessage,
// ): void {
//   console.info(getLogMessage('displayLocalNotification'));

//   // If notification data available show local notification.
//   if (remoteMessage.notification && remoteMessage.notification.body) {
//     console.info(
//       getLogMessage('Notification Available'),
//       remoteMessage.notification,
//     );

//     PushNotification.localNotification({
//       title: remoteMessage.notification.title
//         ? remoteMessage.notification.title
//         : strings('app_name'),
//       message: remoteMessage.notification.body,
//       bigText: remoteMessage.notification.body,
//       color: Colors.primary,
//       channelId: localChannelName,
//       soundName: 'default',
//       messageId: remoteMessage.messageId,
//       userInfo: remoteMessage.data,
//     });
//   }
// }
