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
    alignItems: 'center',
  },
  imgBack: {
    width: '15@msr',
    height: '15@msr',
    marginEnd: '8@msr',
  },
  lblTitle: {
    color: Colors.c4,
    fontSize: '16@msr',
    fontFamily: AppConstants.FONT1_REGULAR,
  },
});
// #endregion

const CMIconTextButton = ({img, title, style, contentStyle, onPress}) => {
  return (
    <View style={[styles.vuMain, {...style}]}>
      <TouchOpactiyIndex
        activeOpacity={0.3}
        onPress={onPress}
        style={[styles.vuTouchMain, {...contentStyle}]}>
        <Image style={styles.imgBack} source={img ?? AppImages.print} />
        <Text style={styles.lblTitle}>{title ?? 'test'}</Text>
      </TouchOpactiyIndex>
    </View>
  );
};

export default CMIconTextButton;
