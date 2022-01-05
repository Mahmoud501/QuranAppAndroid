import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';
import AppConstants from '../../../../Infrastructure/Helper/Utils/AppConstants';

// #region Styles
const styles = ScaledSheet.create({
  vuMain: {
    flex: 1,
    padding: '15@msr',
    flexDirection: 'row',
    backgroundColor: Colors.alabaster,
    borderRadius: '8@msr',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lblText: {
    color: Colors.darkblue,
    fontFamily: AppConstants.FONT1_BOLD,
    fontSize: '16@msr',
  },
});
// #endregion
//Bg = view with background Image
const CMCollpseItem = ({style, title, value}) => {
  return (
    <View style={[styles.vuMain, {...style}]}>
      <Text style={styles.lblText}>{title ?? 'fff'}</Text>
      <Text style={styles.lblText}>{value ?? 'ffvv'}</Text>
    </View>
  );
};

export default CMCollpseItem;
