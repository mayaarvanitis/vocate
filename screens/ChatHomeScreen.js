import { StyleSheet, View } from "react-native";
import React from "react";
import Chatbot from "../src/Chatbot"; // Adjusted to a relative path

const ChatHomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Chatbot />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ChatHomeScreen;
