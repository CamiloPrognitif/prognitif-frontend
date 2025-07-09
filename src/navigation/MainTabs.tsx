// src/navigation/MainTabs.tsx
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from "@expo/vector-icons";

// importa aquí tus pantallas “features”
import CareGroupsScreen from "../features/care-groups/screen";
import OverviewScreen from "../features/overview/screen";
import TreatmentScreen from "../features/treatment/screen";
import DevicesScreen from "../features/devices/screen";

export type MainTabParamList = {
  CareGroups: undefined;
  Overview: undefined;
  Treatment: undefined;
  Devices: undefined;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

export function MainTabs() {
  return (
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
      <Tab.Screen name="CareGroups" component={CareGroupsScreen} />
      <Tab.Screen name="Overview" component={OverviewScreen} />
      <Tab.Screen name="Treatment" component={TreatmentScreen} />
      <Tab.Screen name="Devices" component={DevicesScreen} />
    </Tab.Navigator>
  );
}
