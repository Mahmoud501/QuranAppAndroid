import {ScaledSheet} from 'react-native-size-matters';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';

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
});
