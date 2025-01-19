import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const categories = [
  "missed/irregular periods",
  "skin & hair",
  "mental health & energy",
  "ovarian function",
  "weight & metabolism",
  "other",
];

const LogScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Top Background Rectangle */}
      <Image
        source={require("/Users/mayaarvanitis/vocate/app/assets/images/Rectangle 12.png")} // Path to your rectangle asset
        style={styles.topRectangle}
      />

      {/* Foreground Content */}
      <View style={styles.contentContainer}>
        <Text style={styles.title}>track symptoms</Text>
        <Text style={styles.subtitle}>
          what symptoms would you like to log today?
        </Text>
        <View style={styles.grid}>
          {categories.map((category) => (
            <TouchableOpacity
              key={category}
              style={styles.categoryButton}
              onPress={() =>
                navigation.navigate("SymptomDetails", { category })
              }
            >
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7E8",
  },
  topRectangle: {
    position: "absolute",
    top: 0,
    width: "100%", // Stretch to the full width of the screen
    height: 150, // Adjust height as needed
    resizeMode: "stretch", // Stretch the image to fit the width
  },
  contentContainer: {
    flex: 1,
    padding: 20,
    marginTop: 150, // Push content down below the rectangle
  },
  title: {
    fontSize: 24,
    fontFamily: "ClimateCrisis-Regular",
    fontStyle: "italic",
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1E6B2F",
  },
  subtitle: {
    fontSize: 18,
    fontFamily: "Archivo",
    marginBottom: 20,
    color: "#424242",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  categoryButton: {
    width: "45%",
    backgroundColor: "#E7DAC1",
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    justifyContent: "center",
    alignItems: "center",
  },
  categoryText: {
    fontSize: 16,
    fontFamily: "Archivo",
    textAlign: "center",
    color: "#424242",
  },
});

export default LogScreen;
