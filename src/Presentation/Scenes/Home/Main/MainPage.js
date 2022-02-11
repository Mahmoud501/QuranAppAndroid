import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Styles from './Styles';
import CMMainView from '../../../Components/Shared/Views/CMMainView';
import {MainController} from './MainController';
import CMGradientView from '../../../Components/Shared/Lib/CMGradientView';
import CMBgView from '../../../Components/Shared/Views/CMBgView';
import {
  listenEvent,
  removeEvent,
  EVENT_TAB_HOME,
} from '../../../../Infrastructure/Helper/Utils/EventUtils';
import CMActionButton from '../../../Components/Shared/Buttons/CMActionButton';
import {toggleMenu} from '../../../../Infrastructure/Helper/Utils/NavigationUtils';

const MainPage = ({navigation, route}) => {
  // Set Deep state what mean deep that means all variable will be one object state rather than every variable in single state
  const [dState, SetDState] = useState({isShowBottomOptions: false});
  // controller variables
  let [controller] = useState(new MainController());
  controller.dState = dState;
  controller.SetDState = SetDState;

  // other variables

  //View Life Cycle
  useEffect(() => {
    let listener = listenEvent(EVENT_TAB_HOME, data => {});
    return () => {
      removeEvent(listener);
      console.log('will unamount MainPage');
    };
  }, []);

  // Listeners
  //UI Actions

  //UI Component

  // Render UI Contain Screen
  return (
    <CMGradientView style={Styles.vuPage}>
      <CMBgView>
        <CMMainView>
          <View style={Styles.vuHeader}>
            <View style={Styles.vuHeaderTitles} />
            <View style={Styles.vuLine} />
          </View>
          <Text>Main</Text>
          <CMActionButton
            title="Open"
            onPress={() => {
              dState.isShowBottomOptions = !dState.isShowBottomOptions;
              const parent = navigation.dangerouslyGetParent();
              parent.setOptions({
                tabBarVisible: dState.isShowBottomOptions,
              });
            }}
          />
        </CMMainView>
      </CMBgView>
    </CMGradientView>
  );
};

//Export screen Here
export default MainPage;
