import { Image } from "expo-image";
import { useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import GeneralTitle from "../general/GeneralTitle";

const tabs = [
  {
    id: "diagnosis",
    title: "Diagnosis",
    image: require("../../../assets/images/diagnosis_icon.png"),
    content:
      "Progressive cognitive decline with memory impairment and difficulty in daily activities, consistent with Alzheimer's disease.",
  },
  {
    id: "limitations",
    title: "Limitations",
    image: require("../../../assets/images/limitations_icon.png"),
    content:
      "Requires assistance with complex tasks. Should not drive or operate heavy machinery. Needs supervision for medication management.",
  },
  {
    id: "allergies",
    title: "Allergies",
    image: require("../../../assets/images/allergies_icon.png"),
    content: "Penicillin - Severe reaction\nSulfa drugs - Rash\nPeanuts - Mild reaction",
  },
  {
    id: "notes",
    title: "Notes",
    image: require("../../../assets/images/notes_icon.png"),
    content:
      "Patient lives with daughter. Has shown good response to current medication regimen. Regular follow-ups scheduled every 3 months.",
  },
]

export default function HealthInformation() {

  const [activeTab, setActiveTab] = useState("diagnosis")

  return (
   <View style={styles.container}>
      <GeneralTitle label="Health Information" />
        {/* <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity> */}
      

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            style={[styles.tab, activeTab === tab.id && styles.activeTab]}
            onPress={() => setActiveTab(tab.id)}
          >
            <Text style={[styles.tabText, activeTab === tab.id && styles.activeTabText]}>{tab.title}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.contentContainer}>
          <View style={styles.diagnosisContainer}>
            <View style={styles.iconContainer}>
              <Image source = {tabs.find((tab) => tab.id === activeTab)?.image} style = {styles.iconStyle}/>
            </View>
            <Text style={styles.contentText}>{tabs.find((tab) => tab.id === activeTab)?.content}</Text>
          </View> 
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    
  },

  editButton: {
    backgroundColor: "rgba(153, 179, 252, 0.8)",
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 20,
  },
  editButtonText: {
    color: "#fff",
    fontWeight: "900",
  },
  tabsContainer: {
    flexDirection: "row",
    borderBottomWidth: 0,
    borderBottomColor: "#E5E5E5",
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: "rgba(153, 179, 252, 0.8)",
  },
  tabText: {
    color: "#9E9E9E",
    fontSize: 14,
    fontWeight: "700",
  },
  activeTabText: {
    color: "rgba(153, 179, 252, 0.8)",
    // fontWeight: "700",
  },
  contentContainer: {
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 16,
    marginVertical: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 6,
    elevation: 2,
    
  },
  diagnosisContainer: {
    flexDirection: "row",
    alignItems: "center",    
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginRight: 16,
  },
  contentText: {
    fontSize: 14,
    color: "#333",
    flex: 1,
  },
  iconStyle:{
    
    width: 50,
    height: 50,
  },
})