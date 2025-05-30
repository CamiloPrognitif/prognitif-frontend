import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
    onPress: () => void; //Verify
  label: string;
};


export default function ModalTitle({ onPress, label }: Props) {
  return (
    
    <View style ={styles.container}>
        <Text style = {styles.modalTitle}>{label}</Text>
        <TouchableOpacity onPress={onPress} >
          <Ionicons name="close" size={24} color="#333" />
        </TouchableOpacity>
        
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
        justifyContent: "space-between",
        flexDirection: "row",
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "900",
        marginBottom: 30,
        textAlign: "center",
  },

});