import React from 'react';
import {View, Image, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import AppConstants from '../../../Infrastructure/Helper/Utils/AppConstants';
import AppImages from '../../../Infrastructure/Helper/Utils/AppImages';
import Colors from '../../../Infrastructure/Helper/Utils/Colors';
import TouchOpactiyIndex from '../Shared/TouchOpactiy/TouchOpactiyIndex';

// #region Styles
const styles = ScaledSheet.create({
  vuMain: {
    flex: 1,
    backgroundColor: Colors.c6,
  },
  vuBody: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '20@msr',
    marginVertical: '10@msr',
    backgroundColor: Colors.white,
    borderRadius: '8@msr',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  imgReader: {
    width: '80@msr',
    height: '80@msr',
    marginEnd: '15@msr',
    borderTopStartRadius: '8@msr',
    borderBottomStartRadius: '8@msr',
  },
  lblTitle: {
    fontFamily: AppConstants.FONT1_MEDIUM,
    fontSize: '15@msr',
    color: Colors.black,
  },
});
// #endregion

const ReaderItem = ({style, item, onPress}) => {
  return (
    <View style={[styles.vuMain, style]}>
      <TouchOpactiyIndex
        activeOpacity={0.5}
        style={styles.vuBody}
        onPress={onPress}>
        <Image
          style={styles.imgReader}
          source={item?.img ?? AppImages.reciterTest}
        />
        <Text style={styles.lblTitle}>{item?.name ?? 'Reciter Name'}</Text>
      </TouchOpactiyIndex>
    </View>
  );
};

export default ReaderItem;
