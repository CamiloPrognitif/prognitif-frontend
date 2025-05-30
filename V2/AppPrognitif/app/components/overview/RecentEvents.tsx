import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AddButton from "../general/AddButton";
import GeneralTitle from "../general/GeneralTitle";

interface Event {
  id: string
  name: string
  date: string
  time: string
  type: "alert" | "warning" | "info"
  checked: boolean
}

const initialEvents: Event[] = [
  { id: "1", name: "Possible stress", date: "Today", time: "10:03", type: "warning", checked: false },
  { id: "2", name: "Temperature increase", date: "Today", time: "11:00", type: "warning", checked: false },
  { id: "3", name: "Medical appointment", date: "Today", time: "15:30", type: "alert", checked: false },
  { id: "4", name: "Possible stress", date: "2025/03/01", time: "22:03", type: "info", checked: true },
  { id: "5", name: "Possible fall", date: "2025/03/01", time: "22:03", type: "alert", checked: false },
  { id: "6", name: "Temperature increase", date: "2025/03/01", time: "22:03", type: "info", checked: true },
]

export default function RecentEvents() {
 const [events, setEvents] = useState<Event[]>(initialEvents)
//   const [modalVisible, setModalVisible] = useState(false)
//   const [newEvent, setNewEvent] = useState({ name: "", type: "info" as Event["type"] })

  const toggleCheck = (id: string) => {
    setEvents(events.map((event) => (event.id === id ? { ...event, checked: !event.checked } : event)))
  }

//   const addEvent = () => {
//     if (newEvent.name.trim() === "") return

//     const today = new Date()
//     const hours = today.getHours().toString().padStart(2, "0")
//     const minutes = today.getMinutes().toString().padStart(2, "0")

//     const newEventItem: Event = {
//       id: Date.now().toString(),
//       name: newEvent.name,
//       date: "Today",
//       time: `${hours}:${minutes}`,
//       type: newEvent.type,
//       checked: false,
//     }

//     setEvents([newEventItem, ...events])
//     setNewEvent({ name: "", type: "info" })
//     setModalVisible(false)
//   }

  const getEventIcon = (type: Event["type"]) => {
    switch (type) {
      case "alert":
        return <Image source={require("../../../assets/images/alert1.png")} style={{ width: 25, height: 25 }} />
      case "warning":
        return <Image source={require("../../../assets/images/alert2.png")} style={{ width: 25, height: 25 }} />
      case "info":
      default:
        return <Ionicons name="ellipse" size={25} color="#9E9E9E" />
    }
  }

  const renderEventItem = ({ item }: { item: Event }) => (
    <View style={styles.eventItem}>
      <View style={styles.eventIconContainer}>{getEventIcon(item.type)}</View>
      <View style={styles.eventInfo}>
        <Text style={styles.eventName}>{item.name}</Text>
        <View style={styles.eventTimeContainer}>
          <Text style={styles.eventTime}>{item.date}</Text>
          <Text style={styles.eventTime}>{item.time}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.checkboxContainer} onPress={() => toggleCheck(item.id)}>
        {item.checked ? (
          <View style={styles.checkedBox}>
            <Ionicons name="checkmark" size={16} color="#fff" />
          </View>
        ) : (
          <View style={styles.uncheckedBox} />
        )}
      </TouchableOpacity>
    </View>
  )

  return (
    <View style={styles.container}>
      <GeneralTitle label="Recent Events" />

    <View style={styles.contentContainer}>
        <FlatList
            data={events}
            renderItem={renderEventItem}
            keyExtractor={(item) => item.id}
            scrollEnabled={false}
            style={styles.eventsList}
        />
        
    </View>
      

      {/* <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Ionicons name="add" size={20} color="#6979F8" />
        <Text style={styles.addButtonText}>Add Event</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Add New Event</Text>

            <TextInput
              style={styles.input}
              placeholder="Event name"
              value={newEvent.name}
              onChangeText={(text) => setNewEvent({ ...newEvent, name: text })}
            />

            <View style={styles.typeSelector}>
              <Text style={styles.typeSelectorLabel}>Event Type:</Text>
              <View style={styles.typeOptions}>
                <TouchableOpacity
                  style={[styles.typeOption, newEvent.type === "info" && styles.selectedType]}
                  onPress={() => setNewEvent({ ...newEvent, type: "info" })}
                >
                  <Ionicons name="ellipse" size={20} color="#9E9E9E" />
                  <Text style={styles.typeText}>Info</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.typeOption, newEvent.type === "warning" && styles.selectedType]}
                  onPress={() => setNewEvent({ ...newEvent, type: "warning" })}
                >
                  <Ionicons name="alert-circle" size={20} color="#FFC107" />
                  <Text style={styles.typeText}>Warning</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.typeOption, newEvent.type === "alert" && styles.selectedType]}
                  onPress={() => setNewEvent({ ...newEvent, type: "alert" })}
                >
                  <Ionicons name="triangle" size={20} color="#FF5252" />
                  <Text style={styles.typeText}>Danger</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity style={[styles.modalButton, styles.addEventButton]} onPress={addEvent}>
                <Text style={styles.addEventButtonText}>Add</Text>
              </TouchableOpacity> */}
            {/* </View> */}
          {/* </View> */}
        {/* </View> */}
      {/* </Modal> */}

      <AddButton label="Add Event" onPress={() => console.log("Add Event")} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
    marginHorizontal: 16,
    paddingBottom: 100
  },
  contentContainer: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 16,
    marginVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 6,
    elevation: 2,
  },
  eventsList: {
    marginBottom: 12,
  },
  eventItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#E5E5E5",
  },
  eventIconContainer: {
    marginRight: 12,
  },
  eventInfo: {
    flex: 1,
  },
  eventName: {
    fontSize: 14,
    fontWeight: "500",
  },
  eventTimeContainer: {
    flexDirection: "row",
    marginTop: 4,
  },
  eventTime: {
    fontSize: 12,
    color: "#000",
    marginRight: 8,
  },
  checkboxContainer: {
    padding: 4,
  },
  uncheckedBox: {
    width: 20,
    height: 20,
    borderWidth: 1.5,
    borderColor: "#000",
    borderRadius: 2,
  },
  checkedBox: {
    width: 20,
    height: 20,
    borderWidth: 1.5,
    borderColor: "#000",
    
    backgroundColor: "#9E9E9E",
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  addButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 12,
    borderWidth: 1,
    borderColor: "#E5E5E5",
  },
  addButtonText: {
    color: "#6979F8",
    fontWeight: "500",
    marginLeft: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    width: "80%",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 20,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  typeSelector: {
    marginBottom: 16,
  },
  typeSelectorLabel: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 8,
  },
  typeOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  typeOption: {
    flexDirection: "row",
    alignItems: "center",
    padding: 8,
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 8,
  },
  selectedType: {
    backgroundColor: "#F0F0F0",
    borderColor: "#6979F8",
  },
  typeText: {
    marginLeft: 4,
    fontSize: 12,
  },
  modalButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalButton: {
    flex: 1,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  cancelButton: {
    backgroundColor: "#F0F0F0",
    marginRight: 8,
  },
  cancelButtonText: {
    color: "#333",
  },
  addEventButton: {
    backgroundColor: "#6979F8",
    marginLeft: 8,
  },
  addEventButtonText: {
    color: "#fff",
    fontWeight: "500",
  },
})