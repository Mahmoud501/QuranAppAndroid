import React from 'react';
import {View, Text, FlatList, Dimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {Portal, Dialog} from 'react-native-paper';

import AppConstants from '../../../Infrastructure/Helper/Utils/AppConstants';
import AppImages from '../../../Infrastructure/Helper/Utils/AppImages';
import Colors from '../../../Infrastructure/Helper/Utils/Colors';
import {strings} from '../../../Infrastructure/Helper/Utils/i18n';
import TouchOpactiyIndex from '../Shared/TouchOpactiy/TouchOpactiyIndex';
import CMIconButton from '../Shared/Buttons/CMIconButton';
import CMAyahTafseerItem from '../Screen/CMAyahTafseerItem';
// #region Styles
const styles = ScaledSheet.create({
  vuDialog: {
    borderTopStartRadius: '15@msr',
    borderTopEndRadius: '15@msr',
    marginHorizontal: 0,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  vuBody: {},
  vuHeader: {},
  vuHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: '10@msr',
  },
  vuHeaderTitles: {},
  lblTitle: {
    fontFamily: AppConstants.FONT1_REGULAR,
    color: Colors.darkGray,
    fontSize: '15@msr',
    alignItems: 'center',
    textAlign: 'left',
  },
  lblSubTitle: {
    fontFamily: AppConstants.FONT1_MEDIUM,
    color: Colors.blue,
    fontSize: '13@msr',
    alignItems: 'center',
    textAlign: 'left',
  },
  btnIconClose: {
    width: '25@msr',
    height: '25@msr',
  },
  vuLine: {
    height: '0.5@msr',
    backgroundColor: Colors.lightGray,
  },
  vuList: {
    maxHeight: Dimensions.get('window').height * 0.8,
  },
});
// #endregion

const TafseerDialog = ({showDialog, onDismiss, onChangeTafseerPress}) => {
  const getItem = (item, index) => {
    return <CMAyahTafseerItem onPress={() => {}} />;
  };

  return (
    <Portal>
      <Dialog
        style={styles.vuDialog}
        visible={showDialog}
        onDismiss={onDismiss}>
        <View style={styles.vuBody}>
          <View style={styles.vuHeader}>
            <View style={styles.vuHeaderContent}>
              <View style={styles.vuHeaderTitles}>
                <Text style={styles.lblTitle}>{strings('tafseer')}</Text>
                <TouchOpactiyIndex
                  activeOpacity={0.3}
                  onPress={() => {
                    if (onChangeTafseerPress) {
                      onChangeTafseerPress();
                      onDismiss();
                    }
                  }}>
                  <Text style={styles.lblSubTitle}>Tafseer name</Text>
                </TouchOpactiyIndex>
              </View>
              <CMIconButton
                onPress={onDismiss}
                styleIcon={styles.btnIconClose}
                source={AppImages.gray_close_icon}
              />
            </View>
            <View style={styles.vuLine} />
          </View>
          <FlatList
            style={styles.vuList}
            data={[{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}]}
            renderItem={({item, index}) => getItem(item, index)}
            keyExtractor={item => `${item.id}`}
            bounces={true}
            numColumns={1}
            showsVerticalScrollIndicator={true}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </Dialog>
    </Portal>
  );
};

export default TafseerDialog;
