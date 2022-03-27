import React from 'react';
import {Text, View, Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Colors from '../../../Infrastructure/Helper/Utils/Colors';
import AppImages from '../../../Infrastructure/Helper/Utils/AppImages';
import AppConstants from '../../../Infrastructure/Helper/Utils/AppConstants';
import TouchOpactiyIndex from '../../../Presentation/Components/Shared/TouchOpactiy/TouchOpactiyIndex';
import CMGradientView from '../Shared/Lib/CMGradientView';

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
    color: Colors.black,
    fontSize: '15@msr',
    fontFamily: AppConstants.FONT1_REGULAR,
  },
  vuImage: {
    width: '40@msr',
    height: '40@msr',
    borderRadius: '20@msr',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vuNum: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    right: '-10@msr',
    top: '-8@msr',
    width: '20@msr',
    height: '20@msr',
    borderRadius: '10@msr',
    backgroundColor: Colors.red,
  },
  lblNum: {
    textAlign: 'center',
    color: Colors.white,
  },
});
// #endregion

const CMReciterOptionButton = ({
  img,
  title,
  style,
  iconStyle,
  onPress,
  badge,
}) => {
  return (
    <View style={[styles.vuMain, {...style}]}>
      <TouchOpactiyIndex
        onPress={onPress}
        activeOpacity={0.3}
        style={[styles.vuTouchMain]}>
        <View>
          <CMGradientView
            colors={[Colors.c2, Colors.c1]}
            style={styles.vuImage}>
            <Image
              style={[styles.imgBack, {...iconStyle}]}
              source={img ?? AppImages.print}
            />
          </CMGradientView>
          {badge && (
            <View style={styles.vuNum}>
              <Text style={styles.lblNum}>{badge}</Text>
            </View>
          )}
        </View>
        <Text style={styles.lblTitle}>{title ?? 'test'}</Text>
      </TouchOpactiyIndex>
    </View>
  );
};

export default CMReciterOptionButton;
