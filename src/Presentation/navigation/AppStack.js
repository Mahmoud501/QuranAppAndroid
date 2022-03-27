import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AuthStack from './AuthStack';
import AppTabbar from './AppTabbar';
import ReaderListPage from '../Scenes/Setting/ReaderList/ReaderListPage';
import SearchTextPage from '../Scenes/Setting/SearchText/SearchTextPage';
import TafseerListPage from '../Scenes/Setting/TafseerList/TafseerListPage';
import SettingControlPage from '../Scenes/Setting/SettingControl/SettingControlPage';
import AyahDetailsPage from '../Scenes/Home/AyahDetails/AyahDetailsPage';
import SortTestPage from '../Scenes/Test/SortTest/SortTestPage';
import CompleteTestPage from '../Scenes/Test/CompleteTest/CompleteTestPage';
import SearchWordsPage from '../Scenes/VoiceSearch/SearchWords/SearchWordsPage';
import ContactusPage from '../Scenes/Setting/Contactus/ContactusPage';

const Stack = createStackNavigator();

const AppStack = ({initialRouteName, firstRoute}) => {
  return (
    <Stack.Navigator initialRouteName={initialRouteName} headerMode="none">
      <Stack.Screen
        name="AuthStack"
        component={AuthStack}
        initialParams={{firstRoute: firstRoute}}
      />
      <Stack.Screen
        name="AppTabbar"
        component={AppTabbar}
        initialParams={{firstRoute: firstRoute}}
      />
      <Stack.Screen
        name="ReaderListPage"
        component={ReaderListPage}
        initialParams={{firstRoute: firstRoute}}
      />
      <Stack.Screen
        name="SearchTextPage"
        component={SearchTextPage}
        initialParams={{firstRoute: firstRoute}}
      />
      <Stack.Screen
        name="TafseerListPage"
        component={TafseerListPage}
        initialParams={{firstRoute: firstRoute}}
      />
      <Stack.Screen
        name="SettingControlPage"
        component={SettingControlPage}
        initialParams={{firstRoute: firstRoute}}
      />
      <Stack.Screen
        name="AyahDetailsPage"
        component={AyahDetailsPage}
        initialParams={{firstRoute: firstRoute}}
      />
      <Stack.Screen
        name="SortTestPage"
        component={SortTestPage}
        initialParams={{firstRoute: firstRoute}}
      />
      <Stack.Screen
        name="CompleteTestPage"
        component={CompleteTestPage}
        initialParams={{firstRoute: firstRoute}}
      />
      <Stack.Screen
        name="SearchWordsPage"
        component={SearchWordsPage}
        initialParams={{firstRoute: firstRoute}}
      />
      <Stack.Screen
        name="ContactusPage"
        component={ContactusPage}
        initialParams={{firstRoute: firstRoute}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
