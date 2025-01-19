import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";

// Import Screens
import ChatHomeScreen from "/Users/mayaarvanitis/vocate/screens/ChatHomeScreen.js";
import HomeScreen from "/Users/mayaarvanitis/vocate/screens/HomeScreen.js";
import LogScreen from "/Users/mayaarvanitis/vocate/screens/LogScreen.js";
import SymptomDetails from "/Users/mayaarvanitis/vocate/screens/SymptomDetails.js"; // New screen

const Tab = createBottomTabNavigator();
const LogStack = createStackNavigator();

// Custom header component
function CustomHeader({ navigation, title }) {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Ionicons name="arrow-back" size={24} color="#EF969E" />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
}

// LogSymptomStack
function LogSymptomStack() {
  return (
    <LogStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#FAF3E0", 
        },
        headerTintColor: "#EF969E", // Text color
        headerTitleAlign: "center", // Center align the title
        headerBackTitleVisible: false, // Hide the default back text
      }}
    >
      <LogStack.Screen
      //Start with the log screen options.
        name="LogScreen"
        component={LogScreen}
        options={{ title: "Log Symptoms" }}
      />
      <LogStack.Screen
      // Add the symptom detail options
        name="SymptomDetails"
        component={SymptomDetails}
        options={({ navigation }) => ({
          header: () => <CustomHeader navigation={navigation} title="Symptom Details" />,
        })}
      />
    </LogStack.Navigator>
  );
}

export default function App() {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false, // Disable the white header globally for all tabs
          
          // Function to determine the icon for each tab
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            
            // Set the icon based on the route name
            if (route.name === "Home") {
              iconName = focused ? "home" : "home-outline";
            } else if (route.name === "Log Symptom") {
              iconName = focused ? "create" : "create-outline";
            } else if (route.name === "Chatbot") {
              iconName = focused ? "chatbubbles" : "chatbubbles-outline";
            }
            
            // Return the Ionicons component with the correct icon
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          // Tab bar style
          tabBarActiveTintColor: "#EF969E", // Color of active tab icon and label
          tabBarInactiveTintColor: "#888", // Color of inactive tab icon and label
          tabBarStyle: {
            backgroundColor: "#FAF3E0", // Background color of the tab bar
            borderTopWidth: 0, // Remove top border
            elevation: 10, 
            shadowColor: "#000",  // Add shadow to the tab bar
            shadowOpacity: 0.1, // Shadow opacity
            shadowOffset: { width: 0, height: -2 }, // Shadow offset
            shadowRadius: 5, // Shadow radius
            height: 60, // Set the height of the tab bar
          },
          tabBarLabelStyle: {
            fontSize: 12, 
            fontFamily: "Archivo",
          },
        })}
      >
        {/* Define the screens for the tab navigator */}
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Log Symptom" component={LogSymptomStack} />
        <Tab.Screen name="Chatbot" component={ChatHomeScreen} />
      </Tab.Navigator>
  );
}


const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row", // Arrange children in a row
    alignItems: "center", // Align children vertically
    backgroundColor: "#FAF3E0",
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#CCC",
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "Archivo",
    color: "#EF969E",
  },
});
