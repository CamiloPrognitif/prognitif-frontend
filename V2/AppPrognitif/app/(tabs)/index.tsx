import { ScrollView, StyleSheet } from "react-native";
import PatientHeader from "../components/general/PatientHeader";
import HealthInformation from "../components/overview/HealthInformation";
import RecentEvents from "../components/overview/RecentEvents";
import VitalSigns from "../components/overview/VitalSigns";

export default function Index() {
  return (
    <ScrollView  style={styles.scrollView}>
      <PatientHeader />
      <HealthInformation />
      <VitalSigns />
      <RecentEvents />
    </ScrollView>
    
  );
}

const styles = StyleSheet.create({
  
  scrollView: {
    flex: 1,
    backgroundColor: "#F5F5F7",
    
  },
  
})