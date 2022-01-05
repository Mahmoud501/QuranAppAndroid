import React from 'react';
import {StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

// #region Styles
const styles = StyleSheet.create({
  vuWebView: {
    width: '100%',
    backgroundColor: 'transparent',
  },
  vuWebViewContent: {
    backgroundColor: 'transparent',
  },
});
// #endregion
//Bg = view with background Image
const CMWebView = ({style, containerStyle, content, isHtml}) => {
  return (
    <WebView
      style={[styles.vuWebView, {...style}]}
      javaScriptEnabled={true}
      domStorageEnabled={true}
      originWhitelist={['*']}
      bounces={false}
      containerStyle={styles.vuWebViewContent}
      textZoom={100}
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      source={isHtml ? {html: content} : {uri: content}}
    />
  );
};

export default CMWebView;
