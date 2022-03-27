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
    width: '12@msr',
    height: '20@msr',
  },
  lblBack: {
    color: Colors.c4,
    fontFamily: AppConstants.FONT1_BOLD,
    fontSize: '16@msr',
    height: '100%',
    marginStart: '10@msr',
  },
});
// #endregion
// take onBack or navigation but nessary take one of them
const CMBackButton = ({
  style,
  iconStyle,
  onBack,
  navigation,
  title,
  isHidden,
  lblStyle,
}) => {
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
      {!isHidden && (
        <Image
          style={[styles.imgBack, {...iconStyle}, {opacity: isHidden ? 0 : 1}]}
          source={
            getCurrentLocale() === 'ar'
              ? AppImages.backRight_white
              : AppImages.backLeft_white
          }
        />
      )}

      {title && <Text style={[styles.lblBack, {...lblStyle}]}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default CMBackButton;
