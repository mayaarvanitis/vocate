import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import App from "/Users/mayaarvanitis/vocate/App.js"; // Ensure this path is correct

const Root = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <App />
    </GestureHandlerRootView>
  );
};

export default Root;