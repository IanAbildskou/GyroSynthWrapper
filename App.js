import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  return <WebView source={{ uri: 'https://gyrosynth.ianabildskou.now.sh/' }} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff6f61',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
