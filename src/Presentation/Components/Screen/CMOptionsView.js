import React from 'react';
import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import AppImages from '../../../Infrastructure/Helper/Utils/AppImages';
import Colors from '../../../Infrastructure/Helper/Utils/Colors';
import Stepper from '../Shared/Lib/Stepper';
import CMOptionButton from './CMOptionButton';
import SaveDialog from '../Dialog/SaveDialog';
import ColorDialog from '../Dialog/ColorDialog';
import TestDialog from '../Dialog/TestDialog';
import TafseerDialog from '../Dialog/TafseerDialog';
import {navigationRef} from '../../navigation/RootNavigation';
// import CMProgressbar from '../Shared/Lib/CMProgressbar';

// #region Styles
const styles = ScaledSheet.create({
  vuMain: {
    width: '100%',
    justifyContent: 'space-between',
    backgroundColor: Colors.c6,
  },
  vuContainStepper: {
    marginTop: '5@msr',
  },
  vuBottoms: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: '10@msr',
    justifyContent: 'space-between',
  },
  imgTestIconStyle: {
    width: '26@msr',
  },
});
// #endregion

const CMOptionsView = ({style, onSavePress, onColorPress, onTestPress}) => {
  const [currentPosition, SetCurrentPosition] = React.useState();
  const [isShowSaveDialog, SetShowSaveDialog] = React.useState();
  const [isShowColorDialog, SetShowColorDialog] = React.useState();
  const [isShowTestDialog, SetShowTestDialog] = React.useState();
  const [isShowTafseerDialog, SetShowTafseerDialog] = React.useState();
  return (
    <View style={[styles.vuMain, style]}>
      <View style={styles.vuContainStepper}>
        <Stepper
          currentPosition={currentPosition}
          onPress={position => {
            SetCurrentPosition(position);
          }}
          stepCount={7}
        />
      </View>
      <View style={styles.vuBottoms}>
        <CMOptionButton
          onPress={() => {
            SetShowSaveDialog(true);
          }}
          title="save"
          img={AppImages.memoring_icon}
        />
        <CMOptionButton
          onPress={() => {
            SetShowColorDialog(true);
          }}
          title="color"
          img={AppImages.coloring_icon}
        />
        <CMOptionButton
          onPress={() => {
            SetShowTestDialog(true);
          }}
          title="test"
          iconStyle={styles.imgTestIconStyle}
          img={AppImages.testing_icon}
        />
        <CMOptionButton
          onPress={() => {
            SetShowTafseerDialog(true);
          }}
          title="tafseer"
          img={AppImages.tafsering_icon}
        />
        {/* <CMProgressbar size={30} progress={0.2} animated={false} showsText /> */}
        <CMOptionButton
          onPress={() => {}}
          title="play"
          img={AppImages.playing_icon}
        />
      </View>
      <SaveDialog
        onPress={type => {
          SetShowSaveDialog(false);
          if (onSavePress) {
            onSavePress(type);
          }
        }}
        showDialog={isShowSaveDialog}
        onDismiss={() => {
          SetShowSaveDialog(false);
        }}
      />
      <ColorDialog
        onPress={type => {
          SetShowColorDialog(false);
          if (onColorPress) {
            onColorPress(type);
          }
        }}
        showDialog={isShowColorDialog}
        onDismiss={() => {
          SetShowColorDialog(false);
        }}
      />
      <TestDialog
        onPress={type => {
          SetShowTestDialog(false);
          if (onTestPress) {
            onTestPress(type);
          }
        }}
        showDialog={isShowTestDialog}
        onDismiss={() => {
          SetShowTestDialog(false);
        }}
      />
      <TafseerDialog
        onChangeTafseerPress={() => {
          setTimeout(() => {
            navigationRef.current.navigate('TafseerListPage', {
              onBackFocus: () => {
                setTimeout(() => {
                  SetShowTafseerDialog(true);
                }, 200);
              },
            });
          }, 200);
        }}
        showDialog={isShowTafseerDialog}
        onDismiss={() => {
          SetShowTafseerDialog(false);
        }}
      />
    </View>
  );
};

export default CMOptionsView;
