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
    height: '1@msr',
    backgroundColor: Colors.c5,
  },
  vuBody: {
    flex: 1,
  },
  vuInfo: {
    flex: 1,
  },
  lblSubTitle: {
    marginTop: '25@msr',
    marginHorizontal: '10@msr',
    color: Colors.white,
    fontFamily: AppConstants.FONT1_BOLD,
    fontSize: '18@msr',
  },
  lblDesc: {
    marginHorizontal: '10@msr',
    color: Colors.white,
    fontFamily: AppConstants.FONT1_REGULAR,
    fontSize: '16@msr',
  },
  vuForm: {
    flex: 1,
    marginTop: '25@msr',
    backgroundColor: Colors.c7,
    marginHorizontal: '20@msr',
    borderRadius: '8@msr',
    paddingHorizontal: '10@msr',
    paddingVertical: '15@msr',
  },
  txtInput: {
    borderWidth: 0.5,
    borderColor: Colors.gray,
    borderRadius: '8@msr',
    marginBottom: '10@msr',
    backgroundColor: Colors.transparent,
  },
  vuGradienSubmit: {
    marginEnd: '20@msr',
    width: '130@msr',
    height: '55@msr',
    borderRadius: '8@msr',
    marginTop: '20@msr',
    alignSelf: 'flex-end',
  },
  vuSubmit: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lblSubmit: {
    textAlign: 'center',
    color: Colors.c4,
    fontFamily: AppConstants.FONT1_MEDIUM,
    fontSize: '18@msr',
  },
  btnSkip: {
    marginTop: '10@msr',
    alignSelf: 'center',
    marginBottom: '50@msr',
  },
  btnTextSkip: {
    fontFamily: AppConstants.FONT1_BOLD,
    color: 'white',
    padding: '20@msr',
    fontSize: '20@msr',
  },
});
