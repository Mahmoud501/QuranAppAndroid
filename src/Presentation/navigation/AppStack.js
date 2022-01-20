import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import AuthStack from './AuthStack';

const Stack = createStackNavigator();

const AppStack = ({initialRouteName, firstRoute}) => {
  return (
    <Stack.Navigator initialRouteName={initialRouteName} headerMode="none">
      <Stack.Screen
        name="AuthStack"
        component={AuthStack}
        initialParams={{firstRoute: firstRoute}}
      />
    </Stack.Navigator>
  );
};

export default AppStack;
