import { MaterialIcons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  onPress: () => void; //Verify
  label: string;
};

export default function AddButton({onPress, label}: Props) {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.addButton} onPress={onPress}>
        <MaterialIcons name="add-circle-outline" size={24} color="#848484" />
        <Text style={styles.addButtonText}>{label}</Text>
      </TouchableOpacity>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container:{
    paddingTop: 16,
  },
   addButton: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F7",
    borderRadius: 12,
    padding: 12,
    borderWidth: 2,
    borderColor: "#D9D9D9",
    marginTop: 6,
    shadowColor: '#848484',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 6,
    elevation: 2,
  },
  addButtonText: {
    color: "#848484",
    fontWeight: "500",
    marginLeft: 8,
  },
});