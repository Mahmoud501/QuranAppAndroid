import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Styles from './Styles';
import CMMainView from '../../../Components/Shared/Views/CMMainView';
import {TafseerListController} from './TafseerListController';
// import AppImages from '../../../../Infrastructure/Helper/Utils/AppImages';
import CMBackButton from '../../../Components/Shared/Buttons/CMBackButton';
import {strings} from '../../../../Infrastructure/Helper/Utils/i18n';
import CMGradientView from '../../../Components/Shared/Lib/CMGradientView';
import CMBgView from '../../../Components/Shared/Views/CMBgView';
import TafseerFlatList from './Extension/TafseerFlatList';

const TafseerListPage = ({navigation, route}) => {
  const isFromMenu = route?.params?.isFromMenu;
  const onBackFocus = route?.params?.onBackFocus;

  // Set Deep state what mean deep that means all variable will be one object state rather than every variable in single state
  const [dState, SetDState] = useState({isFromMenu: isFromMenu});
  // controller variables
  let [controller] = useState(new TafseerListController());
  controller.dState = dState;
  controller.SetDState = SetDState;
  controller.navigation = navigation;
  // other variables

  //View Life Cycle
  useEffect(() => {
    navigation.addListener('beforeRemove', e => {
      if (onBackFocus) {
        onBackFocus();
      }
    });
    return () => {
      navigation.removeListener('beforeRemove');
      console.log('will unamount TafseerListPage');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
                title={strings('choose_tafseer')}
              />
            </View>
          </View>
          <TafseerFlatList controller={controller} />
        </CMMainView>
      </CMBgView>
    </CMGradientView>
  );
};

//Export screen Here
export default TafseerListPage;
