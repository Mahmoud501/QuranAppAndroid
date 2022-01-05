import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import Colors from '../../../../Infrastructure/Helper/Utils/Colors';
import AppConstants from '../../../../Infrastructure/Helper/Utils/AppConstants';

// #region Styles
const styles = ScaledSheet.create({
  vuMain: {
    height: '57@msr',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.darkblue,
    borderRadius: 12,
  },
  lblBack: {
    color: Colors.white,
    fontFamily: AppConstants.FONT1_MEDIUM,
    fontSize: '16@msr',
    lineHeight: '22@msr',
  },
});
// #endregion

const CMActionButton = ({style, labelStyle, title, onPress, disabled}) => {
  const getOpactiy = () => {
    if (disabled) {
      return {opacity: 0.4};
    }
    return {opacity: 1};
  };
  return (
    <TouchableOpacity
      style={[styles.vuMain, style, getOpactiy()]}
      onPress={onPress}
      disabled={disabled ?? false}>
      <Text style={[styles.lblBack, labelStyle]}>{title ?? '_title_'}</Text>
    </TouchableOpacity>
  );
};

export default CMActionButton;
