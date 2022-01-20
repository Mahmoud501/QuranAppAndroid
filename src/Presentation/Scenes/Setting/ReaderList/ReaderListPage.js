import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Styles from './Styles';
import CMMainView from '../../../Components/Shared/Views/CMMainView';
import {ReaderListController} from './ReaderListController';
// import AppImages from '../../../../Infrastructure/Helper/Utils/AppImages';
import CMBackButton from '../../../Components/Shared/Buttons/CMBackButton';
import {strings} from '../../../../Infrastructure/Helper/Utils/i18n';
import CMGradientView from '../../../Components/Shared/Lib/CMGradientView';
import CMBgView from '../../../Components/Shared/Views/CMBgView';
import ReaderFlatList from './Extension/ReaderFlatList';
import CMSegmentView from '../../../Components/Shared/Lib/CMSegmentView';
import NormalTextField from '../../../Components/Shared/TextFields/NormalTextField';
import AppImages from '../../../../Infrastructure/Helper/Utils/AppImages';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';

const ReaderListPage = ({navigation, route}) => {
  // Set Deep state what mean deep that means all variable will be one object state rather than every variable in single state
  const [dState, SetDState] = useState({});
  // controller variables
  let [controller] = useState(new ReaderListController());
  controller.dState = dState;
  controller.SetDState = SetDState;

  // other variables

  //View Life Cycle
  useEffect(() => {
    return () => {
      console.log('will unamount ReaderListPage');
    };
  }, []);

  // Listeners
  //UI Actions

  //UI Component

  const getTableHeaderView = () => {
    return (
      <View style={Styles.vuInfo}>
        <Text style={Styles.lblSubTitle}>{strings('welcome')}</Text>
        <Text style={Styles.lblDesc}>{strings('select_reciter')}</Text>
      </View>
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
                title={strings('quran_app_captial')}
              />
            </View>
            <View style={Styles.vuLine} />
            <CMSegmentView
              styleObj={Styles.vuSegment}
              data={[
                strings('all'),
                strings('muratal'),
                strings('mujawd'),
                strings('mu3lim'),
                strings('translated'),
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
          <View style={Styles.vuHandleBottom} />
          <ReaderFlatList
            controller={controller}
            headerView={getTableHeaderView()}
          />
        </CMMainView>
      </CMBgView>
    </CMGradientView>
  );
};

//Export screen Here
export default ReaderListPage;
