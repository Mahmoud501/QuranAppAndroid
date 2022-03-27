import {ScaledSheet} from 'react-native-size-matters';
import Colors from '../../../../Infrastructure/Helper/Utils/Colors';
import AppConstants from '../../../../Infrastructure/Helper/Utils/AppConstants';

export default ScaledSheet.create({
  vuPage: {
    flex: 1,
  },
  vuHeader: {},
  vuHeaderTitles: {
    flexDirection: 'row',
    marginHorizontal: '10@msr',
  },
  btnBack: {},
  lblTitle: {
    color: Colors.white,
    fontFamily: AppConstants.FONT1_BOLD,
    fontSize: '23@msr',
  },
  vuBody: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  vuInfo: {
    flex: 1,
  },
  lblSubTitle: {
    marginTop: '5@msr',
    marginHorizontal: '10@msr',
    color: Colors.white,
    fontFamily: AppConstants.FONT1_BOLD,
    fontSize: '18@msr',
  },
  lblDesc: {
    marginHorizontal: '10@msr',
    color: Colors.white,
    fontFamily: AppConstants.FONT1_BOLD,
    fontSize: '16@msr',
    marginBottom: '25@msr',
  },

  vuSegment: {
    height: '35@msr',
    marginHorizontal: '10@msr',
    marginVertical: '10@msr',
  },
  txtSearchInput: {
    borderWidth: 0.5,
    borderColor: Colors.gray,
    borderRadius: '8@msr',
    marginBottom: '10@msr',
    backgroundColor: `${Colors.black}10`,
    marginHorizontal: '10@msr',
    color: Colors.white,
  },
});
