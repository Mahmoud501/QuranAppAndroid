import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Styles from './Styles';
import CMMainView from '../../../Components/Shared/Views/CMMainView';
import {SearchTextController} from './SearchTextController';
// import AppImages from '../../../../Infrastructure/Helper/Utils/AppImages';
import CMBackButton from '../../../Components/Shared/Buttons/CMBackButton';
import {strings} from '../../../../Infrastructure/Helper/Utils/i18n';
import CMGradientView from '../../../Components/Shared/Lib/CMGradientView';
import CMBgView from '../../../Components/Shared/Views/CMBgView';
import SearchTextList from './Extension/SearchTextList';
import CMSegmentView from '../../../Components/Shared/Lib/CMSegmentView';
import NormalTextField from '../../../Components/Shared/TextFields/NormalTextField';
import AppImages from '../../../../Infrastructure/Helper/Utils/AppImages';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';

const SearchTextPage = ({navigation, route}) => {
  const isFromMenu = route?.params?.isFromMenu;
  // Set Deep state what mean deep that means all variable will be one object state rather than every variable in single state
  const [dState, SetDState] = useState({isFromMenu: isFromMenu});
  // controller variables
  let [controller] = useState(new SearchTextController());
  controller.dState = dState;
  controller.SetDState = SetDState;
  controller.navigation = navigation;
  // other variables

  //View Life Cycle
  useEffect(() => {
    return () => {
      console.log('will unamount SearchTextPage');
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
                title={strings('search')}
              />
            </View>
            <CMSegmentView
              styleObj={Styles.vuSegment}
              data={[
                strings('ayah'),
                strings('surha'),
                strings('juzh'),
                strings('page'),
              ]}
            />
            <NormalTextField
              objectPress={{icon: AppImages.search_icon}}
              errormMessage={dState?.errorSearchKey}
              value={dState?.searchKey}
              onChangeText={text => {
                SetDState(pre => {
                  return {...pre, searchKey: text};
                });
              }}
              placeholder={`${strings('search_key')}...`}
              color={Colors.white}
              style={Styles.txtSearchInput}
            />
          </View>
          <View style={Styles.vuBody}>
            <SearchTextList controller={controller} />
          </View>
        </CMMainView>
      </CMBgView>
    </CMGradientView>
  );
};

//Export screen Here
export default SearchTextPage;
