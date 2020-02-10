import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';
import { DeviceMotion } from 'expo-sensors';

onMotionDetected = (webview, data) => {
  if (webview) {
    webview.postMessage(JSON.stringify(data));
  }
}

const throttle = (func, limit) => {
  let inThrottle
  return function() {
    const args = arguments
    const context = this
    if (!inThrottle) {
      func.apply(context, args)
      inThrottle = true
      setTimeout(() => inThrottle = false, limit)
    }
  }
}

export default function App() {
  let webview = null

  DeviceMotion.isAvailableAsync().then((isAvailable) =>{
    if(!isAvailable) console.error("Device motion not available")
  })

  DeviceMotion.addListener(throttle((data) => onMotionDetected(webview, data), 5))

  return <WebView
    source={{ uri: 'https://gyrosynth.ngrok.io' }}
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
