import React from 'react';
import {Text, View, Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';
import AppImages from '../../../../Infrastructure/Helper/Utils/AppImages';
import AppConstants from '../../../../Infrastructure/Helper/Utils/AppConstants';
import TouchOpactiyIndex from '../../../../Presentation/Components/Shared/TouchOpactiy/TouchOpactiyIndex';

// #region Styles
const styles = ScaledSheet.create({
  vuMain: {
    flexDirection: 'row',
  },
  vuTouchMain: {
    flexDirection: 'row',
  },
  imgBack: {
    marginEnd: '8@msr',
  },
  lblTitle: {
    color: Colors.darkblue,
    fontSize: '16@msr',
    fontFamily: AppConstants.FONT1_REGULAR,
  },
});
// #endregion

const CMRadioButton = ({isSelect, title, style, onPress}) => {
  return (
    <View style={[styles.vuMain, {...style}]}>
      <TouchOpactiyIndex onPress={onPress} style={styles.vuTouchMain}>
        <Image
          style={styles.imgBack}
          source={isSelect ? AppImages.radio_check : AppImages.radio_uncheck}
        />
        <Text style={styles.lblTitle}>{title}</Text>
      </TouchOpactiyIndex>
    </View>
  );
};

export default CMRadioButton;
