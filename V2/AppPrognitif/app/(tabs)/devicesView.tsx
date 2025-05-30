import { ScrollView, StyleSheet } from "react-native";
import DevicesSection from "../components/devices/DevicesSection";
import PatientHeader from "../components/general/PatientHeader";

export default function DevicesView() {
  return (
    <ScrollView  style={styles.scrollView}>
          <PatientHeader />
          <DevicesSection />
        </ScrollView>
  );
}

const styles = StyleSheet.create({
  
  scrollView: {
    flex: 1,
    backgroundColor: "#F5F5F7",
  },
  
})