import { LinearGradient } from 'expo-linear-gradient';
import { StyleSheet, Text, View } from "react-native";

export default function PatientHeader() {
  return (
     
    <View style={styles.container}>
      
        <LinearGradient 
        colors={['rgba(205, 162, 244, 0.8)', 'rgba(151, 162, 241, 0.8)', 'rgba(153, 179, 252, 0.8)', 'rgba(144, 255, 175, 0.8)']}
        start={{ x: 0, y: 0 }}          
        end={{ x: 1, y: 1 }}            
        style={styles.patientCard}>
        <View style={styles.patientInfo}>
          <Text style={styles.patientName}>Susana Mejía Echeverry</Text>
          <View style={styles.patientDetails}>
            <View style={styles.detailColumn}>
              <Text style={styles.detailText}>30/07/1943</Text>
              <Text style={styles.detailText}>Sura</Text>
            </View>
            <View style={styles.detailColumn}>
              <Text style={styles.detailText}>Alcohol: Moderate</Text>
              <Text style={styles.detailText}>Smoke: Never</Text>
            </View>
          </View>
        </View>
        </LinearGradient>
    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    
  },
  patientCard: {
    backgroundColor: "#E2D9FF",
    borderRadius: 16,
    padding: 16,
    height: 130,
  },
  patientInfo: {
    flex: 1,
  },
  patientName: {
    fontSize: 18,
    fontWeight: "900",
    marginBottom: 8,
    color: "#333",
  },
  patientDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  detailColumn: {
    flex: 1,
  },
  detailText: {
    fontSize: 14,
    color: "#333",
    marginBottom: 4,
  },
})