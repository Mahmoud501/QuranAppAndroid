/**
 * @flow
 */

import React from 'react';
// import {ScrollView, Image, View, Text} from 'react-native';
// import {createDrawerNavigator, DrawerItemList} from '@react-navigation/drawer';
import {View, Image, Text, Alert} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {ms, ScaledSheet} from 'react-native-size-matters';

import {
  getCurrentLocale,
  strings,
} from '../../../../Infrastructure/Helper/Utils/i18n';
import CMBgView from '../../../Components/Shared/Views/CMBgView';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';
// import AppImages from '../../Infrastructure/Helper/Utils/AppImages';
import AppConstants from '../../../../Infrastructure/Helper/Utils/AppConstants';
import MainPage from '../Main/MainPage';
import CMGradientView from '../../../Components/Shared/Lib/CMGradientView';
import AppImages from '../../../../Infrastructure/Helper/Utils/AppImages';
import CMMainView from '../../../Components/Shared/Views/CMMainView';
import CMLinkButton from '../../../Components/Shared/Buttons/CMLinkButton';
import CMReciterOptionButton from '../../../Components/Screen/CMReciterOptionButton';
import AppDrawerList from './Extension/AppDrawerList';
// import {toggleMenu} from '../../../../Infrastructure/Helper/Utils/NavigationUtils';

//# End

const styles = ScaledSheet.create({
  vuMain: {
    flex: 1,
  },
  vuReciter: {},
  imgUser: {
    width: '70@msr',
    height: '70@msr',
    borderRadius: '35@msr',
    alignSelf: 'center',
  },
  lblUserName: {
    marginTop: '5@msr',
    color: Colors.white,
    fontFamily: AppConstants.FONT1_BOLD,
    fontSize: '18@msr',
    textAlign: 'center',
  },
  lblType: {
    marginBottom: '5@msr',
    color: Colors.white,
    fontFamily: AppConstants.FONT1_REGULAR,
    fontSize: '15@msr',
    textAlign: 'center',
  },
  btnEdit: {
    marginEnd: '10@msr',
    alignSelf: 'flex-end',
  },
  btnTextEdit: {
    color: Colors.white,
  },
  vuReciterOptions: {
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  vuBottoms: {
    padding: '10@msr',
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '10@msr',
    justifyContent: 'space-evenly',
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
  const {navigation} = props;
  const getHeader = () => {
    return (
      <View style={styles.vuReciterOptions}>
        <CMGradientView
          start={{x: 0, y: 1}}
          end={{x: 0, y: 0}}
          colors={[Colors.c3, Colors.c6]}
          style={styles.vuReciterOptions}>
          <View style={styles.vuBottoms}>
            <CMReciterOptionButton title="download" img={AppImages.download} />
            <CMReciterOptionButton
              badge={2}
              onPress={() => {
                Alert.prompt(
                  strings('repeat_num'),
                  strings('repeat_num_msg'),
                  [
                    {
                      text: strings('cancel'),
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {
                      text: strings('ok'),
                      onPress: password =>
                        console.log('OK Pressed, password: ' + password),
                    },
                  ],
                  'plain-text',
                  '',
                  'number-pad',
                );
              }}
              title="repeat"
              img={AppImages.repetitions}
            />
            <CMReciterOptionButton
              badge={5}
              onPress={() => {
                Alert.prompt(
                  strings('delay_time'),
                  strings('delay_time_msg'),
                  [
                    {
                      text: strings('cancel'),
                      onPress: () => console.log('Cancel Pressed'),
                      style: 'cancel',
                    },
                    {
                      text: strings('ok'),
                      onPress: password =>
                        console.log('OK Pressed, password: ' + password),
                    },
                  ],
                  'plain-text',
                  '',
                  'number-pad',
                );
              }}
              title="delay"
              img={AppImages.interval}
            />
          </View>
        </CMGradientView>
      </View>
    );
  };
  return (
    <CMGradientView style={styles.vuMain}>
      <CMBgView>
        <CMMainView>
          <CMLinkButton
            onPress={() => {
              navigation.navigate('ReaderListPage');
            }}
            fontSize={ms(18)}
            style={styles.btnEdit}
            lblStyle={styles.btnTextEdit}
            title={'Edit'}
            withoutLine
          />
          <View style={styles.vuReciter}>
            <Image style={styles.imgUser} source={AppImages.splash} />
            <Text style={styles.lblUserName}>Abdel basent reciter</Text>
            <Text style={styles.lblType}>muratal</Text>
          </View>
          <AppDrawerList headerView={getHeader()} />
        </CMMainView>
      </CMBgView>
    </CMGradientView>
  );
}

const AppDrawer = () => {
  const drawerStyle = {width: '94%'};
  return (
    <Drawer.Navigator
      drawerContent={props => CustomDrawerContent(props)}
      drawerContentOptions={drawerContentOptions}
      drawerPosition={getCurrentLocale() === 'ar' ? 'right' : 'left'}
      drawerType="back"
      // overlayColor={Colors.transparent}
      drawerStyle={drawerStyle}>
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
