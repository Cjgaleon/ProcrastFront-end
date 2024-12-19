import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import DatePicker, { getFormatedDate } from "react-native-modern-datepicker";
import Footer from "./Footer";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  const [selectedDate, setSelectedDate] = useState("");
  const [isDateSelected, setIsDateSelected] = useState(false); // State to control "View Task" visibility

  const handleLogout = () => {
    navigation.navigate("Login");
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setIsDateSelected(true);// Show "View Task" button when a date is selected
  };

  const handleViewTask = () => {
    console.log("Viewing tasks for:", selectedDate);
    navigation.navigate('ToDoList')
    // You can navigate to a "Task List" screen or handle task logic here
  };

  return (
    <View style={styles.container}>
      {/* Title and Log Out Icon */}
      <View style={styles.title}>
        <View style={styles.titleRow}>
          <Text style={styles.titleText}>Procrastiture</Text>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Date Picker */}
      <View style={styles.contentContainer}>
        <DatePicker
          options={{
            backgroundColor: "#2c2c2e",
            textHeaderColor: "#FFFFFF",
            textDefaultColor: "#F6E7C1",
            selectedTextColor: "#fff",
            mainColor: "#F4722B",
            textSecondaryColor: "#D6C7A1",
            borderColor: "#FFFFFF",
          }}
          current={selectedDate}
          selected={selectedDate}
          mode="calendar"
          minuteInterval={30}
          onDateChange={handleDateChange}
          style={{ borderRadius: 10 }}
        />
      </View>

      {/* Conditional "View Task" Button */}
      {isDateSelected && (
        <TouchableOpacity style={styles.viewTaskButton} onPress={handleViewTask}>
          <Text style={styles.buttonText}>View Task</Text>
        </TouchableOpacity>
      )}

      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1c1c1e",
    padding: 16,
    justifyContent: "space-between", 
  },
  title: {
    position: "absolute",
    top: 50,
    width: "100%",
    zIndex: 1,
  },
  titleRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
  },
  titleText: {
    color: "white",
    fontSize: 35,
    fontWeight: "bold",
  },
  logoutButton: {
    padding: 10,
    backgroundColor: "#E74C3C",
    borderRadius: 50,
  },
  contentContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  viewTaskButton: {
    position: "absolute",
    bottom: 100,
    alignSelf: "center", 
    width: "80%",
    backgroundColor: "#F4722B",
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 12,
    borderRadius: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});
