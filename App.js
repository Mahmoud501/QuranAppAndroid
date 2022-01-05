/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';
import SplashPage from './src/Presentation/Scenes/Intro/Splash/SplashPage';

const App = () => {
  return (
    <PaperProvider>
      <StatusBar
        barStyle="dark-content"
        translucent
        backgroundColor="transparent"
      />
      <SplashPage />
    </PaperProvider>
  );
};

export default App;
