import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Styles from './Styles';
import CMMainView from '../../../Components/Shared/Views/CMMainView';
import {SortTestController} from './SortTestController';
// import AppImages from '../../../../Infrastructure/Helper/Utils/AppImages';
import CMBackButton from '../../../Components/Shared/Buttons/CMBackButton';
import {strings} from '../../../../Infrastructure/Helper/Utils/i18n';
import CMGradientView from '../../../Components/Shared/Lib/CMGradientView';
import CMBgView from '../../../Components/Shared/Views/CMBgView';
import SortFlatlList from './Extension/SortFlatlList';
import CMActionButton from '../../../Components/Shared/Buttons/CMActionButton';

const SortTestPage = ({navigation, route}) => {
  // Set Deep state what mean deep that means all variable will be one object state rather than every variable in single state
  const [dState, SetDState] = useState({
    data: [
      {id: 1},
      {id: 2},
      {id: 3},
      {id: 4},
      {id: 5},
      {id: 6},
      {id: 7},

      {id: 8},

      {id: 9},

      {id: 10},

      {id: 11},

      {id: 12},

      {id: 13},

      {id: 14},
    ],
  });
  // controller variables
  let [controller] = useState(new SortTestController());
  controller.dState = dState;
  controller.SetDState = SetDState;
  controller.navigation = navigation;
  // other variables

  //View Life Cycle
  useEffect(() => {
    return () => {
      console.log('will unamount SortTestPage');
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
                style={Styles.btnBack}
                lblStyle={Styles.lblTitle}
                navigation={navigation}
                title={strings('sort_test_title')}
              />
            </View>
          </View>
          <View style={Styles.vuContainBody}>
            <Text style={Styles.lblSortTestHint}>
              {strings('sort_test_hint')}
            </Text>
            <View style={Styles.vuBody}>
              <SortFlatlList controller={controller} />
            </View>
            <CMActionButton style={Styles.btnCheck} title={strings('check')} />
          </View>
        </CMMainView>
      </CMBgView>
    </CMGradientView>
  );
};

//Export screen Here
export default SortTestPage;
