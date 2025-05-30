import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  onPress: () => void; //Verify
  label: string;
};

export default function PrincipalButton({onPress, label}: Props) {
  return (
    <View>
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}> {label} </Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    button: {
    padding: 10,
    borderRadius: 50,
    alignItems: "center",
    backgroundColor: "rgba(153, 179, 252, 0.8)",
    marginLeft: 8,
  },
   buttonText: {
    color: "#fff",
    fontWeight: "500",
  },
});