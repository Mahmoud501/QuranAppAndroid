import React from 'react';
import {ScaledSheet} from 'react-native-size-matters';
import {View} from 'react-native';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';

// #region Styles
const styles = ScaledSheet.create({
  vuMain: {
    width: '8@msr',
    height: '8@msr',
    borderRadius: 4,
    marginHorizontal: '2@msr',
  },
  vuSelect: {
    backgroundColor: Colors.pinky,
    width: '15@msr',
  },
  vuNotSelect: {
    width: '8@msr',
    backgroundColor: Colors.lightGray,
  },
});
// #endregion

const CMPager = ({item}) => {
  if (item.select === true) {
    return <View style={[styles.vuMain, styles.vuSelect]} />;
  } else {
    return <View style={[styles.vuMain, styles.vuNotSelect]} />;
  }
};

export default CMPager;
