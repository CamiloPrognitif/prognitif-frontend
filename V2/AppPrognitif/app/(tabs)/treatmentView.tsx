import { ScrollView, StyleSheet } from "react-native";
import PatientHeader from "../components/general/PatientHeader";
import AppointmentSection from "../components/treatment/AppointmentSection";
import MedicationSection from "../components/treatment/MedicationSection";

export default function TreatmentView() {
  return (
    <ScrollView  style={styles.scrollView}>
      <PatientHeader />
      <MedicationSection />
      <AppointmentSection />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  
  scrollView: {
    flex: 1,
    backgroundColor: "#F5F5F7",
  },
  
})