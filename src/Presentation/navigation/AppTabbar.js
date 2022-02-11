/* eslint-disable prettier/prettier */
/**
 * @flow
 */

import React from 'react';
import {Image} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AppImages from '../../Infrastructure/Helper/Utils/AppImages';
import { strings } from '../../Infrastructure/Helper/Utils/i18n';
import Colors from '../../Infrastructure/Helper/Utils/Colors';
import { emitEvent, EVENT_TAB_HOME } from '../../Infrastructure/Helper/Utils/EventUtils';
import TestPage from '../Scenes/Home/Test/TestPage';
import AboutPage from '../Scenes/Home/About/AboutPage';
import SettingPage from '../Scenes/Home/Setting/SettingPage';
import SearchPage from '../Scenes/Home/Search/SearchPage';
import AppDrawer from './AppDrawer';

 const Tab = createBottomTabNavigator();

 const AppTabbar = () => {
   return (
     <Tab.Navigator
       tabBarOptions={{
         activeTintColor: Colors.c4,
         inactiveTintColor: Colors.gray,
       }}>
       <Tab.Screen
       listeners={({ navigation, route }) => ({
        tabPress: e => {
          // Prevent default action
          // e.preventDefault();

          // Do something with the `navigation` object
          // alert(route.name);
          if (navigation.getState().index === 0) {
            emitEvent(EVENT_TAB_HOME);
          }
        },
      })}
         options={{
           title: strings('quran_app'),
           tabBarLabel: strings('quran_app'),
           tabBarIcon: ({focused}) => (
             <Image
               style={{tintColor: focused ? Colors.c4 : Colors.gray}}
               source={ AppImages.main_icon }
             />
           ),
         }}
         name="AppDrawer"
         component={AppDrawer}

       />
       <Tab.Screen
         options={{
           tabBarVisible: true,
           title: strings('test'),
           tabBarLabel: strings('test'),

           tabBarIcon: ({focused}) => (
            <Image
            style={{tintColor: focused ? Colors.c4 : Colors.gray}}
            source={ AppImages.test_icon }
          />
           ),
        }}
         name="TestPage"
         component={TestPage}
       />
       <Tab.Screen
         options={{
           title: strings('search'),
           tabBarLabel: strings('search'),
           tabBarIcon: ({focused}) => (
            <Image
            style={{tintColor: focused ? Colors.c4 : Colors.gray}}
            source={ AppImages.search_tab_icon }
          />

           ),
         }}
         name="SearchPage"
         component={SearchPage}
       />
       {/* <Tab.Screen
         name={strings('sell')}
         component={TestPage}
         options={({navigation}) => {
           return {
             tabBarButton: props => (
               <TouchOpactiyIndex
                 {...props}
                 onPress={() => {
                   navigation.navigate('SellPage');
                 }}>
                 <Image
                   source={
                     props?.focused
                       ? AppImages.selected_sell
                       : AppImages.unselected_sell
                   }
                 />
                 <Text style={{}}>{strings('sell')}</Text>
               </TouchOpactiyIndex>
             ),
           };
         }}
       /> */}

       <Tab.Screen
         options={{
           title: strings('about_us'),
           tabBarLabel: strings('about_us'),
           tabBarIcon: ({focused}) => (
            <Image
            style={{tintColor: focused ? Colors.c4 : Colors.gray}}
            source={ AppImages.about_icon }
          />

           ),
         }}
         name="AboutPage"
         component={AboutPage}
       />

       <Tab.Screen
         options={{
           title: strings('setting'),
           tabBarLabel: strings('setting'),
           tabBarIcon: ({focused}) => (
            <Image
            style={{tintColor: focused ? Colors.c4 : Colors.gray}}
            source={ AppImages.setting_icon }
          />

           ),
         }}
         name="SettingPage"
         component={SettingPage}
       />
     </Tab.Navigator>
   );
 };

 export default AppTabbar;

