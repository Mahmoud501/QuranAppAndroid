import React from 'react';
import {View, Text, Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';
import AppConstants from '../../../../Infrastructure/Helper/Utils/AppConstants';
import TouchOpactiyIndex from '../TouchOpactiy/TouchOpactiyIndex';
import CMCollpseItem from './CMCollpseItem';
import AppImages from '../../../../Infrastructure/Helper/Utils/AppImages';

// #region Styles
const styles = ScaledSheet.create({
  vuMain: {
    flex: 1,
    padding: '15@msr',
    flexDirection: 'row',
    backgroundColor: Colors.alabaster,
    borderRadius: '8@msr',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  lblText: {
    color: Colors.darkblue,
    fontFamily: AppConstants.FONT1_BOLD,
    fontSize: '16@msr',
  },
  vuHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgIcon: {
    width: '15@msr',
    height: '15@msr',
    marginEnd: '10@msr',
  },
});
// #endregion
//Bg = view with background Image
const CMCollpse = ({style, title, value, isExpand, data}) => {
  const [isShow, SetIsShow] = React.useState(isExpand ?? false);

  const getCustomItem = (item, index) => {
    return (
      <CMCollpseItem
        style={{
          backgroundColor: index % 2 == 0 ? Colors.white : Colors.alabaster,
        }}
        key={item?.id}
        title={item?.title}
        value={item?.value}
      />
    );
  };
  const getItems = () => {
    return data?.map((item, index) => {
      return getCustomItem(item, index);
    });
  };

  return (
    <View>
      <TouchOpactiyIndex
        activeOpacity={0.8}
        style={[styles.vuMain, {...style}]}
        onPress={() => {
          SetIsShow(!isShow);
        }}>
        <View style={styles.vuHeader}>
          <Image
            style={styles.imgIcon}
            source={isShow ? AppImages.minis_icon : AppImages.plus_icon}
          />
          <Text style={styles.lblText}>{title ?? 'fff'}</Text>
        </View>
        <Text style={styles.lblText}>{value ?? 'ffvv'}</Text>
      </TouchOpactiyIndex>
      {isShow && getItems()}
    </View>
  );
};

export default CMCollpse;
