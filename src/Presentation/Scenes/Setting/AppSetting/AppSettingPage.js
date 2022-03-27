import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import Styles from './Styles';
import CMMainView from '../../../Components/Shared/Views/CMMainView';
import {AppSettingController} from './AppSettingController';
// import AppImages from '../../../../Infrastructure/Helper/Utils/AppImages';
import CMBackButton from '../../../Components/Shared/Buttons/CMBackButton';
import {
  getCurrentLocale,
  strings,
} from '../../../../Infrastructure/Helper/Utils/i18n';
import CMGradientView from '../../../Components/Shared/Lib/CMGradientView';
import CMBgView from '../../../Components/Shared/Views/CMBgView';
import TouchOpactiyIndex from '../../../Components/Shared/TouchOpactiy/TouchOpactiyIndex';
import AppImages from '../../../../Infrastructure/Helper/Utils/AppImages';

const TafseerListPage = ({navigation, route}) => {
  // Set Deep state what mean deep that means all variable will be one object state rather than every variable in single state
  const [dState, SetDState] = useState({});
  // controller variables
  let [controller] = useState(new AppSettingController());
  controller.dState = dState;
  controller.SetDState = SetDState;
  controller.navigation = navigation;
  // other variables

  //View Life Cycle
  useEffect(() => {
    return () => {
      console.log('will unamount TafseerListPage');
    };
  }, []);

  // Listeners
  //UI Actions

  //UI Component

  const getItem = (title, onPress) => {
    return (
      <TouchOpactiyIndex
        style={Styles.vuItem}
        activeOpacity={0.5}
        onPress={onPress}>
        <Text style={Styles.lblItem}>{title ?? 'test'}</Text>
        <Image
          style={Styles.imgItem}
          source={
            getCurrentLocale() === 'ar'
              ? AppImages.arrowLeft
              : AppImages.arrowRight
          }
        />
      </TouchOpactiyIndex>
    );
  };

  // Render UI Contain Screen
  return (
    <CMGradientView
      end={{x: 1, y: 0}}
      start={{x: 0, y: 0}}
      style={Styles.vuPage}>
      <CMBgView>
        <CMMainView>
          <View style={Styles.vuHeader}>
            <View style={Styles.vuHeaderTitles}>
              <CMBackButton
                style={Styles.btnBack}
                lblStyle={Styles.lblTitle}
                navigation={navigation}
                title={strings('setting')}
              />
            </View>
          </View>
          <View style={Styles.vuBody}>
            {getItem(strings('change_quran_setting'), () => {
              navigation.navigate('SettingControlPage');
            })}
            {getItem(strings('change_reciter'), () => {
              navigation.navigate('ReaderListPage');
            })}
            {getItem(strings('change_tafseer'), () => {
              navigation.navigate('TafseerListPage');
            })}
            {getItem(strings('contact_us'), () => {
              navigation.navigate('ContactusPage');
            })}
          </View>
        </CMMainView>
      </CMBgView>
    </CMGradientView>
  );
};

//Export screen Here
export default TafseerListPage;
