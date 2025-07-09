// src/navigation/index.tsx
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import AuthScreen from "../features/auth/screen";
import CareGroupsScreen from "../features/care-groups/screen";
import OverviewScreen from "../features/overview/screen";

export type RootStackParamList = {
  Auth: undefined;
  CareGroups: undefined;
  Overview: {
    careGroupId: string;
    careGroupName: string;
    birthDate: string;
    careCenter: string;
    alcoholLevel: string;
    smokeFrequency: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Auth" component={AuthScreen} />
      <Stack.Screen name="CareGroups" component={CareGroupsScreen} />
      <Stack.Screen name="Overview" component={OverviewScreen} />
    </Stack.Navigator>
  );
}
