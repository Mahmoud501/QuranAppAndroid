import React from 'react';
import {View, Text, Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import AppConstants from '../../../../Infrastructure/Helper/Utils/AppConstants';
import AppImages from '../../../../Infrastructure/Helper/Utils/AppImages';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';
import TouchOpactiyIndex from '../../Shared/TouchOpactiy/TouchOpactiyIndex';

// #region Styles
const styles = ScaledSheet.create({
  vuMain: {},
  vuContent: {
    padding: '12@msr',
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.62,
    elevation: 4,
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
    color: Colors.darkGray,
  },
});
// #endregion

const CMAyahHeaderItem = ({style}) => {
  return (
    <View style={[styles.vuMain, {...style}]}>
      <View style={styles.vuContent}>
        <TouchOpactiyIndex activeOpacity={0.2}>
          <Image style={styles.imgCheck} source={AppImages.unchecked} />
        </TouchOpactiyIndex>
        <Text style={styles.lblTitle}>Section Title</Text>
      </View>
    </View>
  );
};

export default CMAyahHeaderItem;
