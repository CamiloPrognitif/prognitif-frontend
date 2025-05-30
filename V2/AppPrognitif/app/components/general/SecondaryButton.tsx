import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  onPress: () => void; //Verify
  label: string;
  iconName?:  keyof typeof Ionicons.glyphMap;
};

export default function SecondaryButton({onPress, label, iconName}: Props) {
  return (
    <View style={styles.button}>
      {iconName ? ( 
        <Ionicons name={iconName} size = {20} style={styles.icon} /> )
        : null}
      <TouchableOpacity  onPress={onPress}>
            <Text style={styles.buttonText} > {label}</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    
    button: {
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
    backgroundColor: "#F0F0F0",
    marginRight: 8,
    flexDirection: "row",
    justifyContent: "center",
  },
   buttonText: {
    color: "#000",
    fontWeight: "500",
  },
  icon: {
    
    color: "#000",
    marginRight: 5,
  }
});