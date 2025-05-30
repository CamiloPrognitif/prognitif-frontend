import { Image, StyleSheet, Switch, Text, View } from "react-native";
import type { Device } from "./DevicesSection";

type Props = {
  device: Device
  onToggle: () => void
}

export default function DeviceItem({device, onToggle}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.deviceImageContainer}>
        <Image source={require("../../../assets/images/splash-icon.png")} style={styles.deviceImage} />
      </View>

      <View style={styles.deviceInfo}>
        <View style={styles.deviceHeader}>
          <Text style={styles.deviceName}>{device.name}</Text>
          <Switch
            value={device.isActive}
            onValueChange={onToggle}
            trackColor={{ false: "#D1D1D6", true: "#A8E0D1" }}
            thumbColor={"#F4F3F4"}
          />
        </View>

        <View style={styles.deviceDetails}>
          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Signals:</Text>
            <Text style={styles.detailValue}>{device.signals.join(", ")}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Type:</Text>
            <Text style={styles.detailValue}>{device.type}</Text>
          </View>

          <View style={styles.detailRow}>
            <Text style={styles.detailLabel}>Vendor:</Text>
            <Text style={styles.detailValue}>{device.vendor}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "#fff",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  deviceImageContainer: {
    width: 80,
    height: 80,
    backgroundColor: "#F0F0F0",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 16,
  },
  deviceImage: {
    width: 60,
    height: 60,
    resizeMode: "contain",
  },
  deviceInfo: {
    flex: 1,
  },
  deviceHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  deviceName: {
    fontSize: 18,
    fontWeight: "bold",
  },
  deviceDetails: {
    marginTop: 4,
  },
  detailRow: {
    flexDirection: "row",
    marginBottom: 4,
  },
  detailLabel: {
    fontSize: 14,
    fontWeight: "500",
    marginRight: 4,
    color: "#666",
  },
  detailValue: {
    fontSize: 14,
    flex: 1,
    flexWrap: "wrap",
  },
})