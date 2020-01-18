import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { DeviceMotion } from 'expo-sensors';

onMotionDetected = (webview, data) => {
  if(webview){
    webview.postMessage(JSON.stringify(data));
  }
}

export default function App() {
  let webview = null

  DeviceMotion.isAvailableAsync().then((isAvailable) =>{
    if(!isAvailable) console.error("Device motion not available")
  })

  DeviceMotion.addListener((data) => onMotionDetected(webview, data))

  return <WebView
    source={{ uri: 'https://a13736e1.ngrok.io' }}
    ref={( view ) => webview = view}
  />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff6f61',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
