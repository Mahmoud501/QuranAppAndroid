import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import AppConstants from '../../../Infrastructure/Helper/Utils/AppConstants';
import Colors from '../../../Infrastructure/Helper/Utils/Colors';
import {strings} from '../../../Infrastructure/Helper/Utils/i18n';

// #region Styles
const styles = ScaledSheet.create({
  vuMain: {
    flex: 1,
    padding: '10@msr',
    backgroundColor: Colors.white,
  },
  vuBody: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '10@msr',
    marginVertical: '5@msr',
    justifyContent: 'space-between',
  },
  imgReader: {
    width: '80@msr',
    height: '80@msr',
    marginEnd: '15@msr',
    borderTopStartRadius: '8@msr',
    borderBottomStartRadius: '8@msr',
  },
  vuContainTexts: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  lblTitle: {
    fontFamily: AppConstants.FONT1_BOLD,
    fontSize: '18@msr',
    color: Colors.darkGray,
  },
  lblSurhaNum: {
    marginStart: '10@msr',
    fontFamily: AppConstants.FONT1_REGULAR,
    fontSize: '18@msr',
    color: Colors.c2,
  },
  vuProgress: {
    borderRadius: '20@msr',
    backgroundColor: Colors.c4,
    padding: '4@msr',
  },
  imgDownload: {
    width: '18@msr',
    height: '18@msr',
  },
  vuLine: {
    width: '100%',
    height: '0.5@msr',
    backgroundColor: Colors.c5,
  },
});
// #endregion

const CMMemorizedItem = ({style, item}) => {
  return (
    <View style={[styles.vuMain, style]}>
      <View style={styles.vuBody}>
        <View style={styles.vuContainTexts}>
          <Text style={styles.lblTitle}>{strings('current_surha')}</Text>
          <Text style={styles.lblSurhaNum}>(1/6236)</Text>
        </View>
      </View>
      <View style={styles.vuLine} />
    </View>
  );
};

export default CMMemorizedItem;
