import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  onPress: () => void;
};

export default function DetailsButton({onPress}: Props) {
  return (
    <View >
        <TouchableOpacity style={styles.detailsButton} onPress={onPress}>
          <Text style={styles.detailsText}>Details</Text>
          <Ionicons name="chevron-forward" style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailsText: {
    fontSize: 14,
    color: "rgba(153, 179, 252, 0.8)",
    marginRight: 4,
    fontWeight: "500",
  },
  icon: {
    
    color: "rgba(153, 179, 252, 0.8)",
  }
  })