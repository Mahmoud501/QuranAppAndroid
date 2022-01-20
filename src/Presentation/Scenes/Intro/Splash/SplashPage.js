import React, {useState, useEffect} from 'react';
import {View, Image, useWindowDimensions, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import Styles from './Styles';
import AppImages from '../../../../Infrastructure/Helper/Utils/AppImages';
import {navigationRef} from '../../../../Presentation/navigation/RootNavigation';
import {setLocale, strings} from '../../../../Infrastructure/Helper/Utils/i18n';
import {
  getData,
  setData,
} from '../../../../Infrastructure/Repos/CacheRepo/AsyncStorageUtils';
import {
  FIRST_TIME,
  LANGUAGE_KEY,
} from '../../../../Infrastructure/Helper/Utils/AppConstants';
import UserUtils from '../../../../Infrastructure/Helper/Utils/UserUtils';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';
import AppStack from '../../../navigation/AppStack';
import ActivityIndicator from '../../../Components/Shared/Loading/ActivityLoading';
import {RPaperProgressBar} from '../../../Components/Shared/Lib/PaperComponents';
import {ms} from 'react-native-size-matters';

const SplashPage = ({navigation, route}) => {
  const [splash, SetSplash] = useState(true);
  const {height, width} = useWindowDimensions();
  const [isAppReady, SetAppReady] = useState({
    getUser: null,
    isFirstTime: null,
    isAssingedLang: null,
  });

  const getUserData = async () => {
    console.info('getUserData');
    const user: ?User = await UserUtils.getInstance()?.getCacheUser();
    UserUtils.getInstance().user = user;
    SetAppReady(data => {
      return {...data, getUser: user ?? '0'};
    });
    return user;
  };

  useEffect(() => {
    getUserData();
    checkLanguage();
  }, []);

  useEffect(() => {
    if (
      isAppReady?.getUser &&
      isAppReady?.isFirstTime !== null &&
      isAppReady?.appLang
    ) {
      setData(LANGUAGE_KEY, isAppReady.appLang);
      setLocale(isAppReady.appLang);
      setTimeout(() => {
        SetSplash(false);
      }, 1000);
    }
  }, [isAppReady]);

  const checkLanguage = async () => {
    // Language
    let lang = await getData(LANGUAGE_KEY);
    await setData(LANGUAGE_KEY, lang ?? 'en');
    await setLocale(lang ?? 'en');
    let isFirst = await getData(FIRST_TIME);
    SetAppReady(data => {
      return {
        ...data,
        isFirstTime: isFirst === null ? true : false,
        isAssingedLang: lang === null ? false : true,
        appLang: lang ?? 'en',
      };
    });
  };

  const getBody = () => {
    // // if (isAppReady?.isFirstTime === true) {
    // if (isAppReady?.getUser && isAppReady?.getUser !== '0') {
    //   return (
    //     <NavigationContainer ref={navigationRef}>
    //       <AppStack initialRouteName={'MainPage'} />
    //     </NavigationContainer>
    //   );
    // } else {
    //   // and check login auth  withBack={false}
    //   return (
    //     <NavigationContainer ref={navigationRef}>
    //       <AppStack
    //         initialRouteName={'AuthStack'}
    //         firstRoute={'LocationsPage'}
    //       />
    //     </NavigationContainer>
    //   );
    // }
    return (
      <NavigationContainer ref={navigationRef}>
        <AppStack firstRoute={'LocationsPage'} />
      </NavigationContainer>
    );
  };

  const getSplash = () => {
    if (splash) {
      if (height >= width) {
        return (
          <View style={Styles.main}>
            <Image style={Styles.imgSplash} source={AppImages.splash} />
            <Text style={Styles.lblStatus}>{strings('loading_quran')}</Text>
            <RPaperProgressBar
              progress={0.4}
              color={Colors.c4}
              style={{height: ms(5)}}
            />
            <ActivityIndicator style={Styles.loading} color={Colors.darkblue} />
          </View>
        );
      } else {
        return (
          <View style={Styles.mainHorizontal}>
            <Image
              style={Styles.imgSplashHorizontal}
              source={AppImages.app_logo}
            />
            <ActivityIndicator style={Styles.loading} color={Colors.white} />
          </View>
        );
      }
    } else {
      return getBody();
    }
  };

  return getSplash();
};
export default SplashPage;
