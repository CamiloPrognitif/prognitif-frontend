// import { Ionicons } from "@expo/vector-icons";
import { StyleSheet, Text, View } from "react-native";
import DetailsButton from "../general/DetailsButton";
import type { Appointment } from "./AppointmentSection";

type Props = {
  appointment: Appointment
}

export default function AppointmentItem({appointment}: Props) {
  return (
    
    // <View key={appointment.id} >
    //                     {appointment.isToday  ? 
    //                       <Image source={require('../../../assets/images/alert1.png')} style={styles.alertIcon} />  
    //                     : <></>}
                        
     <View style={styles.container}>
      <View style={styles.contentContainer}>
        <View style ={styles.dateContainer}>
          <Text style={[styles.day, appointment.isToday && styles.today]}>{appointment.day}</Text>
          <Text style={styles.date}>{appointment.date}</Text>
        </View>
        
        <Text style={styles.time}>{appointment.time}</Text>
        <Text style={styles.examination}>{appointment.examination}</Text>
      </View>

      <View style={styles.rightContainer}>
        {/* {appointment.isToday && (
          <View style={styles.warningIcon}>
            <Ionicons name="triangle" size={16} color="#FF5252" />
          </View>
        )} */}
        <View style={styles.doctorContainer}>
          <Text style={styles.doctorText}>{appointment.doctor}</Text>
        </View>
        <DetailsButton />
      </View>
    </View>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#fff",
    borderRadius: 16,
    padding: 16,
    flexDirection: "row",
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 6,
    elevation: 2,
    justifyContent: "space-between",
  },
  contentContainer: {
    flex: 1,
  },
  dateContainer: {
    flex: 1,
    justifyContent: "space-between",
    flexDirection: "row",
    
  },
  day: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  today: {
    color: "rgb(253, 58, 105)",
  },
  date: {
    fontSize: 14,
    // color: "#666",
    marginBottom: 8,
  },
  time: {
    fontSize: 14,
    fontWeight: "bold",
    marginBottom: 4,
  },
  examination: {
    fontSize: 14,
    // color: "#",
  },
  rightContainer: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "space-between",
  },
  warningIcon: {
    position: "absolute",
    top: -8,
    right: -8,
  },
  doctorContainer: {
    backgroundColor: "rgba(147, 212, 185, 0.8)",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginBottom: 16,
    minWidth: 140,
    alignItems: "center",
  },
  doctorText: {
    color: "#333",
    fontWeight: "500",
  },
  detailsButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  detailsText: {
    fontSize: 14,
    color: "#6979F8",
    marginRight: 4,
  },
   alertIcon: {
    width: 40,
    height: 40,
    position: 'absolute',
    top: -15,
    right: -6,
    zIndex: 1,
  },
})