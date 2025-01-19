import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import * as Speech from "expo-speech";
import { Ionicons } from "@expo/vector-icons"; // Fix import for Ionicons

const ChatBubble = ({ role, text }) => {
  // Function to handle text-to-speech
  const handleSpeech = () => {
    console.log("Speech triggered for text:", text); // Debugging
    if (text) {
      Speech.speak(text, {
        language: "en-US",
        pitch: 1,
        rate: 1,
      });
    } else {
      console.warn("No text provided for speech.");
    }
  };

  return (
    <View
      style={[
        styles.chatItem,
        role === "user" ? styles.userChatItem : styles.modelChatItem,
      ]}
    >
      <Text style={styles.chatText}>{text}</Text>
      {role === "model" && (
        <TouchableOpacity onPress={handleSpeech} style={styles.speakerIcon}>
          <Ionicons name="volume-high-outline" size={24} color="#fff" />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  chatItem: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 10,
    maxWidth: "70%",
    position: "relative",
  },
  userChatItem: {
    alignSelf: "flex-end",
    backgroundColor: "#EF969E",
  },
  modelChatItem: {
    alignSelf: "flex-start",
    backgroundColor: "#1E6B2F",
  },
  chatText: {
    fontSize: 16,
    color: "#fff",
  },
  speakerIcon: {
    position: "absolute",
    bottom: 5,
    right: 5,
  },
});

export default ChatBubble;
