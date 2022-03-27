import React from 'react';
import {Image, LayoutAnimation, Text, View} from 'react-native';
import {ms, ScaledSheet} from 'react-native-size-matters';
import CMAyahHeaderItem from '../../../../Components/Screen/CMHome/CMAyahHeaderItem';
import CMAyah from '../../../../Components/Screen/CMHome/CMAyah';
import {SwipeListView} from 'react-native-swipe-list-view';
import TouchOpactiyIndex from '../../../../Components/Shared/TouchOpactiy/TouchOpactiyIndex';
import AppImages from '../../../../../Infrastructure/Helper/Utils/AppImages';
import {
  getCurrentLocale,
  strings,
} from '../../../../../Infrastructure/Helper/Utils/i18n';
import Colors from '../../../../../Infrastructure/Helper/Utils/Colors';
import AppConstants from '../../../../../Infrastructure/Helper/Utils/AppConstants';
import {NavigationContainer} from '@react-navigation/native';

const styles = ScaledSheet.create({
  vuContentList: {paddingBottom: '80@msr'},
  vuContainListButtons: {
    backgroundColor: Colors.c6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: '15@msr',
    height: '100%',
  },
  vuContainButton: {
    alignItems: 'center',
    marginStart: '20@msr',
  },
  imgIcon: {
    width: '20@msr',
    height: '20@msr',
  },
  lblAction: {
    fontFamily: AppConstants.FONT1_REGULAR,
    fontSize: '14@msr',
    color: Colors.black,
  },
});

const MainFlatList = props => {
  // Set Deep state what mean deep that means all variable will be one object state rather than every variable in single state
  // showLangDialog
  const {controller} = props;
  //UIAction

  //UI Component
  const getItem = item => {
    return (
      <CMAyah
        onPress={() => {
          setTimeout(() => {
            LayoutAnimation.easeInEaseOut();
            controller?.showBasmalaView();
          });
        }}
      />
    );
  };

  const getListButtons = isHidden => {
    let style = {opacity: isHidden ? 0 : 1, flexDirection: 'row'};
    return (
      <View style={style}>
        <TouchOpactiyIndex style={styles.vuContainButton} onPress={() => {}}>
          <Image style={styles.imgIcon} source={AppImages.share} />
          <Text style={styles.lblAction}>{strings('share')}</Text>
        </TouchOpactiyIndex>
        <TouchOpactiyIndex style={styles.vuContainButton} onPress={() => {}}>
          <Image
            style={[styles.imgIcon, {width: ms(15)}]}
            source={AppImages.unfill_mark}
          />
          <Text style={styles.lblAction}>{strings('mark')}</Text>
        </TouchOpactiyIndex>
        <TouchOpactiyIndex
          style={styles.vuContainButton}
          onPress={() => {
            controller?.navigation.navigate('AyahDetailsPage');
          }}>
          <Image
            style={[styles.imgIcon, {width: ms(20)}]}
            source={AppImages.details}
          />
          <Text style={styles.lblAction}>{strings('details')}</Text>
        </TouchOpactiyIndex>
      </View>
    );
  };
  // Render UI Contain Screen
  return (
    <SwipeListView
      useSectionList
      contentContainerStyle={styles.vuContentList}
      stickySectionHeadersEnabled={true}
      sections={
        controller?.list ?? [
          {
            id: 1,
            data: [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}],
          },
          {
            id: 2,
            data: [{id: 1}, {id: 2}, {id: 3}, {id: 4}, {id: 5}, {id: 6}],
          },
        ]
      }
      keyExtractor={item => `${item.id}`}
      renderItem={({item}) => getItem(item)}
      renderSectionHeader={({section}) => <CMAyahHeaderItem />}
      bounces={true}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      leftOpenValue={getCurrentLocale() === 'en' ? 0 : ms(180)}
      rightOpenValue={getCurrentLocale() === 'en' ? ms(-180) : 0}
      renderHiddenItem={(data, rowMap) => {
        return (
          <View style={styles.vuContainListButtons}>
            {getListButtons(true)}
            {getListButtons(false)}
          </View>
        );
      }}
    />
  );
};

//Export screen Here
export default MainFlatList;
