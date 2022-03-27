import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import AppConstants from '../../../Infrastructure/Helper/Utils/AppConstants';
import Colors from '../../../Infrastructure/Helper/Utils/Colors';
import TouchOpactiyIndex from '../Shared/TouchOpactiy/TouchOpactiyIndex';

// #region Styles
const styles = ScaledSheet.create({
  vuMain: {
    flex: 1,
    padding: '10@msr',
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
  vuContainTexts: {},
  vuTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lblTitle: {
    fontFamily: AppConstants.FONT1_BOLD,
    fontSize: '15@msr',
    color: Colors.c4,
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

const CMCompleteItem = ({style, item, onPress, drag}) => {
  return (
    <View>
      <TouchOpactiyIndex
        onLongPress={drag}
        activeOpacity={0.5}
        style={[styles.vuMain, {...style}]}
        onPress={onPress}>
        <View style={styles.vuContainTexts}>
          <Text style={styles.lblTitle}>Ayah</Text>
        </View>
      </TouchOpactiyIndex>
      <View style={styles.vuLine} />
    </View>
  );
};

export default CMCompleteItem;
