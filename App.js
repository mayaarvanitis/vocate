import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

// Import Screens
import ChatHomeScreen from "/Users/mayaarvanitis/vocate/screens/ChatHomeScreen.js";
import HomeScreen from "/Users/mayaarvanitis/vocate/screens/HomeScreen.js";
import LogScreen from "/Users/mayaarvanitis/vocate/screens/LogScreen.js";

// Create Bottom Tab Navigator
const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Log Symptom") {
              iconName = "create";
            } else if (route.name === "Chatbot") {
              iconName = "chatbubbles";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "tomato",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Log Symptom" component={LogScreen} />
        <Tab.Screen name="Chatbot" component={ChatHomeScreen} />
      </Tab.Navigator>
  );
}
