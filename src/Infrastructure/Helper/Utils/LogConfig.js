/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native';

function configureReactotron(): void {
  Reactotron.setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
    .configure() // controls connection & communication settings
    .useReactNative() // add all built-in react native plugins
    .connect(); // let's connect!
  // Clear log on start.
  Reactotron.clear();
}

export function info(message: string, ...args: any[]): void {
  Reactotron.display({
    name: 'INFO',
    preview: message,
    value: {message, args},
  });
}

export function log(message: string, ...args: any[]): void {
  Reactotron.display({
    name: 'LOG',
    preview: message,
    value: {message, args},
  });
}

export function warn(message: string, ...args: any[]): void {
  Reactotron.display({
    name: 'WARN',
    preview: message,
    value: {message, args},
    important: true,
  });
}

export function error(message: string, ...args: any[]): void {
  Reactotron.display({
    name: 'ERROR',
    preview: message,
    value: {message, args},
    important: true,
  });
}

function connectConsoleToReactotron(): void {
  (console: any).info = info;
  (console: any).log = log;
  (console: any).warn = warn;
  (console: any).error = error;
}

export function configure(): void {
  configureReactotron();
  connectConsoleToReactotron();
}
