import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import Styles from './Styles';
import CMMainView from '../../../Components/Shared/Views/CMMainView';
import {VoiceSearchController} from './VoiceSearchController';
// import AppImages from '../../../../Infrastructure/Helper/Utils/AppImages';
import CMBackButton from '../../../Components/Shared/Buttons/CMBackButton';
import {
  getCurrentLocale,
  strings,
} from '../../../../Infrastructure/Helper/Utils/i18n';
import CMGradientView from '../../../Components/Shared/Lib/CMGradientView';
import CMBgView from '../../../Components/Shared/Views/CMBgView';
import AppImages from '../../../../Infrastructure/Helper/Utils/AppImages';
import TouchOpactiyIndex from '../../../Components/Shared/TouchOpactiy/TouchOpactiyIndex';
import CMScrollView from '../../../Components/Shared/Views/CMScrollView';

const VoiceSearchPage = ({navigation, route}) => {
  // Set Deep state what mean deep that means all variable will be one object state rather than every variable in single state
  const [dState, SetDState] = useState({});
  // controller variables
  let [controller] = useState(new VoiceSearchController());
  controller.dState = dState;
  controller.SetDState = SetDState;
  controller.navigation = navigation;
  // other variables

  //View Life Cycle
  useEffect(() => {
    return () => {
      console.log('will unamount VoiceSearchPage');
    };
  }, []);

  // Listeners
  //UI Actions

  const onWordsClicked = () => {
    navigation.navigate('SearchWordsPage');
  };

  //UI Component
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
                isHidden
                style={Styles.btnBack}
                lblStyle={Styles.lblTitle}
                navigation={navigation}
                title={strings('voice_search')}
              />
            </View>
          </View>
          <CMScrollView style={Styles.vuBody}>
            <Text style={Styles.lblSubTitle}>{strings('search_words')}</Text>
            <TouchOpactiyIndex
              onPress={onWordsClicked}
              activeOpacity={0.5}
              style={Styles.vuSearchWords}>
              <Text style={Styles.lblSearchWords}>
                {strings('all_search_words_here')}
              </Text>
              <Image
                style={Styles.imgArrow}
                source={
                  getCurrentLocale() === 'ar'
                    ? AppImages.arrowLeft
                    : AppImages.arrowRight
                }
              />
            </TouchOpactiyIndex>
            <TouchOpactiyIndex activeOpacity={0.5} style={Styles.vuMic}>
              <Image style={Styles.imgMic} source={AppImages.green_mic} />
              <Text style={Styles.lblMic}>
                {strings('press_long_to_record')}
              </Text>
            </TouchOpactiyIndex>
          </CMScrollView>
        </CMMainView>
      </CMBgView>
    </CMGradientView>
  );
};

//Export screen Here
export default VoiceSearchPage;
