import React from 'react';
import {Text, View, Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Colors from '../../../Infrastructure/Helper/Utils/Colors';
import AppImages from '../../../Infrastructure/Helper/Utils/AppImages';
import AppConstants from '../../../Infrastructure/Helper/Utils/AppConstants';
import TouchOpactiyIndex from '../../../Presentation/Components/Shared/TouchOpactiy/TouchOpactiyIndex';

// #region Styles
const styles = ScaledSheet.create({
  vuMain: {
    alignItems: 'flex-start',
  },
  vuTouchMain: {
    alignItems: 'center',
    padding: '10@msr',
  },
  imgBack: {
    width: '20@msr',
    height: '20@msr',
    resizeMode: 'contain',
  },
  lblTitle: {
    color: Colors.c4,
    fontSize: '13@msr',
    fontFamily: AppConstants.FONT1_REGULAR,
  },
});
// #endregion

const CMOptionButton = ({img, title, style, iconStyle, onPress}) => {
  return (
    <View style={[styles.vuMain, {...style}]}>
      <TouchOpactiyIndex
        onPress={onPress}
        activeOpacity={0.3}
        style={[styles.vuTouchMain]}>
        <Image
          style={[styles.imgBack, {...iconStyle}]}
          source={img ?? AppImages.print}
        />
        <Text style={styles.lblTitle}>{title ?? 'test'}</Text>
      </TouchOpactiyIndex>
    </View>
  );
};

export default CMOptionButton;
