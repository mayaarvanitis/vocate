import React from "react";
import { View, Text, StyleSheet, TextInput, Button } from "react-native";

const LogSymptom = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log a Symptom</Text>
      {/* Symptom Input Field */}
      <TextInput
        style={styles.input}
        placeholder="Enter symptom details"
        placeholderTextColor="#888"
      />
      <Button title="Submit" onPress={() => alert("Symptom logged!")} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 40,
    width: "80%",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
});

export default LogSymptom;
