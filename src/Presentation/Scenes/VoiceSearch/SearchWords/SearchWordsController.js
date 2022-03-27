// import AppImages from '../../../../Infrastructure/Helper/Utils/AppImages';
// import {strings} from '../../../../Infrastructure/Helper/Utils/i18n';
//Export screen Here
export class SearchWordsController {
  //State data
  constructor(props) {}

  //Config
  //////////////////////////////////////////
  isEmptyState = () => {
    if (this.dState) {
      return false;
    } else {
      return true;
    }
  };

  clearListener = listener => {
    if (this.isEmptyState()) {
      return;
    }
    this.SetDState(pre => {
      return {...pre, [listener]: null};
    });
  };

  //UI Logic
  //////////////////////////////////////////

  //Screen Logic
  ////////////////////////////////////////////////////////
}
