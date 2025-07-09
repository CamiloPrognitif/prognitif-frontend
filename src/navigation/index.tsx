// src/navigation/index.tsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

// Importa aquí las pantallas de cada feature
import AuthScreen from "../features/auth/screen";
import CareGroupsScreen from "../features/care-groups/screen";
import OverviewScreen from "../features/overview/OverviewScreen";
import TreatmentScreen from "../features/treatment/screen";
import DevicesScreen from "../features/devices/screen";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: true,
          tabBarActiveTintColor: "#2563EB",
          tabBarInactiveTintColor: "#6B7280",
          tabBarStyle: {
            backgroundColor: "#FFF",
            borderTopWidth: 1,
            borderTopColor: "#E5E7EB",
            height: 80,
            paddingBottom: 8,
          },
          tabBarIcon: ({ color }) => {
            const map: Record<string, keyof typeof MaterialIcons.glyphMap> = {
              Auth: "login",
              CareGroups: "groups",
              Overview: "person",
              Treatment: "local-hospital",
              Devices: "devices-other",
            };
            return (
              <MaterialIcons name={map[route.name]} size={24} color={color} />
            );
          },
        })}
      >
        <Tab.Screen name="Overview" component={OverviewScreen} />
        <Tab.Screen name="Treatment" component={TreatmentScreen} />
        <Tab.Screen name="Devices" component={DevicesScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
