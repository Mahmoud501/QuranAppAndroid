import React, {useState, useEffect, useRef} from 'react';
import {View, Dimensions, useWindowDimensions, FlatList} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import CMPager from './CMPager';
import {getCurrentLocale} from '../../../../Infrastructure/Helper/Utils/i18n';

// #region Styles
const styles = ScaledSheet.create({
  vuMain: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  imgBack: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  vuSliderContent: {},
  vuSliderPager: {
    flex: 1,
    width: '100%',
    marginTop: '15@msr',
  },
  vuSliderPagerContent: {
    flexGrow: 1,
    justifyContent: 'center',
  },
});
// #endregion

const CMSliderView = ({data, CMItem, style, onChangeIndex, scrollIndex}) => {
  const {width} = useWindowDimensions();

  const [currentSliderPage, SetCurrentSliderPage] = useState(0);
  const flatlistRef = useRef();
  const flatlistPagerRef = useRef();

  //listeners
  useEffect(() => {
    if (currentSliderPage || currentSliderPage === 0) {
      if (onChangeIndex) {
        onChangeIndex(currentSliderPage);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentSliderPage]);

  useEffect(() => {
    if (scrollIndex) {
      setTimeout(() => {
        console.log(`scroll to index fire to ${scrollIndex}`);

        scrollToIndex(scrollIndex);
      }, 200);
    }
  }, [scrollIndex]);

  //Logic

  const scrollToIndex = index => {
    flatlistRef.current.scrollToIndex({animated: true, index: index});
    SetCurrentSliderPage(index);
  };

  let onScrollEnd = e => {
    let pageNumber = Math.min(
      Math.max(
        Math.floor(
          (e.nativeEvent?.contentOffset.x ?? 0) /
            Dimensions.get('window').width +
            0.5,
        ) + 1,
        0,
      ),
      data.length,
    );
    if (getCurrentLocale() === 'ar') {
      pageNumber = data.length - pageNumber;
    } else {
      pageNumber = pageNumber - 1;
    }
    SetCurrentSliderPage(pageNumber);
  };

  // UIComponent
  const getSliderItem = (item, index) => {
    return <View style={[{width: width}]}>{CMItem(item, index)}</View>;
  };

  const getSliderPagerItem = (object, index) => {
    if (index === currentSliderPage) {
      object.select = true;
    } else {
      object.select = false;
    }
    return <CMPager item={object} />;
  };

  // UIRender

  return (
    <View style={[styles.vuMain, {...style}]}>
      <FlatList
        onMomentumScrollEnd={onScrollEnd}
        pagingEnabled
        ref={flatlistRef}
        contentContainerStyle={styles.vuSliderContent}
        data={data}
        renderItem={({item, index}) => getSliderItem(item, index)}
        keyExtractor={item => `${item.id}`}
        bounces={false}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
      <FlatList
        ref={flatlistPagerRef}
        style={styles.vuSliderPager}
        contentContainerStyle={styles.vuSliderPagerContent}
        data={data}
        renderItem={({item, index}) => getSliderPagerItem(item, index)}
        keyExtractor={item => `${item.id}`}
        bounces={false}
        horizontal={true}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default CMSliderView;
