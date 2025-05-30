import { FlatList, StyleSheet, View } from "react-native";
import AddButton from "../general/AddButton";
import GeneralTitle from "../general/GeneralTitle";
import DeviceItem from "./DeviceItem";

export interface Device {
  id: string
  name: string
  signals: string[]
  type: string
  vendor: string
  isActive: boolean
}

const initialDevices: Device[] = [
  {
    id: "1",
    name: "Emotibit",
    signals: ["HR", "SpO2", "Temperature", "Falls", "Stress", "Sleep"],
    type: "Wristband",
    vendor: "Emotibit",
    isActive: true,
  },
  {
    id: "2",
    name: "Neurosity Crown",
    signals: ["EEG", "Temperature", "Falls"],
    type: "Helmet",
    vendor: "Neurosity",
    isActive: false,
  },
]

// onToggle={() => toggleDeviceStatus(item.id)}

export default function DevicesSection() {
  return (
    <View style={styles.container}>
           <GeneralTitle label="Devices" />
        
          <FlatList
        data={initialDevices}
        renderItem={({ item }) => <DeviceItem device={item} onToggle={() => console.log("toggle device status")} />}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

        <AddButton label="Add Device" onPress={() => console.log("Add Device")} />
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