import {ScaledSheet} from 'react-native-size-matters';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';
import AppConstants from '../../../../Infrastructure/Helper/Utils/AppConstants';

export default ScaledSheet.create({
  vuPage: {
    flex: 1,
  },
  vuHeader: {
    marginVertical: '10@msr',
  },
  vuHeaderContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '10@msr',
  },
  vuHeaderTitles: {
    flex: 1,
  },
  lblTitle: {
    color: Colors.white,
    fontFamily: AppConstants.FONT1_BOLD,
    fontSize: '23@msr',
  },
  lblSubTitle: {
    color: Colors.white,
    fontFamily: AppConstants.FONT1_REGULAR,
    fontSize: '14@msr',
  },
  vuBody: {
    flex: 1,
  },
});
