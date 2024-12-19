import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import FontAwesome icons

export default function Footer() {
  const navigation = useNavigation();

  return (
    <View style={styles.footerContainer}>
      {/* Home Button */}
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Icon name="home" size={30} color="white" />
      </TouchableOpacity>

      {/* Stopwatch Button */}
      <TouchableOpacity onPress={() => navigation.navigate("Stopwatch")}>
        <Icon name="hourglass" size={30} color="white" />
      </TouchableOpacity>

      {/* To-Do List Button */}
      <TouchableOpacity onPress={() => navigation.navigate("ToDoList")}>
        <Icon name="bolt" size={30} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#1c1c1e",
    paddingVertical: 10,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
