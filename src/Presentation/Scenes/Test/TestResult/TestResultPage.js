import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {ms} from 'react-native-size-matters';
import Styles from './Styles';
import CMMainView from '../../../Components/Shared/Views/CMMainView';
import {TestResultController} from './TestResultController';
// import AppImages from '../../../../Infrastructure/Helper/Utils/AppImages';
import {strings} from '../../../../Infrastructure/Helper/Utils/i18n';
import CMGradientView from '../../../Components/Shared/Lib/CMGradientView';
import CMBgView from '../../../Components/Shared/Views/CMBgView';
import TestResultList from './Extension/TestResultList';
import CMProgressbar from '../../../Components/Shared/Lib/CMProgressbar';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';
import CMMemorizedHeader from '../../../Components/Screen/CMMemorizedHeader';

const TestResultPage = ({navigation, route}) => {
  // Set Deep state what mean deep that means all variable will be one object state rather than every variable in single state
  const [dState, SetDState] = useState({});
  // controller variables
  let [controller] = useState(new TestResultController());
  controller.dState = dState;
  controller.SetDState = SetDState;
  controller.navigation = navigation;
  // other variables

  //View Life Cycle
  useEffect(() => {
    return () => {
      console.log('will unamount TestResultPage');
    };
  }, []);

  // Listeners
  //UI Actions

  //UI Component
  const getHeaderView = () => {
    return <CMMemorizedHeader />;
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
            <View style={Styles.vuHeaderContent}>
              <View style={Styles.vuHeaderTitles}>
                <Text style={Styles.lblTitle}>{strings('the_memorized')}</Text>
                <Text style={Styles.lblSubTitle}>
                  {strings('memorized_desc')}
                </Text>
              </View>
              <CMProgressbar
                style={Styles.vuProgress}
                unfilledColor={Colors.c4}
                color={Colors.white}
                progress={0.2}
                showsText
                size={ms(90)}
              />
            </View>
            <View style={Styles.vuLine} />
          </View>
          <View style={Styles.vuBody}>
            <TestResultList
              headerView={getHeaderView()}
              controller={controller}
            />
          </View>
        </CMMainView>
      </CMBgView>
    </CMGradientView>
  );
};

//Export screen Here
export default TestResultPage;
