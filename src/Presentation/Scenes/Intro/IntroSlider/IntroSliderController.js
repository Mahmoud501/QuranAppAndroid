import AppImages from '../../../../Infrastructure/Helper/Utils/AppImages';
import {strings} from '../../../../Infrastructure/Helper/Utils/i18n';
//Export screen Here
export class IntroSliderPageController {
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
  didChangeIndex = currentIndex => {
    if (this.isEmptyState()) {
      return;
    }
    if ((this.dState?.arrSlider?.length ?? 0) > 0) {
      if (currentIndex === (this.dState?.arrSlider?.length ?? 1) - 1) {
        this.SetDState(pre => {
          return {
            ...pre,
            btnName: strings('gotit'),
            currentIndex: currentIndex,
          };
        });
      } else {
        this.SetDState(pre => {
          return {...pre, btnName: strings('next'), currentIndex: currentIndex};
        });
      }
    }
  };

  onNextClicked = () => {
    if (this.isEmptyState()) {
      return;
    }
    if (
      this.dState.currentIndex !==
      (this.dState?.arrSlider?.length ?? 1) - 1
    ) {
      this.SetDState(pre => {
        return {...pre, scrollTo: (this.dState.currentIndex ?? 0) + 1};
      });
    } else {
      this.gotitNaviagation();
    }
  };

  onPreivousClicked = () => {
    if (this.isEmptyState()) {
      return;
    }
    if (this.dState.currentIndex !== 0) {
      this.SetDState(pre => {
        return {...pre, scrollTo: (this.dState.currentIndex ?? 0) - 1};
      });
    }
  };
  gotitNaviagation = () => {
    this.navigation.navigate('RegisterPage');
  };

  //Screen Logic
  ////////////////////////////////////////////////////////
  setupSliderData = () => {
    if (this.isEmptyState()) {
      return;
    }
    let data = [
      {
        id: 1,
        title: strings('intro_title_1'),
        desc: strings('intro_desc_1'),
        img: AppImages.slider4,
      },
      {
        id: 2,
        title: strings('intro_title_2'),
        desc: strings('intro_desc_2'),
        img: AppImages.slider3,
      },
      {
        id: 3,
        title: strings('intro_title_3'),
        desc: strings('intro_desc_3'),
        img: AppImages.slider1,
      },
    ];
    this.SetDState(pre => {
      return {...pre, arrSlider: data};
    });
  };
}
