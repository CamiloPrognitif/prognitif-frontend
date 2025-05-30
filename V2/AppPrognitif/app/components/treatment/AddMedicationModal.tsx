import { useState } from "react";
import { Modal, StyleSheet, Text, TextInput, View } from "react-native";
import ModalTitle from "../general/ModalTitle";
import PrincipalButton from "../general/PrincipalButton";
import { Medication } from "./MedicationSection";

interface Props {
  visible: boolean
  onClose: () => void
    onAdd: (medication: Omit<Medication, "id">) => void
}

export default function AddMedicationModal({visible, onClose, onAdd}: Props) {

    const [name, setName] = useState("")
    const [frequency, setFrequency] = useState("")
    const [amount, setAmount] = useState("")
    const [notes, setNotes] = useState("")

  const handleAdd = () => {
    if (name.trim() === "" || frequency.trim() === "" || amount.trim() === "") return

    onAdd({
      name: name.trim(),
      frequency: frequency.trim(),
      amount: amount.trim(),
      notes: notes.trim(),
    })

    // Reset form
    setName("")
    setFrequency("")
    setAmount("")
    setNotes("")
  }

  return (
    <Modal  transparent={true} visible={visible} onRequestClose={onClose}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <ModalTitle label="Add Medication" onPress={onClose}/>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Medication Name</Text>
            <TextInput style={styles.input} value={name} onChangeText={setName} />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Amount</Text>
            <TextInput style={styles.input} value={amount} onChangeText={setAmount} placeholder="e.g. 500mg" />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Frequency</Text>
            <TextInput
              style={styles.input}
              value={frequency}
              onChangeText={setFrequency}
              placeholder="e.g. 1 / day, 2 / week"
            />
          </View>

          <View style={styles.inputContainer}>
            <Text style={styles.inputLabel}>Notes</Text>
            <TextInput
            editable
            multiline
            numberOfLines={4}
            maxLength={40}
              style={styles.input}
              value={notes}
              onChangeText={setNotes}
              
            />
          </View>
            <PrincipalButton label = "Add" onPress={handleAdd}/>
        </View>
      </View>
    </Modal>
  )
}

// style={styles.buttonContainer}

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
  },
  
})