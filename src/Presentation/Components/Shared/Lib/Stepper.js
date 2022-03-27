import React from 'react';
import {ms} from 'react-native-size-matters';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';
import StepIndicator from 'react-native-step-indicator';

// #region Styles
// const styles = StyleSheet.create({});
// #endregion
//Bg = view with background Image
const Stepper = ({stepCount, currentPosition, onPress}) => {
  const customStyles = {
    stepIndicatorSize: ms(15),
    currentStepIndicatorSize: ms(20),
    stepIndicatorLabelFontSize: 1,
    currentStepIndicatorLabelFontSize: 1,
    separatorFinishedColor: Colors.c4,
    separatorUnFinishedColor: Colors.lightGray,
    stepIndicatorUnFinishedColor: Colors.lightGray,
    stepIndicatorFinishedColor: Colors.c4,
    stepStrokeCurrentColor: Colors.transparent,
    stepIndicatorCurrentColor: Colors.c4,
  };
  return (
    <StepIndicator
      customStyles={customStyles}
      stepCount={stepCount}
      currentPosition={currentPosition}
      onPress={onPress}
    />
  );
};

export default Stepper;
