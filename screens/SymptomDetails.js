import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Keyboard,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import Slider from "@react-native-community/slider";
import DateTimePicker from "@react-native-community/datetimepicker";

const SymptomDetails = ({ route, navigation }) => {
  const { category } = route.params; // Get category from navigation params
  const [severity, setSeverity] = useState(5); // Default severity value
  const [notes, setNotes] = useState(""); // State for notes
  const [date, setDate] = useState(new Date()); // State for selected date
  const [showDatePicker, setShowDatePicker] = useState(false); // State for showing date picker

  const handleDateChange = (event, selectedDate) => {
    setShowDatePicker(false); // Close the date picker
    if (selectedDate) {
      setDate(selectedDate); // Update the date if selected
    }
  };

  const handleSubmit = () => {
    alert(`Category: ${category}\nDate: ${date.toLocaleDateString()}\nSeverity: ${severity}\nNotes: ${notes}`);
    navigation.goBack(); // Navigate back after submission
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>{category}</Text>

        {/* Date Picker */}
        <Text style={styles.label}>date of symptom?</Text>
        <TouchableOpacity style={styles.dateButton} onPress={() => setShowDatePicker(true)}>
          <Text style={styles.dateButtonText}>{date.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {showDatePicker && (
          <DateTimePicker
            value={date}
            mode="date"
            display={Platform.OS === "ios" ? "spinner" : "default"}
            onChange={handleDateChange}
          />
        )}

        {/* Symptom Severity */}
        <Text style={styles.label}>severity of symptom?</Text>
        <Slider
          style={styles.slider}
          minimumValue={1}
          maximumValue={10}
          step={1}
          value={severity}
          onValueChange={(value) => setSeverity(value)}
          minimumTrackTintColor="#FF8C8C"
          maximumTrackTintColor="#CCC"
          thumbTintColor="#FF7070"
        />
        <Text style={styles.value}>{severity}</Text>

        {/* Notes */}
        <Text style={styles.label}>additional notes</Text>
        <TextInput
          style={styles.input}
          placeholder="type here..."
          value={notes}
          onChangeText={setNotes}
          multiline
          returnKeyType="done" // Display "Done" button on iOS keyboard
          blurOnSubmit={true} // Ensures the TextInput loses focus
          onSubmitEditing={Keyboard.dismiss} // Dismiss keyboard when "Done" is pressed
        />

        {/* Submit Button */}
        <ImageBackground
          source={require("/Users/mayaarvanitis/vocate/app/assets/images/button.png")}
          style={styles.buttonBackground}
        >
          <TouchableOpacity style={styles.buttonTouchable} onPress={handleSubmit}>
            <Text style={styles.buttonText}>Submit</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7E8",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "ClimateCrisis-Regular",
    color: "#1E6B2F",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    fontFamily: "Archivo",
    fontStyle: "SemiBold 600",
    color: "#3D2121",
    marginVertical: 10,
  },
  dateButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#E7DAC1",
    borderRadius: 10,
    backgroundColor: "#E7DAC1",
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  dateButtonText: {
    fontFamily: "Archivo",
    fontSize: 16,
    color: "#3D2121",
  },
  slider: {
    width: "100%",
    height: 40,
  },
  value: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E7DAC1",
    padding: 10,
    borderRadius: 10,
    backgroundColor: "#E7DAC1",
    marginBottom: 20,
    height: 100,
    textAlignVertical: "top",
  },
  buttonBackground: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  buttonTouchable: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    fontFamily: "Archivo",
    fontSize: 18,
    color: "#3D2121",
    textAlign: "center",
  },
});

export default SymptomDetails;
