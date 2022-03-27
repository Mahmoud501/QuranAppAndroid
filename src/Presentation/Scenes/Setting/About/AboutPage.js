import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Styles from './Styles';
import CMMainView from '../../../Components/Shared/Views/CMMainView';
import {AboutController} from './AboutController';
// import AppImages from '../../../../Infrastructure/Helper/Utils/AppImages';
import CMBackButton from '../../../Components/Shared/Buttons/CMBackButton';
import {strings} from '../../../../Infrastructure/Helper/Utils/i18n';
import CMGradientView from '../../../Components/Shared/Lib/CMGradientView';
import CMBgView from '../../../Components/Shared/Views/CMBgView';
import CMScrollView from '../../../Components/Shared/Views/CMScrollView';

const AboutPage = ({navigation, route}) => {
  // Set Deep state what mean deep that means all variable will be one object state rather than every variable in single state
  const [dState, SetDState] = useState({});
  // controller variables
  let [controller] = useState(new AboutController());
  controller.dState = dState;
  controller.SetDState = SetDState;
  controller.navigation = navigation;
  // other variables

  //View Life Cycle
  useEffect(() => {
    return () => {
      console.log('will unamount AboutPage');
    };
  }, []);

  // Listeners
  //UI Actions

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
                title={strings('about_us')}
              />
            </View>
          </View>
          <CMScrollView style={Styles.vuBody}>
            <Text style={Styles.lblSubTitle}>{strings('about_us')}</Text>
            <Text style={Styles.lblDesc}>
              test test test test test test test test test test test test test
              test test test test test test test test test test test test test
              test test test test test test test test test test test test test
              test test test test testtest test test test test test test test
              test
            </Text>
          </CMScrollView>
        </CMMainView>
      </CMBgView>
    </CMGradientView>
  );
};

//Export screen Here
export default AboutPage;
