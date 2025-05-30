import { Modal, StyleSheet, Text, View } from "react-native";
import ModalTitle from "../general/ModalTitle";
import PrincipalButton from "../general/PrincipalButton";
import SecondaryButton from "../general/SecondaryButton";
import type { Medication } from "./MedicationSection";

interface Props {
  visible: boolean
  onClose: () => void
  medication: Medication
}

export default function DetailMedicationModal({visible, onClose, medication}: Props) {
  return (
    <Modal  transparent={true} visible={visible} onRequestClose={onClose}>
        <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <ModalTitle label={medication.name} onPress={onClose}/>

                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Amount:  </Text>
                    <Text >{medication.amount}</Text>
                </View>
                
                <View style={styles.inputContainer}>
                    <Text style={styles.inputLabel}>Frequency:  </Text>
                    <Text >{medication.frequency}</Text>
                </View>
                
                <View style={styles.notesContainer}>
                    <Text style={styles.inputLabel}>Notes:</Text>
                    <Text >{medication.notes || "No notes provided"}</Text>
                </View>
                
                          
                              
                       
                
                          <View style={styles.buttonContainer}>
                            <View style={{flex:1}}>
                                <SecondaryButton iconName = "trash" label="Delete" onPress={() => {}}/>
                            </View>
                            <View style={{flex:1}}>
                            
                            <PrincipalButton label = "Edit" onPress={() => {}}/>
                            </View>

                          </View>
        </View>
</View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    width: "85%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 24,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
 
  inputContainer: {
    marginBottom: 16,
    flexDirection: "row",
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: "500",
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: "#E5E5E5",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  notesContainer: {
        marginBottom: 40,
},
 
})