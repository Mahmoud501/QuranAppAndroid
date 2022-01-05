/* eslint-disable prettier/prettier */

import React from 'react';
import {Platform, Text} from 'react-native';
import TouchOpacityAndroid from './TouchOpacityAndroid';
import TouchOpactiyIOS from './TouchOpactiyIOS';

// #endregion

const TouchOpactiyIndex = ({children, style, onPress, activeOpacity}) => {
  if (Platform.OS == 'ios') {
    return (
      <TouchOpactiyIOS
        activeOpacity={activeOpacity}
        onPress={onPress}
        style={style}>
        {children}
      </TouchOpactiyIOS>
    );
  } else {
    return (
      <TouchOpacityAndroid
        activeOpacity={activeOpacity}
        onPress={onPress}
        style={style}>
        {children}
      </TouchOpacityAndroid>
    );
  }
};

export default TouchOpactiyIndex;
