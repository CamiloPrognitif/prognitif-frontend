import { StyleSheet, Text, View } from "react-native";

type Props = {
  label: string;
};

export default function GeneralTitle({label}: Props) {
  return (
   <View style={styles.header}>
           <Text style={styles.title}> {label} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginBottom: 16,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
   title: {
    fontSize: 20,
    fontWeight: "900",
    
  },
}
)