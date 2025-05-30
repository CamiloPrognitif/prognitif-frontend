import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import AddButton from "../general/AddButton";
import GeneralTitle from "../general/GeneralTitle";
import AddMedicationModal from "./AddMedicationModal";
import MedicationItem from "./MedicationItem";

export interface Medication {
  id: string
  name: string
  frequency: string
  amount: string
  notes?: string
}

const initialMedications: Medication[] = [
  { id: "1", name: "Donepezil", frequency: "1/hour", amount: "500mg", notes: "Take with food. May cause nausea, diarrhea, or insomnia." },
  { id: "2", name: "Galantamine", frequency: "2/week", amount: "10mL", notes: "May cause dizziness or headache."  },
  { id: "3", name: "Rivastigmine", frequency: "1/8 hour", amount: "500mg", notes: "Apply patch to clean, dry, hairless skin. Rotate application sites. Used to treat mild to moderate dementia associated with Alzheimer's or Parkinson's" },
]

export default function MedicationSection() {
  const [medications, setMedications] = useState<Medication[]>(initialMedications)
  const [modalVisible, setModalVisible] = useState(false)

  const addMedication = (medication: Omit<Medication, "id">) => {
    const newMedication = {
      id: Date.now().toString(),
      ...medication,
    }
    setMedications([...medications, newMedication])
    setModalVisible(false)
  } 
     
  return (
    <View style={styles.container}>
      <GeneralTitle label="Medication" />

      <View style={styles.contentContainer}>
        <FlatList
        data={medications}
        renderItem={({ item }) => <MedicationItem medication={item} />} 
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      </View>
      <AddButton label = "Add Medication" onPress={() => setModalVisible(true)} />
      

      <AddMedicationModal visible={modalVisible} onClose={() => setModalVisible(false)} onAdd ={addMedication}  /> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginBottom: 24,
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
  
  separator: {
    height: 1,
    backgroundColor: "#E5E5E5",
    marginVertical: 8,
  },
 
})