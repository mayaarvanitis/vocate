import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, ActivityIndicator, ImageBackground, TouchableOpacity, Image } from "react-native";
import * as Font from "expo-font";

const HomeScreen = ({ navigation }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  const loadFonts = async () => {
    try {
      await Font.loadAsync({
        "ClimateCrisis-Regular": require("/Users/mayaarvanitis/vocate/app/assets/fonts/ClimateCrisis-Regular-VariableFont_YEAR.ttf"),
        "Archivo": require("/Users/mayaarvanitis/vocate/app/assets/fonts/Archivo-VariableFont_wdth,wght.ttf"),
      });
      setFontsLoaded(true);
    } catch (error) {
      console.error("Error loading fonts: ", error);
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFontsLoaded(true); // Fallback if font loading takes too long
    }, 5000); // Timeout after 5 seconds

    loadFonts().then(() => clearTimeout(timeout)); // Clear timeout if fonts load successfully

    return () => clearTimeout(timeout); // Cleanup on unmount
  }, []);

  if (!fontsLoaded) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <ImageBackground
      source={require("/Users/mayaarvanitis/vocate/app/assets/images/homescreen.png")} // Path to your background image
      style={styles.container}
    >

      {/* Full-Size Image Scaled Down */}
      <Image
        source={require("/Users/mayaarvanitis/vocate/app/assets/images/Group.png")} // Path to your new image asset
        style={styles.scaledImage}
        resizeMode="contain" // Ensures the image scales proportionally
      />

      {/* Button with PNG Asset */}
      <ImageBackground
        source={require("/Users/mayaarvanitis/vocate/app/assets/images/pinkrectangle.png")} // Path to your button PNG asset
        style={styles.buttonBackground}
      >
        <TouchableOpacity
          style={styles.buttonTouchable}
          onPress={() => navigation.navigate("Log Symptom")}
        >
          <Text style={styles.buttonText}>Log a Symptom</Text>
        </TouchableOpacity>
      </ImageBackground>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: "ClimateCrisis-Regular",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#333",
  },
  scaledImage: {
    width: "50%", // Scales image width to 80% of screen width
    height: undefined, // Allows height to scale proportionally
    aspectRatio: 1, // Maintains the image's aspect ratio (change as needed)
    marginBottom: 2, // Space between the image and the button
    marginTop: 170, // Space between the image and the button
  },
  buttonBackground: {
    position: "absolute",
    bottom: 50, // Position the button at the bottom
    width: 280, // Adjust to match the size of your button PNG asset
    height: 50, // Adjust to match the size of your button PNG asset
    justifyContent: "center",
    alignItems: "center",
  },
  buttonTouchable: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Archivo",
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFF", // Adjust text color based on the PNG design
  },
});

export default HomeScreen;
