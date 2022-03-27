// import AppImages from '../../../../Infrastructure/Helper/Utils/AppImages';
// import {strings} from '../../../../Infrastructure/Helper/Utils/i18n';
//Export screen Here
export class MainController {
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

  switchVisableBottomOptions = () => {
    if (this.isEmptyState()) {
      return;
    }
    this.SetDState(pre => {
      return {
        ...pre,
        bottom:
          this.dState.isShowBottomOptions === false
            ? 0
            : this.dState.height * -1,
      };
    });
  };

  showCloseButton = show => {
    if (this.isEmptyState()) {
      return;
    }
    this.SetDState(pre => {
      return {
        ...pre,
        isShowClose: show ?? !(pre.isShowClose ?? false),
      };
    });
  };

  showSortDialog = show => {
    if (this.isEmptyState()) {
      return;
    }
    this.SetDState(pre => {
      return {
        ...pre,
        showSortDialog: show ?? !(pre.showSortDialog ?? false),
      };
    });
  };

  showBasmalaView = show => {
    if (this.isEmptyState()) {
      return;
    }
    this.SetDState(pre => {
      return {
        ...pre,
        isShowBasmala: show ?? !(pre.isShowBasmala ?? false),
      };
    });
  };

  //Screen Logic
  ////////////////////////////////////////////////////////
}
