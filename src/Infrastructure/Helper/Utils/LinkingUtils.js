import {Linking, Platform} from 'react-native';

export const goMap = (lat, lng, labelTitle) => {
  const scheme = Platform.select({
    ios: 'maps:0,0?q=',
    android: 'geo:0,0?q=',
  });
  const latLng = `${lat},${lng}`;
  const label = labelTitle;
  const url = Platform.select({
    ios: `${scheme}${label}@${latLng}`,
    android: `${scheme}${latLng}(${label})`,
  });

  Linking.openURL(url);
};

export const goWeb = url => {
  try {
    Linking.openURL(url);
  } catch (err) {
    console.error(err.message);
  }
};

export const goPhone = phone => {
  try {
    Linking.openURL(`tel:${phone}`);
  } catch (err) {
    console.error(err.message);
  }
};
