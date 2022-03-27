import React, {useState, useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import Styles from './Styles';
import CMMainView from '../../../Components/Shared/Views/CMMainView';
import CMBackButton from '../../../Components/Shared/Buttons/CMBackButton';
import CMGradientView from '../../../Components/Shared/Lib/CMGradientView';
import CMBgView from '../../../Components/Shared/Views/CMBgView';
import CMScrollView from '../../../Components/Shared/Views/CMScrollView';
import {AyahDetailsController} from './AyahDetailsController';
import CMOptionsView from '../../../Components/Screen/CMOptionsView';
import AppImages from '../../../../Infrastructure/Helper/Utils/AppImages';
import TouchOpactiyIndex from '../../../Components/Shared/TouchOpactiy/TouchOpactiyIndex';
import WriteTestPage from '../../Test/WriteTest/WriteTestPage';
import SoundRecordTestPage from '../../Test/SoundRecordTest/SoundRecordTestPage';

const AyahDetailsPage = ({navigation, route}) => {
  // Set Deep state what mean deep that means all variable will be one object state rather than every variable in single state
  const [dState, SetDState] = useState({});
  // controller variables
  let [controller] = useState(new AyahDetailsController());
  controller.dState = dState;
  controller.SetDState = SetDState;

  // other variables

  //View Life Cycle
  useEffect(() => {
    return () => {
      console.log('will unamount AyahDetailsPage');
    };
  }, []);

  // Listeners
  //UI Actions
  const onReciterClicked = () => {
    navigation.navigate('ReaderListPage');
  };
  //UI Component

  const getReciterView = () => {
    return (
      <TouchOpactiyIndex
        activeOpacity={0.5}
        style={Styles.vuReciter}
        onPress={onReciterClicked}>
        <Image style={Styles.imgReciter} source={AppImages.splash} />
        <Text style={Styles.lblReciter}>Reciter Name</Text>
      </TouchOpactiyIndex>
    );
  };

  // Render UI Contain Screen
  return (
    <CMGradientView style={Styles.vuPage}>
      <CMBgView>
        <CMMainView>
          <View style={Styles.vuHeader}>
            <View style={Styles.vuHeaderTitles}>
              <CMBackButton
                style={Styles.btnBack}
                lblStyle={Styles.lblTitle}
                navigation={navigation}
                title={'Title Page Here'}
              />
            </View>
            {getReciterView()}
          </View>
          <View style={Styles.vuContainScroll}>
            <CMBgView>
              {!dState?.isShowWriteTest && (
                <CMScrollView style={Styles.vuBody}>
                  <Text style={Styles.lblAyah}>بسم الله الرحمن الرحيم</Text>
                  <Text style={Styles.lblTafseer}>
                    تفسير يوجد هناهناهناهناهناهناهناهنا هناهناهنا هناهنا تفسير
                    تفسير تفسيرvتفسيرتفسير تفسير تفسير تفسير تفسير تفسيرتفسير
                    تفسير يوجد هنا
                  </Text>
                </CMScrollView>
              )}
            </CMBgView>
          </View>
        </CMMainView>
      </CMBgView>
      <CMOptionsView
        onTestPress={type => {
          if (type === 1) {
            controller?.showWriteTest(true);
          } else if (type === 3) {
            controller?.showSoundRecordTest(true);
          } else if (type === 4) {
            navigation.navigate('SortTestPage');
          } else if (type === 5) {
            navigation.navigate('CompleteTestPage');
          }
        }}
      />
      <WriteTestPage
        showDialog={dState?.isShowWriteTest}
        onDismiss={() => {
          controller?.showWriteTest(false);
        }}
      />
      <SoundRecordTestPage
        showDialog={dState?.isShowSoundRecordTest}
        onDismiss={() => {
          controller?.showSoundRecordTest(false);
        }}
      />
    </CMGradientView>
  );
};

//Export screen Here
export default AyahDetailsPage;
