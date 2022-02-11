/**
 * @flow
 */

import React from 'react';
// import {ScrollView, Image, View, Text} from 'react-native';
// import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import {ScrollView} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {ms, ScaledSheet} from 'react-native-size-matters';

import {getCurrentLocale} from '../../Infrastructure/Helper/Utils/i18n';
import CMBgView from '../Components/Shared/Views/CMBgView';
import Colors from '../../Infrastructure/Helper/Utils/Colors';
// import AppImages from '../../Infrastructure/Helper/Utils/AppImages';
import AppConstants from '../../Infrastructure/Helper/Utils/AppConstants';
import MainPage from '../Scenes/Home/Main/MainPage';
import CMActionButton from '../Components/Shared/Buttons/CMActionButton';
import {toggleMenu} from '../../Infrastructure/Helper/Utils/NavigationUtils';
//# End

const styles = ScaledSheet.create({
  vuMain: {
    height: '100%',
    backgroundColor: Colors.lightPinky2,
    paddingTop: '40@msr',
  },
  vuScroll: {
    marginTop: '15@msr',
  },
  vuHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imgUser: {
    width: '50@msr',
    height: '50@msr',
    borderRadius: '25@msr',
    marginHorizontal: '15@msr',
    borderWidth: 2,
    borderColor: Colors.pinky,
  },
  lblUserName: {
    flex: 1,
    color: Colors.darkblue,
    fontFamily: AppConstants.FONT1_REGULAR,
    fontSize: '16@msr',
    textAlign: 'left',
  },
  vuLine: {
    height: '0.5@msr',
    backgroundColor: Colors.lightGray,
    marginTop: '18@msr',
  },
});

const Drawer = createDrawerNavigator();

const drawerLabelStyle: Object = {
  color: Colors.darkblue,
  fontFamily: AppConstants.FONT1_BOLD,
  fontSize: ms(16),
  padding: 0,
};

const drawerContentOptions: Object = {
  activeTintColor: Colors.black,
  activeBackgroundColor: Colors.transparent,
  inactiveTintColor: Colors.black,
  inactiveBackgroundColor: Colors.transparent,
  labelStyle: drawerLabelStyle,
};

function CustomDrawerContent(props: Object): Node {
  // const {navigation} = props;
  return (
    <CMBgView style={styles.vuMain}>
      <ScrollView
        style={styles.vuScroll}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag">
        {/* <DrawerItemList {...props} /> */}
        <CMActionButton
          onPress={() => {
            toggleMenu(props.navigation, false);
          }}
          title="close"
        />
      </ScrollView>
    </CMBgView>
  );
}

const AppDrawer = () => {
  return (
    <Drawer.Navigator
      drawerContent={props => CustomDrawerContent(props)}
      drawerContentOptions={drawerContentOptions}
      drawerPosition={getCurrentLocale() === 'ar' ? 'right' : 'left'}>
      <Drawer.Screen
        unmountOnBlur={true}
        options={{
          unmountOnBlur: true,
        }}
        name="MainPage"
        component={MainPage}
        initialParams={{isFromMenu: true}}
      />
    </Drawer.Navigator>
  );
};

export default AppDrawer;
