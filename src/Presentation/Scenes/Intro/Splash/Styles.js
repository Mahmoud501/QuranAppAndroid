import {ScaledSheet} from 'react-native-size-matters';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';
import AppConstants from '../../../../Infrastructure/Helper/Utils/AppConstants';

export default ScaledSheet.create({
  main: {
    flex: 1,
  },
  mainHorizontal: {
    flex: 1,
    backgroundColor: Colors.pinky,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgSplash: {
    flex: 1,
    width: '100%',
    // resizeMode: 'contain', // or 'stretch'
  },
  imgSplashHorizontal: {
    width: '130@msr',
    height: '120@msr',
  },
  loading: {
    position: 'absolute',
    bottom: '20@msr',
    left: 0,
    right: 0,
  },
  lblStatus: {
    fontFamily: AppConstants.FONT1_MEDIUM,
    fontSize: '15@msr',
    textAlign: 'center',
    color: Colors.c4,
    position: 'absolute',
    bottom: '60@msr',
    left: 0,
    right: 0,
  },
});
