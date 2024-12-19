import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Footer from "./Footer";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";

export default function Stopwatch() {
  const navigation = useNavigation();

  const handleLogout = () => {
    navigation.navigate("Login");
    // Handle logout logic here
  };

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => setTime((prevTime) => prevTime + 1), 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = () => {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return `${minutes}:${seconds}`;
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

      {/* Stopwatch Timer */}
      <View style={styles.contentContainer}>
        <Text style={styles.timerText}>{formatTime()}</Text>

        <TouchableOpacity
          style={styles.circleButton}
          onPress={() => setIsRunning(!isRunning)}
        >
          <Text style={styles.buttonText}>{isRunning ? "Pause" : "Start"}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.actionButton} onPress={resetTimer}>
          <Text style={styles.actionButtonText}>Reset</Text>
        </TouchableOpacity>
      </View>

      {/* Footer */}
      <Footer />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1c1c1e",
    padding: 16,
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
  timerText: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom: 50,
  },
  circleButton: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 5,
    borderColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 24,
    fontWeight: "bold",
  },
  actionButton: {
    padding: 10,
    backgroundColor: "#444444",
    borderRadius: 8,
  },
  actionButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
