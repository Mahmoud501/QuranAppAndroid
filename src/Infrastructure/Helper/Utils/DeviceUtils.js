import {Platform} from 'react-native';
import {getUniqueId, getDeviceId} from 'react-native-device-info';

export const getAppDeviceId = () => {
  return getUniqueId();
};

export const getAppDevicName = () => {
  return `${Platform.OS} ${getDeviceId()}`;
};
