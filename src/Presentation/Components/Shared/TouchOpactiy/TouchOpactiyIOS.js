/* eslint-disable prettier/prettier */

import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

// #endregion

const TouchOpactiyIOS = ({children, style, onPress, activeOpacity, onLongPress}) => {
  return (
    <TouchableOpacity
      onLongPress={onLongPress}
      activeOpacity={activeOpacity ?? 0}
      onPress={onPress}
      style={style}>
      {children}
    </TouchableOpacity>
  );
};

export default TouchOpactiyIOS;
