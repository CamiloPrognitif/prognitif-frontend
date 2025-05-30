import { FlatList, StyleSheet, View } from "react-native";
import AddButton from "../general/AddButton";
import GeneralTitle from "../general/GeneralTitle";
import AppointmentItem from "./AppointmentItem";

export interface Appointment {
  id: string
  day: string
  date: string
  time: string
  doctor: string
  examination: string
  isToday?: boolean
}

const initialAppointments: Appointment[] = [
  {
    id: "1",
    day: "Today",
    date: "07/08/2025",
    time: "11:30",
    doctor: "Neurologist",
    examination: "EEG examination",
    isToday: true,
  },
  {
    id: "2",
    day: "Friday",
    date: "11/08/2025",
    time: "15:45",
    doctor: "General",
    examination: "Physical exam",
  },
]

export default function AppointmentSection() {
  return (
    <View style={styles.container}>
       <GeneralTitle label="Appointments" />
    
      <FlatList
        data={initialAppointments}
        renderItem={({ item }) => <AppointmentItem appointment={item} />}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />
    <AddButton label="Add Appointment" onPress={() => console.log("Add Appointment")} />
      {/* Uncomment the following lines to add a modal for adding appointments */}
      {/* <AddAppointmentModal visible={modalVisible} onClose={() => setModalVisible(false)} onAdd={addAppointment} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginBottom: 24,
    paddingBottom: 100,
  },

  separator: {
    height: 12,
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
    marginTop: 8,
  },
  addButtonText: {
    color: "#6979F8",
    fontWeight: "500",
    marginLeft: 8,
  },
})