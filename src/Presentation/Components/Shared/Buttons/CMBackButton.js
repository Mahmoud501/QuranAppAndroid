import React from 'react';
import {Image, TouchableOpacity, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';
import AppImages from '../../../../Infrastructure/Helper/Utils/AppImages';
import {getCurrentLocale} from '../../../../Infrastructure/Helper/Utils/i18n';
import AppConstants from '../../../../Infrastructure/Helper/Utils/AppConstants';

// #region Styles
const styles = ScaledSheet.create({
  vuMain: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgBack: {
    width: '20@msr',
    height: '15@msr',
  },
  lblBack: {
    color: Colors.darkblue,
    fontFamily: AppConstants.FONT1_REGULAR,
    fontSize: '16@msr',
    height: '100%',
    marginStart: '15@msr',
  },
});
// #endregion
// take onBack or navigation but nessary take one of them
const CMBackButton = ({style, onBack, navigation, title}) => {
  return (
    <TouchableOpacity
      style={[styles.vuMain, {...style}]}
      onPress={() => {
        if (onBack) {
          onBack();
        } else {
          navigation.goBack();
        }
      }}>
      <Image
        style={styles.imgBack}
        source={
          getCurrentLocale() === 'ar'
            ? AppImages.backRight_blue
            : AppImages.backLeft_blue
        }
      />
      {title && <Text style={styles.lblBack}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default CMBackButton;
