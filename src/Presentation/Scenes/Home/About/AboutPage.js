import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Styles from './Styles';
import CMMainView from '../../../Components/Shared/Views/CMMainView';
import {AboutController} from './AboutController';
import CMGradientView from '../../../Components/Shared/Lib/CMGradientView';
import CMBgView from '../../../Components/Shared/Views/CMBgView';

const AboutPage = ({navigation, route}) => {
  // Set Deep state what mean deep that means all variable will be one object state rather than every variable in single state
  const [dState, SetDState] = useState({});
  // controller variables
  let [controller] = useState(new AboutController());
  controller.dState = dState;
  controller.SetDState = SetDState;

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
    <CMGradientView style={Styles.vuPage}>
      <CMBgView>
        <CMMainView>
          <View style={Styles.vuHeader}>
            <View style={Styles.vuHeaderTitles} />
            <View style={Styles.vuLine} />
          </View>
          <Text>About</Text>
        </CMMainView>
      </CMBgView>
    </CMGradientView>
  );
};

//Export screen Here
export default AboutPage;
