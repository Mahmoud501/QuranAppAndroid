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
  btnBack: {
    marginVertical: '10@msr',
  },
  lblTitle: {
    color: Colors.white,
    fontFamily: AppConstants.FONT1_BOLD,
    fontSize: '23@msr',
  },
  vuLine: {
    marginHorizontal: '10@msr',
    height: '0.5@msr',
    backgroundColor: Colors.c5,
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
  btnCheck: {
    marginHorizontal: '10@msr',
    marginBottom: '10@msr',
  },
  vuContainBody: {
    flex: 1,
    backgroundColor: 'white',
  },
  lblSortTestHint: {
    backgroundColor: Colors.c2,
    color: Colors.white,
    fontFamily: AppConstants.FONT1_BOLD,
    fontSize: '16@msr',
    padding: '10@msr',
    textAlign: 'center',
  },
});
