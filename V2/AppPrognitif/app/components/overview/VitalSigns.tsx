import { Image } from "expo-image";
import { StyleSheet, Text, View } from "react-native";

const vitals = [
  {
    id: "HR",
    title: "Heart Rate",
    value: 67,
    unit: "bpm",
    min: 60,
    max: 100,
  },
  {
    id: "SpO2",
    title: "SpO2",
    value: 80,
    unit: "%",
    min: 90,
    max: 100,
  },
  {
    id: "Temperature",
    title: "Temperature",
    value: 37.2,
    unit: "°C",
    min: 36,
    max: 38,
  },
]

export default function VitalSigns() {
  return (
    <View style={styles.container}>
      <View style={styles.vitalSignsRow}>
        {vitals.map((vital) => (
          
                  <View key={vital.id} style={styles.vitalSign}>
                    {vital.value < vital.min || vital.value > vital.max ? 
                      <Image source={require('../../../assets/images/alert1.png')} style={styles.alertIcon} />  
                    : <></>}
                    <View style={styles.vitalValueContainerLabel}>
                       <Text style={styles.vitalLabel}>{vital.title}</Text>
                    </View>
                    <View style={styles.vitalValueContainer}>
                      <Text style={styles.vitalValue}>{vital.value}</Text>
                      <Text style={styles.vitalUnit}>{vital.unit}</Text>
                    </View>
                  </View>
        ))}
      </View>
      <Text style={styles.updatedText}>Updated 2min ago</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginBottom: 16,
    
  },
  vitalSignsRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  vitalSign: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 10,
    marginHorizontal: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 6,
    elevation: 2,
  },
  vitalLabel: {
    fontSize: 14,
    color: "rgb(205, 162, 244)",
    fontWeight: "600",
    // marginBottom: 2,  
  },
  vitalValueContainer: {
    flexDirection: "row",
    alignItems: "flex-end",
    paddingTop: 4,
  },
  vitalValueContainerLabel: {
    flex: 1,
    width: "100%",
  },
  vitalValue: {
    fontSize: 38,
    fontWeight: "900",
    lineHeight: 40,
  },
  warningIcon: {
    marginLeft: 4,
  },
  vitalUnit: {
    fontSize: 12,
    fontWeight: "900",
  },
  updatedText: {
    fontSize: 12,
    
    textAlign: "right",
    marginTop: 4,
    marginRight: 4,
  },
  alertIcon: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: -8,
    right: -8,
    zIndex: 1,
  },
})