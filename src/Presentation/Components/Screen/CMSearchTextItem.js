import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import AppConstants from '../../../Infrastructure/Helper/Utils/AppConstants';

import Colors from '../../../Infrastructure/Helper/Utils/Colors';
import TouchOpactiyIndex from '../Shared/TouchOpactiy/TouchOpactiyIndex';

// #region Styles
const styles = ScaledSheet.create({
  vuMain: {},
  vuContent: {
    padding: '12@msr',
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgCheck: {
    width: '18@msr',
    height: '18@msr',
    marginEnd: '10@msr',
  },
  lblTitle: {
    fontFamily: AppConstants.FONT1_REGULAR,
    fontSize: '14@msr',
    color: Colors.black,
  },
  vuLine: {
    height: '1@msr',
    backgroundColor: Colors.c5,
    marginHorizontal: '10@msr',
  },
});
// #endregion

const CMSearchTextItem = ({style, onPress}) => {
  return (
    <View style={[styles.vuMain, {...style}]}>
      <TouchOpactiyIndex
        activeOpacity={0.5}
        onPress={onPress}
        style={styles.vuContent}>
        <Text style={styles.lblTitle}>Section Title</Text>
      </TouchOpactiyIndex>
      <View style={styles.vuLine} />
    </View>
  );
};

export default CMSearchTextItem;
