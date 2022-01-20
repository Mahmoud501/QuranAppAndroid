import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import IntroSliderPage from '../Scenes/Intro/IntroSlider/IntroSliderPage';
import RegisterPage from '../Scenes/Intro/Register/RegisterPage';
import ReaderListPage from '../Scenes/Setting/ReaderList/ReaderListPage';

const Stack = createStackNavigator();

const AuthStack = ({initialRouteName, route}) => {
  return (
    <Stack.Navigator
      initialRouteName={route.params?.firstRoute ?? initialRouteName}
      headerMode="none">
      <Stack.Screen name="IntroSliderPage" component={IntroSliderPage} />
      <Stack.Screen name="RegisterPage" component={RegisterPage} />
      <Stack.Screen name="ReaderListPage" component={ReaderListPage} />
    </Stack.Navigator>
  );
};

export default AuthStack;
