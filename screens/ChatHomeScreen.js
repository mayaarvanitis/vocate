import { StyleSheet, View, ImageBackground } from "react-native";
import React from "react";
import Chatbot from "../src/Chatbot"; // Adjusted to a relative path

const ChatHomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={require("/Users/mayaarvanitis/vocate/app/assets/images/homescreen.png")} // Path to your PNG asset
      style={styles.background} // Apply the background style
    >
      <View style={styles.container}>
        <Chatbot />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover", // Ensures the image scales proportionally
  },
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 0.8)", // Optional: Add a translucent overlay
    padding: 20,
  },
});

export default ChatHomeScreen;
