/* eslint-disable prettier/prettier */

import React from 'react';
import {TouchableOpacity} from 'react-native';

// #endregion

const TouchOpacityAndroid = ({children, style, onPress, activeOpacity, onLongPress}) => {
  return (
    <TouchableOpacity
      onLongPress={onLongPress}
      activeOpacity={activeOpacity ?? 0}
      style={style}
      onPress={onPress}>
      {children}
    </TouchableOpacity>
  );
};

export default TouchOpacityAndroid;
