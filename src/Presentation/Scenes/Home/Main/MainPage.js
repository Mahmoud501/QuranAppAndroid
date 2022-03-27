import React, {useState, useEffect} from 'react';
import {ms} from 'react-native-size-matters';
import {View, Text, LayoutAnimation, UIManager, Platform} from 'react-native';
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
import {toggleMenu} from '../../../../Infrastructure/Helper/Utils/NavigationUtils';
import CMOptionsView from '../../../Components/Screen/CMOptionsView';
import AppImages from '../../../../Infrastructure/Helper/Utils/AppImages';
import CMIconButton from '../../../Components/Shared/Buttons/CMIconButton';
import MainFlatList from './Extension/MainFlatList';
import HomeSortDialog from '../../../Components/Dialog/HomeSortDialog';

const MainPage = ({navigation, route}) => {
  // Set Deep state what mean deep that means all variable will be one object state rather than every variable in single state
  const [dState, SetDState] = useState({
    isShowBottomOptions: true,
    bottom: ms(-80),
    height: ms(80),
    currentPosition: 0,
    isShowClose: false,
    isShowBasmala: true,
    isShowQuranPDF: true,
  });
  // controller variables
  let [controller] = useState(new MainController());
  controller.dState = dState;
  controller.SetDState = SetDState;
  controller.navigation = navigation;
  // other variables

  //View Life Cycle
  useEffect(() => {
    if (
      Platform.OS === 'android' &&
      UIManager.setLayoutAnimationEnabledExperimental
    ) {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    let listener = listenEvent(EVENT_TAB_HOME, data => {
      controller?.showSortDialog(true);
    });
    return () => {
      removeEvent(listener);
      console.log('will unamount MainPage');
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Listeners
  //UI Actions

  const onMenuClicked = () => {
    toggleMenu(navigation, true);
  };

  const onPDFClicked = () => {};

  const onSortClicked = () => {
    controller?.showSortDialog(false);
  };

  const onSearchClicked = () => {
    // navigation.navigate('SearchTextPage');
    showBasmalaView();
    showCloseButton();
    switchTabbar();
  };

  const onTafseerClicked = () => {
    navigation.navigate('TafseerListPage');
  };

  const onSettingClicked = () => {
    navigation.navigate('SettingControlPage');
  };

  //UI Logic

  const switchTabbar = () => {
    dState.isShowBottomOptions = !dState.isShowBottomOptions;
    setTimeout(
      () => {
        LayoutAnimation.easeInEaseOut();
        controller?.switchVisableBottomOptions();
        const parent = navigation.dangerouslyGetParent();
        parent.setOptions({
          tabBarVisible: dState.isShowBottomOptions,
        });
      },
      dState.isShowBottomOptions === true ? 0 : 100,
    );
  };

  const showCloseButton = show => {
    setTimeout(() => {
      LayoutAnimation.easeInEaseOut();
      controller?.showCloseButton(show);
    });
  };

  const showBasmalaView = show => {
    setTimeout(() => {
      LayoutAnimation.easeInEaseOut();
      controller?.showBasmalaView(show);
    });
  };

  //UI Component

  // Render UI Contain Screen
  let zeroFlex = {flex: 0};
  return (
    <CMGradientView style={Styles.vuPage}>
      <CMBgView>
        <CMMainView safeViewStyle={zeroFlex} style={zeroFlex}>
          <View style={Styles.vuHeader}>
            <View style={Styles.vuHeaderContent}>
              <CMIconButton
                onPress={onMenuClicked}
                source={AppImages.splash}
                styleIcon={Styles.vuReciterImage}
              />
              <View style={Styles.vuRightButton}>
                <CMIconButton
                  style={Styles.btnHeaderMarkIcon}
                  source={AppImages.white_mark}
                  styleIcon={Styles.iconHeaderMarkIcon}
                />
                <CMIconButton
                  onPress={onSettingClicked}
                  style={Styles.btnHeaderIcon}
                  source={AppImages.setting}
                  styleIcon={Styles.iconHeaderIcon}
                />
                <CMIconButton
                  onPress={onTafseerClicked}
                  style={Styles.btnHeaderTafseerIcon}
                  source={AppImages.tafser}
                  styleIcon={Styles.iconHeaderTafseerIcon}
                />
                <CMIconButton
                  onPress={onSearchClicked}
                  style={Styles.btnHeaderIcon}
                  source={AppImages.search_icon}
                  styleIcon={Styles.iconHeaderIcon}
                />
                {dState.isShowClose && (
                  <CMIconButton
                    style={Styles.btnHeaderCloseIcon}
                    source={AppImages.close}
                    styleIcon={Styles.iconHeaderCloseIcon}
                  />
                )}
              </View>
            </View>
            {dState?.isShowBasmala && (
              <View style={Styles.vuBasmala}>
                <View style={Styles.vuBasmalaLine} />
                <Text style={Styles.lblBasmala}>بسم الله الرحمن الرحيم</Text>
              </View>
            )}
          </View>
        </CMMainView>
        <View style={Styles.vuBody}>
          <MainFlatList controller={controller} />
          {dState.isShowBottomOptions && (
            <CMIconButton
              style={Styles.btnQuranPDF}
              onPress={onPDFClicked}
              source={AppImages.details}
              styleIcon={Styles.iconQuranPDF}
            />
          )}
        </View>
        <CMOptionsView
          style={[
            Styles.vuOptions,
            {height: dState.height, bottom: dState.bottom},
          ]}
        />
        <HomeSortDialog
          onDismiss={() => {
            controller?.showSortDialog(false);
          }}
          showDialog={controller?.dState?.showSortDialog}
          onPress={onSortClicked}
        />
      </CMBgView>
    </CMGradientView>
  );
};

//Export screen Here
export default MainPage;
