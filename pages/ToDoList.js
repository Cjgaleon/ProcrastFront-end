import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput,
  Modal,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Footer from "./Footer";
import { useNavigation } from "@react-navigation/native";

export default function ToDoList() {
  const navigation = useNavigation();
  const [toDoList, setToDoList] = useState([]); // State to manage tasks
  const [isModalVisible, setModalVisible] = useState(false); // State to show modal
  const [task, setTask] = useState(""); // Task name input
  const [deadline, setDeadline] = useState(""); // Deadline input

  // Handle Logout
  const handleLogout = () => {
    navigation.navigate("Login");
  };

  // Handle Add Task
  const handleAddTask = () => {
    if (task && deadline) {
      const newTask = {
        id: Date.now().toString(), // Unique ID
        task,
        status: "pending", // Default status
        deadline,
      };
      setToDoList([...toDoList, newTask]); // Update task list
      setTask(""); // Clear input
      setDeadline(""); // Clear input
      setModalVisible(false); // Close modal
    }
  };

  // Render each row
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Text style={styles.cell}>{item.task}</Text>
      <Text style={styles.cell}>{item.status}</Text>
      <Text style={styles.cell}>{item.deadline}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Title and Logout */}
      <View style={styles.title}>
        <View style={styles.titleRow}>
          <Text style={styles.titleText}>Procrastiture</Text>
          <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
            <Ionicons name="log-out-outline" size={30} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      {/* "+" Button to Add Task */}
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => setModalVisible(true)}
      >
        <Ionicons name="add" size={30} color="white" />
      </TouchableOpacity>

      {/* Task Table */}
      <View style={styles.tableContainer}>
        {/* Header */}
        <View style={styles.tableHeader}>
          <Text style={styles.headerCell}>To Do</Text>
          <Text style={styles.headerCell}>Status</Text>
          <Text style={styles.headerCell}>Deadline</Text>
        </View>

        {/* Task List */}
        <FlatList
          data={toDoList}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
          style={{ width: "100%" }}
        />
      </View>

      {/* Modal for Adding Tasks */}
      <Modal visible={isModalVisible} transparent animationType="slide">
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add Task</Text>
            <TextInput
              placeholder="Task Name"
              placeholderTextColor="#999"
              style={styles.input}
              value={task}
              onChangeText={setTask}
            />
            <TextInput
              placeholder="Deadline (e.g., 6:00pm)"
              placeholderTextColor="#999"
              style={styles.input}
              value={deadline}
              onChangeText={setDeadline}
            />
            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={styles.modalButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.modalButton} onPress={handleAddTask}>
                <Text style={styles.buttonText}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

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
  tableContainer: {
    width: "90%",
    backgroundColor: "#2c2c2e",
    borderRadius: 10,
    paddingVertical: 10,
    marginTop: 100,
  },
  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderBottomWidth: 1,
    borderBottomColor: "white",
    paddingVertical: 10,
  },
  headerCell: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
    flex: 1,
    textAlign: "center",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 10,
  },
  cell: {
    fontSize: 16,
    color: "white",
    flex: 1,
    textAlign: "center",
  },
  addButton: {
    position: "absolute",
    bottom: 100,
    right: 30,
    backgroundColor: "#F4722B",
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#2c2c2e",
    borderRadius: 10,
    padding: 20,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "white",
    color: "white",
    marginBottom: 15,
    paddingVertical: 8,
    fontSize: 16,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 10,
  },
  modalButton: {
    backgroundColor: "#F4722B",
    padding: 10,
    borderRadius: 5,
    width: "40%",
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
});
