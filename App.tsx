// App.tsx
import React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

import OverviewScreen from "./src/screens/OverviewScreen";

const Tab = createBottomTabNavigator();

// Placeholders para las nuevas pantallas
function DevicesScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Devices Screen</Text>
    </View>
  );
}

function TreatmentScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Treatment Screen</Text>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: "#2563EB", // azul
          tabBarInactiveTintColor: "#6B7280", // gris
          tabBarStyle: {
            backgroundColor: "#FFF",
            borderTopWidth: 1,
            borderTopColor: "#E5E7EB",
            height: 100,
            paddingBottom: 12,
            marginBottom: 4,
          },
          tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof MaterialIcons.glyphMap;
            if (route.name === "Overview") {
              iconName = "person";
            } else if (route.name === "Devices") {
              iconName = "devices-other";
            } else {
              iconName = "local-hospital";
            }
            return <MaterialIcons name={iconName} size={24} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Overview" component={OverviewScreen} />
        <Tab.Screen name="Devices" component={DevicesScreen} />
        <Tab.Screen name="Treatment" component={TreatmentScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
