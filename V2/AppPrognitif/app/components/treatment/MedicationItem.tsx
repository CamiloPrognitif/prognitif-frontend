import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import DetailsButton from "../general/DetailsButton";
import DetailMedicationModal from "./DetailMedicationModal";
import type { Medication } from "./MedicationSection";

type Props = {
  medication: Medication;
};

export default function MedicationItem({medication}: Props) {
  const [modalVisible, setModalVisible] = useState(false)
  
  return (
    <View>

    
    <View style={styles.container}>
      <Text style={styles.name}>{medication.name}</Text>
      <Text style={styles.frequency}>{medication.frequency}</Text>
      <DetailsButton onPress={() => setModalVisible(true)}/>
        
    </View>
    <DetailMedicationModal visible={modalVisible} onClose={() => setModalVisible(false)} medication ={medication}  />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    
  },
  name: {
    flex: 2,
    fontWeight: "500",
  },
  frequency: {
    flex: 1,
  },
  
})